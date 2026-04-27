import type { Locale } from "@/lib/i18n";

export type EditorialEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /**
   * Date of last meaningful update. Used for JSON-LD `dateModified`
   * and (only when evergreen === false) shown on the page header.
   */
  updatedAt: string;
  /** Original publish date for JSON-LD `datePublished`. Falls back to updatedAt when omitted. */
  publishedAt?: string;
  /**
   * Evergreen content (default true) — date is hidden from the card and header,
   * but kept in JSON-LD. A "Last reviewed" line is shown at the bottom only
   * when reviewedAt is present. Set evergreen: false for seasonal pieces
   * (annual tax filings, year-specific rate updates, etc.) so the date is
   * surfaced prominently — that's where readers actually want it.
   */
  evergreen?: boolean;
  /** Optional explicit "last reviewed" date — surfaced as a single line at the bottom. */
  reviewedAt?: string;
  relatedCalculatorPath: string;
  relatedCalculatorLabel: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const koBlogPosts: EditorialEntry[] = [

  {
    slug: "monthly-payment-vs-total-cost",
    title: "월 납입금만 보면 놓치기 쉬운 총비용 비교",
    description: "대출이나 할부를 비교할 때 월 부담과 총지출을 함께 봐야 할 이유를 한 번에 정리해드릴게요.",
    intro: "월 납입금은 가장 먼저 눈에 들어오지만, 같은 월 납입액이어도 총비용은 크게 다를 수 있어요. 이 글에서는 더 정확한 비교를 하실 수 있도록 총이자와 상환기간을 함께 봐야 하는 이유를 정리해드릴게요.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "대출 계산기",
    sections: [
      { heading: "월 납입금이 전부가 아닌 이유", body: ["기간이 길어지면 월 납입금은 낮아 보이지만 총이자는 커질 수 있어요. 비슷한 월 부담의 선택지라도 총지출 차이를 꼭 비교해보세요.", "실제 부담을 정확히 알려면 한 항목만 보면 안 되고 여러 요소를 함께 살펴봐야 합니다."] },
      { heading: "비교할 때 함께 봐야 할 항목", body: ["월 납입금, 총이자, 상환기간, 초기 비용을 함께 보면 선택이 훨씬 현실적이 되실 거예요.", "한 항목만 보면 부담이 작아 보이는 조건에 끌리기 쉬워서, 전체 그림을 파악하시는 게 중요합니다."] },
      { heading: "계산기를 실전 비교 도구로 쓰는 방법", body: ["금리나 기간을 한 단계씩 바꿔보면서 어떤 값이 결과를 크게 바꾸는지 확인해보세요.", "이 과정이 실제 조건 비교에서 가장 도움이 될 거예요. 여러 시나리오를 직접 돌려보면 패턴이 보입니다."] },
    ],
    faq: [
      { question: "월 납입금이 같으면 아무거나 선택해도 되나요?", answer: "아니에요. 총이자와 상환기간이 다르면 실제 부담은 크게 달라질 수 있으니 꼭 비교해보세요." },
      { question: "기간이 길수록 무조건 유리한가요?", answer: "그렇지 않아요. 월 부담은 낮아질 수 있지만 총비용은 오히려 커질 가능성이 높습니다." },
      { question: "대출 계산기로 바로 비교 가능한가요?", answer: "네, 맞습니다. 금리와 기간을 바꿔가며 여러 시나리오를 비교해보실 수 있어요." },
    ],
  },
  {
    slug: "how-to-compare-calculator-results",
    title: "계산기 결과를 한 번 더 비교해야 하는 이유",
    description: "한 가지 결과만 보는 것보다 여러 시나리오를 비교해야 실수 가능성을 크게 줄일 수 있다는 걸 아셨나요?",
    intro: "계산기는 빠른 비교에 강점이 있지만, 한 번 입력한 결과만 보고 판단하면 현실 조건을 놓칠 수 있어요. 최소 두세 가지 시나리오를 함께 비교하는 습관이 중요하다는 걸 이 글에서 알려드릴게요.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/math/percentage-calculator",
    relatedCalculatorLabel: "퍼센트 계산기",
    sections: [
      { heading: "왜 한 가지 시나리오만 보면 안 될까", body: ["입력값 하나가 바뀌어도 결과는 예상보다 크게 달라질 수 있어요. 그래서 낙관적, 기본, 보수적 가정을 나눠보는 것이 안전합니다.", "한 번의 계산만으로 결정하기보다 여러 경우를 함께 검토해보세요."] },
      { heading: "비교할 때 기준을 맞추는 법", body: ["기준일, 단위, 세금 포함 여부처럼 비교 기준을 먼저 통일해야 결과가 의미 있어요.", "기준이 다르면 숫자 자체보다 해석이 어긋날 수 있으니 주의하세요."] },
      { heading: "계산기 결과를 판단으로 연결하기", body: ["결과는 결론이 아니라 검토용 시작점으로 보시는 게 좋아요.", "공식 조건과 실제 비용을 마지막에 다시 확인하면서 최종 판단을 내려보세요."] },
    ],
    faq: [
      { question: "몇 가지 시나리오를 비교하면 좋나요?", answer: "보통 기본, 보수적, 낙관적 3가지 정도면 실용적이에요." },
      { question: "모든 계산기에 같은 방식이 필요한가요?", answer: "네, 금융, 건강, 날짜 계산처럼 성격이 다른 계산기라도 비교 습관은 정말 도움이 돼요." },
      { question: "결과가 비슷하면 하나만 봐도 되나요?", answer: "비슷해 보여도 기준이나 조건이 다르면 실제 의미는 달라질 수 있으니 확인해보세요." },
    ],
  },
  {
    slug: "loan-calculator-vs-mortgage-calculator",
    title: "대출 계산기와 주담대 계산기 차이 쉽게 이해하기",
    description: "월 납입금, 총이자, 상환기간을 비교할 때 어떤 계산기를 먼저 보면 좋을지 이 글에서 정리해드릴게요.",
    intro:
      "대출 계산기와 주담대 계산기가 있어서 어떤 걸 언제 써야 할지 헷갈리셨다면 이 글이 도움이 될 거예요. 일반 대출은 금리와 기간에 따라 월 납입액을 빠르게 확인하는 데 강하고, 주담대 계산기는 집 구매 예산을 가늠하고 상환 구조를 비교하는 데 더 적합하다는 걸 알려드릴게요.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      {
        heading: "언제 일반 대출 계산기를 먼저 봐야 할까",
        body: [
          "신용대출, 마이너스통장, 자동차 대출처럼 집 구매와 직접 연결되지 않은 대출은 일반 대출 계산기로 접근하시면 편해요. 원금, 금리, 기간만 넣어도 월 납입액과 총이자를 빠르게 볼 수 있으니까요.",
          "여러 금리 조건을 동시에 비교해야 할 때도 단순 구조의 계산기가 더 효율적이에요. 금리가 1%p만 달라져도 총이자 차이가 크게 벌어질 수 있으니까 먼저 큰 그림을 보는 용도로 적합합니다.",
        ],
      },
      {
        heading: "주담대 계산기가 더 필요한 순간",
        body: [
          "집 구매를 고민할 때는 취득세, 보유 비용, 대출 비중, 상환 방식까지 함께 생각하게 돼요. 이때는 주담대 계산기가 더 유용할 거예요.",
          "특히 원리금균등과 원금균등의 차이를 비교하거나, 예상 월 상환액이 가계 예산 안에 들어오는지 확인할 때 도움이 돼요. 계산 결과를 볼 때는 월 납입금 하나만 보지 말고 총이자와 상환 초반 부담도 같이 확인해보세요.",
        ],
      },
      {
        heading: "결과를 읽을 때 자주 놓치는 포인트",
        body: [
          "많은 분들이 월 납입금만 보고 판단하시는데, 실제 부담은 총이자와 상환기간에서 크게 달라져요. 같은 월 납입금처럼 보여도 기간이 길면 총지출이 더 커질 수 있다는 걸 기억하세요.",
          "또한 계산기는 참고용이니까 실제 승인 금리, 상환 조건, 중도상환수수료는 금융사 조건과 다를 수 있어요. 계산 결과는 사전 비교용으로 활용하고, 최종 결정 전에는 공식 조건을 다시 한번 확인하는 게 좋습니다.",
        ],
      },
    ],
    faq: [
      {
        question: "주담대 계산기로 전세대출도 계산할 수 있나요?",
        answer: "대략적인 월 부담을 가늠하는 참고는 가능하지만, 전세대출은 상품 구조와 우대조건이 달라 전용 계산기나 금융사 조건을 함께 보는 편이 더 정확합니다.",
      },
      {
        question: "고정금리와 변동금리 비교도 가능한가요?",
        answer: "계산기에서 각각 다른 금리로 입력해 월 납입금과 총이자를 비교할 수 있습니다. 다만 변동금리는 미래 금리가 바뀔 수 있으므로 현재 수치만으로 확정 판단하면 안 됩니다.",
      },
      {
        question: "계산기 결과와 은행 상담 결과가 다른 이유는 뭔가요?",
        answer: "실제 대출은 개인 신용, 우대금리, 상환 방식, 수수료, 실행 시점 조건이 반영되기 때문에 계산기보다 달라질 수 있습니다.",
      },
    ],
  },
  {
    slug: "when-bmi-calculator-is-useful",
    title: "BMI 계산기는 언제 참고하면 좋을까",
    description: "BMI 수치의 의미와 참고 범위를 간단히 정리하고, 건강 판단에서 어디까지 활용할 수 있는지 설명합니다.",
    intro:
      "BMI 계산기는 키와 몸무게만으로 빠르게 체중 상태를 가늠할 수 있어서 가장 많이 쓰이는 건강 계산기 중 하나입니다. 다만 숫자 하나로 건강 전체를 판단하는 도구는 아니기 때문에, 언제 참고하고 언제 보조 자료로만 봐야 하는지 구분하는 것이 중요합니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI 계산기",
    sections: [
      {
        heading: "BMI가 유용한 이유",
        body: [
          "BMI는 복잡한 장비 없이도 몸무게 상태를 빠르게 분류할 수 있다는 장점이 있습니다. 건강검진 전후로 체중 변화를 확인하거나, 식단과 운동 계획을 시작할 때 기준점으로 삼기 좋습니다.",
          "여러 사람의 체중 상태를 일관된 기준으로 비교할 수 있다는 점도 장점입니다. 그래서 개인 기록 관리나 생활 습관 점검의 첫 단계로 많이 활용됩니다.",
        ],
      },
      {
        heading: "BMI만으로 부족한 경우",
        body: [
          "근육량이 많은 사람은 BMI가 높게 나와도 실제 체지방이 낮을 수 있습니다. 반대로 BMI가 정상 범위여도 체지방이 높거나 복부비만이 있으면 건강 위험이 있을 수 있습니다.",
          "따라서 BMI는 체중 상태를 빠르게 살펴보는 출발점으로 이해하는 것이 좋습니다. 허리둘레, 체지방률, 혈압, 혈당 같은 다른 건강 지표와 함께 보면 훨씬 도움이 됩니다.",
        ],
      },
      {
        heading: "결과를 생활에 연결하는 방법",
        body: [
          "BMI 수치가 높게 나왔다고 바로 무리한 다이어트를 시작하기보다는, 최근 식습관과 활동량을 먼저 점검하는 것이 안전합니다. 반대로 수치가 낮게 나왔다면 영양 섭취와 근력 상태를 함께 확인할 필요가 있습니다.",
          "핵심은 BMI 결과를 판단의 끝으로 쓰지 않고, 생활 습관을 조정하는 출발점으로 쓰는 것입니다. 숫자를 보고 불안해하기보다 추세를 보는 방식이 더 실용적입니다.",
        ],
      },
    ],
    faq: [
      {
        question: "BMI가 정상인데도 살을 빼야 할 수 있나요?",
        answer: "가능합니다. 체지방 분포, 허리둘레, 근육량에 따라 건강 상태는 다르게 보일 수 있기 때문입니다.",
      },
      {
        question: "아이도 같은 BMI 기준을 쓰나요?",
        answer: "아동과 청소년은 연령과 성별에 따른 성장 기준을 따로 보는 경우가 많아, 성인과 같은 방식으로 단순 해석하면 정확하지 않을 수 있습니다.",
      },
      {
        question: "BMI 수치는 얼마나 자주 확인하는 게 좋나요?",
        answer: "하루 단위보다 몇 주 단위로 추세를 보는 것이 좋습니다. 일시적인 체중 변화에 너무 흔들리지 않는 편이 도움이 됩니다.",
      },
    ],
  },
  {
    slug: "everyday-percent-and-date-calculators",
    title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법",
    description: "할인율 계산, 날짜 차이, 근무 시간 계산처럼 자주 찾는 예시를 모았습니다.",
    intro:
      "퍼센트 계산기와 날짜 계산기는 단순한 도구처럼 보이지만, 실제로는 쇼핑, 급여 확인, 일정 관리, 계약 일정 계산처럼 일상 곳곳에서 자주 쓰입니다. 자주 쓰는 상황을 미리 알아두면 계산기 활용도가 훨씬 높아집니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/time/date-duration-calculator",
    relatedCalculatorLabel: "날짜 차이 계산기",
    sections: [
      {
        heading: "할인율과 인상률 계산",
        body: [
          "쇼핑할 때 가장 자주 쓰는 계산 중 하나가 퍼센트 계산입니다. 20% 할인, 35% 추가 쿠폰, 8% 가격 인상처럼 눈으로는 헷갈리는 수치를 빠르게 정리할 수 있습니다.",
          "특히 할인 후 가격을 바로 확인하면 충동구매를 줄이는 데도 도움이 됩니다. 퍼센트 계산기는 단순히 숫자를 구하는 도구가 아니라 소비 판단 도구로도 쓸 수 있습니다.",
        ],
      },
      {
        heading: "일정과 마감일 계산",
        body: [
          "날짜 계산기는 계약 시작일과 종료일 사이 기간을 계산하거나, 특정 날짜로부터 며칠 전인지 확인할 때 유용합니다. 프로젝트 일정, 시험 준비, 배송 예상일 계산에도 자주 쓰입니다.",
          "업무에서는 휴가 일수, 근무일, 남은 기간을 빠르게 파악할 수 있어 실수가 줄어듭니다. 날짜를 머리로 세는 것보다 훨씬 정확하고 빠릅니다.",
        ],
      },
      {
        heading: "계산 결과를 더 실용적으로 보는 법",
        body: [
          "퍼센트 계산 결과는 비교 기준이 무엇인지 함께 보는 것이 중요합니다. 예를 들어 10% 할인과 10% 인상은 기준 가격이 다르면 체감이 달라질 수 있습니다.",
          "날짜 계산 결과도 시작일 포함 여부, 영업일 기준인지 달력일 기준인지에 따라 실제 일정과 달라질 수 있습니다. 중요한 일정은 계산 후 한 번 더 달력에서 확인하는 습관이 좋습니다.",
        ],
      },
    ],
    faq: [
      {
        question: "퍼센트 계산기에서 원래 가격을 역산할 수 있나요?",
        answer: "가능합니다. 할인 후 가격과 할인율을 알면 원래 가격을 추정할 수 있습니다.",
      },
      {
        question: "날짜 차이는 시작일을 포함하나요?",
        answer: "계산기마다 다를 수 있으므로 결과 해석 전에 포함 기준을 확인하는 것이 좋습니다.",
      },
      {
        question: "업무일 기준 계산도 가능한가요?",
        answer: "일부 계산기는 가능하지만, 단순 날짜 차이 계산기는 달력일 기준인 경우가 많습니다. 목적에 맞는 계산기를 선택해야 합니다.",
      },
    ],
  },
  {
    slug: "mortgage-vs-jeonse-loan-korea",
    title: "주택담보대출과 전세자금대출, 어떤 게 내게 맞을까",
    description: "한국에서 집과 관련된 두 가지 대출, 주담대와 전세대출의 차이와 선택 기준을 한국 기준으로 정리해드릴게요.",
    intro:
      "처음 집을 알아보실 때 가장 헷갈리는 부분이 \"매매에 주담대를 받을지, 전세에 전세대출을 받을지\"라는 큰 갈림길이에요. 한국 시장은 LTV·DTI·DSR 같은 규제와 보금자리·디딤돌 같은 정책 상품이 함께 움직이기 때문에, 단순 금리 비교보다 본인의 자금 흐름·소득·집을 사실 시점을 함께 보셔야 합니다.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      {
        heading: "주담대(매매)가 더 맞는 경우",
        body: [
          "사실 시 LTV(주택담보대출비율)는 투기지역·조정대상 외 일반 지역 기준 보통 70%까지, 생애최초 구매자는 80%까지 가능합니다. DSR 40% 규제(은행권)는 본인 연소득 대비 모든 대출 원리금이 40%를 못 넘게 묶이기 때문에, 소득이 안정적이고 자기자본이 어느 정도 모이신 분께 유리해요.",
          "보금자리론·디딤돌대출 같은 정책 상품은 시중 금리보다 1~2%p 낮은 고정금리를 제공해 장기 보유 계획이 분명하시면 매력적이에요. 다만 부부합산 연소득·집값 한도가 정해져 있어 본인 조건이 맞는지 먼저 확인하셔야 합니다.",
        ],
      },
      {
        heading: "전세자금대출이 더 맞는 경우",
        body: [
          "당장 매매 자금이 부족하시거나 직장 이동·결혼·자녀 학교 같은 이유로 2~4년 단위 거주가 더 합리적이실 때는 전세대출이 답이에요. 버팀목·중기청·신혼부부 전용 같은 정책 전세대출은 1~2%대 저금리에 한도도 90% 이상까지 가능합니다.",
          "전세대출은 보증기관(주택금융공사·HUG·SGI) 보증을 받기 때문에 신용 등급이 다소 낮아도 통과되는 경우가 많아요. 다만 임대인 동의·전세권 설정 여부·갱신 시 보증료 같은 절차가 매매보다 복잡합니다.",
        ],
      },
      {
        heading: "한 줄 비교 — 결정 전에 꼭 따져볼 것",
        body: [
          "주담대는 매달 원리금을 갚으면서 자산이 쌓이지만 LTV·DSR로 묶이고 취득세·재산세까지 들어옵니다. 전세대출은 거주 기간 동안 이자만 내는 구조라 부담이 가벼운 대신, 보증금 상승 리스크와 2년 뒤 갱신 부담이 있어요.",
          "주담대 계산기로 매매 시나리오를, 같은 화면에서 전세대출 이자 시나리오를 따로 굴려보시고, 5~10년 동안의 총비용·자산 형성 차이를 비교하시면 본인에게 맞는 답이 보이실 거예요.",
        ],
      },
    ],
    faq: [
      {
        question: "DSR 40%가 정확히 어떤 의미인가요?",
        answer: "본인 연소득의 40% 이상을 모든 대출 원리금 상환에 쓰지 못하게 막는 한도예요. 신용대출·자동차할부·기존 주담대 모두 합쳐서 계산되니, 한도가 빠듯하시면 신용대출부터 정리하시는 게 도움이 됩니다.",
      },
      {
        question: "보금자리론과 일반 주담대를 같이 쓸 수 있나요?",
        answer: "일반적으로 같은 집에 두 종목을 동시에 받을 수는 없어요. 다만 보금자리론 한도가 부족할 때 잔액을 일반 주담대로 메우는 \"혼합\" 방식은 일부 가능하니, 은행 상담에서 본인 케이스로 확인해보세요.",
      },
      {
        question: "전세대출이 주담대로 갈아탈 때 주의할 점은요?",
        answer: "기존 전세대출을 상환하고 매매로 전환하실 때 중도상환수수료(보통 1.2%, 3년 내)를 고려하세요. 전세 만기에 맞춰 매매 시점을 조정하시면 수수료를 아낄 수 있습니다.",
      },
    ],
  },
  {
    slug: "year-end-tax-settlement-2026",
    title: "2026년 연말정산, 13월의 보너스를 늘리는 체크리스트",
    description: "2026년 귀속 연말정산에서 환급액을 늘릴 수 있는 한국 세제 항목들을 한 번에 정리해드릴게요.",
    intro:
      "1~2월에 회사에서 \"연말정산 자료 제출\" 알림을 받으시면 막막하셨죠. 한국 연말정산은 국세청 홈택스의 \"연말정산 간소화\" 자료가 80%를 채워주지만, 손으로 챙겨야 환급으로 이어지는 항목이 매년 5~6가지 있어요. 2026년 귀속(2027년 신고분) 기준으로 핵심만 정리해드릴게요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: false,
    reviewedAt: "2026-04-26",
    relatedCalculatorPath: "/calculators/finance",
    relatedCalculatorLabel: "관련 금융 계산기 보기",
    sections: [
      {
        heading: "신용카드·체크카드 사용액 — 가장 큰 환급 레버",
        body: [
          "총급여의 25%를 초과하는 사용분부터 공제 대상입니다. 신용카드는 15%, 체크카드·현금영수증은 30%, 전통시장·대중교통은 40% 공제율이 적용됩니다. 총급여 7천만 원 이하면 한도가 300만 원까지 늘어나니, 가족 카드 사용액을 한 사람에게 몰아주시는 전략이 효과적이에요.",
          "근로자 본인뿐 아니라 부양가족(연소득 100만 원 이하)의 카드 사용액도 합산 가능하다는 점을 놓치는 분들이 많아요. 부모님·배우자·자녀 카드를 본인이 결제 책임지셨다면 합산하실 수 있는지 확인해보세요.",
        ],
      },
      {
        heading: "월세 세액공제 — 무주택 직장인 필수",
        body: [
          "총급여 7천만 원 이하 무주택 세대주(또는 세대원)면 연 750만 원 한도 안에서 월세의 17%(총급여 5,500만 원 이하)/15%를 세액에서 직접 빼줍니다. 임대차계약서·계좌이체 내역·주민등록등본만 준비하시면 되는데, 의외로 많은 분들이 잊고 지나가세요.",
          "전입신고·확정일자도 받아두시면 후속 분쟁 방지에 좋습니다. 월세를 카드로 내실 경우 카드 공제와 중복 적용은 안 되고 한쪽만 선택해야 하니, 본인 케이스로 어느 쪽이 큰지 비교해보세요.",
        ],
      },
      {
        heading: "연금저축·IRP — 세액공제 700만 원 한도 적극 활용",
        body: [
          "연금저축에 연 600만 원, IRP에 추가 300만 원, 합쳐 연 900만 원까지 납입할 수 있고 그중 최대 900만 원에 16.5%(총급여 5,500만 원 이하) 또는 13.2% 세액공제를 받습니다. 즉 900만 원 채우시면 약 119만 원~148만 원이 그대로 세금에서 빠집니다.",
          "다만 55세 전 중도해지 시 기타소득세 16.5%가 붙으니, 정말 노후용 자금으로만 묻으실 수 있는 금액을 넣어야 합니다. \"세금 환급\"만 보고 무리하게 넣었다가 급할 때 깨면 환급분 이상으로 세금을 다시 토하실 수 있어요.",
        ],
      },
    ],
    faq: [
      {
        question: "맞벌이 부부는 누가 부양가족 공제를 받는 게 유리한가요?",
        answer: "보통 소득이 높은 쪽이 부양가족 공제를 받는 게 유리합니다. 한계세율이 높을수록 같은 공제액의 환급 효과가 크기 때문이에요. 단, 의료비·교육비처럼 \"가족 단위 한도\"가 적용되는 항목은 예외로 따져봐야 합니다.",
      },
      {
        question: "프리랜서도 연말정산을 받나요?",
        answer: "프리랜서는 5월 종합소득세 신고로 처리합니다. 회사에 소속되지 않은 사업소득·기타소득자는 연말정산 대상이 아니에요. 다만 일부 기간 4대 보험 직장가입 이력이 있으셨다면 해당 기간만큼은 회사를 통한 연말정산이 가능합니다.",
      },
      {
        question: "환급액을 미리 가늠하는 방법이 있나요?",
        answer: "국세청 홈택스의 \"연말정산 미리보기\" 서비스에서 카드사 자료가 자동 반영된 예상 환급액을 11월 즈음 확인하실 수 있어요. 큰 그림 비교는 본 사이트 금융 계산기 모음에서 관련 도구를 활용해보세요.",
      },
    ],
  },
  {
    slug: "savings-vs-etf-5-years-korea",
    title: "5년 동안 적금 vs ETF, 한국에서 실제로 얼마나 차이날까",
    description: "한국 기준 적금 금리와 KOSPI200·미국 ETF 5년 시뮬레이션을 비교해 어디에 얼마나 분산하면 좋을지 정리합니다.",
    intro:
      "\"적금 들어야 하나, 아니면 ETF 사야 하나\"는 한국 직장인이 가장 많이 묻는 질문 중 하나예요. 둘 다 정답이 따로 있는 게 아니라 \"본인의 손실 감내력 + 투자 기간\"에 따라 답이 달라집니다. 5년이라는 시간으로 좁혀서 한국 기준 시뮬레이션을 같이 보시죠.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/compound-interest-calculator",
    relatedCalculatorLabel: "복리 계산기",
    sections: [
      {
        heading: "적금: 안전하지만 인플레 뒤에 처지기 쉬워요",
        body: [
          "1금융권 정기적금 금리는 2025~2026년 기준 연 3.5~4.5% 수준이고, 시중은행 우대 조건을 다 채워야 4%대에 진입합니다. 매월 50만 원씩 5년(60개월) 적금을 부으시면 원금 3,000만 원에 세후 이자가 약 250~290만 원 정도(15.4% 이자소득세 적용) 쌓이는 셈입니다.",
          "장점은 \"원금 보장 + 예금자보호 5천만 원\"이라는 점이고, 단점은 한국 소비자물가 상승률(연 2~3%)을 감안하시면 실질 수익률이 1~2%대로 줄어든다는 점이에요. 단기 비상금에는 좋지만 5년 이상 장기 자산 형성에는 부족합니다.",
        ],
      },
      {
        heading: "ETF: 변동성은 있지만 장기 평균은 우호적",
        body: [
          "KOSPI200 ETF는 2010~2025년 15년 평균 연 5~6% 수익률을, S&P500 추종 ETF(예: TIGER 미국S&P500)는 같은 기간 연 10~12%를 기록했습니다. 매월 50만 원씩 5년 적립식으로 사면 원금은 같은 3,000만 원이지만 세후 결과는 KOSPI200 기준 약 3,500~3,700만 원, S&P500 기준 약 4,000~4,500만 원 범위로 흩어집니다.",
          "다만 5년 안에 -20~-30% 구간을 한두 번 거치는 게 통상적이에요. 2020년 코로나, 2022년 금리 인상기처럼 단기 손실 구간을 견디지 못하시고 매도하시면 평균 수익률이 무의미해지는 게 ETF의 가장 큰 함정입니다.",
        ],
      },
      {
        heading: "현실적 분산 — 6:4 또는 적금+IRP+ETF 3분법",
        body: [
          "5년 안에 쓰셔야 하는 결혼·전세보증금처럼 시점이 정해진 자금은 적금에, 5~10년 후 노후를 위한 자금은 ETF에 비중을 두시는 게 일반적입니다. 보통 30대 직장인 기준으로 안전자산:위험자산을 6:4 또는 5:5로 시작하시는 분이 많아요.",
          "여기에 IRP·연금저축으로 ETF를 담으시면 16.5% 세액공제까지 받으면서 노후 ETF를 쌓을 수 있어 \"세제 + 복리\" 두 가지를 한 번에 챙길 수 있습니다. 단, IRP·연금저축은 55세 전 인출 제한이 있다는 점을 잊지 마세요.",
        ],
      },
    ],
    faq: [
      {
        question: "원금 손실이 정말 무서워요. 그래도 ETF를 일부 가져가야 하나요?",
        answer: "5년 이상 묶어 둘 수 있는 자금이라면 일부는 ETF로 가져가시는 게 인플레이션 방어에 유리합니다. 본인이 -20% 손실에도 \"3년만 더 기다리자\" 하실 수 있는 비율을 찾으시는 게 현실적인 출발점이에요.",
      },
      {
        question: "ETF 세금은 어떻게 되나요?",
        answer: "한국 상장 국내 주식형 ETF는 매매차익 비과세, 분배금만 15.4% 과세입니다. 해외 ETF(예: TIGER 미국S&P500)는 매매차익 22% 양도세 + 분배금 15.4% 과세이지만, ISA·연금저축 계좌 안에서는 세제혜택을 더 받을 수 있어요.",
      },
      {
        question: "복리 계산기로 ETF 시뮬은 어떻게 하나요?",
        answer: "기대 수익률을 보수적(연 5%), 기본(연 7%), 낙관적(연 10%) 세 가지로 나눠 같은 적립금·기간으로 굴려보세요. 손실 구간을 시각화해주는 별도 도구는 없지만, 세 시나리오를 비교하시면 \"평균이 아니라 변동\"의 의미가 체감됩니다.",
      },
    ],
  },
  {
    slug: "pension-savings-vs-irp-korea",
    title: "연금저축과 IRP, 둘 다 들어야 하나요?",
    description: "한국 직장인의 노후 준비 두 축인 연금저축과 IRP의 세제혜택·납입 한도·인출 조건을 한 번에 비교합니다.",
    intro:
      "노후 준비 이야기가 나오면 \"연금저축, IRP, 국민연금이 다 비슷한 거 아니에요?\" 하시는 분들이 많아요. 사실 셋은 성격이 꽤 달라서, 직장인이 가장 많이 헷갈리는 연금저축과 IRP의 차이부터 정확히 짚으시면 노후 자산을 어떻게 배분해야 할지 보이실 거예요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/retirement-calculator",
    relatedCalculatorLabel: "은퇴 계산기",
    sections: [
      {
        heading: "공통점 — 세액공제 한도와 55세 인출 규칙",
        body: [
          "연금저축과 IRP는 합쳐 연 900만 원까지 16.5%(총급여 5,500만 원 이하) 또는 13.2% 세액공제를 받을 수 있습니다. 900만 원을 채우시면 약 119만 원~148만 원이 환급되는 셈이에요. 둘 다 만 55세 이후, 가입 후 5년이 지났을 때 \"연금 형태\"로 받으셔야 저율 과세(3.3~5.5%) 혜택이 유지됩니다.",
          "55세 전 중도해지하시면 그동안 받았던 세액공제 혜택이 \"기타소득세 16.5%\"로 다시 빠져나가요. 즉 노후 자금이 아니면 손해 보는 구조라는 점을 처음부터 명심하셔야 합니다.",
        ],
      },
      {
        heading: "연금저축이 더 유연한 이유",
        body: [
          "연금저축(보험·펀드·신탁)은 가입·납입·이전이 IRP보다 자유롭습니다. 운용처 변경 시 기존 평가액을 그대로 옮길 수 있어 \"수익률 떨어지면 다른 회사로 옮기겠다\"는 전략이 가능해요.",
          "또한 일정 사유(천재지변·요양 6개월 이상·개인회생·파산·해외이주)에 해당하시면 중도인출도 인정됩니다. 자금을 100% 묶어두기 부담스러우시면 IRP보다 연금저축이 우선순위입니다.",
        ],
      },
      {
        heading: "IRP가 더 유리한 이유 — 추가 한도와 안전자산 의무",
        body: [
          "IRP는 연금저축 한도 600만 원 위에 추가로 300만 원 세액공제를 받을 수 있어요. 즉 \"세제혜택 한도를 끝까지 쓰고 싶다\" 하시면 IRP까지 함께 활용하시는 게 정답입니다.",
          "단 IRP는 적립금의 30% 이상을 안전자산(예금·채권형 등)에 담아야 합니다. ETF·주식형 펀드 비중을 100%로 가져갈 수 없다는 게 단점이지만, 노후 자금이라는 성격상 자연스러운 제약이라고 보시는 분들이 많아요.",
        ],
      },
    ],
    faq: [
      {
        question: "연금저축펀드와 연금저축보험 중 뭐가 나은가요?",
        answer: "장기 수익률만 보면 연금저축펀드(ETF·인덱스펀드)가 우세합니다. 보험은 사업비가 7~10%대로 높아서 첫 5~7년 수익률이 마이너스인 경우가 흔해요. 안정적 원금 보장이 절실한 상황이 아니라면 펀드가 일반적인 선택입니다.",
      },
      {
        question: "퇴직금을 IRP로 받아야 하나요?",
        answer: "2022년부터 50인 이상 사업장은 퇴직금을 IRP로 의무 이전합니다. 본인이 일시 인출하시면 퇴직소득세를 한 번에 부담하셔야 하지만, IRP에 두시면 연금 형태로 받으실 때 30% 감면 혜택이 있어요.",
      },
      {
        question: "55세 전에 정말 손댈 수 없나요?",
        answer: "법정 사유(중대 질병·요양·천재지변·파산·해외이주)에 해당하시면 중도인출이 인정됩니다. 다만 일반적인 사정으로 깨시면 16.5% 기타소득세가 붙어 그동안의 환급액을 모두 다시 토하셔야 한다고 보시면 됩니다.",
      },
    ],
  },
  {
    slug: "fixed-vs-variable-rate-korea",
    title: "고정금리 vs 변동금리, 한국 시장에서 어느 쪽이 유리할까",
    description: "COFIX·신COFIX·한국은행 기준금리 흐름을 바탕으로 한국에서 고정·변동 금리를 고를 때 봐야 할 기준을 정리합니다.",
    intro:
      "주담대를 받으시는 분들이 가장 길게 고민하시는 게 \"고정으로 갈까, 변동으로 갈까\"예요. 한국은 미국과 달리 30년 고정금리가 흔하지 않고, 5년 고정 후 변동으로 전환되는 \"5년 혼합형\"이 주류라서 선택 기준이 조금 달라요. 한국 금리 구조를 짧게 정리해드릴게요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      {
        heading: "한국 금리 구조 — COFIX와 한국은행 기준금리",
        body: [
          "한국 변동금리 주담대는 대부분 COFIX(은행 자금조달비용지수)를 기준으로 합니다. 신규취급액 COFIX는 새 자금 비용을 매월 반영하고, 신COFIX는 모든 잔액을 평균 내 더 천천히 움직여요. 한국은행 기준금리가 오르면 보통 1~3개월 시차를 두고 COFIX가 따라 올라가는 구조입니다.",
          "고정금리 주담대(보금자리·디딤돌·정책 모기지 제외)는 보통 5년 동안만 고정이고, 그 후엔 변동으로 전환됩니다. 미국식 30년 고정과는 다르다는 점을 처음부터 알고 비교하셔야 해요.",
        ],
      },
      {
        heading: "변동금리가 유리한 시기",
        body: [
          "한국은행이 \"기준금리 인하 사이클\"에 들어갔다고 판단되시면 변동금리가 유리할 가능성이 높습니다. 기준금리가 0.25%p 내려가면 보통 6개월 안에 COFIX도 비슷하게 따라 내려가, 월 상환금이 자동으로 줄어들기 때문이에요.",
          "또한 향후 5~7년 안에 갈아타기·전매·상환을 계획하고 계시면 변동이 유리할 수 있어요. 고정금리 주담대는 중도상환수수료가 더 강하게 붙는 경향이 있어 단기 보유에는 잘 맞지 않습니다.",
        ],
      },
      {
        heading: "고정금리가 유리한 시기",
        body: [
          "반대로 기준금리가 \"바닥에서 올라가는 사이클\"에 진입했다면 고정금리(혼합형)가 유리합니다. 5년 고정 기간 동안 인상분을 막아주고, 본인의 월 상환금이 안정적이라는 심리적 안정감도 크죠.",
          "디딤돌·보금자리·적격대출 같은 정책 상품은 30년까지 고정으로 잠글 수 있어, 한국에서 \"진짜 장기 고정\"을 원하시면 정책 상품 자격 요건부터 확인해보시는 게 우선입니다.",
        ],
      },
    ],
    faq: [
      {
        question: "지금이 인하 사이클인지 인상 사이클인지 어떻게 판단하나요?",
        answer: "한국은행 금융통화위원회의 최근 6~12개월 결정과 \"향후 통화정책 방향\" 보도자료를 함께 보시면 방향성이 보입니다. 단정적 예측보다는 \"한 방향이 우세할 확률\" 정도로 받아들이시는 게 안전해요.",
      },
      {
        question: "혼합형 금리가 5년 후 변동으로 바뀌면 갑자기 부담이 커지나요?",
        answer: "변동 전환 시점에 시중 COFIX가 처음 고정금리보다 크게 올랐다면 부담이 늘어납니다. 5년 안에 일부 상환이나 갈아타기를 계획해두시는 게 위험 관리에 도움이 됩니다.",
      },
      {
        question: "주담대 계산기로 두 시나리오 비교가 가능한가요?",
        answer: "네, 같은 원금·기간으로 고정금리·변동금리 두 시나리오를 별도로 계산하시고 총이자를 비교해보세요. 변동은 보수적으로 \"+1~2%p\"를 더해 최악 시나리오까지 함께 보시는 걸 권합니다.",
      },
    ],
  },
];

