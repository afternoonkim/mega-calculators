import { getAdvisoryFor as getBaseAdvisoryFor, type Advisory } from "@/lib/calculators/advisories";
import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";

const koreanInvestmentAdvisory: Advisory = {
  heading: "투자 시뮬레이션은 참고값이에요",
  body:
    "복리 시뮬레이션은 매년 일정한 수익률을 가정한 참고값이라 실제 결과와 다를 수 있어요. ETF 세금은 상장 위치와 투자 대상에 따라 다릅니다. 국내 상장 국내주식형 ETF는 일반적으로 매매차익이 비과세이고 분배금에는 배당소득세가 적용되며, 국내 상장 해외지수·채권·상품 ETF 등은 매매차익과 과표기준가격 상승분 중 작은 금액을 기준으로 15.4% 배당소득세 방식의 보유기간 과세가 적용될 수 있어요. 미국 등 해외 거래소에 직접 상장된 주식·ETF는 국외주식 양도소득 체계가 적용되어 연간 기본공제 250만 원 후 과세됩니다. ISA·연금저축·IRP 안에서는 계좌별 세제 규칙이 별도로 적용되므로 실제 투자 전 최신 국세청·거래소 기준을 확인해주세요.",
};

const investmentSlugs = new Set([
  "compound-interest-calculator",
  "investment-calculator",
  "future-value-calculator",
  "present-value-calculator",
  "savings-calculator",
  "savings-goal-calculator",
  "savings-rate-calculator",
  "real-return-calculator",
  "rule-of-72-calculator",
  "stock-average-calculator",
  "dividend-yield-calculator",
  "dividend-income-calculator",
  "roi-calculator",
]);

export function getAdvisoryFor(
  calculator: Pick<CalculatorDefinition, "slug" | "category">,
  locale: Locale,
): Advisory {
  if (locale === "ko" && investmentSlugs.has(calculator.slug)) {
    return koreanInvestmentAdvisory;
  }

  return getBaseAdvisoryFor(calculator, locale);
}
