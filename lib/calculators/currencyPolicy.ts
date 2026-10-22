import type { CalculatorDefinition } from "@/lib/calculators/data";

/**
 * These tools implement US-only taxes or housing conventions.
 * Changing interface language must not silently change their money units or jurisdiction.
 */
export const US_ONLY_CALCULATOR_SLUGS = new Set([
  "paycheck-calculator",
  "biweekly-paycheck-calculator",
  "mortgage-calculator",
]);

export function isUsOnlyCalculator(definition: Pick<CalculatorDefinition, "slug">): boolean {
  return US_ONLY_CALCULATOR_SLUGS.has(definition.slug);
}

export function currencyLocaleForCalculator(
  definition: Pick<CalculatorDefinition, "slug">,
  locale: "en" | "ko",
): "en" | "ko" {
  return isUsOnlyCalculator(definition) ? "en" : locale;
}

export function preserveUsdResultValue(value: string, definition: Pick<CalculatorDefinition, "slug">): boolean {
  return isUsOnlyCalculator(definition) && /^\s*\$/.test(value);
}
