import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getFormulaInputGuide, getFormulaReadingTips } from "@/lib/calculators/formulaGuide";

describe("formula page input explanations", () => {
  it("covers each input for all calculators in both languages", () => {
    const errors: string[] = [];
    for (const definition of calculators) {
      for (const locale of ["ko", "en"] as const) {
        const inputs = getFormulaInputGuide(definition, locale);
        const tips = getFormulaReadingTips(definition, locale);
        if (inputs.length !== definition.inputs.length) errors.push(`${definition.slug}/${locale}: input count`);
        if (inputs.some((input) => !input.label || !input.detail)) errors.push(`${definition.slug}/${locale}: empty input detail`);
        if (tips.length !== 2 || tips.some((tip) => !tip.trim())) errors.push(`${definition.slug}/${locale}: missing reading tips`);
        if (locale === "ko" && tips.some((tip) => !/[가-힣]/.test(tip))) errors.push(`${definition.slug}: untranslated Korean tip`);
        if (locale === "en" && tips.some((tip) => /[가-힣]/.test(tip))) errors.push(`${definition.slug}: mixed English tip`);
      }
    }
    expect(errors).toEqual([]);
  });
});
