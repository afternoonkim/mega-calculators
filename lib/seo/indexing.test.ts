import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getIndexableCalculatorExamples, isTopPriorityCalculator } from "@/lib/calculators/programmatic";
import { getCalculatorResourceSitemapEntries, getExampleSitemapEntries } from "@/lib/seo/sitemap";

describe("programmatic SEO indexing policy", () => {
  it("indexes examples only for top-priority calculators and caps each at six", () => {
    for (const calculator of calculators) {
      const examples = getIndexableCalculatorExamples(calculator);
      expect(examples.length).toBeLessThanOrEqual(6);
      if (!isTopPriorityCalculator(calculator.slug)) expect(examples).toHaveLength(0);
      expect(new Set(examples.map((example) => example.slug)).size).toBe(examples.length);
    }
  });

  it("keeps example sitemap entries limited to curated scenarios", () => {
    const expectedPerLocale = calculators.reduce((sum, calculator) => sum + getIndexableCalculatorExamples(calculator).length, 0);
    expect(getExampleSitemapEntries()).toHaveLength(expectedPerLocale * 2);
  });

  it("publishes formula and guide resources only for top-priority calculators", () => {
    const topPriorityCount = calculators.filter((calculator) => isTopPriorityCalculator(calculator.slug)).length;
    const entries = getCalculatorResourceSitemapEntries();
    expect(entries).toHaveLength(topPriorityCount * 2 * 2);
    expect(entries.some((entry) => entry.pathSuffix.endsWith("/use-cases"))).toBe(false);
  });
});
