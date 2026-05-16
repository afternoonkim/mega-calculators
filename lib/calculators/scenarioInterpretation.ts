import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";

// Per-scenario interpretation generator.
//
// Why this exists: Google has been flagging high-volume example/scenario
// pages as "Crawled — currently not indexed" because the body content is
// near-identical across hundreds of pages (only input numbers change).
// Adding a scenario-specific paragraph that uses the actual computed
// values gives each page genuinely unique text, which is what Google's
// quality classifier looks for when deciding to index thin variants.
//
// The interpretation is generated from the calculator `kind` + overrides
// + computed result, so every scenario page gets a different paragraph
// without us writing 1,000+ paragraphs by hand.

type InterpretationContext = {
  definition: CalculatorDefinition;
  values: Record<string, string>;
  primaryValue: string;
  primaryLabel: string;
  locale: Locale;
};

const fmtKrwApprox = (usd: number) =>
  `${(Math.round((usd * 1300) / 1000) * 1000).toLocaleString("ko-KR")}원`;
const fmtUsd = (n: number) => `$${n.toLocaleString("en-US")}`;

function num(values: Record<string, string>, key: string): number {
  const n = Number(values[key]);
  return Number.isFinite(n) ? n : 0;
}

function bmiCategoryKo(bmi: number): string {
  if (bmi < 18.5) return "저체중";
  if (bmi < 23) return "정상";
  if (bmi < 25) return "과체중";
  if (bmi < 30) return "비만 1단계";
  if (bmi < 35) return "비만 2단계";
  return "비만 3단계";
}

function bmiCategoryEn(bmi: number): string {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal weight";
  if (bmi < 30) return "overweight";
  if (bmi < 35) return "Class I obesity";
  if (bmi < 40) return "Class II obesity";
  return "Class III obesity";
}

function bmiInterpretation(ctx: InterpretationContext): string {
  const height = num(ctx.values, "heightCm");
  const weight = num(ctx.values, "weightKg");
  const bmi = Number(ctx.primaryValue.replace(/[^\d.]/g, "")) || 0;
  if (ctx.locale === "ko") {
    const category = bmiCategoryKo(bmi);
    const idealWeight = Math.round(22 * (height / 100) ** 2 * 10) / 10;
    const diff = Math.round((weight - idealWeight) * 10) / 10;
    const direction =
      diff > 0
        ? `표준체중(BMI 22 기준 약 ${idealWeight}kg)보다 약 ${Math.abs(diff)}kg 정도 많은 편이에요.`
        : diff < 0
          ? `표준체중(BMI 22 기준 약 ${idealWeight}kg)보다 약 ${Math.abs(diff)}kg 정도 적은 편이에요.`
          : `표준체중(BMI 22 기준 약 ${idealWeight}kg)과 거의 같은 수준이에요.`;
    return `키 ${height}cm, 몸무게 ${weight}kg일 때 BMI는 약 ${bmi.toFixed(1)}로 대한비만학회 기준 "${category}" 범위에 들어가요. ${direction} BMI는 빠른 참고용이라 근육량·체지방률·허리둘레까지 함께 보시는 게 더 정확합니다.`;
  }
  const category = bmiCategoryEn(bmi);
  const idealLbs = Math.round(22 * (height / 100) ** 2 * 2.20462);
  const weightLbs = Math.round(weight * 2.20462);
  const diff = weightLbs - idealLbs;
  const direction =
    diff > 0
      ? `That's about ${Math.abs(diff)} lb above the midpoint of the normal range (BMI 22 = ${idealLbs} lb at this height).`
      : diff < 0
        ? `That's about ${Math.abs(diff)} lb below the midpoint of the normal range (BMI 22 = ${idealLbs} lb at this height).`
        : `That sits right at the midpoint of the normal range (BMI 22 at this height).`;
  return `For someone ${height} cm tall weighing ${weight} kg (${weightLbs} lb), the BMI works out to about ${bmi.toFixed(1)}, which falls into the ${category} range under WHO/CDC guidelines. ${direction} BMI is a quick screening number; pair it with waist circumference and body composition for a clearer picture.`;
}

function loanInterpretation(ctx: InterpretationContext): string {
  const amount = num(ctx.values, "loanAmount");
  const rate = num(ctx.values, "annualRate");
  const years = num(ctx.values, "years");
  const monthly = Number(ctx.primaryValue.replace(/[^\d.]/g, "")) || 0;
  const totalPaid = monthly * years * 12;
  const totalInterest = totalPaid - amount;
  if (ctx.locale === "ko") {
    return `${fmtKrwApprox(amount)} 원금을 연 ${rate}% 금리로 ${years}년 동안 원리금균등 상환하시면 매달 약 ${fmtKrwApprox(Math.round(monthly))}을 내시게 돼요. ${years}년 동안 갚으시는 총금액은 약 ${fmtKrwApprox(Math.round(totalPaid))}이고 이 중 이자만 ${fmtKrwApprox(Math.round(totalInterest))} 수준입니다. 실제 은행 한도와 우대금리는 DSR·신용등급에 따라 달라지니 참고용으로 활용하세요.`;
  }
  return `Borrowing ${fmtUsd(amount)} at ${rate}% over ${years} year${years === 1 ? "" : "s"} produces a monthly payment of about ${fmtUsd(Math.round(monthly))}. Across the full term you'll pay roughly ${fmtUsd(Math.round(totalPaid))} total, with ${fmtUsd(Math.round(totalInterest))} of that going to interest. Your actual lender quote will reflect your credit score, fees, and any prepayment penalties.`;
}

