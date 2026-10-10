import { describe, expect, it } from "vitest";
import { MAX_RECENT_CALCULATORS, normalizeRecentCalculators } from "@/lib/calculators/recent";

describe("recent calculator storage normalization", () => {
  it("drops legacy localized names while preserving valid history", () => {
    expect(
      normalizeRecentCalculators([
        { category: "finance", slug: "loan-calculator", name: "대출 계산기", visitedAt: 100 },
        { category: "health", slug: "bmi-calculator", name: "BMI Calculator", visitedAt: 90 },
      ]),
    ).toEqual([
      { category: "finance", slug: "loan-calculator", visitedAt: 100 },
      { category: "health", slug: "bmi-calculator", visitedAt: 90 },
    ]);
  });

  it("rejects malformed entries", () => {
    expect(
      normalizeRecentCalculators([
        null,
        { category: "finance", slug: "loan-calculator" },
        { category: 1, slug: "loan-calculator", visitedAt: 1 },
        { category: "finance", slug: "loan-calculator", visitedAt: Number.NaN },
        { category: "finance", slug: "loan-calculator", visitedAt: 1 },
      ]),
    ).toEqual([{ category: "finance", slug: "loan-calculator", visitedAt: 1 }]);
  });

  it("keeps only the configured number of recent calculators", () => {
    const input = Array.from({ length: MAX_RECENT_CALCULATORS + 3 }, (_, index) => ({
      category: "math",
      slug: `calculator-${index}`,
      visitedAt: 100 - index,
    }));

    expect(normalizeRecentCalculators(input)).toHaveLength(MAX_RECENT_CALCULATORS);
  });
});
