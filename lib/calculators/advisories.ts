import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";

// Calculator-result advisories ("권장·권한 텍스트").
//
// What this is: a short, authoritative paragraph shown directly under the
// calculator result. The point is to tell the reader, in user-perspective
// language, when the number is "good enough as a planning estimate" and
// when they should verify against an official or professional source.
//
// Why this exists for SEO: pages that pair a calculator with a clearly
// disclosed limitation paragraph score better on Google E-E-A-T (especially
// for YMYL topics — tax, finance, health, pregnancy) and have a measurably
// higher chance of indexing in Naver C-Rank for Korean traffic.
//
// Resolution order (most specific wins):
//   1. exact slug match (e.g. mortgage-calculator → mortgage advisory)
//   2. topical fallback by category (e.g. health → general health advisory)
//   3. global "planning" fallback so every calculator has *something*

export type Advisory = {
  /** Heading shown above the body text. Kept short, never alarming. */
  heading: string;
  /** One paragraph in user-perspective. */
  body: string;
};

type LocalizedAdvisory = Record<Locale, Advisory>;

// Topical advisories keyed by a stable id.
// Each id is referenced from the slug- or category-resolution maps below.
const advisoriesById: Record<string, LocalizedAdvisory> = {
  loan: {
    ko: {
      heading: "대출 결과를 어떻게 활용하시면 좋아요",
      body:
        "이 결과는 원금·금리·기간만 본 단순 원리금이라 실제 은행 한도와 다를 수 있어요. 본인 신용등급, 우대금리(급여이체·자동이체·청약), 중도상환수수료, DSR 한도까지 반영된 정확한 한도는 금융감독원 금융상품통합비교공시 또는 해당 은행 상담에서 확인하시는 게 안전합니다.",
    },
    en: {
      heading: "How to use this loan estimate",
      body:
        "This result reflects principal, rate, and term only — your actual lender quote will differ once credit score, fees, points, and qualifying criteria are factored in. Use this number to compare scenarios, then confirm the final terms against a Loan Estimate (TILA-RESPA disclosure) from your lender or via the CFPB's loan-comparison tools before making a decision.",
    },
  },
  mortgage: {
    ko: {
      heading: "주담대 결과를 읽으실 때 주의할 점",
      body:
        "월 상환금은 원금과 이자만 표시된 값이에요. 실제 한도는 LTV(주택담보대출비율), DTI, 그리고 2026년 기준 은행권 DSR 40% 한도가 함께 적용되며, 보금자리·디딤돌·적격대출 같은 정책 상품은 별도 자격 조건이 있어요. 정확한 가능 한도는 한국주택금융공사 또는 거래 은행에서 한 번 더 확인해보세요.",
    },
    en: {
      heading: "What this mortgage estimate doesn't include",
      body:
        "The monthly payment shown is principal and interest only. Property taxes (~1.1% nationally per Tax Foundation), homeowners insurance, HOA dues, and PMI (if you put less than 20% down) typically add 25–35% to your total PITI. Verify final numbers in a Loan Estimate from your lender, and check the latest Freddie Mac PMMS for current market rates.",
    },
  },
  tax: {
    ko: {
      heading: "세금 결과는 참고용으로 활용해주세요",
      body:
        "이 결과는 입력하신 항목만 반영한 추정치예요. 실제 연말정산·종합소득세는 인적공제, 신용카드 사용액, 의료비, 월세 세액공제, 연금저축·IRP, 자녀세액공제 같은 세부 항목이 더해져 달라질 수 있어요. 정확한 신고와 환급 금액은 국세청 홈택스 \"연말정산 미리보기\"·\"종합소득세 신고\"에서 확인하시거나 세무사와 상담해보세요.",
    },
    en: {
      heading: "About this tax estimate",
      body:
        "This is a simplified estimate based on the inputs you provided. Actual federal liability depends on filing status, dependents, credits (Child Tax Credit, EITC, education credits), Schedule A itemized deductions, AMT, and any state tax. For an authoritative figure, run your numbers through the official IRS Tax Withholding Estimator or a CPA before relying on the result.",
    },
  },
  retirement: {
    ko: {
      heading: "은퇴 시뮬레이션을 보실 때 알아두세요",
      body:
        "이 결과는 입력하신 수익률이 매년 일정하다고 가정한 단순 복리 시뮬레이션이에요. 실제 수익률은 시장 변동, 인플레이션, 세금·수수료에 따라 크게 달라질 수 있고, 한국에서는 국민연금·퇴직연금·개인연금(연금저축·IRP) 3층 구조가 함께 작용해요. 정확한 노후 자금 설계는 국민연금공단의 \"내 연금 알아보기\"와 함께 보시는 게 도움이 됩니다.",
    },
    en: {
      heading: "Reading this retirement projection",
      body:
        "This projection assumes a constant annual return, which never happens in real markets. Sequence-of-returns risk, inflation, taxes, and Social Security timing all shift the actual outcome. For a more complete picture, get your personalized Social Security estimate at ssa.gov, model your 401(k) and IRA against historical S&P 500 backtests, and consider the 4% rule alongside updated frameworks (Wade Pfau, Michael Kitces).",
    },
  },
  invest: {
    ko: {
      heading: "투자 시뮬레이션은 참고값이에요",
      body:
        "복리 시뮬레이션은 매년 일정한 수익률을 가정해서 보여드리는 값이라 실제 결과와 다를 수 있어요. 5~10년 안에 -20~-30% 구간을 한두 번 거치는 게 보통이고, 한국 주식형 ETF는 분배금 15.4% 과세, 해외 ETF는 매매차익 22% 양도세가 함께 적용돼요. ISA·연금저축 안에서 운용하시면 세제 혜택을 더 받으실 수 있습니다.",
    },
    en: {
      heading: "About this investment projection",
      body:
        "Compound-growth projections use a fixed return that real markets never deliver evenly. Historical S&P 500 returns average around 10% nominal (Ibbotson SBBI), but include several drawdowns of 20% or more. Tax treatment (ordinary income vs. qualified dividends, long-term vs. short-term capital gains, IRA/Roth wrappers) materially changes after-tax outcomes — refer to current IRS publications or a fiduciary advisor before sizing contributions.",
    },
  },
  payroll: {
    ko: {
      heading: "급여 결과를 어떻게 보면 좋아요",
      body:
        "이 결과는 입력한 시급·근무시간을 단순 곱한 값이에요. 실제 실수령액은 4대 보험(국민연금 4.5%, 건강보험 3.545%, 장기요양 0.4591%, 고용보험 0.9%)과 근로소득세 원천징수가 빠지면서 달라져요. 정확한 실수령액은 회사의 임금명세서 또는 국세청 \"근로소득 간이세액표\"에서 확인하시면 됩니다.",
    },
    en: {
      heading: "What this paycheck estimate doesn't show",
      body:
        "This figure is a gross-to-gross calculation. Federal withholding (per Form W-4 and IRS Publication 15-T), Social Security (6.2%), Medicare (1.45%), state/local tax, and pre-tax 401(k) or HSA deductions all reduce take-home pay. For a reliable net number, use the IRS Tax Withholding Estimator or your employer's pay stub, and review the most recent IRS Form W-4 instructions.",
    },
  },
  bmi: {
    ko: {
      heading: "BMI 결과를 어떻게 해석하면 좋아요",
      body:
        "BMI는 키와 몸무게만 보는 빠른 지표라 근육량, 체지방 분포, 나이, 임신 여부는 반영되지 않아요. 한국에서는 대한비만학회 기준(과체중 23 이상, 비만 25 이상)이 WHO 기준보다 낮게 잡혀 있으니 본인 상황에 맞춰 함께 보세요. 허리둘레(남 90cm/여 85cm 초과)와 체지방률을 함께 확인하시면 더 정확합니다.",
    },
    en: {
      heading: "How to read this BMI result",
      body:
        "BMI uses only height and weight, so it cannot tell muscle from fat or account for age, pregnancy, or fat distribution. The WHO categorizes 25 and above as overweight; the American Diabetes Association recommends screening Asian American adults at BMI 23+ because of differing cardiometabolic risk profiles. Pair BMI with waist circumference (under 40\" men / 35\" women per CDC) and a clinician's assessment for a fuller picture.",
    },
  },
  pregnancy: {
    ko: {
      heading: "임신 관련 결과는 참고용이에요",
      body:
        "출산예정일·임신주수·배란일 계산은 마지막 생리 시작일을 기준으로 한 평균값이에요. 실제 임신 진행은 사람마다 다르고 초음파 검사 결과가 가장 정확한 기준이 됩니다. 산부인과 정기 검진과 보건소·국민건강보험공단의 임산부 등록을 통해 확인해보세요.",
    },
    en: {
      heading: "About this pregnancy estimate",
      body:
        "Due date and ovulation calculations use Naegele's rule (LMP + 280 days) and assume regular 28-day cycles, which most people don't have exactly. Ultrasound dating in the first trimester is the clinical standard. Discuss any specific concerns with your OB/GYN — these tools are educational only and aren't a substitute for prenatal care.",
    },
  },
  fitness: {
    ko: {
      heading: "피트니스 추정값을 활용하실 때",
      body:
        "칼로리·BMR·TDEE 결과는 평균적인 활동량을 가정한 추정값이에요. 실제 필요량은 근육량, 운동 강도, 직업, 호르몬 상태에 따라 ±15~20% 차이가 날 수 있어요. 정확한 수치가 필요하시면 영양사 상담이나 인바디·DEXA 측정으로 본인 데이터를 확인해보세요.",
    },
    en: {
      heading: "Reading fitness estimates",
      body:
        "BMR, TDEE, and calorie needs derived from Mifflin-St Jeor or Harris-Benedict are population averages — actual energy needs can vary ±15–20% based on muscle mass, training load, NEAT, and hormonal factors. For training or weight goals, anchor against measured outcomes (scale trends, performance metrics) over 2–4 weeks rather than relying on the formula alone.",
    },
  },
  health: {
    ko: {
      heading: "건강 결과는 일반 참고용이에요",
      body:
        "이 결과는 입력하신 정보만 본 일반적인 참고값이에요. 본인 건강 상태에 맞는 정확한 판단은 의사·간호사·영양사·약사처럼 자격을 갖춘 전문가와 함께 보시는 게 안전합니다. 보건소나 국민건강보험공단 건강검진을 통해 정기 점검을 받으시는 것도 좋아요.",
    },
    en: {
      heading: "These health estimates are educational only",
      body:
        "Calculator-based health estimates are useful for general awareness but cannot replace clinical evaluation. Discuss results — especially anything in a borderline or elevated range — with your primary care provider or a licensed specialist. The CDC and your state health department also offer free screenings and resources worth checking before making changes.",
    },
  },
  measurement: {
    ko: {
      heading: "변환 결과 사용 시 알아두면 좋아요",
      body:
        "변환 결과는 SI 표준값을 기준으로 계산된 정확한 값이지만, 실제 상황에서는 측정 도구의 정밀도와 환경(온도·압력·재료 밀도)에 따라 차이가 생길 수 있어요. 공식 거래·계약·실험에는 측정 기관이 인증한 도구로 다시 한 번 확인하시는 게 안전합니다.",
    },
    en: {
      heading: "Notes on this conversion",
      body:
        "Conversion factors here use NIST SI definitions and are mathematically exact — real-world precision is limited by your measurement instrument and conditions like temperature, pressure, and material density. For commerce, scientific reporting, or anything contractual, confirm with calibrated equipment per the NIST Handbook 44 standard.",
    },
  },
  construction: {
    ko: {
      heading: "자재 추정값을 작업 전에 알아두세요",
      body:
        "콘크리트·페인트·타일 같은 자재 수량은 표준 면적과 두께를 기준으로 계산한 값이에요. 실제 시공에서는 5~10% 자재 손실, 시공 환경(벽 굴곡·문틀·구조물), 자재 규격이 결과를 바꿀 수 있어요. 견적 전에 시공자와 직접 면적을 한 번 더 확인하시는 걸 권합니다.",
    },
    en: {
      heading: "Reading material estimates",
      body:
        "Material quantities here are based on standard coverage rates. Real-world projects typically see 5–10% waste from cuts, errors, and surface variation. Wall texture, openings, and architectural detail can shift the actual amount needed by 10–15%. Confirm with a contractor or supplier before ordering, and refer to product-specific data sheets for accurate coverage.",
    },
  },
  cooking: {
    ko: {
      heading: "요리 변환·예산 결과 안내",
      body:
        "요리 단위 변환은 물 기준 밀도로 계산되는 게 일반적이라 밀가루·꿀·기름처럼 밀도가 다른 재료는 결과가 달라질 수 있어요. 정확한 양이 중요한 베이킹에서는 무게(g)로 측정하시는 걸 권하고, 식비·파티 예산은 지역 마트 가격에 따라 차이가 큽니다.",
    },
    en: {
      heading: "Cooking conversion and budget notes",
      body:
        "Volume-to-weight conversions assume water density (1 g/mL) by default — flour, sugar, oils, and honey have different densities, so weighing in grams produces more reliable baking results. Budget estimates here use generic average prices; your actual cost depends on local grocery prices and brand selection. Cross-check with a current store flyer for accuracy.",
    },
  },
  education: {
    ko: {
      heading: "학점·성적 결과 사용 안내",
      body:
        "GPA 계산기는 4.5점 만점·4.3점 만점·4.0점 만점 같은 학교별 환산 방식을 모두 반영하지는 않아요. 정확한 GPA는 본인 학교의 학사 시스템 또는 성적 증명서를 기준으로 다시 확인해보시는 것이 좋아요.",
    },
    en: {
      heading: "GPA calculation notes",
      body:
        "GPA calculators reflect a standard 4.0 scale by default. Some institutions use weighted (5.0) or 4.3 scales for honors and AP courses, and graduate programs may apply unique conversions. For applications or transcripts, refer to your school registrar or the official transcript for the authoritative figure.",
    },
  },
  business: {
    ko: {
      heading: "사업 관련 결과는 참고용이에요",
      body:
        "마진·수수료·손익분기점은 입력하신 단순 비용·수익만으로 계산된 값이에요. 실제 사업에서는 부가세·법인세, 카드 수수료, 변동비, 인건비, 재고 회전율 같은 요소가 함께 작용합니다. 정확한 사업 분석은 회계 프로그램이나 세무사와 함께 확인하시는 게 안전해요.",
    },
    en: {
      heading: "Business calculation notes",
      body:
        "Margin, commission, and break-even calculations here use the inputs you provide and don't account for sales tax, payment processor fees, fixed overhead allocation, or inventory turnover. For pricing, contracts, or financial reporting, validate against your accounting system (QuickBooks, Xero) and consult a CPA on tax treatment per the latest IRS guidance.",
    },
  },
  date: {
    ko: {
      heading: "날짜·시간 결과 활용 시",
      body:
        "근무일수·영업일 계산은 한국 일반 휴일(주말·공휴일)을 기준으로 합니다. 회사별 휴가 정책, 대체공휴일, 업무일 정의는 다를 수 있어 정확한 일정은 회사 인사팀이나 행정안전부 공식 공휴일 안내를 확인해보세요.",
    },
    en: {
      heading: "Date and time calculation notes",
      body:
        "Business-day and work-hour calculations here assume standard US weekends and federal holidays. Your specific employer policies, state holidays, religious observances, and contractual workday definitions may differ. For payroll, contract deadlines, or court filings, verify against your jurisdiction's official calendar.",
    },
  },
  general: {
    ko: {
      heading: "결과 활용 시 알아두세요",
      body:
        "계산기 결과는 빠른 비교와 계획을 돕기 위한 일반 참고값이에요. 실제 결정이 필요하시면 공식 자료나 해당 분야 전문가와 한 번 더 확인하시는 것이 안전합니다.",
    },
    en: {
      heading: "How to use this result",
      body:
        "Calculator results here are educational and meant for planning. For decisions with real consequences — money, health, legal, or contractual — verify with an authoritative source or a qualified professional in that field before acting.",
    },
  },
};

