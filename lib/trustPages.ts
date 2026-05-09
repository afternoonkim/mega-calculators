import type { Locale } from "@/lib/i18n";

export type TrustPageSlug = "editorial-standards" | "methodology" | "corrections";

type TrustSection = { heading: string; body: string[] };
export type TrustPageContent = {
  slug: TrustPageSlug;
  label: string;
  title: string;
  description: string;
  intro: string;
  updatedAt: string;
  sections: TrustSection[];
  ctaLabel?: string;
  ctaText?: string;
};

const trustPages: Record<Locale, Record<TrustPageSlug, TrustPageContent>> = {
  en: {
    "editorial-standards": {
      slug: "editorial-standards", label: "Editorial standards", title: "Editorial Standards",
      description: "How Mega Calculators writes, reviews, and improves calculator explanations, formulas, and practical guidance.",
      intro: "Mega Calculators is built to help people understand everyday numbers clearly. These standards explain how we write calculator pages, present formulas, and keep sensitive topics in the right context.",
      updatedAt: "2026-05-07",
      sections: [
        { heading: "How calculator content is written", body: ["Each calculator page is written around a practical user question: what number is needed, which inputs matter, and how the result should be read.", "We avoid unnecessary jargon and explain formulas in plain language so the page can be useful before, during, and after a calculation."] },
        { heading: "How formulas and explanations are managed", body: ["Formulas are kept with the calculator definition whenever possible so the calculator logic, example, and explanation stay aligned.", "When a topic depends on common conventions, such as finance, health, dates, or unit conversion, the page explains the assumptions that may affect the result."] },
        { heading: "Sensitive topics and planning results", body: ["Calculators about finance, health, pregnancy, taxes, lending, investing, and similar topics are designed for education and planning.", "A calculator result should not replace advice from a qualified professional, an official source, or a provider who knows your personal situation."] },
        { heading: "Accuracy, clarity, and updates", body: ["We aim to make every result understandable by showing what the inputs mean, what the output represents, and where the result can differ from real life.", "Pages may be updated when formulas, examples, wording, or user feedback show that the explanation can be made clearer or more useful."] },
        { heading: "When something looks wrong", body: ["If a formula, example, label, or explanation appears incorrect, we review the issue and make a correction when a change is needed.", "Corrections focus on helping readers reach a clearer and more reliable understanding of the calculator result."] },
      ],
    },
    methodology: {
      slug: "methodology", label: "Methodology", title: "Methodology",
      description: "How Mega Calculators applies formulas, units, rounding, default values, and assumptions across calculator categories.",
      intro: "This page explains the calculation approach used across Mega Calculators, including how formulas, units, rounding, defaults, and assumptions are handled.",
      updatedAt: "2026-05-07",
      sections: [
        { heading: "How formulas are applied", body: ["Each calculator uses a defined calculation method based on the inputs shown on the page. The formula explanation is written to match the visible inputs and result fields.", "For calculators that involve estimates, the result should be read as a planning range or approximation rather than a guaranteed outcome."] },
        { heading: "Unit conversion and measurement rules", body: ["Unit converters use fixed conversion factors between supported units. The selected source unit is converted to a base value and then converted into the target unit.", "Some real-world measurements depend on context. For example, cooking volume can vary by ingredient density, while fuel economy can vary by driving conditions."] },
        { heading: "Rounding and display", body: ["Results are rounded to make them easy to read on both mobile and desktop screens. Very small differences can appear when another tool uses a different rounding rule.", "Where secondary values are shown, they are meant to help you understand the result rather than replace a formal statement or quote."] },
        { heading: "Defaults and assumptions", body: ["Default values are provided to make a calculator usable immediately. You should replace them with your own numbers before using the result for planning.", "Assumptions such as rate, term, frequency, or measurement system can change the output, so the most useful results usually come from testing more than one scenario."] },
        { heading: "Category examples", body: ["Finance calculators may estimate payments, interest, returns, or totals, but they usually do not include every fee, tax, provider rule, or market change.", "Health calculators can give a useful starting point, but age, body composition, medical history, and professional guidance may change how the result should be interpreted.", "Date and time calculators depend on the dates entered and may not account for every local rule, holiday, work policy, or time-zone detail unless that input is shown."] },
      ],
    },
    corrections: {
      slug: "corrections", label: "Corrections", title: "Corrections",
      description: "How to tell Mega Calculators about a possible issue and how corrections are reviewed and reflected on the site.",
      intro: "If you notice a calculator result, formula explanation, label, or article detail that seems unclear or incorrect, you can send feedback so it can be reviewed.",
      updatedAt: "2026-05-07", ctaLabel: "Contact Mega Calculators", ctaText: "Send feedback or report a possible issue",
      sections: [
        { heading: "What you can report", body: ["You can report a possible formula issue, unclear wording, a broken link, a confusing label, or an example that does not match the calculator result.", "When possible, include the calculator name, the numbers you entered, the result you expected, and what seemed wrong."] },
        { heading: "How reports are checked", body: ["A reported issue is reviewed against the calculator inputs, formula explanation, example, and page context.", "If the issue is caused by an assumption or limitation rather than an error, the page may be improved so the limitation is easier to understand."] },
        { heading: "How updates are reflected", body: ["When a correction is needed, the affected formula, explanation, label, example, or internal link is updated so the page is clearer for future readers.", "Some changes are small wording improvements, while others may require a broader review of the calculator page."] },
        { heading: "When results can still differ", body: ["Even after a page is correct, results may differ from a bank quote, medical recommendation, tax statement, official form, or professional estimate because those sources may use additional rules.", "For important decisions, use Mega Calculators as a planning aid and confirm the final number with the relevant official or professional source."] },
      ],
    },
  },
  ko: {
    "editorial-standards": {
      slug: "editorial-standards", label: "콘텐츠 기준", title: "콘텐츠 작성 기준",
      description: "Mega Calculators가 계산기 설명, 공식, 예시, 주의사항을 작성하고 개선하는 기준을 안내합니다.",
      intro: "Mega Calculators는 사용자가 필요한 계산을 빠르게 이해하고 활용할 수 있도록 만드는 것을 목표로 합니다. 이 페이지에서는 계산기 콘텐츠를 어떤 기준으로 작성하고 관리하는지 안내드립니다.",
      updatedAt: "2026-05-07",
      sections: [
        { heading: "계산기 콘텐츠를 작성하는 기준", body: ["각 계산기 페이지는 사용자가 실제로 궁금해하는 질문에서 출발합니다. 어떤 값을 입력해야 하는지, 결과가 무엇을 의미하는지, 어떤 상황에서 참고하면 좋은지 중심으로 설명합니다.", "전문 용어는 가능한 한 쉽게 풀어 쓰고, 모바일에서도 읽기 편하도록 짧은 문단과 명확한 문장으로 구성합니다."] },
        { heading: "공식과 설명을 관리하는 방식", body: ["계산 공식, 입력값, 예시, 결과 설명이 서로 어긋나지 않도록 계산기 데이터와 설명을 함께 관리합니다.", "금융, 건강, 날짜, 단위 변환처럼 기준이 중요한 계산은 결과에 영향을 줄 수 있는 가정과 한계를 함께 안내합니다."] },
        { heading: "민감한 주제의 결과 안내", body: ["금융, 건강, 임신, 투자, 대출, 세금처럼 중요한 판단과 연결되는 계산 결과는 일반적인 참고용으로 제공됩니다.", "실제 결정이 필요한 경우에는 공식 기관, 금융사, 의료진, 세무 전문가 등 상황에 맞는 전문가와 함께 확인하시는 것이 좋습니다."] },
        { heading: "정확성과 이해하기 쉬운 설명", body: ["계산 결과가 단순 숫자로 끝나지 않도록 입력값의 의미, 결과 해석, 자주 하는 실수, 제한 사항을 함께 설명하려고 합니다.", "공식, 예시, 문구, 사용자 피드백을 기준으로 더 명확하게 바꿀 수 있는 부분은 지속적으로 개선합니다."] },
        { heading: "잘못된 정보가 발견되는 경우", body: ["공식, 예시, 설명, 링크에 문제가 있다고 판단되는 경우 내용을 검토하고 필요한 경우 수정합니다.", "수정의 목적은 사용자가 계산 결과를 더 안전하고 정확하게 이해하도록 돕는 것입니다."] },
      ],
    },
    methodology: {
      slug: "methodology", label: "계산 방식", title: "계산 방식 안내",
      description: "Mega Calculators에서 공식, 단위 변환, 반올림, 기본값, 가정값을 처리하는 방식을 설명합니다.",
      intro: "이 페이지는 Mega Calculators의 계산 방식과 결과를 읽을 때 알아두면 좋은 기준을 정리한 안내 페이지입니다.",
      updatedAt: "2026-05-07",
      sections: [
        { heading: "계산 공식이 적용되는 방식", body: ["각 계산기는 화면에 표시된 입력값을 기준으로 정해진 계산 방식을 적용합니다. 공식 설명은 실제 입력 항목과 결과 항목에 맞춰 작성합니다.", "추정 성격이 강한 계산은 확정값이 아니라 비교와 계획을 위한 참고값으로 이해하시는 것이 안전합니다."] },
        { heading: "단위 변환 기준", body: ["단위 변환기는 지원하는 단위 간의 고정 변환값을 사용합니다. 선택한 단위를 기준값으로 바꾼 뒤 다시 원하는 단위로 변환하는 방식입니다.", "다만 요리 재료, 연비, 실제 측정 환경처럼 상황에 따라 결과가 달라질 수 있는 항목은 별도의 주의가 필요합니다."] },
        { heading: "반올림 기준", body: ["결과는 모바일과 데스크톱에서 읽기 쉽게 표시되도록 반올림되어 보일 수 있습니다. 다른 계산기와 소수점 끝자리가 조금 다를 수 있습니다.", "보조 결과값은 전체 흐름을 이해하기 위한 정보이며, 공식 견적서나 전문 판단을 대신하지 않습니다."] },
        { heading: "기본값과 가정값 처리", body: ["기본값은 계산기를 바로 사용해볼 수 있도록 넣어둔 예시값입니다. 실제 판단에는 반드시 본인의 숫자로 바꿔 입력하셔야 합니다.", "금리, 기간, 빈도, 단위, 측정 방식 같은 가정이 달라지면 결과도 달라질 수 있으므로 여러 시나리오를 비교해보시는 것이 좋습니다."] },
        { heading: "카테고리별 주의사항", body: ["금융 계산기는 월 납입금, 이자, 수익률, 총액을 추정하지만 세금, 수수료, 금융사 조건, 시장 변동이 모두 반영되지는 않을 수 있습니다.", "건강 계산기는 현재 상태를 빠르게 살펴보는 출발점입니다. 나이, 체성분, 병력, 생활 습관에 따라 해석은 달라질 수 있습니다.", "날짜와 시간 계산은 입력한 날짜를 기준으로 하며, 지역별 휴일, 근무 규정, 시간대 차이는 별도로 확인해야 할 수 있습니다."] },
      ],
    },
    corrections: {
      slug: "corrections", label: "오류 제보", title: "오류 제보 및 수정 안내",
      description: "계산 결과, 공식 설명, 문구, 링크에 문제가 있을 때 제보하는 방법과 수정 과정을 안내합니다.",
      intro: "계산 결과나 설명이 이상해 보이거나, 문구가 헷갈리거나, 링크가 잘못 연결되어 있다면 문의 페이지를 통해 알려주실 수 있습니다.",
      updatedAt: "2026-05-07", ctaLabel: "문의하기", ctaText: "오류 또는 개선 의견 보내기",
      sections: [
        { heading: "어떤 내용을 제보할 수 있나요?", body: ["공식이 맞지 않아 보이는 경우, 결과 설명이 헷갈리는 경우, 입력 항목 이름이 어색한 경우, 예시와 결과가 맞지 않는 경우를 알려주실 수 있습니다.", "가능하다면 계산기 이름, 입력한 숫자, 나온 결과, 이상하다고 느낀 부분을 함께 보내주시면 확인에 도움이 됩니다."] },
        { heading: "오류 확인 방식", body: ["제보된 내용은 계산 입력값, 공식 설명, 예시, 페이지 문맥을 함께 확인하는 방식으로 검토합니다.", "오류가 아니라 가정값이나 제한 사항 때문에 생긴 차이라면, 사용자가 더 쉽게 이해할 수 있도록 설명을 보완할 수 있습니다."] },
        { heading: "수정 반영 방식", body: ["수정이 필요하다고 판단되면 공식, 설명, 입력 라벨, 예시, 내부 링크 등 영향을 받는 부분을 바로잡습니다.", "단순 문구 개선일 수도 있고, 계산기 페이지 전체 설명을 다시 점검하는 방식이 될 수도 있습니다."] },
        { heading: "결과가 실제와 다를 수 있는 경우", body: ["계산기가 정상적으로 작동하더라도 은행 견적, 의료 상담, 세금 신고, 공식 서류 결과와는 다를 수 있습니다. 실제 기관이나 전문가가 추가 조건을 반영하기 때문입니다.", "중요한 결정에는 계산기를 참고 자료로 활용하시고, 최종 숫자는 관련 기관이나 전문가와 다시 확인해주세요."] },
      ],
    },
  },
};

export const trustPageSlugs = ["editorial-standards", "methodology", "corrections"] as const;
export function getTrustPage(locale: Locale, slug: TrustPageSlug) { return trustPages[locale][slug]; }
export function getTrustPages(locale: Locale) { return trustPageSlugs.map((slug) => trustPages[locale][slug]); }
