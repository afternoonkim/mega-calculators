import { describe, expect, it } from "vitest";
import { getEditorialHreflangUrls } from "@/lib/editorialAlternates";
import { switchLocaleInPathname } from "@/lib/i18n";

describe("editorial locale alternates", () => {
  it("keeps the article slug when a real translation exists", () => {
    expect(switchLocaleInPathname("/ko/blog/monthly-payment-vs-total-cost", "en")).toBe(
      "/en/blog/monthly-payment-vs-total-cost",
    );
    expect(switchLocaleInPathname("/en/guides/loan-calculator-checklist", "ko")).toBe(
      "/ko/guides/loan-calculator-checklist",
    );
  });

  it("falls back to the target editorial hub when no translation exists", () => {
    expect(switchLocaleInPathname("/ko/blog/year-end-tax-settlement-2026", "en")).toBe("/en/blog");
    expect(switchLocaleInPathname("/en/blog/30-vs-15-year-mortgage", "ko")).toBe("/ko/blog");
    expect(switchLocaleInPathname("/en/guides/bmi-us-standards-walkthrough", "ko")).toBe("/ko/guides");
    expect(switchLocaleInPathname("/ko/guides/bmi-korean-standards", "en")).toBe("/en/guides");
  });

  it("leaves non-editorial locale switching unchanged", () => {
    expect(switchLocaleInPathname("/ko/calculators/finance/loan-calculator", "en")).toBe(
      "/en/calculators/finance/loan-calculator",
    );
  });

  it("only emits hreflang clusters for real translations", () => {
    expect(getEditorialHreflangUrls("blog", "monthly-payment-vs-total-cost", "https://mega-calculators.com")).toEqual({
      en: "https://mega-calculators.com/en/blog/monthly-payment-vs-total-cost",
      ko: "https://mega-calculators.com/ko/blog/monthly-payment-vs-total-cost",
      "x-default": "https://mega-calculators.com/en/blog/monthly-payment-vs-total-cost",
    });
    expect(getEditorialHreflangUrls("blog", "year-end-tax-settlement-2026", "https://mega-calculators.com")).toBeUndefined();
  });
});