// Slug-specific overrides — for calculators where the topical fallback
// would lose important nuance (e.g., pregnancy is more specific than "health").
const slugAdvisoryId: Record<string, string> = {
  "loan-calculator": "loan",
  "auto-loan-calculator": "loan",
  "personal-loan-calculator": "loan",
  "student-loan-calculator": "loan",
  "business-loan-calculator": "loan",
  "mortgage-calculator": "mortgage",
  "amortization-calculator": "mortgage",
  "refinance-savings-calculator": "mortgage",
  "house-down-payment-calculator": "mortgage",
  "down-payment-savings-calculator": "mortgage",
  "rent-vs-buy-calculator": "mortgage",
  "lease-vs-buy-calculator": "mortgage",
  "car-affordability-calculator": "loan",
  "sales-tax-calculator": "tax",
  "capital-gains-tax-calculator": "tax",
  "retirement-calculator": "retirement",
  "ira-calculator": "retirement",
  "college-savings-calculator": "retirement",
  "compound-interest-calculator": "invest",
  "investment-calculator": "invest",
  "future-value-calculator": "invest",
  "present-value-calculator": "invest",
  "savings-calculator": "invest",
  "savings-goal-calculator": "invest",
  "savings-rate-calculator": "invest",
  "real-return-calculator": "invest",
  "rule-of-72-calculator": "invest",
  "stock-average-calculator": "invest",
  "dividend-yield-calculator": "invest",
  "dividend-income-calculator": "invest",
  "roi-calculator": "invest",
  "paycheck-calculator": "payroll",
  "biweekly-paycheck-calculator": "payroll",
  "hourly-wage-calculator": "payroll",
  "hourly-to-salary-calculator": "payroll",
  "salary-to-hourly-calculator": "payroll",
  "annual-income-calculator": "payroll",
  "overtime-pay-calculator": "payroll",
  "net-pay-raise-calculator": "payroll",
  "freelance-rate-calculator": "payroll",
  "bmi-calculator": "bmi",
  "bmi-prime-calculator": "bmi",
  "ideal-weight-calculator": "bmi",
  "pregnancy-due-date-calculator": "pregnancy",
  "ovulation-calculator": "pregnancy",
  "gpa-calculator": "education",
  "study-hours-calculator": "education",
};

// Category fallback when no slug-specific advisory matches.
const categoryAdvisoryId: Record<string, string> = {
  finance: "general",
  business: "business",
  health: "health",
  fitness: "fitness",
  "unit-converters": "measurement",
  "physics-science": "measurement",
  "computer-tech": "measurement",
  "time-date": "date",
  construction: "construction",
  "food-cooking": "cooking",
  education: "education",
  "everyday-life": "general",
  math: "general",
  statistics: "general",
  other: "general",
};

/**
 * Resolves the most-specific advisory for a calculator + locale.
 * Always returns something — global "general" is the final fallback.
 */
export function getAdvisoryFor(
  calculator: Pick<CalculatorDefinition, "slug" | "category">,
  locale: Locale,
): Advisory {
  const slugId = slugAdvisoryId[calculator.slug];
  const categoryId = categoryAdvisoryId[calculator.category] ?? "general";
  const id = slugId ?? categoryId;
  const advisory = advisoriesById[id] ?? advisoriesById.general;
  return advisory[locale];
}
