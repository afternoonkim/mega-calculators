import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";
import { localizeInputLabel } from "@/lib/calculators/localization";

export function getFormulaInputGuide(definition: CalculatorDefinition, locale: Locale) {
  return definition.inputs.map((input) => {
    const label = localizeInputLabel(input.label, locale);
    const unit = input.label.match(/\(([^)]+)\)/)?.[1];
    const detail = input.type === "select"
      ? (locale === "ko" ? "선택한 방식이나 단위에 따라 계산 조건이 달라집니다." : "The selected option determines the method or unit used.")
      : input.type === "date"
        ? (locale === "ko" ? "입력한 날짜를 기준으로 기간을 계산합니다. 날짜 포함 기준도 확인하세요." : "The calculation uses this date as a reference point; check whether endpoints are included.")
        : input.type === "time"
          ? (locale === "ko" ? "입력한 시각을 시간 차이나 합계 계산의 기준으로 사용합니다." : "This time is used to calculate the duration or total.")
          : input.type === "number"
            ? (locale === "ko" ? `입력한 수치${unit ? `(${unit})` : ""}를 계산에 사용합니다. 다른 단위의 값과 섞지 마세요.` : `The numeric value${unit ? ` in ${unit}` : ""} is used in the calculation; keep units consistent.`)
            : (locale === "ko" ? "입력한 내용을 계산 조건으로 사용합니다." : "The entered value is used as a calculation input.");
    return { key: input.name, label, detail };
  });
}

export function getFormulaReadingTips(definition: CalculatorDefinition, locale: Locale): string[] {
  const inputNames = definition.inputs.slice(0, 2).map((input) => localizeInputLabel(input.label, locale));
  if (locale === "ko") return [
    `${inputNames.join("·") || "입력값"}을 기준으로 결과가 계산됩니다. 값을 하나씩 바꿔 다시 계산하면 각 조건의 영향을 비교할 수 있습니다.`,
    definition.category === "unit-converters"
      ? "단위 변환은 원래 단위와 목표 단위가 맞는지 확인하고, 표시 자리수에 따른 반올림 오차를 고려하세요."
      : definition.category === "finance" || definition.category === "business"
        ? "금액 계산은 실제 수수료·세금·적용 기간이 입력 조건에 반영되었는지 확인하세요."
        : definition.category === "health" || definition.category === "fitness"
          ? "건강·운동 계산 결과는 추정치이며 개인별 측정값이나 전문적 판단을 대신하지 않습니다."
          : "결과를 해석할 때 적용 단위, 기간, 반올림 방식과 계산에 포함되지 않은 조건을 함께 확인하세요.",
  ];
  return [
    `The result uses ${inputNames.join(" and ") || "the listed inputs"}. Change one variable at a time to compare its effect on the outcome.`,
    definition.category === "unit-converters"
      ? "Check both the source and target units, and allow for rounding in the displayed result."
      : definition.category === "finance" || definition.category === "business"
        ? "Check whether relevant fees, taxes, and timing assumptions are included before using the estimate."
        : definition.category === "health" || definition.category === "fitness"
          ? "Health and fitness values are estimates, not a substitute for measurements or clinical advice."
          : "Confirm the units, date basis, rounding, and any conditions that fall outside the calculation.",
  ];
}
