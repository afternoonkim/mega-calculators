import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";
import { getKoScenarioCopy, localizeInputLabel, localizeCalculatorName } from "@/lib/calculators/localization";

/** User-facing scenarios are derived from each calculator's own purpose and input fields. */
export function getVisitorUseCases(definition: CalculatorDefinition, locale: Locale): string[] {
  const inputs = definition.inputs.map((input) => localizeInputLabel(input.label, locale));
  const first = inputs[0] ?? (locale === "ko" ? "첫 번째 입력값" : "the first input");
  const second = inputs[1];
  const third = inputs[2];
  if (locale === "ko") {
    const scenario = getKoScenarioCopy(definition.slug);
    const name = localizeCalculatorName(definition.name, "ko", definition.slug);
    const situation = scenario?.situation ?? `${name}로 필요한 수치를 확인하려면`;
    return [
      `${situation.replace(/[?？]$/, "")}? ${first}${second ? `와(과) ${second}` : ""}을(를) 입력해 현재 조건의 결과를 확인해보세요.`,
      `${first} 값을 변경한 뒤 같은 조건에서 다시 계산해보세요. ${second ? `${second}은(는) 그대로 두면` : "나머지 조건은 그대로 두면"} 결과에 미치는 영향을 구분하기 쉽습니다.`,
      second
        ? `${second}${third ? `와(과) ${third}` : ""} 조건도 비교해보세요. 두 값을 동시에 바꾸기보다 하나씩 변경하면 차이를 이해하기 쉽습니다.`
        : `${name} 결과를 확인할 때 입력 단위와 반올림 기준을 먼저 점검하세요.`,
      scenario?.caution ?? "중요한 결정에 활용할 때는 계산에 포함되지 않은 조건이 없는지 확인하세요.",
    ];
  }
  const title = definition.name.toLowerCase();
  const firstSentence = definition.intro.split(/(?<=[.!?])\s+/)[0]?.trim() || definition.description.split(/(?<=[.!?])\s+/)[0]?.trim();
  const context = firstSentence && firstSentence.length >= 24
    ? firstSentence
    : `Use the ${title} to compare the values needed for this calculation.`;
  return [
    context,
    `Enter ${first}${second ? ` and ${second}` : ""} to calculate the result for your current situation.`,
    `Change ${first} while keeping ${second ?? "the other inputs"} the same to see how much the result changes.`,
    third
      ? `Compare ${third} separately before relying on the result, and verify any conditions not included in the inputs.`
      : `Before acting on the result, check the units and any real-world conditions the calculator does not include.`,
  ];
}