const enBlogPosts: EditorialEntry[] = [

  {
    slug: "monthly-payment-vs-total-cost",
    title: "Why monthly payment is not the whole borrowing story",
    description: "Here's how you can compare payment size, total interest, and repayment length before you choose a loan.",
    intro: "If you're comparing loans, you'll want to look beyond just the monthly payment. Two options can feel similar month to month while leading to very different total spending over time. Here's what you should check instead.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "Loan Calculator",
    sections: [
      { heading: "Why payment size can be misleading", body: ["A longer term can make the payment look easier while increasing total interest. That's why a lower payment isn't automatically the better option.", "To understand the real cost, you need to look at more than one factor."] },
      { heading: "What to compare alongside the payment", body: ["Look at payment size, total interest, repayment length, and any upfront cost together. You'll get a much more realistic comparison than from the monthly number alone.", "When you focus on just one item, you might be drawn to an offer that looks affordable but isn't truly the best choice."] },
      { heading: "How to use calculators for better comparisons", body: ["Change one input at a time, such as the rate or the term, and watch which factor shifts the result the most. You'll start to see what really drives the cost.", "That makes the calculator much more useful as a decision tool." ] },
    ],
    faq: [
      { question: "If the monthly payment is similar, does the choice matter?", answer: "Yes. Total interest and repayment length can still make one option far more expensive." },
      { question: "Is a longer term always safer?", answer: "It can reduce the payment, but it often increases total borrowing cost." },
      { question: "Can a loan calculator show this clearly?", answer: "Yes. Run a few term and rate scenarios to compare payment and total cost together." },
    ],
  },
  {
    slug: "how-to-compare-calculator-results",
    title: "Why you should compare more than one calculator result",
    description: "Here's a better way to use online calculators by checking optimistic, baseline, and conservative scenarios.",
    intro: "If you've ever wondered whether a single calculator result is enough, this guide walks you through why comparing a few scenarios is so much more useful. Instead of locking onto one number, you can use the calculator to test possibilities and reduce mistakes.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/math/percentage-calculator",
    relatedCalculatorLabel: "Percentage Calculator",
    sections: [
      { heading: "Why one scenario is rarely enough", body: ["A small change in an input value can produce a noticeably different result.", "That is why a baseline case and a conservative case usually give a safer planning range." ] },
      { heading: "How to keep comparisons fair", body: ["Use the same units, time frame, and assumptions when comparing one result with another.", "If the basis changes, the comparison becomes less useful." ] },
      { heading: "How to turn a result into a real decision", body: ["Treat the output as a planning checkpoint instead of a final answer.", "Then confirm the real-world rules, costs, and terms before you act." ] },
    ],
    faq: [
      { question: "How many scenarios should I test?", answer: "Three is usually enough for planning: optimistic, baseline, and conservative." },
      { question: "Does this apply to every type of calculator?", answer: "Yes. The habit is useful for finance, health, time, and everyday calculations alike." },
      { question: "What if two results look similar?", answer: "Check whether the underlying assumptions are truly the same before treating them as equivalent." },
    ],
  },
  {
    slug: "loan-calculator-vs-mortgage-calculator",
    title: "How to compare loan and mortgage estimates",
    description: "Here's a quick guide to reading monthly payment, total repayment, and interest results before you borrow.",
    intro:
      "Ever wondered which calculator to use for your situation? If you've been confused between a loan calculator and a mortgage calculator, this guide walks you through when to use each one. A basic loan calculator helps you estimate monthly payments quickly, while a mortgage calculator is better when you want to understand housing costs, longer repayment terms, and the bigger budget picture.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "Mortgage Calculator",
    sections: [
      {
        heading: "When a basic loan calculator is enough",
        body: [
          "For personal loans, auto loans, or any fixed borrowing amount, a standard loan calculator is usually the easiest starting point. You can compare payment size, interest cost, and repayment length without extra assumptions.",
          "This is especially helpful when you are comparing offers from multiple lenders. Even a small rate change can create a meaningful gap in total cost over time.",
        ],
      },
      {
        heading: "When a mortgage calculator gives you better insight",
        body: [
          "Mortgage planning often includes more than a payment estimate. Buyers usually want to test affordability, compare repayment structures, and decide how much house fits their monthly budget.",
          "A mortgage calculator helps you think beyond the headline payment by comparing totals over a long repayment period. That makes it easier to set realistic expectations before you shop seriously.",
        ],
      },
      {
        heading: "How to read the result more carefully",
        body: [
          "The monthly payment is the first number most people notice, but it should not be the only number you use. Total interest and repayment length matter just as much.",
          "A lower payment can look attractive at first, but stretching the term may increase the full cost of borrowing. Use the calculator result as a comparison tool, then confirm the exact offer with the lender.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use a mortgage calculator for rent or lease planning?",
        answer: "You can use it for rough payment comparisons, but lease terms and housing fees often work differently, so the estimate is only a planning reference.",
      },
      {
        question: "Why does the lender estimate differ from the calculator result?",
        answer: "Actual offers may include fees, insurance, taxes, credit-based pricing, or repayment rules that a simple calculator does not include.",
      },
      {
        question: "Should I compare by payment or by total cost?",
        answer: "You should compare both. A comfortable payment matters, but total interest tells you how expensive the loan becomes over time.",
      },
    ],
  },
  {
    slug: "when-bmi-calculator-is-useful",
    title: "How to choose the right health calculator",
    description: "Here's when to use BMI, calorie, heart rate, and body-composition tools, and when to ask a professional instead.",
    intro:
      "If you've wondered what a BMI calculator actually tells you, this guide walks you through what it does well and where it needs support from other measurements. BMI is popular because it's simple. With only height and weight, you can get a quick estimate that helps frame a health conversation.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI Calculator",
    sections: [
      {
        heading: "Why BMI is still useful",
        body: [
          "BMI gives you a fast and consistent way to organize weight information. It can be useful when you are tracking long-term change, starting a fitness plan, or looking for a simple baseline.",
          "Because it is easy to calculate, it works well as an early checkpoint instead of a final verdict.",
        ],
      },
      {
        heading: "Where BMI can be misleading",
        body: [
          "Muscle mass, body-fat distribution, and age can all change how useful BMI feels in real life. Someone with a high BMI may still be fit, while someone in a so-called normal range may have other risk factors.",
          "That is why health calculators work best when you combine them with context instead of treating one number as the full story.",
        ],
      },
      {
        heading: "How to use the result in a practical way",
        body: [
          "Treat the number as a signal, not a label. If the result looks higher or lower than expected, use that as a reason to look at habits, trend lines, and other health markers.",
          "You do not need to react to every small change. It is usually more helpful to compare results over time and look for direction instead of perfection.",
        ],
      },
    ],
    faq: [
      {
        question: "Is BMI enough to judge fitness?",
        answer: "No. It is a useful screening tool, but fitness and health also depend on body composition, activity level, and other measurements.",
      },
      {
        question: "Should children use the same BMI interpretation?",
        answer: "Children are usually assessed with age-based growth references, so adult BMI interpretation should not be applied in the same way.",
      },
      {
        question: "How often should I check BMI?",
        answer: "Checking every few weeks is usually more useful than checking every day, because short-term changes can be noisy.",
      },
    ],
  },
  {
    slug: "everyday-percent-and-date-calculators",
    title: "Simple ways to use percentage and time calculators",
    description: "Here are practical examples for discounts, date math, work hours, and everyday calculations you probably do already.",
    intro:
      "Percentage and date calculators might seem like simple tools, but here's how you can use them for real decisions. They help with shopping, deadline planning, work schedules, and quick comparisons that would otherwise be easy to misread. Let's walk through the everyday moments when they're most useful.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/time/date-duration-calculator",
    relatedCalculatorLabel: "Date Duration Calculator",
    sections: [
      {
        heading: "Using percentage tools for buying decisions",
        body: [
          "Discounts, markups, and partial increases all sound simple until you try to compare them quickly. A percentage calculator helps you check the real price instead of guessing.",
          "This is useful for personal budgeting too. When you know the actual change in dollars, it becomes easier to decide whether a promotion or price increase really matters.",
        ],
      },
      {
        heading: "Using date calculators for planning",
        body: [
          "Date math comes up in project work, subscriptions, travel planning, and school deadlines. A date calculator can quickly show the number of days between two events or help you count forward from an important date.",
          "That saves time and reduces mistakes, especially when your schedule includes multiple milestones.",
        ],
      },
      {
        heading: "How to avoid common interpretation mistakes",
        body: [
          "For percentages, always remember to check the starting value. A 10 percent change means something different depending on the original price or total.",
          "For dates, be careful about whether the starting day is included and whether you need calendar days or business days. Those details can change the practical answer.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I work backward from a final sale price?",
        answer: "Yes. If you know the discount rate and final price, a percentage calculator can help estimate the original amount.",
      },
      {
        question: "Do date calculators count weekends?",
        answer: "Most basic date difference tools count calendar days unless they specifically mention business-day logic.",
      },
      {
        question: "Why should I still double-check important deadlines?",
        answer: "Because contracts, billing terms, and filing rules may define dates differently. A calculator is great for planning, but official timing rules still matter.",
      },
    ],
  },
  {
    slug: "30-vs-15-year-mortgage",
    title: "30-Year vs. 15-Year Fixed Mortgage: Which One Actually Wins?",
    description:
      "A side-by-side breakdown of 30-year and 15-year fixed-rate mortgages — payments, total interest, and the break-even point on a typical US loan.",
    intro:
      "When you're shopping for a US home loan, the 30-year fixed gets the headlines because it gives you the lowest monthly payment. But the 15-year fixed often costs less than half the total interest. The right answer depends on cash flow, time horizon, and what you'd otherwise do with the difference. Let's run the numbers.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "Mortgage calculator",
    sections: [
      {
        heading: "How the headline payment compares",
        body: [
          "On a $400,000 loan at 6.5% (a typical 2025–2026 conforming rate), a 30-year fixed runs about $2,528 a month in principal and interest. A 15-year at 5.75% — roughly the spread Freddie Mac has shown over the last decade — runs about $3,322. That's $794 more every month, but you're done in half the time.",
          "Add property taxes (averaging 1.1% of home value annually, per Tax Foundation), homeowners insurance (about $1,500/yr nationally), and PMI if you put less than 20% down. Your full PITI payment is what matters for budget, not just principal and interest.",
        ],
      },
      {
        heading: "The total interest gap is the real story",
        body: [
          "Across the life of the loan, the same $400,000 borrowed costs about $510,400 in interest on the 30-year, but only $198,100 on the 15-year. That's $312,000 saved — more than the loan itself. Even after adjusting for inflation (assume 2.5%), the 15-year wins comfortably on present-value terms.",
          "Note this only holds if you actually keep the loan to maturity. The median US homeowner sells or refinances within 8–10 years (per Federal Reserve data), so the practical difference for most buyers is closer to 5–7 years of higher payments versus a slower payoff.",
        ],
      },
      {
        heading: "When the 30-year is the smarter choice anyway",
        body: [
          "If you'd take the $794/month difference and put it into a 401(k) or Roth IRA earning historical S&P 500 returns (about 10% nominal, per Ibbotson SBBI data), you'd come out ahead of the 15-year savings on after-tax basis — assuming you actually invest the difference, which most households don't.",
          "The 30-year also gives you flexibility: you can prepay to mimic a 15-year schedule when income is high, but fall back to the lower payment when life happens. That option value is real, especially for households with variable income or planning a job change in the next 5 years.",
        ],
      },
    ],
    faq: [
      {
        question: "What's the typical rate spread between 30-year and 15-year loans?",
        answer:
          "Freddie Mac PMMS has shown the 15-year averaging 0.5%–0.85% below the 30-year over the last 20 years. The exact spread varies week to week — check current Freddie Mac PMMS or your lender's rate sheet for today's number.",
      },
      {
        question: "Does PMI go away on a 15-year loan faster?",
        answer:
          "Yes. PMI drops automatically when your loan-to-value ratio reaches 78% (per the Homeowners Protection Act). On a 15-year loan, you hit 78% LTV around year 5–6 versus year 10–11 on a 30-year, saving roughly $4,000–$8,000 in PMI over the life of the loan.",
      },
      {
        question: "Should I refinance from a 30-year to a 15-year?",
        answer:
          "Generally yes if rates are lower than your current rate by 0.75% or more, you plan to stay 5+ years, and the higher payment fits your budget. Run both scenarios in the mortgage calculator to compare total cost net of closing costs (typically 2–3% of loan amount).",
      },
    ],
  },
  {
    slug: "standard-deduction-vs-itemize",
    title: "Standard Deduction vs. Itemizing: Which Is Worth Your Time in 2026?",
    description:
      "Most US filers are better off taking the standard deduction — but here's exactly when itemizing pays off, with current IRS numbers.",
    intro:
      "For tax year 2026, the IRS standard deduction is $15,000 for single filers and $30,000 for married filing jointly (per current IRS Rev. Proc. inflation adjustments). Roughly 90% of filers take it because the math is simple and the threshold is high. Here's the framework for figuring out whether you're in the 10% who should itemize.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: false,
    reviewedAt: "2026-04-26",
    relatedCalculatorPath: "/calculators/finance",
    relatedCalculatorLabel: "Browse finance calculators",
    sections: [
      {
        heading: "What counts as itemized — and the SALT cap",
        body: [
          "The big itemizable categories are: state and local taxes (capped at $10,000 by the SALT cap from TCJA), mortgage interest on up to $750,000 of debt, qualified charitable contributions (up to 60% of AGI), and unreimbursed medical expenses above 7.5% of AGI.",
          "The SALT cap is the killer for high-tax-state filers. If you're in California, New York, or New Jersey paying $20,000+ in state and local taxes, you can still only deduct $10,000. That alone has pushed millions of filers from itemizing to standard since 2018.",
        ],
      },
      {
        heading: "When itemizing actually wins",
        body: [
          "Run a quick mental test: do your mortgage interest + $10,000 SALT + charitable giving exceed your filing status's standard deduction? For a married couple, that means more than $30,000 of qualifying deductions. You typically need a mortgage of $300,000+ at 6%+ (giving roughly $18,000 first-year interest) plus the SALT cap plus $2,000+ in giving to clear the bar.",
          "Homeowners in high-tax states with new mortgages are the prime itemizers. Renters in low-tax states almost never beat the standard deduction unless they have unusually high charitable giving or major medical bills.",
        ],
      },
      {
        heading: "The QCD trick if you're 70½+",
        body: [
          "Qualified Charitable Distributions let donors aged 70½+ give directly from a Traditional IRA to charity, up to $108,000 per year in 2025 (indexed annually). The amount counts toward your Required Minimum Distribution but is excluded from gross income — meaning you take the standard deduction AND get the charitable benefit.",
          "If you're a retired homeowner with significant IRA balances, this strategy often beats itemizing because it lowers AGI, which has cascading effects on Social Security taxation, Medicare IRMAA brackets, and other phase-outs. Worth running by a CPA before age 73 (the new RMD age under SECURE 2.0).",
        ],
      },
    ],
    faq: [
      {
        question: "Are the 2026 standard deduction numbers final?",
        answer:
          "Yes — the IRS publishes inflation-adjusted figures each fall for the following year, and the 2026 numbers ($15,000 single / $30,000 MFJ) are based on the most recent Rev. Proc. release. Always verify on irs.gov before filing.",
      },
      {
        question: "Can I itemize one year and take the standard the next?",
        answer:
          "Absolutely. \"Bunching\" charitable contributions into one year (donor-advised fund makes this easy) and taking standard the next is a common strategy when you're hovering near the threshold.",
      },
      {
        question: "How does this differ for self-employed filers?",
        answer:
          "Business expenses are deducted on Schedule C separately from itemizing — they're \"above-the-line.\" The standard vs. itemize choice still applies to your personal Schedule A items. Self-employed filers also get a 20% QBI deduction (through 2025) that's separate from both.",
      },
    ],
  },
  {
    slug: "hysa-vs-cd-vs-treasury",
    title: "HYSA vs. CD vs. Treasury Bills: Where Should Your Cash Sit?",
    description:
      "A clear comparison of high-yield savings accounts, certificates of deposit, and Treasury bills for US savers — with current rate context and tax treatment.",
    intro:
      "When you have $20,000 sitting in a checking account earning 0.05%, three options compete for that money in the US market: a high-yield savings account, a CD, and Treasury bills. They look similar — all near-cash, all very safe — but the tax treatment, liquidity, and FDIC/Treasury backing differ in ways that matter for after-tax yield.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/savings-calculator",
    relatedCalculatorLabel: "Savings calculator",
    sections: [
      {
        heading: "High-yield savings accounts: maximum flexibility",
        body: [
          "HYSAs from online banks like Marcus, Ally, and Discover have paid 4.0%–5.0% APY through 2024–2025, tracking the Federal Funds rate (per FRED data). Money is FDIC-insured up to $250,000 per depositor per bank, and you can pull it out any business day with no penalty.",
          "The trade-off is that HYSA rates are variable. When the Fed cuts rates, your APY drops within weeks. If you've been getting 4.5% and the Fed cuts 0.5%, expect your HYSA to follow within a month. For an emergency fund — where access matters more than locking in yield — that volatility is acceptable.",
        ],
      },
      {
        heading: "CDs: lock in today's rate",
        body: [
          "Certificates of deposit from FDIC-insured banks lock your principal at a fixed rate for 6 months to 5 years. In a falling-rate environment (like late 2024 onward), buying a 1-year CD at 4.75% protects you from HYSA cuts. You sacrifice liquidity in exchange for rate certainty.",
          "Early withdrawal penalties are typically 90 days of interest on shorter CDs, 6 months on longer ones. CD ladders (laddering 1-year, 2-year, and 3-year CDs so one matures every year) give you reinvestment flexibility without giving up the rate lock entirely.",
        ],
      },
      {
        heading: "Treasury bills: state-tax-free, backed by the US government",
        body: [
          "T-Bills (4-week, 8-week, 13-week, 26-week, 52-week) bought through TreasuryDirect or a brokerage trade close to the federal funds rate. Their secret weapon: interest is exempt from state and local income tax. If you live in California (13.3% top rate) or New York City, that's effectively a 1%+ yield bonus.",
          "T-Bills are backed by the full faith and credit of the US government, so default risk is even lower than FDIC insurance theoretically (FDIC has $128B in reserves against $10T+ of insured deposits). Liquidity is excellent — you can sell on the secondary market any business day, though prices may move slightly.",
        ],
      },
    ],
    faq: [
      {
        question: "Which is best for an emergency fund?",
        answer:
          "HYSA, almost always. You need same-day access, FDIC insurance, and a competitive (if variable) rate. Don't tie up emergency money in CDs or T-Bills longer than 4 weeks.",
      },
      {
        question: "How does the SALT advantage of T-Bills actually work?",
        answer:
          "T-Bill interest is reported on Form 1099-INT but excluded from state taxable income on your state return (Schedule CA in California, IT-225 in New York, etc.). Your federal taxable income is unchanged. For a Californian in the top bracket, a 4.5% T-Bill is roughly equivalent to a 5.2% HYSA after state tax.",
      },
      {
        question: "Are Treasury Money Market Funds (TMM) the same?",
        answer:
          "Close but not identical. Treasury MMFs hold T-Bills and pass through the state tax exemption on the Treasury portion (typically 50–95% of the fund). Read the fund's annual tax disclosure for the exact percentage.",
      },
    ],
  },
  {
    slug: "roth-vs-traditional-ira",
    title: "Roth vs. Traditional IRA: A Decision Framework for 2026 Contributors",
    description:
      "When to fund a Roth IRA vs. a Traditional IRA, with current IRS contribution limits, income phase-outs, and the math on tax brackets.",
    intro:
      "The Roth vs. Traditional IRA decision comes down to one question: are you in a higher tax bracket now, or will you be in retirement? Most people guess wrong because they overweight today's bracket and underweight Required Minimum Distributions. Here's the framework with 2026 IRS numbers built in.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: false,
    reviewedAt: "2026-04-26",
    relatedCalculatorPath: "/calculators/finance/retirement-calculator",
    relatedCalculatorLabel: "Retirement calculator",
    sections: [
      {
        heading: "2026 limits and phase-outs",
        body: [
          "The 2026 IRA contribution limit is $7,000 ($8,000 if you're 50 or older), per the IRS inflation-adjusted Rev. Proc. Roth IRA direct contributions phase out for single filers between $150,000 and $165,000 MAGI, and for joint filers between $236,000 and $246,000.",
          "If your income exceeds the Roth limits, you can still contribute via the \"Backdoor Roth\" (contribute to a non-deductible Traditional IRA, then convert) — but be careful of the pro-rata rule if you have any pre-tax IRA balances.",
        ],
      },
      {
        heading: "When Roth wins",
        body: [
          "Roth wins when you expect higher taxable income in retirement than today. That's surprisingly common: working couples often have lower taxable income in their 30s (with kids and mortgage interest) than in their 60s (no mortgage, RMDs from 401(k), Social Security all hitting at once).",
          "Roth also wins for high-net-worth estate planning. Roth has no Required Minimum Distributions during the original owner's lifetime, so the entire balance can compound tax-free for 30+ years and pass to heirs (who must drain it in 10 years under SECURE Act, but tax-free).",
        ],
      },
      {
        heading: "When Traditional still wins",
        body: [
          "Traditional wins for high earners in their peak years (late 40s–50s) who plan to retire to a low-tax state with modest spending. Take the deduction at 32%–37% federal + state today, withdraw at 12%–22% in retirement.",
          "The math also favors Traditional if you're saving the tax difference. Putting $7,000 into a Roth costs $7,000 of after-tax money. Putting $7,000 into a Traditional costs $7,000 minus your marginal tax rate today — and most savers don't actually invest that difference, which silently flips the math.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I contribute to both a Roth and a Traditional IRA?",
        answer:
          "Yes, but the combined contribution can't exceed the annual limit ($7,000 in 2026, or $8,000 if 50+). You can split however you want — for example, $4,000 to Roth and $3,000 to Traditional.",
      },
      {
        question: "What about a Roth conversion?",
        answer:
          "Roth conversions move pre-tax IRA money into a Roth IRA in exchange for paying tax on the converted amount in the year of conversion. They make sense in low-income years (gap year between jobs, early retirement before Social Security) and are not subject to income limits — just the pro-rata rule.",
      },
      {
        question: "How does my 401(k) factor in?",
        answer:
          "If your employer offers a Roth 401(k), the income limits don't apply (Roth 401(k) has no income cap, unlike Roth IRA). High earners often max a Roth 401(k) and then do a Backdoor Roth IRA on top.",
      },
    ],
  },
  {
    slug: "401k-employer-match-strategy",
    title: "Maximizing Your 401(k) Employer Match: The Single Highest-ROI Move in Personal Finance",
    description:
      "How employer matching works in US 401(k) plans, why it's the highest guaranteed return you'll find, and the exact contribution rate to capture every dollar.",
    intro:
      "Roughly 80% of US employers offering 401(k)s match employee contributions, but 20% of eligible employees still leave matching dollars on the table — about $24 billion a year combined, per Fidelity research. Whatever else you do with your money, capturing the full match is almost always step one. Here's how it works in 2026.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/retirement-calculator",
    relatedCalculatorLabel: "Retirement calculator",
    sections: [
      {
        heading: "How matching formulas actually read",
        body: [
          "The most common formula is \"100% match on the first 3% of salary, 50% match on the next 2%\" — meaning if you contribute 5% of pay, the employer puts in 4% on top. A handful of generous employers (tech, finance) match dollar-for-dollar up to 6%–10% of salary.",
          "Read your Summary Plan Description. Some plans use a simple percentage (e.g., 50% of contributions up to 6% of salary), some use tiers, and some have discretionary year-end profit-sharing on top. The plan document is the only authoritative source.",
        ],
      },
      {
        heading: "Vesting — when the match is really yours",
        body: [
          "Your contributions are always 100% vested immediately. Employer matching contributions usually vest on a schedule: cliff vesting (100% after 3 years, 0% before) or graded vesting (20% per year over 5 years). Check your plan's vesting schedule before you change jobs.",
          "Leaving an employer before fully vesting forfeits the unvested portion. If you're 4 years into a 5-year graded schedule with $40,000 in match, walking out 6 months early costs you $8,000.",
        ],
      },
      {
        heading: "The 2026 contribution limits",
        body: [
          "The 2026 employee contribution limit is $24,000, per IRS inflation adjustments (catch-up contribution adds $7,500 if you're 50+, or $11,250 if you're 60–63 under SECURE 2.0). Employer match doesn't count against this limit.",
          "The combined limit (employee + employer) is $71,000 in 2026. High earners with generous matches can hit this ceiling. After-tax 401(k) contributions and Mega Backdoor Roth strategies build on this combined limit if your plan allows them.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I always contribute up to the full match?",
        answer:
          "Yes, except in true emergencies (no emergency fund, high-interest credit card debt). The match is effectively a 50%–100% guaranteed return on the contributed amount — there's no other investment with that risk-adjusted return.",
      },
      {
        question: "What if I can't afford the full 5%?",
        answer:
          "Contribute what you can and increase 1% every raise. Many plans offer auto-escalation (default 1%/year). Even half-match capture is worth more than nothing.",
      },
      {
        question: "What's a Mega Backdoor Roth?",
        answer:
          "If your 401(k) plan allows after-tax contributions and in-service Roth conversions or rollovers, you can put up to ~$47,000/year (the gap between the $24,000 employee limit and the $71,000 combined limit, minus employer match) into a Roth account. Plan-dependent — call your plan administrator to confirm.",
      },
    ],
  },
];

const koGuides: EditorialEntry[] = [

  {
    slug: "loan-calculator-checklist",
    title: "대출 계산기 돌리기 전 체크리스트",
    description: "금리, 기간, 수수료, 상환방식처럼 먼저 확인하면 좋은 항목을 정리한 가이드입니다.",
    intro: "대출 계산기를 돌리기 전에 기본 조건을 먼저 정리해두면 결과 해석이 훨씬 쉬워집니다. 특히 금리와 기간만 보는 습관에서 벗어나 수수료와 실제 총비용까지 보는 것이 중요합니다.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "대출 계산기",
    sections: [
      { heading: "금리와 기간을 함께 보기", body: ["금리가 조금만 달라져도 장기 대출에서는 총이자 차이가 커질 수 있습니다.", "기간을 바꿔보며 월 납입금과 총비용을 함께 비교하세요."] },
      { heading: "수수료와 부대비용 확인", body: ["실제 대출은 중도상환수수료나 기타 비용이 붙을 수 있습니다.", "계산기 결과를 볼 때 이 부분을 따로 메모해두는 습관이 좋습니다."] },
      { heading: "최종 판단 전 다시 확인할 것", body: ["계산기 결과는 비교용 참고값입니다.", "승인 금리와 실제 조건은 금융사 상담에서 다시 확인해야 합니다."] },
    ],
    faq: [
      { question: "대출 계산기만으로 결정해도 되나요?", answer: "아닙니다. 비교 기준을 잡는 데는 좋지만 실제 조건은 다시 확인해야 합니다." },
      { question: "수수료는 꼭 따로 봐야 하나요?", answer: "네. 실제 부담에 영향을 줄 수 있어 놓치면 비교가 왜곡될 수 있습니다." },
      { question: "기간이 길면 무조건 나쁜가요?", answer: "월 부담은 낮아질 수 있지만 총이자는 늘어날 가능성이 큽니다." },
    ],
  },
  {
    slug: "bmi-and-calorie-basics",
    title: "BMI와 칼로리 계산기를 함께 보는 기본 방법",
    description: "체중 상태와 하루 필요 칼로리를 같이 볼 때 어떤 순서로 해석하면 좋은지 정리합니다.",
    intro: "BMI와 칼로리 계산기는 따로 볼 수도 있지만 함께 보면 더 실용적입니다. BMI는 현재 상태를 빠르게 점검하고, 칼로리 계산기는 그 상태를 유지하거나 바꾸기 위한 계획을 세우는 데 도움이 됩니다.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI 계산기",
    sections: [
      { heading: "BMI를 먼저 보는 이유", body: ["현재 체중 상태를 빠르게 가늠할 수 있어 출발점으로 쓰기 좋습니다.", "다만 BMI만으로 건강 전체를 판단하면 안 됩니다."] },
      { heading: "칼로리 계산으로 연결하는 방법", body: ["BMI 결과를 본 뒤 유지, 감량, 증량 목표를 생각하면서 칼로리 수치를 참고하면 더 실용적입니다.", "극단적인 조정보다 작은 변화부터 시작하는 것이 좋습니다."] },
      { heading: "숫자를 추세로 해석하기", body: ["하루 수치보다 몇 주간의 흐름이 더 중요합니다.", "BMI와 칼로리를 함께 보더라도 생활 습관과 체감 변화를 같이 기록해야 도움이 됩니다."] },
    ],
    faq: [
      { question: "BMI가 정상이어도 칼로리 계산이 필요할까요?", answer: "네. 유지 계획을 세우는 데 도움이 될 수 있습니다." },
      { question: "칼로리 숫자만 맞추면 되나요?", answer: "아닙니다. 식단 질과 활동량도 함께 중요합니다." },
      { question: "둘 중 하나만 봐도 되나요?", answer: "가능하지만 함께 보면 상태와 계획을 더 쉽게 연결할 수 있습니다." },
    ],
  },
  {
    slug: "mortgage-calculator-checklist",
    title: "주담대 계산기 사용 전 꼭 확인할 5가지",
    description: "집을 보기 전에 월 상환액, 금리, 상환기간을 어떤 순서로 확인하면 좋은지 정리한 가이드입니다.",
    intro:
      "주담대 계산기를 돌리기 전에 몇 가지 기준부터 잡아두면 결과가 훨씬 실용적으로 보입니다. 무작정 금액만 넣는 것보다 내 예산, 기간, 금리 범위, 상환 방식을 먼저 정리하면 비교가 쉬워집니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      { heading: "예산부터 정하기", body: ["월 납입액을 먼저 정하면 감당 가능한 주택 가격 범위를 더 현실적으로 볼 수 있습니다.", "소득과 고정지출을 기준으로 무리 없는 수준을 먼저 설정해두는 것이 좋습니다."] },
      { heading: "금리 범위를 넓게 보기", body: ["하나의 금리만 넣지 말고, 조금 낮은 경우와 높은 경우를 함께 계산해보면 훨씬 실용적입니다.", "특히 장기 대출은 금리 차이가 총이자에 크게 반영됩니다."] },
      { heading: "상환 방식 비교", body: ["원리금균등과 원금균등은 같은 대출금이어도 체감 부담이 다릅니다.", "초기 부담과 전체 이자를 함께 비교하는 방식이 좋습니다."] },
    ],
    faq: [
      { question: "집을 보기 전에도 계산기를 써야 하나요?", answer: "네. 대략적인 예산 범위를 먼저 잡아두면 무리한 매물을 걸러내는 데 도움이 됩니다." },
      { question: "중도상환 계획도 반영되나요?", answer: "기본 계산기에는 반영되지 않는 경우가 많으므로 별도로 확인하는 것이 좋습니다." },
      { question: "세금과 보험료도 같이 포함되나요?", answer: "일반 계산기는 대출 상환 중심인 경우가 많아, 부대비용은 따로 확인해야 합니다." },
    ],
  },
  {
    slug: "how-to-read-calorie-results",
    title: "칼로리 계산 결과를 해석하는 방법",
    description: "하루 필요 칼로리 수치를 볼 때 유지, 감량, 증량 목표를 어떻게 나눠서 생각하면 좋은지 설명합니다.",
    intro:
      "칼로리 계산기의 숫자는 시작점입니다. 중요한 것은 그 수치를 생활 패턴과 목표에 맞게 어떻게 해석하느냐입니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/health/calorie-calculator",
    relatedCalculatorLabel: "칼로리 계산기",
    sections: [
      { heading: "유지 칼로리의 의미", body: ["유지 칼로리는 현재 체중을 유지하기 위한 대략적인 기준값입니다.", "활동량이 바뀌면 이 수치도 함께 달라질 수 있습니다."] },
      { heading: "감량과 증량은 천천히", body: ["결과를 본 뒤 극단적으로 줄이거나 늘리기보다 작은 폭으로 조정하는 편이 지속하기 쉽습니다.", "생활 리듬과 포만감을 함께 보면서 조절하는 것이 좋습니다."] },
      { heading: "숫자보다 추세 보기", body: ["하루 수치보다 몇 주간의 변화가 더 중요합니다.", "체중, 컨디션, 식습관을 함께 기록하면 계산 결과를 더 잘 활용할 수 있습니다."] },
    ],
    faq: [
      { question: "운동하는 날은 더 먹어야 하나요?", answer: "활동량이 높아지는 날은 필요량도 달라질 수 있어 유연하게 보는 것이 좋습니다." },
      { question: "기초대사량과 같은 뜻인가요?", answer: "아닙니다. 하루 필요 칼로리는 기초대사량보다 넓은 개념입니다." },
      { question: "매일 다시 계산해야 하나요?", answer: "체중과 활동량 변화가 크지 않다면 자주 다시 계산할 필요는 없습니다." },
    ],
  },
  {
    slug: "date-calculator-for-schedules",
    title: "날짜 차이 계산기로 일정 계산하기",
    description: "프로젝트 일정, 시험일, 계약 만료일을 계산할 때 날짜 차이 계산기를 어떻게 쓰면 좋은지 정리합니다.",
    intro:
      "날짜 차이 계산기는 단순히 며칠 남았는지 보는 도구가 아니라 일정을 쪼개고 우선순위를 정하는 데에도 도움이 됩니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/time/date-duration-calculator",
    relatedCalculatorLabel: "날짜 차이 계산기",
    sections: [
      { heading: "마감일까지 남은 기간 확인", body: ["전체 남은 일수를 먼저 보면 계획을 크게 잡기 쉽습니다.", "이후 주 단위나 단계별 일정으로 쪼개면 실행력이 높아집니다."] },
      { heading: "시작일 포함 기준 확인", body: ["계산 결과는 포함 기준에 따라 달라질 수 있습니다.", "특히 계약이나 제출 일정은 공식 기준을 다시 확인해야 합니다."] },
      { heading: "계산기를 일정 관리 도구로 쓰기", body: ["중간 체크포인트를 잡을 때 날짜 계산기가 유용합니다.", "시험 준비, 이사 일정, 배송 예상일 같은 생활 일정에도 실용적입니다."] },
    ],
    faq: [
      { question: "영업일 계산도 되나요?", answer: "기본 날짜 차이 계산기는 달력일 기준인 경우가 많습니다." },
      { question: "오늘을 포함해서 세나요?", answer: "계산기 설정과 해석 방식에 따라 다를 수 있으니 기준을 확인해야 합니다." },
      { question: "장기 일정에도 쓸 수 있나요?", answer: "네. 몇 개월, 몇 년 단위 일정도 쉽게 비교할 수 있습니다." },
    ],
  },
  {
    slug: "mortgage-calculator-dti-ltv-dsr",
    title: "주담대 계산기로 DTI · LTV · DSR 한 번에 점검하기",
    description:
      "한국에서 주택담보대출을 알아보실 때 꼭 마주치는 LTV, DTI, DSR 세 가지를 계산기와 함께 따라 짚어드릴게요.",
    intro:
      "주담대 신청 전에 \"내가 얼마까지 빌릴 수 있는지\" 가늠해 보고 싶으시면 LTV·DTI·DSR 세 숫자를 본인 조건으로 직접 굴려 보시는 게 가장 빠릅니다. 한국 규제 기준에 맞춰 본 사이트의 주담대 계산기를 따라가는 형태로 정리해드릴게요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      {
        heading: "1단계 — LTV로 \"빌릴 수 있는 최대 한도\" 잡기",
        body: [
          "LTV(주택담보대출비율)는 집값 대비 대출 가능 비율이에요. 일반 지역은 70%, 생애최초 구매자는 80%가 통상 한도입니다. 5억 원 집을 사실 때 일반 LTV 70%면 최대 3억 5천만 원까지 받을 수 있다는 의미죠.",
          "본 사이트의 주담대 계산기에서 \"집값\" 항목에 5억 원을, \"대출비율\" 또는 \"원금\"에 3억 5천만 원을 넣어보세요. 자기자본은 1억 5천만 원이 필요합니다.",
        ],
      },
      {
        heading: "2단계 — DTI/DSR로 \"매달 갚을 수 있는 한도\" 확인",
        body: [
          "DSR(총부채원리금상환비율) 40%는 본인 연소득의 40% 이상을 모든 대출 원리금 상환에 쓰지 못하게 막는 한도입니다. 연소득 6천만 원이시면 연 2,400만 원, 즉 월 200만 원이 한계예요.",
          "계산기에서 30년 만기·연 4.5%·원리금균등으로 3억 5천만 원을 굴리면 월 상환금이 약 177만 원 나옵니다. 신용대출이나 자동차할부가 추가로 있으시면 그 금액까지 합산했을 때 200만 원 안에 들어오는지 점검해보세요.",
        ],
      },
      {
        heading: "3단계 — 결과 해석과 다음 단계",
        body: [
          "계산 결과 LTV 한도와 DSR 한도 중 작은 쪽이 본인의 실제 대출 가능액이라고 보시면 됩니다. 보통 소득이 부족한 분은 DSR이 먼저 막히고, 자기자본이 부족한 분은 LTV가 먼저 막혀요.",
          "계산기에서 본 한도와 은행 상담 결과가 다르게 나올 수 있어요. 우대금리, 신용등급, 정책 상품(보금자리·디딤돌·적격대출) 적용 여부에 따라 실제 한도가 달라지므로, 계산기 결과는 \"대략적인 가늠\"으로 활용하시고 최종 한도는 은행 상담으로 확정하세요.",
        ],
      },
    ],
    faq: [
      {
        question: "DTI와 DSR이 다른 건가요?",
        answer:
          "DTI는 주담대 원리금만 보고, DSR은 모든 대출의 원리금을 합산해요. 2026년 현재 은행권 주담대는 DSR 40%가 가장 강한 규제로 작동합니다.",
      },
      {
        question: "보금자리론도 같은 계산법이 적용되나요?",
        answer:
          "보금자리론은 LTV 70%, DSR 50%~60%로 일반 주담대보다 한도가 약간 여유 있어요. 다만 부부합산 연소득 8,500만 원, 집값 6억 원 같은 별도 요건이 붙습니다.",
      },
      {
        question: "변동금리로 계산하면 한도가 달라지나요?",
        answer:
          "DSR 계산 시 변동금리는 \"스트레스 금리(현재 + 1%p)\"로 산정되는 경우가 많아 실제 한도가 줄어들 수 있어요. 계산기에서 +1% 시나리오도 같이 굴려보시는 걸 권합니다.",
      },
    ],
  },
  {
    slug: "year-end-tax-refund-walkthrough",
    title: "연말정산 환급액 계산 따라하기 — 한국 세제 단계별 정리",
    description:
      "한국 연말정산에서 환급액이 어떻게 결정되는지 산출 단계를 따라가며 본인 케이스를 가늠하는 방법을 안내합니다.",
    intro:
      "연말정산 환급액이 어떻게 정해지는지 식으로 풀어보면 의외로 간단합니다. \"근로소득세 결정세액 = 산출세액 - 세액공제\" 한 줄이에요. 단계별로 따라가시면 본인의 환급/추가징수 여부와 대략적인 금액을 가늠하실 수 있고, 세부 항목은 국세청 홈택스 \"연말정산 미리보기\"로 확정하시면 됩니다.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: false,
    reviewedAt: "2026-04-26",
    relatedCalculatorPath: "/calculators/finance",
    relatedCalculatorLabel: "관련 금융 계산기 보기",
    sections: [
      {
        heading: "1단계 — 총급여, 비과세 분리",
        body: [
          "회사에서 지급받은 \"총급여\"에서 식대·자가운전보조금 같은 비과세 항목을 빼면 \"근로소득금액\"이 나와요. 보통 근로소득공제(차등 적용, 약 8.5%~70%)를 자동 적용한 금액으로 계산기에 입력하시면 됩니다.",
          "예시: 연봉 6,000만 원 + 식대 240만 원(비과세) → 근로소득금액 약 4,750만 원으로 시작합니다.",
        ],
      },
      {
        heading: "2단계 — 인적공제와 소득공제로 과세표준 줄이기",
        body: [
          "본인 + 배우자 + 부양가족(만 60세 이상 부모, 만 20세 이하 자녀, 연소득 100만 원 이하) 1인당 150만 원씩 인적공제됩니다. 4인 가족이면 600만 원이 빠져요.",
          "신용카드 사용액 공제, 주택청약저축, 연금저축·IRP 등도 여기에서 빠집니다. 소득공제는 한계세율(15%·24%·35%·38%·40%·42%·45%) 만큼 세금을 줄여주는 효과가 있어요.",
        ],
      },
      {
        heading: "3단계 — 산출세액에서 세액공제 빼기",
        body: [
          "과세표준 × 한계세율 - 누진공제 = 산출세액입니다. 여기서 자녀세액공제(자녀 1명 25만 원, 2명 55만 원, 3명 85만 원)·의료비·교육비·기부금·월세 등을 \"세액\"에서 직접 빼면 결정세액이 됩니다.",
          "회사에서 매달 원천징수해 간 합계가 결정세액보다 크면 차액이 환급, 작으면 추가 납부예요. 본 사이트 금융 계산기 모음에서 연봉·복리·예산 관련 도구를 함께 굴려보시면 가계 관점에서 큰 그림이 보입니다.",
        ],
      },
    ],
    faq: [
      {
        question: "맞벌이 부부인데 자녀 공제는 누가 받나요?",
        answer:
          "자녀 1명에 대해서는 부부 중 한 사람만 받을 수 있어요. 보통 한계세율이 높은 쪽(연봉이 더 높은 쪽)이 받는 게 환급에 유리합니다.",
      },
      {
        question: "월세 세액공제는 무조건 받을 수 있나요?",
        answer:
          "총급여 7,000만 원 이하 무주택 세대주(또는 세대원) 조건에 맞아야 받을 수 있어요. 임대차계약서·계좌이체 내역·주민등록등본을 미리 준비해두시면 신청이 쉽습니다.",
      },
      {
        question: "계산기 결과와 실제 환급액이 다른 이유는?",
        answer:
          "계산기는 입력한 항목만 반영하므로 실제 카드 사용액·기부금·의료비 같은 세부 항목까지 모두 합산되지 않습니다. 정확한 금액은 국세청 홈택스 \"연말정산 미리보기\"에서 11월에 확인하세요.",
      },
    ],
  },
  {
    slug: "bmi-korean-standards",
    title: "BMI 계산기 — 한국 표준체중 기준으로 해석하기",
    description:
      "WHO 표준이 아닌 대한비만학회 한국 기준으로 본인 BMI를 어떻게 읽어야 하는지 단계별로 안내합니다.",
    intro:
      "BMI 같은 숫자라도 한국에서는 WHO 글로벌 기준보다 약간 엄격한 \"대한비만학회 기준\"을 적용합니다. 같은 BMI 24라도 한국 기준에서는 \"과체중\"인 반면, WHO 기준에서는 \"정상\"으로 분류돼요. 본 사이트 BMI 계산기 결과를 한국식으로 정확히 해석하는 법을 정리해드릴게요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI 계산기",
    sections: [
      {
        heading: "한국 BMI 기준 (대한비만학회 2022 개정)",
        body: [
          "한국 기준은 저체중 18.5 미만 / 정상 18.5~22.9 / 과체중 23~24.9 / 비만 1단계 25~29.9 / 비만 2단계 30~34.9 / 비만 3단계 35 이상으로 나눠집니다.",
          "WHO 기준(과체중 25 이상, 비만 30 이상)보다 2~5 정도 낮게 잡혀 있어요. 동아시아인은 같은 BMI에서 내장지방·당뇨 위험이 서양인보다 높다는 연구 결과를 반영한 기준입니다.",
        ],
      },
      {
        heading: "본 사이트 계산기 사용법",
        body: [
          "BMI 계산기에서 \"키\"를 cm 단위로(예: 168cm), \"몸무게\"를 kg 단위로(예: 65kg) 입력하시면 BMI 값과 분류가 표시됩니다. 한국 기준 적용 옵션이 별도로 없는 경우 결과 옆 설명에서 한국 기준 분류를 확인하세요.",
          "예시: 168cm/65kg → BMI 23.0 → 한국 기준 \"과체중\" / WHO 기준 \"정상\". 같은 값을 두 기준으로 해석하시면 본인 위치가 더 명확해져요.",
        ],
      },
      {
        heading: "BMI 한 가지로만 판단하시면 안 되는 이유",
        body: [
          "BMI는 키·몸무게만 보기 때문에 근육량·체지방률·내장지방 분포를 구분하지 못해요. 운동을 많이 하시는 분이 BMI 26으로 \"비만 1단계\"가 나와도 실제 체지방률은 정상 범위인 경우가 흔합니다.",
          "허리둘레(남 90cm·여 85cm 초과 시 복부비만)와 체지방률(남 25% 이상·여 30% 이상)을 함께 보시면 더 정확합니다. BMI는 \"빠른 1차 스크리닝\"이라고 보시는 게 좋아요.",
        ],
      },
    ],
    faq: [
      {
        question: "어린이도 같은 BMI 기준을 쓰나요?",
        answer:
          "아니요. 만 19세 미만은 \"소아 청소년 표준성장도표\"로 BMI 백분위(85·95 백분위)를 보는 별도 기준이 적용됩니다. 본 사이트 BMI 계산기는 성인 기준이니 참고 정도로만 쓰세요.",
      },
      {
        question: "임산부도 BMI를 쓸 수 있나요?",
        answer:
          "임신 전 BMI는 권장 체중 증가 가이드 산출에 활용됩니다(저체중 시 12.5~18kg, 정상 11.5~16kg, 과체중 7~11.5kg, 비만 5~9kg). 임신 중 BMI 자체로 비만 분류는 의미가 없어요.",
      },
      {
        question: "한국 기준에서 \"정상\" 안에 들고 싶어요. 목표 체중은 어떻게 잡나요?",
        answer:
          "BMI 22를 목표로 하시면 \"한국 기준 정상 중간값\"이에요. 키 168cm 기준 약 62kg, 키 170cm 기준 약 64kg 정도가 됩니다.",
      },
    ],
  },
  {
    slug: "korean-age-calculator-walkthrough",
    title: "만 나이 계산기 — 한국 나이, 만 나이, 연 나이 한 번에 정리",
    description:
      "2023년 만 나이 통일 이후에도 헷갈리는 한국 3가지 나이(만 / 한국식 / 연)를 본 사이트 나이 계산기로 한 번에 비교하는 법.",
    intro:
      "2023년 6월 만 나이 통일법이 시행됐지만 여전히 \"한국 나이\", \"만 나이\", \"연 나이\" 세 가지가 일상에서 쓰이고 있어요. 청약 가점, 자동차 보험, 주류 구매 가능 연령처럼 어느 기준이 적용되는지에 따라 결과가 달라지니 본인 생일을 입력해 한 번에 비교해보세요.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/time/age-calculator",
    relatedCalculatorLabel: "나이 계산기",
    sections: [
      {
        heading: "세 가지 나이가 어떻게 달라지나요?",
        body: [
          "만 나이는 \"태어난 날 0세 → 생일마다 1세 증가\"로 국제 표준과 같아요. 한국 나이는 \"태어나자마자 1살, 새해 1월 1일에 1살씩 증가\". 연 나이는 \"올해 - 태어난 해\"만 보는 단순 계산입니다.",
          "예시: 1995년 12월 30일생을 2026년 4월 26일에 본다면 만 나이 30, 한국 나이 32, 연 나이 31이 나옵니다. 같은 사람이 세 개 나이를 동시에 갖는 셈이에요.",
        ],
      },
      {
        heading: "어떤 상황에 어떤 나이가 적용되나요?",
        body: [
          "법적 효력이 필요한 모든 행정 절차(주민등록·여권·운전면허·계약·세금)는 만 나이가 기본입니다. 청약 가점·국민연금·기초연금도 만 나이예요.",
          "병역(병역법상 입영 대상은 \"연 나이 19세\")과 일부 청소년 보호법(주류·담배 구매는 \"연 나이 19세 미만 금지\")은 연 나이가 적용됩니다. 즉 같은 1월~12월에 태어났더라도 입영 대상은 1년 차이가 납니다.",
        ],
      },
      {
        heading: "본 사이트 나이 계산기로 비교하기",
        body: [
          "나이 계산기에서 본인 \"태어난 날짜\"와 \"기준 날짜\"(보통 오늘)를 넣으시면 만 나이가 \"○년 ○개월 ○일\"로 정확히 나옵니다. 한국 나이·연 나이는 결과 옆 설명에서 함께 확인하실 수 있어요.",
          "청약 가점 계산이나 자녀 학년 산정처럼 정확한 만 나이가 필요한 상황에서 활용하세요. 출생 연도만 알 때보다 \"개월 수\"까지 본인 케이스로 굴려보시면 훨씬 정확합니다.",
        ],
      },
    ],
    faq: [
      {
        question: "주민등록상 나이는 만 나이인가요?",
        answer:
          "네, 주민등록증·여권·운전면허증 모두 만 나이가 기준이에요. 연도와 월일만 표시되어 있으니 본인 생일이 지났는지 안 지났는지로 만 나이를 계산하시면 됩니다.",
      },
      {
        question: "청약 가점에서 가산점은 어느 나이 기준인가요?",
        answer:
          "주택청약 가점제는 만 나이 기준으로 \"무주택 기간\"을 계산합니다. 만 30세부터 또는 결혼한 시점부터 카운트되니, 본 사이트 계산기로 본인 만 나이부터 정확히 확인하세요.",
      },
      {
        question: "자녀 보육료 지원도 만 나이인가요?",
        answer:
          "네, 만 0~5세 보육료·아동수당·가정양육수당 모두 만 나이 기준입니다. 만 6세 생일이 지나면 초등 입학 전이라도 지원이 끝나는 경우가 많으니 정확한 만 나이를 확인해두세요.",
      },
    ],
  },
];

const enGuides: EditorialEntry[] = [

  {
    slug: "loan-calculator-checklist",
    title: "What to check before you trust a loan calculator result",
    description: "A practical checklist for comparing rates, repayment length, fees, and total borrowing cost.",
    intro: "A loan calculator becomes more useful when you review a few basics before you enter numbers. Looking at rate and term alone is not always enough if fees, repayment structure, or total cost will affect the real decision.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "Loan Calculator",
    sections: [
      { heading: "Compare rate and term together", body: ["Even a modest rate difference can create a large total-interest gap on a longer term.", "That is why it helps to compare payment size and total cost side by side."] },
      { heading: "Do not forget fees and extra costs", body: ["Real loans may include origination fees, prepayment costs, or other charges.", "Keep those in mind when you compare calculator results with lender offers."] },
      { heading: "What to confirm before you decide", body: ["Use the calculator as a planning tool rather than a final approval number.", "Check the actual lender terms before you commit." ] },
    ],
    faq: [
      { question: "Can I rely on the calculator result alone?", answer: "No. It is best used for comparison before you confirm the final lender terms." },
      { question: "Do fees really matter that much?", answer: "They can. A result that looks similar on paper may become less attractive once fees are included." },
      { question: "Is a longer term always easier?", answer: "It can lower the payment but often raises total cost." },
    ],
  },
  {
    slug: "bmi-and-calorie-basics",
    title: "How to use BMI and calorie tools together",
    description: "A simple guide to using one tool as a status check and the other as a planning tool.",
    intro: "BMI and calorie calculators answer different questions, but they work well together. BMI gives you a quick status check, while a calorie estimate helps you think about what to maintain or change next.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI Calculator",
    sections: [
      { heading: "Why BMI is a good starting point", body: ["BMI gives you a fast baseline that can help frame the conversation.", "It is more useful as a starting point than as a final judgment." ] },
      { heading: "How to connect it to calorie planning", body: ["Once you have a rough status check, a calorie estimate can help you think about maintaining, reducing, or increasing body weight more realistically.", "Smaller and sustainable changes usually work better than extreme changes." ] },
      { heading: "Why the trend matters more than one day", body: ["Neither BMI nor calorie estimates should be judged on one day alone.", "Longer-term patterns are usually more useful than short-term noise." ] },
    ],
    faq: [
      { question: "Do I need a calorie tool if my BMI is normal?", answer: "It can still be useful for maintenance planning and habit review." },
      { question: "Is the calorie number the whole answer?", answer: "No. Food quality, consistency, and activity level also matter." },
      { question: "Should I use only one of the two tools?", answer: "You can, but using both often gives better context for planning." },
    ],
  },
  {
    slug: "mortgage-calculator-checklist",
    title: "How to use a mortgage calculator before house hunting",
    description: "A practical checklist for testing payment size, rate assumptions, and repayment length before you start viewing homes.",
    intro:
      "A mortgage calculator becomes much more useful when you set a few boundaries before you start. Instead of typing random home prices, start with a realistic payment range, compare different rates, and test more than one repayment scenario.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "Mortgage Calculator",
    sections: [
      { heading: "Start with your monthly budget", body: ["It is easier to work backward from a comfortable payment than to fall in love with a home price first.", "This helps you test affordability in a way that fits real life, not just wishful numbers."] },
      { heading: "Compare more than one rate", body: ["A single interest rate can make the result look more certain than it really is.", "Running a low, middle, and high scenario gives you a better picture of possible outcomes."] },
      { heading: "Check the structure, not just the headline payment", body: ["Two estimates can have similar payments but very different total costs.", "Look at the full repayment picture so you do not choose a cheaper-looking option that becomes more expensive over time."] },
    ],
    faq: [
      { question: "Should I use the calculator before I talk to a lender?", answer: "Yes. It helps you narrow your budget and prepare better questions before you get an official quote." },
      { question: "Does the estimate include everything?", answer: "Usually not. Taxes, insurance, and lender-specific fees may need to be checked separately." },
      { question: "Why run multiple rate scenarios?", answer: "Because small rate changes can significantly affect long-term borrowing costs." },
    ],
  },
  {
    slug: "how-to-read-calorie-results",
    title: "How to estimate calorie needs and compare fitness goals",
    description: "A simple guide to understanding maintenance calories, weight-loss targets, and why trends matter more than one-day numbers.",
    intro:
      "Calorie calculators are helpful because they turn a vague goal into a starting estimate. The real value comes from using that estimate carefully instead of treating it like a fixed rule.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/health/calorie-calculator",
    relatedCalculatorLabel: "Calorie Calculator",
    sections: [
      { heading: "What maintenance calories tell you", body: ["A maintenance estimate helps you understand roughly how much energy supports your current body weight.", "It is a planning baseline, not a guarantee, because daily activity still changes the picture."] },
      { heading: "How to adjust for different goals", body: ["Whether you want to lose, maintain, or gain weight, smaller changes are usually easier to sustain than aggressive ones.", "A practical plan is more useful than a perfect plan you cannot follow for long."] },
      { heading: "Why trends matter more than a single day", body: ["Energy intake, water balance, and activity can fluctuate from day to day.", "Looking at patterns over a few weeks usually gives you a clearer answer than reacting to one number."] },
    ],
    faq: [
      { question: "Should I recalculate every day?", answer: "Not usually. Recalculate when your routine, body weight, or activity level changes meaningfully." },
      { question: "Is maintenance the same as basal metabolic rate?", answer: "No. Maintenance calories include more than basic resting needs." },
      { question: "Can a calorie calculator replace nutrition advice?", answer: "No. It is a planning tool, not personalized medical or dietetic guidance." },
    ],
  },
  {
    slug: "date-calculator-for-schedules",
    title: "How to use date and hours calculators for work schedules",
    description: "Use date math to plan deadlines, compare timelines, and build more realistic schedules for projects and everyday commitments.",
    intro:
      "Date calculators are useful because they remove guesswork from planning. Instead of counting days manually, you can map deadlines, compare timelines, and build a schedule that feels more realistic.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/time/date-duration-calculator",
    relatedCalculatorLabel: "Date Duration Calculator",
    sections: [
      { heading: "Check the full timeline first", body: ["Before you divide work into tasks, it helps to know the full number of days or weeks available.", "That makes it easier to set milestones and avoid unrealistic planning." ] },
      { heading: "Know whether you need calendar days or work days", body: ["Not every deadline is counted the same way.", "For work or legal timing, confirm whether weekends and holidays matter before you rely on the result." ] },
      { heading: "Use the calculator as a planning checkpoint", body: ["Date tools are useful for project phases, notice periods, subscription timing, and travel schedules.", "They work best when you combine the number with a quick calendar review for important deadlines." ] },
    ],
    faq: [
      { question: "Do basic date calculators count weekends?", answer: "Most do unless they specifically mention business-day logic." },
      { question: "Should I include the start date?", answer: "That depends on the context and the calculator method, so it is worth checking before using the result." },
      { question: "Can I use this for long-term planning too?", answer: "Yes. Date calculators are helpful for both short deadlines and longer multi-month schedules." },
    ],
  },
  {
    slug: "mortgage-piti-pmi-walkthrough",
    title: "Mortgage Calculator Walkthrough: PITI, PMI, and Why the Headline Number Misleads",
    description:
      "How to read US mortgage calculator results — principal, interest, taxes, insurance, and PMI — so you know your true monthly cost.",
    intro:
      "When a US mortgage calculator shows you a $2,500 monthly payment, that's almost always just principal and interest. Real homeowners write checks for PITI — principal, interest, taxes, and insurance — plus PMI if they put less than 20% down. Here's how to read each line and use the full picture before you make an offer.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "Mortgage calculator",
    sections: [
      {
        heading: "Step 1 — Enter purchase price, down payment, and loan term",
        body: [
          "Start with the home price (e.g., $450,000), the down payment (e.g., $45,000 = 10%), and the loan term (30 years is the US standard). The calculator will derive the loan amount of $405,000 and show your principal-and-interest payment based on the rate.",
          "At a 6.75% rate (a representative 2025–2026 conforming rate per Freddie Mac PMMS), $405,000 over 30 years comes to $2,628 per month in P&I. That's the headline figure — but it's only the start of your true cost.",
        ],
      },
      {
        heading: "Step 2 — Add property tax and homeowners insurance",
        body: [
          "Property tax in the US averages 1.1% of home value annually but varies wildly: 0.3% in Hawaii, 2.5% in New Jersey, per Tax Foundation. On a $450,000 home in a 1.5% county, that's $562/month escrowed.",
          "Homeowners insurance averages $1,500–$2,500/year nationally per the NAIC, with significant variance by state and property type. Add about $150/month for typical coverage. Your PITI is now $2,628 + $562 + $150 = $3,340 — more than 27% above the headline P&I.",
        ],
      },
      {
        heading: "Step 3 — PMI when you put less than 20% down",
        body: [
          "Private Mortgage Insurance applies on conventional loans with less than 20% down. Annual rates run 0.5%–1.5% of loan amount based on credit score and LTV. On the $405,000 loan at 0.85%, PMI adds about $287/month. PITI becomes $3,627.",
          "PMI drops automatically when LTV reaches 78% (Homeowners Protection Act). On a 10%-down 30-year loan, that's around year 11. You can also request manual PMI removal at 80% LTV — typically year 9 — by submitting an appraisal. Save about $34,000–$40,000 in PMI by being deliberate about that step.",
        ],
      },
    ],
    faq: [
      {
        question: "Are property tax estimates in the calculator accurate?",
        answer:
          "Calculators estimate using national or state averages. For an accurate number, look up the actual millage rate from the county assessor and apply it to the assessed value (not always the purchase price).",
      },
      {
        question: "What's the rule of thumb for affordability?",
        answer:
          "Most lenders use a 28/36 rule: housing PITI under 28% of gross monthly income, total debt-to-income under 36%. Conservative guidance is to keep PITI under 25% of take-home pay so you can absorb tax/insurance increases.",
      },
      {
        question: "Should I include HOA fees?",
        answer:
          "Yes — for condos, townhomes, and many planned communities, HOA dues run $200–$800/month. Add them to PITI when comparing total cost across properties.",
      },
    ],
  },
  {
    slug: "federal-tax-estimator-2026",
    title: "Federal Income Tax Estimator: Walking Through 2026 Brackets",
    description:
      "Step-by-step walkthrough using 2026 IRS tax brackets, the standard deduction, and tax credits to estimate your federal liability.",
    intro:
      "Estimating your 2026 federal tax liability is mostly mechanical: gross income → adjustments → standard or itemized deduction → taxable income → bracket math → credits. The calculator does the arithmetic, but you'll get a more accurate number if you understand which line each input affects.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: false,
    reviewedAt: "2026-04-26",
    relatedCalculatorPath: "/calculators/finance",
    relatedCalculatorLabel: "Browse finance calculators",
    sections: [
      {
        heading: "Step 1 — Gross income and adjustments",
        body: [
          "Enter wages from your W-2 box 1, plus interest (1099-INT), dividends (1099-DIV), capital gains (1099-B), and any side income (1099-NEC). Subtract above-the-line adjustments: 401(k) employee contributions (already excluded from W-2 box 1), HSA contributions, traditional IRA contributions if eligible, student loan interest (up to $2,500), and self-employed health insurance.",
          "Result: your Adjusted Gross Income (AGI). Many tax credits and deduction phase-outs use AGI as the trigger, so accuracy here matters.",
        ],
      },
      {
        heading: "Step 2 — Apply the standard deduction or itemize",
        body: [
          "For 2026, the IRS standard deduction is $15,000 single / $30,000 married filing jointly / $22,500 head of household (per most recent inflation-adjusted Rev. Proc.). Most filers (about 90%) take the standard.",
          "Itemize if SALT (capped at $10,000) + mortgage interest + charitable giving + medical above 7.5% AGI exceeds your standard deduction. Subtract the larger of the two from AGI to get taxable income.",
        ],
      },
      {
        heading: "Step 3 — Run the brackets and apply credits",
        body: [
          "2026 federal brackets for single filers (per the latest IRS Rev. Proc. inflation adjustment): 10% on first $11,925, 12% to $48,475, 22% to $103,350, 24% to $197,300, 32% to $250,525, 35% to $626,350, and 37% above. Married filing jointly brackets are roughly double the single thresholds.",
          "Taxable income $80,000 single → $11,925 × 10% + $36,550 × 12% + $31,525 × 22% = $13,529 before credits. Apply Child Tax Credit ($2,000/child under 17, phase-out at $200K single / $400K MFJ), Saver's Credit, and education credits to get the final number.",
        ],
      },
    ],
    faq: [
      {
        question: "Are 2026 brackets confirmed?",
        answer:
          "The IRS publishes inflation-adjusted brackets each fall via Rev. Proc. for the following tax year. Always verify on irs.gov before filing — Congress also occasionally passes legislation that changes brackets mid-year.",
      },
      {
        question: "What's the difference between marginal and effective tax rate?",
        answer:
          "Marginal is the rate on your last dollar (the bracket you're in). Effective is total tax divided by taxable income — almost always lower than marginal. The $80,000 single example above has a 22% marginal rate but a 16.9% effective rate.",
      },
      {
        question: "Does this account for state tax?",
        answer:
          "No — the calculator handles federal only. State income tax is a separate calculation: 9 states have no income tax, 10 have flat rates, and the rest use brackets similar to federal. Your CPA or tax software handles both.",
      },
    ],
  },
  {
    slug: "bmi-us-standards-walkthrough",
    title: "BMI Calculator Walkthrough: US Standards, Imperial Units, and Real Limits",
    description:
      "How to use a BMI calculator with US imperial units (lbs/inches), interpret WHO/CDC categories, and understand BMI's known blind spots.",
    intro:
      "BMI is the easiest health metric to compute and the easiest to misinterpret. Drop your height and weight in, get a number, and the calculator flags one of five categories. Here's how to use the calculator with US units, what the CDC/WHO categories actually mean, and why a single BMI reading shouldn't drive a major health decision.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/health/bmi-calculator",
    relatedCalculatorLabel: "BMI calculator",
    sections: [
      {
        heading: "Step 1 — Enter height in inches and weight in pounds",
        body: [
          "Most US BMI calculators accept either feet/inches (e.g., 5'10\" = 70 inches) or total inches plus pounds. The formula is BMI = (weight_lbs / height_in²) × 703. The 703 factor converts the imperial inputs to the metric BMI scale.",
          "Example: a person 5'10\" (70 in) at 165 lbs has BMI = (165 / 70²) × 703 = 23.7. That falls in the \"normal weight\" range under both the WHO and CDC standard categories.",
        ],
      },
      {
        heading: "Step 2 — Read the WHO/CDC categories",
        body: [
          "The categories used by the WHO and CDC are: underweight (BMI under 18.5), normal weight (18.5–24.9), overweight (25.0–29.9), obesity class I (30.0–34.9), class II (35.0–39.9), and class III (40+). These are the standard US public health thresholds and what most insurance underwriters use.",
          "The 25.0 cutoff was set by WHO based on long-term mortality risk in adult populations of European descent. Asian-American Pacific Islander populations have higher cardiometabolic risk at lower BMIs, so some clinical guidelines (American Diabetes Association) screen for diabetes at BMI 23+ for AAPI patients.",
        ],
      },
      {
        heading: "Step 3 — Recognize BMI's blind spots",
        body: [
          "BMI doesn't distinguish muscle from fat. NFL running backs and CrossFit athletes routinely score \"obese\" by BMI. It also doesn't show fat distribution: visceral (abdominal) fat is much more strongly linked to cardiovascular risk than subcutaneous fat, and BMI can't see the difference.",
          "Better paired metrics: waist circumference (under 40\" men / under 35\" women per CDC), waist-to-hip ratio (under 0.90 men / under 0.85 women per WHO), and body fat percentage (10–22% men / 20–32% women, age-adjusted). Use BMI as a quick screen, not a diagnosis.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I use BMI for kids?",
        answer:
          "No — child BMI is interpreted as a percentile against age and sex (CDC growth charts). A BMI of 22 might be the 95th percentile for a 5-year-old (high) but the 50th percentile for a 17-year-old (normal). Use the CDC's BMI-for-age calculator instead.",
      },
      {
        question: "What about pregnancy?",
        answer:
          "Pre-pregnancy BMI sets the recommended weight gain range: 28–40 lbs for underweight (BMI under 18.5), 25–35 lbs for normal weight, 15–25 lbs for overweight, 11–20 lbs for class I obesity (per IOM/NAM guidelines). BMI during pregnancy itself isn't meaningful.",
      },
      {
        question: "Do athletes really get \"obese\" results?",
        answer:
          "Often, yes. A 6'1\", 230-lb linebacker has BMI 30.3 (class I obesity) but 8% body fat. For high-muscle individuals, body fat percentage is the more useful number — DEXA scan is the gold standard, but bioimpedance scales and skinfold calipers give reasonable estimates.",
      },
    ],
  },
  {
    slug: "retirement-social-security-401k",
    title: "Retirement Calculator Walkthrough: Social Security + 401(k) + IRA Together",
    description:
      "How to estimate US retirement income by combining Social Security, 401(k), and IRA withdrawals — with the safe withdrawal rate framework.",
    intro:
      "Estimating retirement income gets complicated because three separate streams converge at different ages. Social Security earliest at 62 (with permanent reduction), full retirement age 67 for those born after 1960, and delayed credits up to age 70. 401(k) and IRA withdrawals can start penalty-free at 59½, with Required Minimum Distributions kicking in at 73 under SECURE 2.0. Here's how to layer them in a calculator.",
    publishedAt: "2026-04-26",
    updatedAt: "2026-04-26",
    evergreen: true,
    relatedCalculatorPath: "/calculators/finance/retirement-calculator",
    relatedCalculatorLabel: "Retirement calculator",
    sections: [
      {
        heading: "Step 1 — Get your Social Security estimate from ssa.gov",
        body: [
          "Log into your my Social Security account at ssa.gov for your personalized benefit estimates at age 62, FRA (typically 67), and 70. The 2026 average benefit is roughly $1,950/month for retired workers, but high earners with 35 years of maximum-taxable earnings can hit $4,000+/month at FRA.",
          "Claiming at 62 reduces your benefit by 25–30% permanently. Delaying past FRA earns 8% per year up to age 70 — a guaranteed return that's hard to beat anywhere else. Married couples should also model survivor benefit strategy, often delaying the higher-earning spouse.",
        ],
      },
      {
        heading: "Step 2 — Project 401(k) and IRA balances at retirement",
        body: [
          "Use the calculator's compound growth feature with realistic assumptions: 7% nominal return for a 60/40 portfolio (per Vanguard's 10-year capital market expectations) and 2.5% inflation. Contribute current annual amounts plus expected increases.",
          "Example: $300,000 balance at age 50, contributing $24,000/year (2026 employee limit), at 7% nominal returns reaches roughly $1.04M at age 65. Add Social Security and you have a clearer income picture.",
        ],
      },
      {
        heading: "Step 3 — Apply the 4% safe withdrawal rate (and its caveats)",
        body: [
          "The Trinity Study and Bengen's 1994 paper found that 4% inflation-adjusted withdrawals from a 60/40 portfolio survived 30-year retirements in 95%+ of historical periods. $1M portfolio = $40,000 safe annual income, indexed to inflation.",
          "Modern updates (Wade Pfau, Michael Kitces) suggest 3.0–3.5% may be safer for current bond yields, with potential to flex up via the \"Guyton-Klinger guardrails\" approach. Add Social Security on top: $40K SWR + $30K Social Security at FRA = $70K gross retirement income, before state taxes and Medicare premiums.",
        ],
      },
    ],
    faq: [
      {
        question: "What if I want to retire before 59½?",
        answer:
          "Two main options: Rule of 55 (penalty-free 401(k) withdrawals if you leave the employer at age 55+ for that specific 401(k)), or 72(t) Substantially Equal Periodic Payments (SEPP) for IRA withdrawals at any age, computed via IRS-approved formulas. Both have strict rules — work with a CPA.",
      },
      {
        question: "How does Medicare factor in?",
        answer:
          "Medicare Part A is free at 65 if you've paid Medicare tax 40+ quarters. Parts B and D run $185+/month for higher-income retirees (IRMAA brackets), and a Medigap or Medicare Advantage plan adds $100–$300/month. Budget $400–$700/month per person for Medicare-related costs in retirement.",
      },
      {
        question: "What about Roth conversions before RMDs hit?",
        answer:
          "The window between retirement (say age 60) and RMD age (73) is often the optimal Roth conversion period — low income, time for tax-free compounding, and reduces future RMD burden. Run scenarios in the calculator with conversion amounts of $20K–$80K/year through that window.",
      },
    ],
  },
];

export function getBlogPosts(locale: Locale): EditorialEntry[] {
  return locale === "ko" ? koBlogPosts : enBlogPosts;
}

export function getGuides(locale: Locale): EditorialEntry[] {
  return locale === "ko" ? koGuides : enGuides;
}

export function getBlogPost(locale: Locale, slug: string): EditorialEntry | undefined {
  return getBlogPosts(locale).find((item) => item.slug === slug);
}

export function getGuide(locale: Locale, slug: string): EditorialEntry | undefined {
  return getGuides(locale).find((item) => item.slug === slug);
}
