import { describe, expect, it } from "vitest";
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
