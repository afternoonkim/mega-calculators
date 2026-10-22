import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import { localizeProgrammaticExample } from "@/lib/calculators/localization";

describe("visitor-centered calculation examples", () => {
  it("does not promote the website in generated English example copy", () => {
    const problems: string[] = [];
    for (const definition of calculators) {
      for (const example of getCalculatorExamples(definition)) {
        if (/free example page|example page from Mega Calculators|this example page shows|this example uses the default inputs/i.test(
          `${example.description} ${example.intro}`
        )) problems.push(`${definition.slug}/${example.slug}`);
      }
    }
    expect(problems).toEqual([]);
  });
  it("gives every generated example readable Korean copy", () => {
    const problems: string[] = [];
    for (const definition of calculators) {
      for (const example of getCalculatorExamples(definition).slice(0, 6)) {
        const localized = localizeProgrammaticExample(example, definition, "ko");
        if (!/[가-힣]/.test(localized.description) || !/[가-힣]/.test(localized.intro)) {
          problems.push(`${definition.slug}/${example.slug}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });
});
