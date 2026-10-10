import type { CalculatorDefinition } from "@/lib/calculators/data";

export type ValidationErrors = Record<string, string>;

function isStrictIsoDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function isStrictTime(value: string) {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
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
