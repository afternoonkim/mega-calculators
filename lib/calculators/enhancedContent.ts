import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";
import { localizeCalculatorName, localizeCategoryName } from "@/lib/calculators/localization";

export type EnhancedCalculatorContent = {
  whenToUseTitle: string;
  whenToUse: string[];
  stepTitle: string;
  stepExample: string[];
  mistakesTitle: string;
  mistakes: string[];
  interpretationTitle: string;
  interpretation: string[];
  limitationsTitle: string;
  limitations: string[];
  relatedGuidesTitle: string;
  relatedGuidesIntro: string;
  relatedGuides: Array<{ title: string; description: string; href: string; cta: string }>;
};

export const priorityCalculatorSlugs = ["bmi-calculator","calorie-calculator","body-fat-calculator","water-intake-calculator","pregnancy-due-date-calculator","age-calculator","date-difference-calculator","loan-calculator","mortgage-calculator","compound-interest-calculator","percentage-calculator","discount-calculator","gpa-calculator","roi-calculator","inflation-calculator","unit-price-calculator","fuel-cost-calculator","tip-calculator","fraction-calculator","average-calculator","probability-calculator","standard-deviation-calculator","time-duration-calculator","work-hours-calculator","business-days-calculator","salary-to-hourly-calculator","hourly-to-salary-calculator","length-converter","weight-converter","temperature-converter"] as const;

const prioritySet = new Set<string>(priorityCalculatorSlugs);

function guideLinks(locale: Locale, slug: string, category: string): EnhancedCalculatorContent["relatedGuides"] {
  const isKo = locale === "ko";
  if (["loan-calculator", "mortgage-calculator", "compound-interest-calculator", "roi-calculator", "inflation-calculator"].includes(slug)) {
    return [
      { title: isKo ? "월 납입금과 총비용 함께 보기" : "Compare monthly payment and total cost", description: isKo ? "대출과 투자 결과를 볼 때 월 부담만 보지 않고 전체 비용까지 함께 확인하는 방법입니다." : "Use this guide to read payment, interest, and total cost together before comparing scenarios.", href: "/blog/monthly-payment-vs-total-cost", cta: isKo ? "관련 글 보기 →" : "Read the guide →" },
      { title: isKo ? "계산기 결과를 비교하는 방법" : "How to compare calculator results", description: isKo ? "한 가지 결과만 보지 않고 여러 조건을 비교해 실수를 줄이는 방법을 정리했습니다." : "A practical way to test more than one scenario and avoid over-reading a single result.", href: "/blog/how-to-compare-calculator-results", cta: isKo ? "비교 방법 보기 →" : "Compare scenarios →" },
    ];
  }
  if (["bmi-calculator", "calorie-calculator", "body-fat-calculator", "water-intake-calculator", "pregnancy-due-date-calculator"].includes(slug)) {
    return [
      { title: isKo ? "BMI 결과를 참고하는 방법" : "When a BMI result is useful", description: isKo ? "건강 계산 결과를 숫자 하나로 단정하지 않고 생활 지표와 함께 보는 방법입니다." : "Learn when BMI can help and when other health context matters more.", href: "/blog/when-bmi-calculator-is-useful", cta: isKo ? "건강 계산 글 보기 →" : "Read health context →" },
      { title: isKo ? "칼로리 결과 읽는 법" : "How to read calorie results", description: isKo ? "칼로리, 체중, 활동량 결과를 생활 계획으로 연결할 때 확인할 점입니다." : "Connect calorie estimates with realistic activity and nutrition planning.", href: "/guides/how-to-read-calorie-results", cta: isKo ? "가이드 보기 →" : "Open guide →" },
    ];
  }
  if (category === "time") {
    return [
      { title: isKo ? "날짜와 시간 계산 활용법" : "Use date and time calculators for schedules", description: isKo ? "나이, 기간, 근무시간, 마감일을 헷갈리지 않게 계산하는 방법입니다." : "A guide for turning dates, ages, and work hours into clearer schedule decisions.", href: "/guides/date-calculator-for-schedules", cta: isKo ? "일정 계산 가이드 보기 →" : "Plan schedules →" },
      { title: isKo ? "일상 속 퍼센트와 날짜 계산" : "Everyday percent and date calculators", description: isKo ? "할인율, 날짜 차이, 근무 시간처럼 자주 쓰는 계산 상황을 모았습니다." : "Common everyday situations where quick percentage and date math helps.", href: "/blog/everyday-percent-and-date-calculators", cta: isKo ? "활용 예시 보기 →" : "See examples →" },
    ];
  }
  return [
    { title: isKo ? "계산기 결과를 비교하는 방법" : "How to compare calculator results", description: isKo ? "입력값을 조금씩 바꿔 여러 결과를 비교하면 숫자의 의미를 더 쉽게 이해할 수 있습니다." : "Test more than one input set so the final number is easier to understand.", href: "/blog/how-to-compare-calculator-results", cta: isKo ? "비교 방법 보기 →" : "Read article →" },
    { title: isKo ? `${localizeCategoryName(category, locale)} 활용 가이드` : `${localizeCategoryName(category, locale)} guide`, description: isKo ? "비슷한 계산기를 함께 사용하면 결과를 다른 관점에서 비교할 수 있습니다." : "Use related calculators to compare the same question from another angle.", href: `/calculators/${category}`, cta: isKo ? "관련 계산기 보기 →" : "Browse related tools →" },
  ];
}

