import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getVisitorUseCases } from "@/lib/calculators/visitorUseCases";

describe("visitor-centered use case pages", () => {
  it("creates four meaningful scenarios in both languages for every calculator", () => {
    const problems: string[] = [];
    for (const calculator of calculators) {
      for (const locale of ["ko", "en"] as const) {
        const cases = getVisitorUseCases(calculator, locale);
        if (cases.length !== 4 || new Set(cases).size !== cases.length)
          problems.push(`${calculator.slug}/${locale}: missing or repeated cases`);
        if (cases.some((item) => item.length < 25))
          problems.push(`${calculator.slug}/${locale}: unhelpfully short text`);
        if (locale === "ko" && !cases.every((item) => /[가-힣]/.test(item)))
          problems.push(`${calculator.slug}/ko: untranslated case`);
        if (locale === "en" && cases.some((item) => /[가-힣]/.test(item)))
          problems.push(`${calculator.slug}/en: Korean text leaked`);
        if (cases.some((item) => /SEO|programmatic|spreadsheet tool|this page highlights|스프레드시트를 열지 않고/i.test(item)))
          problems.push(`${calculator.slug}/${locale}: operator-centered copy`);
      }
    }
    expect(problems).toEqual([]);
  });
});
