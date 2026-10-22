import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import { localizeCalculatorDefinition } from "@/lib/calculators/localization";
import { currencyLocaleForCalculator, isUsOnlyCalculator, preserveUsdResultValue } from "@/lib/calculators/currencyPolicy";

function calculator(slug: string) {
  const item = calculators.find((entry) => entry.slug === slug);
  if (!item) throw new Error(`Missing calculator: ${slug}`);
  return item;
}

describe("country and currency isolation", () => {
  for (const slug of ["paycheck-calculator", "biweekly-paycheck-calculator", "mortgage-calculator"]) {
    it(`keeps ${slug} in USD even when the interface is Korean`, () => {
      const definition = calculator(slug);
      const result = computeCalculator(definition, getDefaultValues(definition), "ko");
      expect(isUsOnlyCalculator(definition)).toBe(true);
      expect(currencyLocaleForCalculator(definition, "ko")).toBe("en");
      expect(result.primary.value).toMatch(/^\$/);
      expect(result.primary.value).not.toContain("₩");
      const localized = localizeCalculatorDefinition(definition, "ko");
      expect(localized.description).toContain("USD");
      expect(localized.intro).toContain("미국");
      expect(localized.inputs.some((input) => input.label.includes("(USD)"))).toBe(true);
      expect(localized.inputs.some((input) => input.label.includes("(원)"))).toBe(false);
      expect(preserveUsdResultValue(result.primary.value, definition)).toBe(true);
    });
  }

  it("keeps ordinary Korean financial calculator amounts in KRW", () => {
    const definition = calculator("loan-calculator");
    const result = computeCalculator(definition, getDefaultValues(definition), "ko");
    expect(isUsOnlyCalculator(definition)).toBe(false);
    expect(currencyLocaleForCalculator(definition, "ko")).toBe("ko");
    expect(result.primary.value).toContain("₩");
  });

  it("does not change the English calculator amounts", () => {
    const definition = calculator("mortgage-calculator");
    const result = computeCalculator(definition, getDefaultValues(definition), "en");
    expect(result.primary.value).toMatch(/^\$/);
  });
});
