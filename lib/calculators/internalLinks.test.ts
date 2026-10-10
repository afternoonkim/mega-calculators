import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getEnhancedCalculatorContent } from "@/lib/calculators/enhancedContent";
import { getCalculatorSeoContent } from "@/lib/calculators/seoContent";
import { getBlogPost, getGuide } from "@/lib/editorial";
import { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "ko"];

function expectEditorialTarget(locale: Locale, href: string) {
  const path = stripLocaleFromPathname(href);
  const segments = path.split("/").filter(Boolean);
  if (segments.length !== 2) return;

  const [section, slug] = segments;
  if (section === "blog") {
    expect(getBlogPost(locale, slug), `${locale} blog target missing: ${href}`).toBeDefined();
  } else if (section === "guides") {
    expect(getGuide(locale, slug), `${locale} guide target missing: ${href}`).toBeDefined();
  }
}

describe("calculator internal links", () => {
  it("keeps fallback calculator links locale-neutral before rendering", () => {
    const definition = calculators.find((item) => item.slug === "simple-interest-calculator");
    expect(definition).toBeDefined();
    if (!definition) return;

    for (const locale of locales) {
      const href = `/${locale}/calculators/finance/loan-calculator`;
      const content = getCalculatorSeoContent(definition, locale, [
        { name: "Loan calculator", href },
      ]);

      expect(content.relatedContent[0]?.href).toBe("/calculators/finance/loan-calculator");
      expect(withLocale(locale, content.relatedContent[0]!.href)).toBe(
        `/${locale}/calculators/finance/loan-calculator`,
      );
    }
  });

  it("uses the dedicated date and time guides for the time-date category", () => {
    const definition = calculators.find((item) => item.slug === "age-calculator");
    expect(definition?.category).toBe("time-date");
    if (!definition) return;

    for (const locale of locales) {
      const enhanced = getEnhancedCalculatorContent(definition, locale);
      expect(enhanced).not.toBeNull();
      expect(enhanced?.relatedGuides.map((item) => item.href)).toEqual([
        "/guides/date-calculator-for-schedules",
        "/blog/everyday-percent-and-date-calculators",
      ]);
    }
  });

  it("only links to editorial pages that exist in the active locale", () => {
    for (const locale of locales) {
      for (const definition of calculators) {
        const content = getCalculatorSeoContent(definition, locale, []);
        for (const item of content.relatedContent) {
          expectEditorialTarget(locale, item.href);
        }

        const enhanced = getEnhancedCalculatorContent(definition, locale);
        for (const item of enhanced?.relatedGuides ?? []) {
          expectEditorialTarget(locale, item.href);
        }
      }
    }
  });
});
