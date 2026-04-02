import type { Locale } from "@/lib/i18n";

export type EditorialEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  updatedAt: string;
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
    description: "대출이나 할부를 비교할 때 월 부담과 총지출을 함께 봐야 하는 이유를 설명합니다.",
    intro: "월 납입금은 가장 먼저 눈에 들어오지만, 실제 부담은 총이자와 전체 상환기간까지 함께 봐야 더 정확하게 판단할 수 있습니다. 같은 월 납입액처럼 보여도 총비용은 크게 다를 수 있습니다.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "대출 계산기",
    sections: [
      { heading: "월 납입금이 전부가 아닌 이유", body: ["기간이 길어지면 월 납입금은 낮아 보이지만 총이자는 커질 수 있습니다.", "그래서 비슷한 월 부담의 선택지라도 총지출 차이를 꼭 비교해야 합니다."] },
      { heading: "비교할 때 함께 봐야 할 항목", body: ["월 납입금, 총이자, 상환기간, 초기 비용을 함께 보면 선택이 훨씬 현실적이 됩니다.", "한 항목만 보면 부담이 작아 보이는 조건에 끌리기 쉽습니다."] },
      { heading: "계산기를 실전 비교 도구로 쓰는 방법", body: ["금리나 기간을 한 단계씩 바꿔보며 어떤 값이 결과를 크게 바꾸는지 확인해보세요.", "이 과정이 실제 조건 비교에서 가장 도움이 됩니다."] },
    ],
    faq: [
      { question: "월 납입금이 같으면 아무거나 선택해도 되나요?", answer: "아닙니다. 총이자와 상환기간이 다르면 실제 부담은 크게 달라질 수 있습니다." },
      { question: "기간이 길수록 무조건 유리한가요?", answer: "월 부담은 낮아질 수 있지만 총비용은 커질 가능성이 높습니다." },
      { question: "대출 계산기로 바로 비교 가능한가요?", answer: "네. 금리와 기간을 바꿔가며 여러 시나리오를 비교해볼 수 있습니다." },
    ],
  },
  {
    slug: "how-to-compare-calculator-results",
    title: "계산기 결과를 한 번 더 비교해야 하는 이유",
    description: "하나의 결과만 보는 대신 여러 시나리오를 비교해야 실수 가능성을 줄일 수 있습니다.",
    intro: "계산기는 빠른 비교에 강점이 있습니다. 하지만 한 번 입력한 결과만 보고 판단하면 현실 조건을 놓칠 수 있어, 최소 두세 가지 시나리오를 함께 비교하는 습관이 중요합니다.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/math/percentage-calculator",
    relatedCalculatorLabel: "퍼센트 계산기",
    sections: [
      { heading: "왜 한 가지 시나리오만 보면 안 될까", body: ["입력값 하나가 바뀌어도 결과는 예상보다 크게 달라질 수 있습니다.", "그래서 낙관적, 기본, 보수적 가정을 나눠보는 것이 안전합니다."] },
      { heading: "비교할 때 기준을 맞추는 법", body: ["기준일, 단위, 세금 포함 여부처럼 비교 기준을 먼저 통일해야 합니다.", "기준이 다르면 숫자 자체보다 해석이 어긋날 수 있습니다."] },
      { heading: "계산기 결과를 판단으로 연결하기", body: ["결과는 결론이 아니라 검토용 시작점으로 보는 것이 좋습니다.", "공식 조건과 실제 비용을 마지막에 다시 확인해야 합니다."] },
    ],
    faq: [
      { question: "몇 가지 시나리오를 비교하면 좋나요?", answer: "보통 기본, 보수적, 낙관적 3가지 정도면 실용적입니다." },
      { question: "모든 계산기에 같은 방식이 필요한가요?", answer: "네. 금융, 건강, 날짜 계산처럼 성격이 다른 계산기라도 비교 습관은 도움이 됩니다." },
      { question: "결과가 비슷하면 하나만 봐도 되나요?", answer: "비슷해 보여도 기준이나 조건이 다르면 실제 의미는 달라질 수 있습니다." },
    ],
  },
  {
    slug: "loan-calculator-vs-mortgage-calculator",
    title: "대출 계산기와 주담대 계산기 차이 쉽게 이해하기",
    description: "월 납입금, 총이자, 상환기간을 비교할 때 어떤 계산기를 먼저 봐야 하는지 정리합니다.",
    intro:
      "대출 계산기와 주담대 계산기는 비슷해 보여도 쓰는 목적이 조금 다릅니다. 일반 대출은 금리와 기간에 따라 월 납입액을 빠르게 확인하는 데 강하고, 주담대 계산기는 원리금 구조를 비교하면서 집 구매 예산을 가늠하는 데 더 적합합니다.",
    updatedAt: "2026-04-01",
    relatedCalculatorPath: "/calculators/finance/mortgage-calculator",
    relatedCalculatorLabel: "주담대 계산기",
    sections: [
      {
        heading: "언제 일반 대출 계산기를 먼저 봐야 할까",
        body: [
          "신용대출, 마이너스통장, 자동차 대출처럼 집 구매와 직접 연결되지 않은 대출은 먼저 일반 대출 계산기로 접근하는 편이 편합니다. 원금, 금리, 기간만 넣어도 월 납입액과 총이자를 빠르게 볼 수 있기 때문입니다.",
          "특히 여러 금리 조건을 동시에 비교해야 할 때는 단순 구조의 계산기가 더 효율적입니다. 금리가 1%p만 달라져도 총이자 차이가 크게 벌어질 수 있어서, 먼저 큰 그림을 보는 용도로 적합합니다.",
        ],
      },
      {
        heading: "주담대 계산기가 더 필요한 순간",
        body: [
          "집 구매를 고민할 때는 취득세, 보유 비용, 대출 비중, 상환 방식까지 함께 생각하게 됩니다. 이때는 주담대 계산기가 더 유용합니다.",
          "특히 원리금균등과 원금균등의 차이를 비교하거나, 예상 월 상환액이 가계 예산 안에 들어오는지 확인할 때 도움이 됩니다. 계산 결과를 볼 때는 월 납입금 하나만 보지 말고 총이자와 상환 초반 부담도 같이 확인하는 것이 좋습니다.",
        ],
      },
      {
        heading: "결과를 읽을 때 자주 놓치는 포인트",
        body: [
          "많은 분들이 월 납입금만 보고 판단하지만, 실제 부담은 총이자와 상환기간에서 크게 달라집니다. 같은 월 납입금처럼 보여도 기간이 길면 총지출이 더 커질 수 있습니다.",
          "또한 계산기는 참고용이므로 실제 승인 금리, 상환 조건, 중도상환수수료는 금융사 조건과 다를 수 있습니다. 계산 결과는 사전 비교용으로 활용하고, 최종 결정 전에는 공식 조건을 다시 확인해야 합니다.",
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
];

const enBlogPosts: EditorialEntry[] = [

  {
    slug: "monthly-payment-vs-total-cost",
    title: "Why monthly payment is not the whole borrowing story",
    description: "A practical guide to comparing payment size, total interest, and repayment length before you choose a loan.",
    intro: "Monthly payment is usually the first number people notice, but total borrowing cost often tells the more important story. Two options can feel similar month to month while leading to very different total spending over time.",
    updatedAt: "2026-04-02",
    relatedCalculatorPath: "/calculators/finance/loan-calculator",
    relatedCalculatorLabel: "Loan Calculator",
    sections: [
      { heading: "Why payment size can be misleading", body: ["A longer term can make the payment look easier while increasing total interest.", "That is why a lower payment is not automatically the better option."] },
      { heading: "What to compare alongside the payment", body: ["Look at payment size, total interest, repayment length, and any upfront cost together.", "That gives you a more realistic comparison than a single monthly number."] },
      { heading: "How to use calculators for better comparisons", body: ["Change one input at a time, such as the rate or the term, and watch which factor shifts the result the most.", "That makes the calculator much more useful as a decision tool." ] },
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
    description: "A better way to use online calculators by checking optimistic, baseline, and conservative scenarios.",
    intro: "Online calculators are most useful when they help you compare possibilities instead of locking onto one number. Running a few realistic scenarios can reduce mistakes and make the result more useful in real life.",
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
    description: "A quick guide to reading monthly payment, total repayment, and interest results before you borrow.",
    intro:
      "Loan calculators and mortgage calculators look similar, but they answer slightly different questions. A basic loan calculator helps you estimate monthly payments quickly, while a mortgage calculator is better when you want to understand housing costs, longer repayment terms, and the bigger budget picture.",
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
    description: "When to use BMI, calorie, heart rate, and body-composition tools, and when to ask a professional instead.",
    intro:
      "BMI calculators are popular because they are simple. With only height and weight, you can get a quick estimate that helps frame a health conversation. The key is understanding what BMI does well and where it needs support from other measurements.",
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
    description: "Practical examples for discounts, date math, work hours, and everyday calculations.",
    intro:
      "Percentage and date calculators are some of the most practical tools on a calculator site. They help with shopping decisions, deadline planning, work schedules, and quick comparisons that would otherwise be easy to misread.",
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
