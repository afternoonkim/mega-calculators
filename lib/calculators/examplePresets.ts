import type { CalculatorDefinition } from "@/lib/calculators/data";
import { getDefaultValues } from "@/lib/calculators/engine";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import { validateCalculatorInputs } from "@/lib/calculators/validation";

export type CalculatorPreset = {
  slug: string;
  title: string;
  values: Record<string, string>;
};

/** Only expose scenarios that actually change a value and pass the same validation as the calculator. */
export function getValidCalculatorPresets(definition: CalculatorDefinition, limit = 4): CalculatorPreset[] {
  const defaults = getDefaultValues(definition);
  const allowed = new Set(definition.inputs.map((input) => input.name));
  const seen = new Set<string>();
  const presets: CalculatorPreset[] = [];

  for (const example of getCalculatorExamples(definition)) {
    const changes = Object.entries(example.overrides);
    if (!changes.length || changes.some(([key]) => !allowed.has(key))) continue;
    const values = { ...defaults, ...example.overrides };
    if (Object.keys(validateCalculatorInputs(definition, values)).length) continue;
    if (!changes.some(([key, value]) => defaults[key] !== value)) continue;
    const signature = JSON.stringify(definition.inputs.map((input) => values[input.name] ?? ""));
    if (seen.has(signature)) continue;
    seen.add(signature);
    presets.push({ slug: example.slug, title: example.title, values });
    if (presets.length >= limit) break;
  }
  return presets;
}
