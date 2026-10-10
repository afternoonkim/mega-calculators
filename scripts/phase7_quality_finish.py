from pathlib import Path

# 1) Strict reusable input validation.
validation = '''import type { CalculatorDefinition } from "@/lib/calculators/data";

export type ValidationErrors = Record<string, string>;

function isStrictIsoDate(value: string) {
  const match = /^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(value);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function isStrictTime(value: string) {
  return /^(?:[01]\\d|2[0-3]):[0-5]\\d$/.test(value);
}

export function validateCalculatorInputs(definition: CalculatorDefinition, values: Record<string, string>): ValidationErrors {
  const errors: ValidationErrors = {};

  for (const input of definition.inputs) {
    const value = String(values[input.name] ?? "").trim();

    if (input.type === "number") {
      if (value === "") {
        errors[input.name] = "Enter a number.";
        continue;
      }
      const number = Number(value);
      if (!Number.isFinite(number)) {
        errors[input.name] = "Enter a valid number.";
        continue;
      }
      if (input.min !== undefined && number < Number(input.min)) {
        errors[input.name] = `Enter ${input.min} or more.`;
      } else if (input.max !== undefined && number > Number(input.max)) {
        errors[input.name] = `Enter ${input.max} or less.`;
      }
      continue;
    }

    if (input.type === "date") {
      if (!isStrictIsoDate(value)) errors[input.name] = "Enter a valid date.";
      continue;
    }

    if (input.type === "time") {
      if (!isStrictTime(value)) errors[input.name] = "Enter a valid time.";
      continue;
    }

    if (input.type === "select") {
      const allowed = input.options?.some((option) => option.value === value) ?? false;
      if (!allowed) errors[input.name] = "Choose a valid option.";
    }
  }

  if (definition.slug === "mortgage-calculator") {
    const homePrice = Number(values.homePrice ?? 0);
    const downPayment = Number(values.downPayment ?? 0);
    if (Number.isFinite(homePrice) && Number.isFinite(downPayment) && downPayment > homePrice) {
      errors.downPayment = "Down payment cannot exceed the home price.";
    }
  }

  return errors;
}
'''
Path("lib/calculators/validation.ts").write_text(validation)

validation_test = '''import { describe, expect, it } from "vitest";
import { calculators, type CalculatorDefinition } from "@/lib/calculators/data";
import { getDefaultValues } from "@/lib/calculators/engine";
import { validateCalculatorInputs } from "@/lib/calculators/validation";

function definition(inputs: CalculatorDefinition["inputs"], slug = "test-calculator"): CalculatorDefinition {
  return {
    category: "math",
    categoryName: "Test",
    slug,
    name: "Test",
    kind: "expression",
    description: "Test",
    intro: "Test",
    formulaText: "Test",
    howToUse: [],
    example: "Test",
    faq: [],
    inputs,
    expr: "0",
  };
}

describe("calculator input validation", () => {
  it("rejects non-finite numbers and min/max violations", () => {
    const def = definition([{ name: "amount", label: "Amount", type: "number", min: "0", max: "100" }]);
    expect(validateCalculatorInputs(def, { amount: "abc" }).amount).toBeTruthy();
    expect(validateCalculatorInputs(def, { amount: "-1" }).amount).toBeTruthy();
    expect(validateCalculatorInputs(def, { amount: "101" }).amount).toBeTruthy();
    expect(validateCalculatorInputs(def, { amount: "50" })).toEqual({});
  });

  it("rejects impossible calendar dates instead of normalizing them", () => {
    const def = definition([{ name: "date", label: "Date", type: "date" }]);
    expect(validateCalculatorInputs(def, { date: "2026-02-30" }).date).toBeTruthy();
    expect(validateCalculatorInputs(def, { date: "2024-02-29" })).toEqual({});
  });

  it("rejects malformed times and unknown select options", () => {
    const def = definition([
      { name: "time", label: "Time", type: "time" },
      { name: "mode", label: "Mode", type: "select", options: [{ label: "A", value: "a" }] },
    ]);
    const errors = validateCalculatorInputs(def, { time: "25:10", mode: "b" });
    expect(errors.time).toBeTruthy();
    expect(errors.mode).toBeTruthy();
  });

  it("prevents a mortgage down payment larger than the home price", () => {
    const def = definition([
      { name: "homePrice", label: "Home price", type: "number", min: "0" },
      { name: "downPayment", label: "Down payment", type: "number", min: "0" },
    ], "mortgage-calculator");
    expect(validateCalculatorInputs(def, { homePrice: "400000", downPayment: "450000" }).downPayment).toBeTruthy();
  });

  it("accepts every registered calculator's default inputs", () => {
    const failures = calculators
      .map((calculator) => ({ slug: calculator.slug, errors: validateCalculatorInputs(calculator, getDefaultValues(calculator)) }))
      .filter((item) => Object.keys(item.errors).length > 0);
    expect(failures).toEqual([]);
  });
});
'''
Path("lib/calculators/validation.test.ts").write_text(validation_test)