export function getEnhancedCalculatorContent(definition: CalculatorDefinition, locale: Locale): EnhancedCalculatorContent | null {
  if (!prioritySet.has(definition.slug)) return null;
  const isKo = locale === "ko";
  const name = localizeCalculatorName(definition.name, locale, definition.slug);
  const category = localizeCategoryName(definition.category, locale);
  const defaults = definition.inputs.slice(0, 4).map((input) => `${input.label}: ${input.defaultValue ?? input.options?.[0]?.label ?? "1"}`).join(", ");
  return {
    whenToUseTitle: isKo ? "이 계산기를 쓰면 좋은 상황" : "When this calculator is useful",
    whenToUse: isKo ? [`${name}는 빠르게 기준값을 확인하고 여러 조건을 비교하고 싶을 때 유용합니다.`, `특히 ${category} 영역에서 숫자를 직접 입력해 결과 변화를 확인하면 감으로 판단하는 것보다 실수를 줄일 수 있습니다.`, "중요한 결정 전에는 기본값 그대로 보지 말고 본인의 실제 조건을 넣어 여러 번 비교해보세요."] : [`${name} is useful when you need a quick baseline and want to compare more than one scenario before making a decision.`, `It works best as a practical ${category.toLowerCase()} tool: change one input at a time and watch how the result moves.`, "Replace the sample values with your own numbers before using the result for planning."],
    stepTitle: isKo ? "숫자로 보는 예시 계산" : "Step-by-step example",
    stepExample: isKo ? [`예를 들어 기본 입력값을 사용하면 ${defaults || "표시된 입력값"} 기준으로 계산을 시작할 수 있습니다.`, "첫 번째로 입력값의 단위와 기준일을 확인합니다. 두 번째로 한 가지 값만 바꿔 결과가 어떻게 달라지는지 비교합니다.", "마지막으로 가장 현실적인 조건과 보수적인 조건을 나란히 비교하면 결과를 더 안전하게 해석할 수 있습니다."] : [`For example, start with the sample inputs shown on the calculator: ${defaults || "the visible default values"}.`, "First, confirm the unit, date, rate, or time basis. Second, change one input and compare the new result with the first result.", "Finally, test a realistic case and a conservative case side by side so the number is not read too narrowly."],
    mistakesTitle: isKo ? "자주 하는 실수" : "Common mistakes",
    mistakes: isKo ? ["기본값을 본인 조건으로 착각하고 결과를 그대로 받아들이는 경우가 많습니다.", "단위, 기간, 금리, 날짜 기준을 잘못 선택하면 결과가 크게 달라질 수 있습니다.", "결과 숫자 하나만 보고 판단하기보다 입력값과 제한 사항을 함께 확인해야 합니다."] : ["Leaving the default values in place and treating the result as personal advice.", "Mixing units, dates, time periods, rates, or measurement systems without noticing.", "Reading one result as the final answer instead of comparing a few realistic scenarios."],
    interpretationTitle: isKo ? "결과 해석 방법" : "Result interpretation",
    interpretation: isKo ? [`결과는 ${name}에서 입력한 조건을 기준으로 한 추정값입니다. 숫자가 좋거나 나쁘다는 의미보다 현재 조건에서 어떤 방향성이 나오는지 확인하는 데 더 적합합니다.`, definition.category === "finance" ? "금융 계산 결과는 세금, 수수료, 금융사 조건, 시장 변동이 반영되지 않을 수 있으므로 최종 판단 전 공식 조건을 다시 확인하세요." : definition.category === "health" ? "건강 관련 결과는 일반 참고용입니다. 증상, 병력, 임신, 약물 복용 등 개인 상황이 있다면 의료 전문가와 상담하세요." : "실제 상황에서는 지역 기준, 기관 규정, 입력 기준에 따라 결과가 달라질 수 있습니다."] : [`The result is an estimate based on the inputs you entered into the ${name}. It is most useful for understanding direction, scale, and comparison.`, definition.category === "finance" ? "For finance topics, the result may not include taxes, fees, lender rules, or market changes. Confirm final numbers with the relevant provider or professional." : definition.category === "health" ? "For health-related topics, use the number as general information. Personal medical history, pregnancy, symptoms, or medications can change what the result means." : "Real-world results can differ when local rules, official definitions, or measurement conditions are different from the inputs shown here."],
    limitationsTitle: isKo ? "알아두면 좋은 한계" : "Limitations",
    limitations: isKo ? ["계산기는 화면에 표시된 입력값만 반영합니다. 보이지 않는 비용, 개인 조건, 기관별 기준은 자동으로 포함되지 않습니다.", "계산 결과가 중요한 계약, 건강, 세금, 대출, 투자 판단과 연결된다면 공식 자료나 전문가 확인이 필요합니다.", "결과가 예상과 다르면 입력 단위와 기간을 먼저 다시 확인해보세요."] : ["The calculator only uses the inputs shown on the page. Hidden fees, personal conditions, provider rules, or local requirements are not automatically included.", "If the result affects a contract, health decision, tax filing, loan, or investment choice, verify it with an official source or qualified professional.", "If the result looks surprising, check the units and time period before assuming the formula is wrong."],
    relatedGuidesTitle: isKo ? "함께 보면 좋은 가이드" : "Related guides",
    relatedGuidesIntro: isKo ? "계산 결과를 더 잘 이해하고 싶다면 아래 글과 가이드를 함께 확인해보세요." : "Use these related guides to understand the number more clearly and choose the next calculator to try.",
    relatedGuides: guideLinks(locale, definition.slug, definition.category),
  };
}
