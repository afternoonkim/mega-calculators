import { describe, expect, it } from "vitest";
import { evaluateNumericExpression } from "@/lib/calculators/expression";

describe("safe numeric expression evaluator", () => {
  it("respects arithmetic precedence and parentheses", () => {
    expect(evaluateNumericExpression("principal + monthly * 12", { principal: 1000, monthly: 100 })).toBe(2200);
    expect(evaluateNumericExpression("(principal + monthly) * 12", { principal: 1000, monthly: 100 })).toBe(13200);
  });

  it("supports exponentiation and approved Math functions", () => {
    expect(evaluateNumericExpression("principal * Math.pow(1 + rate, years)", {
      principal: 1000,
      rate: 0.05,
      years: 2,
    })).toBeCloseTo(1102.5, 8);
    expect(evaluateNumericExpression("Math.sqrt(81) + max(2, 5)", {})).toBe(14);
  });

  it("supports comparisons and conditional expressions", () => {
    expect(evaluateNumericExpression("income > expenses ? income - expenses : 0", {
      income: 5000,
      expenses: 3200,
    })).toBe(1800);
    expect(evaluateNumericExpression("income > expenses ? income - expenses : 0", {
      income: 2500,
      expenses: 3200,
    })).toBe(0);
  });

  it("allows only known variables", () => {
    expect(evaluateNumericExpression("known + unknown", { known: 10 })).toBe(0);
  });

  it("rejects arbitrary code and property access", () => {
    expect(evaluateNumericExpression("globalThis.process.exit(1)", {})).toBe(0);
    expect(evaluateNumericExpression("constructor.constructor('return 7')()", {})).toBe(0);
    expect(evaluateNumericExpression("Math.constructor", {})).toBe(0);
  });

  it("returns zero instead of leaking infinities or invalid calculations", () => {
    expect(evaluateNumericExpression("1 / 0", {})).toBe(0);
    expect(evaluateNumericExpression("Math.sqrt(-1)", {})).toBe(0);
  });
});
