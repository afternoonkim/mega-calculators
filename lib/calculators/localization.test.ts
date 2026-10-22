import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import {
  localizeCalculatorDefinition,
  localizeInputLabel,
  localizeResultText,
} from "@/lib/calculators/localization";

describe("calculator language separation", () => {
  it("keeps original English calculator copy on English pages", () => {
    for (const calculator of calculators) {
      const localized = localizeCalculatorDefinition(calculator, "en");
      expect(localized.name).toBe(calculator.name);
      expect(localized.description).toBe(calculator.description);
      expect(localized.inputs.map((input) => input.label)).toEqual(calculator.inputs.map((input) => input.label));
      expect(localized.faq).toEqual(calculator.faq);
    }
  });

  it("renders Korean titles and native Korean introductory copy for core tools", () => {
    for (const slug of ["compound-interest-calculator", "loan-calculator", "bmi-calculator", "discount-calculator"]) {
      const original = calculators.find((calculator) => calculator.slug === slug);
      expect(original).toBeDefined();
      const korean = localizeCalculatorDefinition(original!, "ko");
      expect(korean.name).toMatch(/[가-힣]/);
      expect(korean.intro).toMatch(/[가-힣]/);
      expect(korean.faq[0].q).toMatch(/[가-힣]/);
      expect(korean.example).toMatch(/[가-힣]/);
    }
  });

  it("translates common result units and retains English values for English pages", () => {
    expect(localizeResultText("12 weeks", "ko")).toBe("12주");
    expect(localizeResultText("5 kilometers", "ko")).toBe("5킬로미터");
    expect(localizeResultText("7 pounds", "ko")).toBe("7파운드");
    expect(localizeResultText("12 weeks", "en")).toBe("12 weeks");
    expect(localizeResultText("5 kilometers", "en")).toBe("5 kilometers");
  });


  it("covers every calculator with a readable Korean description, intro and FAQ", () => {
    const missing = calculators.flatMap((calculator) => {
      const ko = localizeCalculatorDefinition(calculator, "ko");
      return [
        ["name", ko.name],
        ["description", ko.description],
        ["intro", ko.intro],
        ["example", ko.example],
        ["first FAQ", ko.faq[0]?.q ?? ""],
      ].filter(([, value]) => !/[가-힣]/.test(value)).map(([field]) => `${calculator.slug}: ${field}`);
    });
    expect(missing).toEqual([]);
  });

  it("localizes UI labels without translating numeric values", () => {
    expect(localizeInputLabel("Annual interest rate (%)", "ko")).toMatch(/[가-힣]/);
    expect(localizeInputLabel("Annual interest rate (%)", "en")).toBe("Annual interest rate (%)");
    expect(localizeInputLabel("125", "ko")).toBe("125");
  });
});
