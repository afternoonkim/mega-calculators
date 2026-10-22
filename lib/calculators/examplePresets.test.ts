import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { getDefaultValues, computeCalculator } from "@/lib/calculators/engine";
import { getValidCalculatorPresets } from "@/lib/calculators/examplePresets";
import { validateCalculatorInputs } from "@/lib/calculators/validation";

describe("all calculator example presets", () => {
  it("provides only distinct and valid examples that change inputs", () => {
    const failures: string[] = [];
    for (const definition of calculators) {
      const defaults = getDefaultValues(definition);
      const presets = getValidCalculatorPresets(definition);
      const seen = new Set<string>();
      if (presets.length > 4) failures.push(`${definition.slug}: too many examples`);
      for (const preset of presets) {
        const errors = validateCalculatorInputs(definition, preset.values);
        if (Object.keys(errors).length) failures.push(`${definition.slug}: invalid preset ${preset.slug}`);
        if (!definition.inputs.some((input) => defaults[input.name] !== preset.values[input.name])) failures.push(`${definition.slug}: unchanged preset ${preset.slug}`);
        const signature = JSON.stringify(definition.inputs.map((input) => preset.values[input.name]));
        if (seen.has(signature)) failures.push(`${definition.slug}: duplicate preset ${preset.slug}`);
        seen.add(signature);
      }
    }
    expect(failures).toEqual([]);
  });

  it("recalculates core calculator examples without throwing", () => {
    for (const slug of ["compound-interest-calculator", "loan-calculator", "bmi-calculator", "percentage-calculator", "discount-calculator"]) {
      const definition = calculators.find((item) => item.slug === slug);
      expect(definition).toBeDefined();
      for (const preset of getValidCalculatorPresets(definition!)) {
        const result = computeCalculator(definition!, preset.values, "en");
        expect(result.primary.value).toBeTruthy();
      }
    }
  });
});