# 2) Strict date parsing inside the engine so direct callers cannot normalize impossible dates.
engine_path = Path("lib/calculators/engine.ts")
engine = engine_path.read_text()
old_date = '''function parseDateSafe(dateString: string | undefined) {
  const date = new Date(String(dateString || ""));
  return Number.isNaN(date.getTime()) ? null : date;
}
'''
new_date = '''function parseDateSafe(dateString: string | undefined) {
  const raw = String(dateString || "");
  const match = /^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(raw);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date;
}
'''
if old_date not in engine:
    raise SystemExit("Could not locate parseDateSafe")
engine = engine.replace(old_date, new_date, 1)
engine_path.write_text(engine)

# Add a regression test for impossible dates at the engine boundary.
test_path = Path("lib/calculators/engine.test.ts")
tests = test_path.read_text()
anchor = '''  it("counts leap day in date differences", () => {'''
new_test = '''  it("rejects impossible calendar dates instead of normalizing them", () => {
    const result = computeCalculator(
      definition("dateDiff", "date-difference-calculator", "time-date"),
      { startDate: "2026-02-30", endDate: "2026-03-02" },
    );

    expect(result.primary.value).toBe("Invalid date");
  });

'''
if new_test.strip() not in tests:
    if anchor not in tests:
        raise SystemExit("Could not insert strict-date engine test")
    tests = tests.replace(anchor, new_test + anchor, 1)
test_path.write_text(tests)

# 3) Accessible validation UI: field ids, errors, aria-invalid/describedby, and live result updates.
component_path = Path("components/calculators/CalculatorEngine.tsx")
component = component_path.read_text()
component = component.replace(
    'import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";\n',
    'import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";\nimport { validateCalculatorInputs } from "@/lib/calculators/validation";\n',
    1,
)
old_result = '''  const [copied, setCopied] = useState(false);
  const result = useMemo(() => computeCalculator(definition, values, locale), [definition, values, locale]);
'''
new_result = '''  const [copied, setCopied] = useState(false);
  const validationErrors = useMemo(() => validateCalculatorInputs(definition, values), [definition, values]);
  const hasValidationErrors = Object.keys(validationErrors).length > 0;
  const result = useMemo(
    () => hasValidationErrors
      ? {
          primary: {
            label: locale === "ko" ? "입력값 확인" : "Check your inputs",
            value: locale === "ko" ? "표시된 항목을 수정해주세요." : "Fix the highlighted fields.",
          },
          note: locale === "ko" ? "잘못된 입력값으로 계산하지 않습니다." : "No calculation is shown until the inputs are valid.",
        }
      : computeCalculator(definition, values, locale),
    [definition, values, locale, hasValidationErrors],
  );
'''
if old_result not in component:
    raise SystemExit("Could not patch calculator result state")
component = component.replace(old_result, new_result, 1)

start_marker = '            {definition.inputs.map((input) => ('
start = component.find(start_marker)
end = component.find('          </div>', start)
if start < 0 or end < 0:
    raise SystemExit("Could not locate calculator input grid")
new_fields = '''            {definition.inputs.map((input) => {
              const inputId = `calculator-input-${input.name}`;
              const errorId = `${inputId}-error`;
              const error = validationErrors[input.name];
              const sharedClass = `w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${error ? "border-red-400" : "border-slate-300"}`;
              const updateValue = (value: string) => setValues((current) => ({ ...current, [input.name]: value }));
              return (
                <div key={input.name} className={input.type === "textarea" ? "md:col-span-2" : ""}>
                  <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-slate-700">{localizeInputLabel(input.label, locale)}</label>
                  {input.type === "select" ? (
                    <select id={inputId} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={sharedClass}>
                      {input.options?.map((option) => <option key={option.value} value={option.value}>{localizeInputLabel(option.label, locale)}</option>)}
                    </select>
                  ) : input.type === "textarea" ? (
                    <textarea id={inputId} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`min-h-28 ${sharedClass}`} />
                  ) : (
                    <input id={inputId} type={input.type} min={input.min} max={input.max} step={input.step} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={sharedClass} />
                  )}
                  {error ? <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-red-700">{locale === "ko" ? "입력값을 확인해주세요." : error}</p> : null}
                </div>
              );
            })}
'''
component = component[:start] + new_fields + component[end:]
component = component.replace(
    '<div className="space-y-6"><div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">',
    '<div className="space-y-6"><div role="status" aria-live="polite" aria-atomic="true" className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">',
    1,
)
component_path.write_text(component)

# 4) Global keyboard focus visibility and reduced-motion support.
css_path = Path("app/globals.css")
css = css_path.read_text()
addition = '''

:where(a, button, input, select, textarea):focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
'''
if ':where(a, button, input, select, textarea):focus-visible' not in css:
    css += addition
css_path.write_text(css)