function mortgageInterpretation(ctx: InterpretationContext): string {
  const homePrice = num(ctx.values, "homePrice");
  const downPayment = num(ctx.values, "downPayment");
  const rate = num(ctx.values, "annualRate");
  const years = num(ctx.values, "years");
  const loanAmount = homePrice - downPayment;
  const monthly = Number(ctx.primaryValue.replace(/[^\d.]/g, "")) || 0;
  const totalInterest = monthly * years * 12 - loanAmount;
  if (ctx.locale === "ko") {
    return `${fmtKrwApprox(homePrice)} 주택을 자기자본 ${fmtKrwApprox(downPayment)}(${Math.round((downPayment / homePrice) * 100)}%)로 매수하고 ${fmtKrwApprox(loanAmount)}을 연 ${rate}% ${years}년 만기로 빌리시면 매달 약 ${fmtKrwApprox(Math.round(monthly))}을 상환하시게 됩니다. ${years}년 동안 누적 이자는 약 ${fmtKrwApprox(Math.round(totalInterest))}이에요. 실제 한국 주담대는 DSR 40%·LTV 70%(생애최초 80%) 한도가 함께 적용되니 본인 한도는 은행 상담에서 확정하세요.`;
  }
  return `A ${fmtUsd(homePrice)} home with ${fmtUsd(downPayment)} down (${Math.round((downPayment / homePrice) * 100)}% LTV) financed at ${rate}% over ${years} years produces a principal-and-interest payment of about ${fmtUsd(Math.round(monthly))} per month. Over the life of the loan you'd pay around ${fmtUsd(Math.round(totalInterest))} in interest. Add property taxes (~1.1% of home value annually), insurance, and PMI if applicable to estimate your full PITI.`;
}

function compoundInterpretation(ctx: InterpretationContext): string {
  const principal = num(ctx.values, "principal");
  const monthly = num(ctx.values, "monthlyContribution");
  const rate = num(ctx.values, "annualRate");
  const years = num(ctx.values, "years");
  const future = Number(ctx.primaryValue.replace(/[^\d.]/g, "")) || 0;
  const contributions = principal + monthly * 12 * years;
  const growth = future - contributions;
  if (ctx.locale === "ko") {
    return `초기 ${fmtKrwApprox(principal)}에 매월 ${fmtKrwApprox(monthly)}씩 ${years}년 동안 연 ${rate}% 복리로 굴리시면 만기 시 약 ${fmtKrwApprox(Math.round(future))}이 됩니다. 본인이 직접 넣으신 원금 ${fmtKrwApprox(Math.round(contributions))} 외에 약 ${fmtKrwApprox(Math.round(growth))}이 복리 효과로 추가된 셈이에요. 실제 시장 수익률은 매년 변동하니 보수적(연 5%)·기본(연 7%)·낙관적(연 10%) 세 가지 시나리오로 비교해보시는 것이 안전합니다.`;
  }
  return `Starting with ${fmtUsd(principal)} and adding ${fmtUsd(monthly)} per month for ${years} years at ${rate}% compounded annually grows to approximately ${fmtUsd(Math.round(future))}. Of that, ${fmtUsd(Math.round(contributions))} comes from your own contributions and about ${fmtUsd(Math.round(growth))} from compound growth. Historical S&P 500 returns have averaged ~10% nominal but include drawdowns of 20% or more, so this is best read as one scenario, not a forecast.`;
}

function salesTaxInterpretation(ctx: InterpretationContext): string {
  const price = num(ctx.values, "price");
  const rate = num(ctx.values, "taxRate");
  const tax = price * (rate / 100);
  const total = price + tax;
  if (ctx.locale === "ko") {
    return `가격 ${fmtKrwApprox(price)}에 ${rate}% 부가세가 붙으면 세액은 약 ${fmtKrwApprox(Math.round(tax))}이 되어 최종 결제 금액은 ${fmtKrwApprox(Math.round(total))}이 됩니다. 한국은 일반적으로 가격에 부가세(10%)가 포함되어 표시되지만, 영수증·견적서에서 세액을 분리 확인하실 때 참고하세요.`;
  }
  return `Adding ${rate}% sales tax to a ${fmtUsd(price)} purchase produces about ${fmtUsd(Math.round(tax))} in tax and a final out-the-door price of ${fmtUsd(Math.round(total))}. Rates vary by state and city — California averages 8.85% (state + local), Texas 8.20%, New York 8.52%. Check your jurisdiction for the exact combined rate.`;
}

const interpreters: Record<string, (ctx: InterpretationContext) => string> = {
  bmi: bmiInterpretation,
  loanPayment: loanInterpretation,
  mortgagePayment: mortgageInterpretation,
  compoundInterest: compoundInterpretation,
  salesTax: salesTaxInterpretation,
};

/**
 * Generates a scenario-specific paragraph for example pages.
 * Falls back to null when the calculator kind has no interpreter — in
 * that case the example page renders without the unique paragraph, which
 * is fine because the non-priority kinds have far fewer example pages
 * to begin with.
 */
export function getScenarioInterpretation(ctx: InterpretationContext): string | null {
  const fn = interpreters[ctx.definition.kind];
  if (!fn) return null;
  try {
    return fn(ctx);
  } catch {
    return null;
  }
}
