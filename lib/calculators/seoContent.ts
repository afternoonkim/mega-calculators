import type { Locale } from "@/lib/i18n";
import type { CalculatorDefinition } from "@/lib/calculators/data";

export type CalculatorSeoContent = {
  slug: string;
  audienceTitle: string;
  audienceIntro: string;
  audiences: string[];
  checksTitle: string;
  checks: string[];
  readingTitle: string;
  readingParagraphs: string[];
  mistakesTitle: string;
  mistakes: string[];
  scenariosTitle: string;
  scenarios: Array<{ title: string; description: string }>;
  relatedContentTitle: string;
  relatedContentIntro: string;
  relatedContent: Array<{ title: string; description: string; href: string; cta: string }>;
};

const enContent: Record<string, CalculatorSeoContent> = {
  "compound-interest-calculator": {
    slug: "compound-interest-calculator",
    audienceTitle: "When this compound interest calculator is most useful",
    audienceIntro:
      "This page works best when you are planning around regular saving or investing, not just checking a one-time return. It is especially useful before you set a savings goal or compare different contribution levels.",
    audiences: [
      "People building a long-term investing habit with monthly deposits.",
      "Families comparing how a college fund, emergency fund, or retirement account could grow over time.",
      "Investors testing conservative, moderate, and aggressive annual return assumptions before committing to a plan.",
    ],
    checksTitle: "What to check before you enter numbers",
    checks: [
      "Keep the rate realistic. A higher expected return can make the final balance look attractive, but it can also create a misleading plan if the assumption is too optimistic.",
      "Decide whether your monthly contribution is stable or likely to change. A fixed monthly amount is great for clean comparisons, but real contributions often rise with income.",
      "Think in after-tax, after-fee terms when the calculator result will shape a real-life investment decision.",
    ],
    readingTitle: "How to read the result",
    readingParagraphs: [
      "Start with the ending balance, but do not stop there. Compare how much of the final amount came from your own deposits and how much came from growth. That difference is what makes compounding meaningful.",
      "Next, compare the effect of time. Many users focus on rate alone, but the longer timeline is often the more powerful variable. Extending the period by a few years can change the outcome more than chasing a slightly higher return.",
    ],
    mistakesTitle: "Common mistakes people make",
    mistakes: [
      "Using a high annual return without testing a lower scenario too.",
      "Assuming a contribution plan will stay identical for decades.",
      "Comparing only the final balance without checking the total amount contributed.",
    ],
    scenariosTitle: "Practical scenarios to test",
    scenarios: [
      {
        title: "Monthly ETF investing plan",
        description: "Compare what happens when you raise a monthly contribution by a small amount rather than trying to increase your expected return.",
      },
      {
        title: "Retirement catch-up plan",
        description: "Model a shorter timeline with higher contributions to see whether an aggressive savings plan can close the gap.",
      },
      {
        title: "Savings goal comparison",
        description: "Run two time horizons side by side to understand whether your target depends more on patience or on contribution size.",
      },
    ],
    relatedContentTitle: "Continue learning before you rely on the number",
    relatedContentIntro:
      "These supporting pages help turn a projection into a better decision. Use them when you want more context than a single calculator result can provide.",
    relatedContent: [
      {
        title: "How to compare loan and mortgage estimates",
        description: "Useful when you want to compare investing growth with borrowing costs or trade-offs in a household budget.",
        href: "/blog/loan-calculator-vs-mortgage-calculator",
        cta: "Read article →",
      },
      {
        title: "How to use a mortgage calculator before house hunting",
        description: "A practical guide to testing affordability, rate ranges, and repayment structure before making a larger financial decision.",
        href: "/guides/mortgage-calculator-checklist",
        cta: "Open guide →",
      },
    ],
  },
  "mortgage-calculator": {
    slug: "mortgage-calculator",
    audienceTitle: "When this mortgage calculator gives the most value",
    audienceIntro:
      "A mortgage calculator is most helpful early in the decision process, before lender quotes narrow your options. It helps you move from a home-price idea to a payment-based budget.",
    audiences: [
      "Buyers comparing more than one home price or down-payment option.",
      "Households trying to test whether a monthly payment fits alongside taxes, insurance, and other fixed costs.",
      "Owners considering refinance scenarios and wanting a quick principal-and-interest estimate before speaking to a lender.",
    ],
    checksTitle: "What to check before you enter numbers",
    checks: [
      "Use a realistic down payment and do not forget that the real monthly cost may also include taxes, insurance, and HOA fees.",
      "Run at least two rate scenarios. Mortgage affordability can change quickly with small rate moves.",
      "Be clear about the loan term you want to compare. A lower payment on a longer term is not always the cheaper choice overall.",
    ],
    readingTitle: "How to read the result",
    readingParagraphs: [
      "The payment number is important, but the loan amount and total interest deserve equal attention. A mortgage that feels manageable month to month may still become expensive over the full term.",
      "Use the result as a planning checkpoint. If the number looks close to your comfort limit, test a larger down payment, a lower home price, or a shorter term before assuming the plan works.",
    ],
    mistakesTitle: "Common mistakes people make",
    mistakes: [
      "Judging affordability by principal and interest alone.",
      "Testing only one interest rate.",
      "Ignoring how a small change in down payment can affect both borrowing size and long-term interest.",
    ],
    scenariosTitle: "Practical scenarios to test",
    scenarios: [
      {
        title: "First-time buyer budget range",
        description: "Check what happens to the payment when the home price changes but the down payment stays the same.",
      },
      {
        title: "Bigger down payment comparison",
        description: "See whether an extra cash contribution creates meaningful monthly relief or only a small difference.",
      },
      {
        title: "Refinance reality check",
        description: "Compare a shorter term and a lower rate against your current payment to see if the refinance goal makes sense.",
      },
    ],
    relatedContentTitle: "Related reading that helps you compare more clearly",
    relatedContentIntro:
      "These pages help you move from a payment estimate to a better borrowing decision.",
    relatedContent: [
      {
        title: "How to compare loan and mortgage estimates",
        description: "A quick article that explains when a general loan calculator is enough and when a mortgage-specific view matters more.",
        href: "/blog/loan-calculator-vs-mortgage-calculator",
        cta: "Read article →",
      },
      {
        title: "How to use a mortgage calculator before house hunting",
        description: "A step-by-step checklist for testing payment size, rates, and repayment structure before you shop seriously.",
        href: "/guides/mortgage-calculator-checklist",
        cta: "Open guide →",
      },
    ],
  },
  "bmi-calculator": {
    slug: "bmi-calculator",
    audienceTitle: "When this BMI calculator is a helpful starting point",
    audienceIntro:
      "BMI is best used as a screening tool, not a final judgment. It can help frame a health conversation, but the number makes more sense when you connect it to habits, body composition, and trend over time.",
    audiences: [
      "People checking weight status before starting a nutrition or exercise plan.",
      "Users tracking change over time and looking for a simple, repeatable baseline.",
      "Anyone who wants a quick reference number before reviewing other metrics such as waist size, body fat, or activity level.",
    ],
    checksTitle: "What to check before you enter numbers",
    checks: [
      "Make sure height and weight are current. Old numbers create false reassurance or unnecessary concern.",
      "Remember that muscular builds, age, and body-fat distribution can make BMI less informative on its own.",
      "Use the result as part of a broader picture rather than a label that defines your health by itself.",
    ],
    readingTitle: "How to read the result",
    readingParagraphs: [
      "A BMI result works best as a direction signal. If it lands outside the expected range, use that as a cue to examine habits, nutrition quality, activity, and other measurements rather than reacting to the number alone.",
      "Trend matters more than a single reading. A stable improvement over time can be more meaningful than chasing a perfect category in one week.",
    ],
    mistakesTitle: "Common mistakes people make",
    mistakes: [
      "Treating BMI as a complete measure of health or fitness.",
      "Ignoring waist size, body composition, or overall lifestyle context.",
      "Checking too often and reacting to small changes that do not reflect a real trend.",
    ],
    scenariosTitle: "Practical scenarios to test",
    scenarios: [
      {
        title: "Starting a weight-loss plan",
        description: "Use BMI as a baseline, then compare future check-ins over several weeks instead of day to day.",
      },
      {
        title: "Post-checkup follow-up",
        description: "Pair the BMI result with blood pressure, waist size, or other markers to build a more useful health picture.",
      },
      {
        title: "Lifestyle review",
        description: "Use the number to decide whether you need a closer look at activity, diet quality, or long-term weight trend.",
      },
    ],
    relatedContentTitle: "Related reading for better health context",
    relatedContentIntro:
      "These pages help you use BMI as a starting point instead of the whole answer.",
    relatedContent: [
      {
        title: "How to choose the right health calculator",
        description: "A short article on when BMI is useful and when other health tools provide better context.",
        href: "/blog/when-bmi-calculator-is-useful",
        cta: "Read article →",
      },
      {
        title: "How to estimate calorie needs and compare fitness goals",
        description: "Helpful when your next question is how to connect a body-weight result with a realistic eating plan.",
        href: "/guides/how-to-read-calorie-results",
        cta: "Open guide →",
      },
    ],
  },
  "age-calculator": {
    slug: "age-calculator",
    audienceTitle: "When an age calculator is more useful than mental math",
    audienceIntro:
      "An age calculator becomes especially helpful when you need exact years, months, or days for forms, eligibility checks, milestones, or date comparisons. It is also useful when two dates are close and a manual count is easy to misread.",
    audiences: [
      "People checking legal, school, work, or account eligibility by exact age.",
      "Parents and caregivers tracking birthdays and age milestones.",
      "Users comparing an event date with a birth date and needing a cleaner answer than quick mental math can provide.",
    ],
    checksTitle: "What to check before you enter numbers",
    checks: [
      "Use the correct birth date format and double-check the comparison date if you are not calculating from today.",
      "Know whether you need just years or a more exact result that includes months and days.",
      "For official requirements, confirm whether the rule is based on age reached by a specific deadline date.",
    ],
    readingTitle: "How to read the result",
    readingParagraphs: [
      "For everyday use, the years value is often enough. For deadlines, benefits, or enrollment cutoffs, the months and days matter more because a small date difference can change the answer.",
      "The most practical use is clarity. Instead of estimating whether a person is almost a certain age, you can quickly check the exact difference and avoid date mistakes.",
    ],
    mistakesTitle: "Common mistakes people make",
    mistakes: [
      "Counting only the birth year and ignoring whether the birthday has already passed.",
      "Using today's date when the real comparison depends on a future or past deadline.",
      "Confusing an age calculation with a general date-difference calculation when the question is really about eligibility or milestone timing.",
    ],
    scenariosTitle: "Practical scenarios to test",
    scenarios: [
      {
        title: "School or program eligibility",
        description: "Check exact age on a cutoff date rather than relying on the current date.",
      },
      {
        title: "Birthday countdown planning",
        description: "Use the result to measure how close someone is to the next age milestone.",
      },
      {
        title: "Record or form verification",
        description: "Confirm the precise age for medical, travel, or account paperwork where approximate age is not enough.",
      },
    ],
    relatedContentTitle: "Related reading for everyday date math",
    relatedContentIntro:
      "These pages help when your question expands from age alone to broader date and percentage tasks.",
    relatedContent: [
      {
        title: "Simple ways to use percentage and time calculators",
        description: "A practical article on using everyday calculation tools for deadlines, discounts, schedules, and comparisons.",
        href: "/blog/everyday-percent-and-date-calculators",
        cta: "Read article →",
      },
      {
        title: "How to use date and hours calculators for work schedules",
        description: "Useful when you need to turn an age or date check into a broader timeline or planning task.",
        href: "/guides/date-calculator-for-schedules",
        cta: "Open guide →",
      },
    ],
  },
  "percentage-calculator": {
    slug: "percentage-calculator",
    audienceTitle: "When a percentage calculator saves time and prevents mistakes",
    audienceIntro:
      "Percentage math looks simple until you have to compare multiple discounts, rate changes, or shares of a total quickly. This calculator is most useful when you want the answer fast and do not want to risk a small arithmetic mistake.",
    audiences: [
      "Shoppers comparing a discount with the final price before buying.",
      "Workers or students checking score changes, markups, or growth rates.",
      "Anyone breaking a number into portions of a total for budgeting, pricing, or planning.",
    ],
    checksTitle: "What to check before you enter numbers",
    checks: [
      "Be clear about the base number. A percentage means very different things depending on what the reference value is.",
      "Know whether you are solving for the percentage itself, the portion amount, or the original total.",
      "For money decisions, verify whether taxes, fees, or coupon stacking change the real final amount.",
    ],
    readingTitle: "How to read the result",
    readingParagraphs: [
      "The answer becomes useful only when you connect it to the original amount. A 15 percent change on a small purchase feels very different from a 15 percent change on a monthly budget category.",
      "If you are comparing two offers, calculate both the percentage and the final dollar effect. That keeps you from being impressed by a large percentage that does not save much in practice.",
    ],
    mistakesTitle: "Common mistakes people make",
    mistakes: [
      "Applying the right percentage to the wrong base number.",
      "Comparing percentages without checking the actual dollar difference.",
      "Forgetting that multiple discounts often apply sequentially, not all at once.",
    ],
    scenariosTitle: "Practical scenarios to test",
    scenarios: [
      {
        title: "Sale price reality check",
        description: "Compare a discount percentage with the true amount saved before assuming a deal is strong.",
      },
      {
        title: "Budget share planning",
        description: "See what percent of your total spending goes to one category and whether it fits your target.",
      },
      {
        title: "Performance or score change",
        description: "Calculate how much a result improved or fell, then decide whether the change is meaningful.",
      },
    ],
    relatedContentTitle: "Related reading for daily calculation tasks",
    relatedContentIntro:
      "These pages connect percentage math with everyday date, time, and decision-making tasks.",
    relatedContent: [
      {
        title: "Simple ways to use percentage and time calculators",
        description: "A practical article with examples for discounts, deadline planning, and quick daily comparisons.",
        href: "/blog/everyday-percent-and-date-calculators",
        cta: "Read article →",
      },
      {
        title: "How to use date and hours calculators for work schedules",
        description: "Useful when a percentage question becomes part of a broader schedule or productivity problem.",
        href: "/guides/date-calculator-for-schedules",
        cta: "Open guide →",
      },
    ],
  },
};

const koContent: Record<string, CalculatorSeoContent> = {
  "compound-interest-calculator": {
    slug: "compound-interest-calculator",
    audienceTitle: "복리 계산기가 특히 도움이 되는 상황",
    audienceIntro:
      "복리 계산기는 단순히 수익률만 확인하는 도구가 아니라, 시간과 적립식 투자 습관이 결과를 어떻게 바꾸는지 보는 데 더 큰 가치가 있습니다. 저축 목표를 세우기 전이나 투자 계획을 비교할 때 특히 유용합니다.",
    audiences: [
      "매달 일정 금액을 꾸준히 투자하거나 저축하는 사람.",
      "교육비, 비상자금, 은퇴자금처럼 장기 목표를 숫자로 가늠해보고 싶은 가정.",
      "보수적·중립적·공격적 수익률 가정을 나눠서 비교하고 싶은 투자자.",
    ],
    checksTitle: "입력 전에 먼저 확인하면 좋은 점",
    checks: [
      "수익률은 너무 낙관적으로 잡지 않는 편이 좋습니다. 높은 수익률은 결과를 보기 좋게 만들지만 실제 계획을 왜곡할 수 있습니다.",
      "매달 적립액이 앞으로도 유지될지 생각해보세요. 소득이 늘면 적립액이 커질 수 있고, 반대로 줄어들 수도 있습니다.",
      "실제 투자 판단에 사용할 때는 세금과 수수료까지 고려한 체감 수익률을 함께 생각하는 편이 안전합니다.",
    ],
    readingTitle: "결과를 읽는 방법",
    readingParagraphs: [
      "최종 금액만 보고 끝내지 말고, 그중에서 내가 넣은 돈과 복리로 불어난 금액이 각각 얼마나 되는지 함께 보는 것이 좋습니다. 이 차이가 바로 복리의 핵심입니다.",
      "또 하나 중요한 것은 시간입니다. 많은 분들이 수익률만 보지만, 실제로는 투자 기간이 더 큰 차이를 만드는 경우가 많습니다. 몇 년을 더 유지하느냐가 결과를 크게 바꿀 수 있습니다.",
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "높은 수익률만 넣고 낮은 시나리오는 같이 보지 않는 것.",
      "수십 년 동안 적립액이 똑같을 것이라고 가정하는 것.",
      "최종 금액만 비교하고 총 납입액을 함께 보지 않는 것.",
    ],
    scenariosTitle: "직접 비교해보기 좋은 시나리오",
    scenarios: [
      { title: "월 적립식 ETF 투자", description: "수익률을 높이는 것보다 매달 적립액을 조금 올리는 편이 결과에 얼마나 큰 차이를 주는지 비교해볼 수 있습니다." },
      { title: "은퇴 준비 속도 점검", description: "남은 기간이 짧을 때 적립액을 높이면 목표에 얼마나 가까워지는지 가늠할 수 있습니다." },
      { title: "목표 금액 달성 시점 비교", description: "기간을 바꾸거나 적립액을 바꿔서 목표 달성 가능성을 더 현실적으로 볼 수 있습니다." },
    ],
    relatedContentTitle: "관련 글과 가이드",
    relatedContentIntro: "계산 결과를 실제 판단으로 연결할 때는 아래 콘텐츠를 같이 보면 더 도움이 됩니다.",
    relatedContent: [
      { title: "대출 계산기와 주담대 계산기 차이 쉽게 이해하기", description: "투자 성장과 대출 비용을 함께 비교해야 할 때 읽기 좋은 글입니다.", href: "/blog/loan-calculator-vs-mortgage-calculator", cta: "글 보기 →" },
      { title: "주담대 계산기 사용 전 꼭 확인할 5가지", description: "큰 금융 결정을 앞두고 월 부담과 총비용을 같이 보는 방법을 정리한 가이드입니다.", href: "/guides/mortgage-calculator-checklist", cta: "가이드 보기 →" },
    ],
  },
  "mortgage-calculator": {
    slug: "mortgage-calculator",
    audienceTitle: "주담대 계산기가 가장 필요한 순간",
    audienceIntro:
      "주담대 계산기는 은행 상담 전에 큰 그림을 잡는 데 가장 유용합니다. 집값 중심으로 생각하던 기준을 실제 월 상환액 중심의 예산으로 바꾸는 데 도움이 됩니다.",
    audiences: [
      "여러 집값이나 계약금 시나리오를 비교하고 싶은 예비 매수자.",
      "원리금 부담이 다른 고정비와 함께 감당 가능한지 확인하고 싶은 가정.",
      "대환대출이나 재융자를 검토하면서 기본 월 납입액을 먼저 보고 싶은 사용자.",
    ],
    checksTitle: "입력 전에 먼저 확인하면 좋은 점",
    checks: [
      "계약금은 현실적으로 넣고, 실제 월 부담에는 세금·보험료·관리비 같은 항목이 더해질 수 있다는 점을 함께 생각해야 합니다.",
      "금리는 한 가지 수치만 넣지 말고 두세 가지 시나리오를 같이 비교하는 편이 좋습니다.",
      "기간이 길어지면 월 납입액은 낮아 보여도 총이자는 커질 수 있으니 기간별 차이를 꼭 봐야 합니다.",
    ],
    readingTitle: "결과를 읽는 방법",
    readingParagraphs: [
      "월 상환액은 가장 먼저 보게 되는 수치지만, 대출 원금과 총이자도 같이 봐야 합니다. 월 납입액이 버틸 만해 보여도 장기적으로는 부담이 더 커질 수 있습니다.",
      "결과는 확정값이 아니라 비교 기준으로 보는 편이 좋습니다. 숫자가 애매하게 느껴진다면 계약금을 늘리거나 집값을 낮추는 시나리오를 다시 돌려보세요.",
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "원리금만 보고 실제 주거비 전체를 생각하지 않는 것.",
      "금리를 한 가지 값으로만 보는 것.",
      "계약금을 조금만 바꿔도 결과가 크게 달라질 수 있는데 이를 비교하지 않는 것.",
    ],
    scenariosTitle: "직접 비교해보기 좋은 시나리오",
    scenarios: [
      { title: "첫 주택 예산 점검", description: "집값은 유지하고 계약금만 바꿔서 월 납입액이 얼마나 달라지는지 볼 수 있습니다." },
      { title: "계약금 확대 효과 비교", description: "초기 자금을 더 넣는 것이 월 부담과 총이자에 얼마나 도움이 되는지 확인할 수 있습니다." },
      { title: "대환대출 현실 점검", description: "현재 부담과 새 조건을 비교해서 대환의 실익이 있는지 살펴볼 수 있습니다." },
    ],
    relatedContentTitle: "같이 보면 좋은 글과 가이드",
    relatedContentIntro: "월 납입액만 보는 것보다 아래 콘텐츠와 함께 비교하면 판단이 더 쉬워집니다.",
    relatedContent: [
      { title: "대출 계산기와 주담대 계산기 차이 쉽게 이해하기", description: "일반 대출 계산기와 주담대 계산기를 언제 구분해서 써야 하는지 설명하는 글입니다.", href: "/blog/loan-calculator-vs-mortgage-calculator", cta: "글 보기 →" },
      { title: "주담대 계산기 사용 전 꼭 확인할 5가지", description: "예산, 금리, 상환방식 순서로 주담대 결과를 읽는 체크리스트입니다.", href: "/guides/mortgage-calculator-checklist", cta: "가이드 보기 →" },
    ],
  },
  "bmi-calculator": {
    slug: "bmi-calculator",
    audienceTitle: "BMI 계산기를 출발점으로 쓰면 좋은 경우",
    audienceIntro:
      "BMI는 건강 상태를 단번에 결론내리는 숫자가 아니라, 체중 상태를 빠르게 점검하는 출발점에 가깝습니다. 생활 습관을 점검하기 전에 기준점을 잡고 싶을 때 특히 유용합니다.",
    audiences: [
      "체중 관리나 운동 계획을 시작하기 전에 현재 상태를 빠르게 보고 싶은 사람.",
      "몇 주 또는 몇 달 간격으로 변화 추세를 확인하고 싶은 사람.",
      "허리둘레, 체지방률 같은 다른 건강 지표와 함께 참고할 기준 수치가 필요한 사람.",
    ],
    checksTitle: "입력 전에 먼저 확인하면 좋은 점",
    checks: [
      "키와 몸무게는 가능한 한 최근 수치를 넣는 편이 좋습니다.",
      "근육량이 많거나 체형 특성이 뚜렷하면 BMI 하나만으로 해석하기 어렵다는 점을 기억하세요.",
      "BMI는 건강 상태를 단정하는 숫자가 아니라 추가 확인이 필요한지 보는 참고값으로 이해하는 것이 좋습니다.",
    ],
    readingTitle: "결과를 읽는 방법",
    readingParagraphs: [
      "결과는 방향을 알려주는 신호로 보는 것이 좋습니다. 기대보다 높거나 낮게 나왔다면 숫자 하나에 반응하기보다 식습관, 활동량, 다른 건강 지표를 함께 점검해보세요.",
      "또한 하루 단위보다 추세가 더 중요합니다. 일정 기간 동안 천천히 개선되는 흐름이 있는지가 실제 생활에서는 더 의미 있습니다.",
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "BMI를 건강 전체의 결론처럼 받아들이는 것.",
      "허리둘레, 체지방률, 생활 습관 같은 맥락을 함께 보지 않는 것.",
      "너무 자주 확인하면서 작은 변화에 과하게 반응하는 것.",
    ],
    scenariosTitle: "직접 비교해보기 좋은 시나리오",
    scenarios: [
      { title: "체중 관리 시작 전 기준점", description: "현재 BMI를 기준으로 두고 몇 주 뒤 다시 비교해 생활 습관 변화가 어떤 흐름을 만드는지 확인할 수 있습니다." },
      { title: "건강검진 이후 보조 확인", description: "혈압, 허리둘레 같은 수치와 함께 보면 BMI 결과를 더 현실적으로 해석할 수 있습니다." },
      { title: "생활 패턴 점검", description: "BMI 수치를 계기로 활동량이나 식습관을 다시 살펴볼 필요가 있는지 판단할 수 있습니다." },
    ],
    relatedContentTitle: "같이 보면 좋은 글과 가이드",
    relatedContentIntro: "BMI를 숫자 하나로 끝내지 않고 더 넓게 이해하고 싶다면 아래 콘텐츠를 함께 보세요.",
    relatedContent: [
      { title: "BMI 계산기는 언제 참고하면 좋을까", description: "BMI를 어디까지 참고하고 어떤 경우에 보조 지표가 필요한지 설명하는 글입니다.", href: "/blog/when-bmi-calculator-is-useful", cta: "글 보기 →" },
      { title: "칼로리 계산 결과를 해석하는 방법", description: "BMI 결과 이후 식단과 활동량을 어떻게 연결해볼지 정리한 가이드입니다.", href: "/guides/how-to-read-calorie-results", cta: "가이드 보기 →" },
    ],
  },
  "age-calculator": {
    slug: "age-calculator",
    audienceTitle: "나이 계산기가 특히 편한 상황",
    audienceIntro:
      "나이 계산기는 단순히 몇 살인지 확인하는 도구를 넘어, 특정 기준일 기준 정확한 나이를 확인해야 할 때 더 큰 도움이 됩니다. 직접 계산하기 애매한 경우에 실수를 줄여줍니다.",
    audiences: [
      "서류, 신청, 등록 같은 과정에서 특정 날짜 기준 정확한 나이가 필요한 사람.",
      "생일이나 나이 차이를 기준으로 일정과 기념일을 확인하고 싶은 사람.",
      "오늘 기준이 아니라 과거·미래 특정 날짜 기준 나이를 알고 싶은 사람.",
    ],
    checksTitle: "입력 전에 먼저 확인하면 좋은 점",
    checks: [
      "생년월일 형식이 정확한지 확인하세요.",
      "오늘 기준이 아니라면 비교할 날짜를 올바르게 넣는 것이 중요합니다.",
      "단순 연령만 필요한지, 개월·일수까지 포함한 정확한 값이 필요한지 먼저 생각하면 결과 해석이 쉬워집니다.",
    ],
    readingTitle: "결과를 읽는 방법",
    readingParagraphs: [
      "일상적인 상황에서는 연 단위 나이만으로 충분한 경우가 많지만, 마감일이나 자격 기준을 확인할 때는 개월과 일수 차이가 실제 판단에 영향을 줄 수 있습니다.",
      "핵심은 추정이 아니라 정확성입니다. 생일이 지났는지, 특정 기준일까지 몇 개월 차이가 나는지를 빠르게 확인할 수 있다는 점이 실용적입니다.",
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "출생연도만 보고 대략적인 나이로 판단하는 것.",
      "실제 기준일이 있는데도 오늘 날짜로 계산하는 것.",
      "나이 계산 문제를 날짜 차이 계산 문제와 혼동하는 것.",
    ],
    scenariosTitle: "직접 비교해보기 좋은 시나리오",
    scenarios: [
      { title: "지원 자격 확인", description: "특정 마감일 기준으로 나이를 계산해서 신청 가능 여부를 확인할 수 있습니다." },
      { title: "생일 전후 일정 확인", description: "다음 생일까지 얼마나 남았는지, 특정 나이가 되는 시점을 가늠할 수 있습니다." },
      { title: "서류 기입 확인", description: "정확한 나이가 필요한 문서 작성이나 기록 확인에 도움이 됩니다." },
    ],
    relatedContentTitle: "같이 보면 좋은 글과 가이드",
    relatedContentIntro: "나이 계산에서 더 넓은 일정 계산으로 넘어가고 싶다면 아래 콘텐츠를 함께 보세요.",
    relatedContent: [
      { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "일상 속 날짜·퍼센트 계산 사례를 묶어 설명한 글입니다.", href: "/blog/everyday-percent-and-date-calculators", cta: "글 보기 →" },
      { title: "날짜 차이 계산기로 일정 계산하기", description: "기준일, 마감일, 일정 계획까지 연결해서 보는 방법을 정리한 가이드입니다.", href: "/guides/date-calculator-for-schedules", cta: "가이드 보기 →" },
    ],
  },
  "percentage-calculator": {
    slug: "percentage-calculator",
    audienceTitle: "퍼센트 계산기가 시간을 아껴주는 상황",
    audienceIntro:
      "퍼센트 계산은 쉬워 보이지만 할인율, 비중, 증감률을 빠르게 여러 번 비교해야 할 때 의외로 실수가 잦습니다. 이 계산기는 빠르게 확인하고 싶을 때 특히 실용적입니다.",
    audiences: [
      "쇼핑할 때 할인율과 실제 절약 금액을 바로 비교하고 싶은 사람.",
      "예산, 점수, 매출 비중처럼 전체 대비 비율을 빠르게 확인하고 싶은 사람.",
      "증가율이나 감소율을 손쉽게 계산해 변화 폭을 판단하고 싶은 사람.",
    ],
    checksTitle: "입력 전에 먼저 확인하면 좋은 점",
    checks: [
      "기준이 되는 원래 값이 무엇인지 먼저 분명히 해야 합니다.",
      "퍼센트 자체를 구하는지, 특정 퍼센트에 해당하는 값을 구하는지 목적을 구분하면 해석이 쉬워집니다.",
      "금액 계산에서는 세금, 수수료, 쿠폰 중복 적용 여부까지 함께 봐야 실제 체감과 맞습니다.",
    ],
    readingTitle: "결과를 읽는 방법",
    readingParagraphs: [
      "퍼센트 값만 보는 것보다 실제 금액이나 실제 차이와 함께 보는 것이 중요합니다. 같은 10%라도 기준 금액이 다르면 체감 차이가 크게 달라집니다.",
      "두 가지 선택지를 비교할 때는 퍼센트와 실제 절약액을 함께 확인해야 과장된 숫자에 흔들리지 않게 됩니다.",
    ],
    mistakesTitle: "자주 하는 실수",
    mistakes: [
      "기준이 되는 원래 값을 잘못 잡는 것.",
      "퍼센트만 비교하고 실제 차이를 보지 않는 것.",
      "여러 할인이나 인상 조건이 순차 적용된다는 점을 놓치는 것.",
    ],
    scenariosTitle: "직접 비교해보기 좋은 시나리오",
    scenarios: [
      { title: "할인 행사 비교", description: "할인율이 커 보여도 실제 절약 금액이 얼마나 되는지 확인할 수 있습니다." },
      { title: "예산 비중 점검", description: "전체 지출 중 특정 항목이 차지하는 비율이 목표 범위 안에 있는지 확인할 수 있습니다." },
      { title: "성적·실적 변화 확인", description: "얼마나 좋아졌는지 혹은 줄었는지 비율로 보면서 변화의 크기를 판단할 수 있습니다." },
    ],
    relatedContentTitle: "같이 보면 좋은 글과 가이드",
    relatedContentIntro: "퍼센트 계산을 일상 속 다른 계산과 함께 쓰고 싶다면 아래 콘텐츠가 도움이 됩니다.",
    relatedContent: [
      { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "할인율, 날짜 차이, 근무 시간처럼 자주 쓰는 예시를 모은 글입니다.", href: "/blog/everyday-percent-and-date-calculators", cta: "글 보기 →" },
      { title: "날짜 차이 계산기로 일정 계산하기", description: "퍼센트 계산과 함께 일정 계획이나 마감일 계산이 필요할 때 참고하기 좋은 가이드입니다.", href: "/guides/date-calculator-for-schedules", cta: "가이드 보기 →" },
    ],
  },
};

type RelatedLink = {
  name: string;
  href: string;
};

const categoryEditorial: Record<string, {
  blog: { en: { title: string; description: string; href: string }; ko: { title: string; description: string; href: string } };
  guide: { en: { title: string; description: string; href: string }; ko: { title: string; description: string; href: string } };
}> = {
  finance: {
    blog: {
      en: { title: "How to compare loan and mortgage estimates", description: "Useful when you want more context than a single payment result and need to compare borrowing options clearly.", href: "/blog/loan-calculator-vs-mortgage-calculator" },
      ko: { title: "대출 계산기와 주담대 계산기 차이 쉽게 이해하기", description: "대출 비용을 비교할 때 어떤 계산기를 먼저 봐야 하는지 정리한 글입니다.", href: "/blog/loan-calculator-vs-mortgage-calculator" },
    },
    guide: {
      en: { title: "How to use a mortgage calculator before house hunting", description: "A practical checklist for testing affordability, rate ranges, and repayment structure.", href: "/guides/mortgage-calculator-checklist" },
      ko: { title: "주담대 계산기 사용 전 꼭 확인할 5가지", description: "예산과 금리, 상환방식을 어떤 순서로 확인하면 좋은지 정리한 가이드입니다.", href: "/guides/mortgage-calculator-checklist" },
    },
  },
  health: {
    blog: {
      en: { title: "How to choose the right health calculator", description: "A quick article on when BMI and other health tools are useful and how to interpret them more carefully.", href: "/blog/when-bmi-calculator-is-useful" },
      ko: { title: "BMI 계산기는 언제 참고하면 좋을까", description: "BMI 수치를 어디까지 참고해야 하는지 설명한 건강 계산기 글입니다.", href: "/blog/when-bmi-calculator-is-useful" },
    },
    guide: {
      en: { title: "How to estimate calorie needs and compare fitness goals", description: "Helpful when you want to connect a basic result with a realistic plan.", href: "/guides/how-to-read-calorie-results" },
      ko: { title: "칼로리 계산 결과를 해석하는 방법", description: "칼로리 수치를 유지·감량·증량 계획과 연결하는 데 도움이 되는 가이드입니다.", href: "/guides/how-to-read-calorie-results" },
    },
  },
  time: {
    blog: {
      en: { title: "Simple ways to use percentage and time calculators", description: "Useful when a simple date or time result turns into a schedule or planning question.", href: "/blog/everyday-percent-and-date-calculators" },
      ko: { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "일정과 날짜 차이를 실생활에서 활용하는 예시를 모은 글입니다.", href: "/blog/everyday-percent-and-date-calculators" },
    },
    guide: {
      en: { title: "How to use date and hours calculators for work schedules", description: "A practical guide to turning date math into a more realistic schedule.", href: "/guides/date-calculator-for-schedules" },
      ko: { title: "날짜 차이 계산기로 일정 계산하기", description: "마감일과 기준일을 더 정확히 계산하는 데 도움이 되는 가이드입니다.", href: "/guides/date-calculator-for-schedules" },
    },
  },
  math: {
    blog: {
      en: { title: "Simple ways to use percentage and time calculators", description: "A practical article with examples for discounts, comparisons, and daily math tasks.", href: "/blog/everyday-percent-and-date-calculators" },
      ko: { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "할인율, 비교, 일정 계산까지 자주 찾는 예시를 정리한 글입니다.", href: "/blog/everyday-percent-and-date-calculators" },
    },
    guide: {
      en: { title: "How to use date and hours calculators for work schedules", description: "Useful when percentage math is part of a broader planning task.", href: "/guides/date-calculator-for-schedules" },
      ko: { title: "날짜 차이 계산기로 일정 계산하기", description: "퍼센트와 날짜 계산을 함께 활용해야 할 때 참고하기 좋은 가이드입니다.", href: "/guides/date-calculator-for-schedules" },
    },
  },
  "unit-converters": {
    blog: {
      en: { title: "Simple ways to use percentage and time calculators", description: "A practical article that shows how small unit or rate mistakes can affect everyday calculations.", href: "/blog/everyday-percent-and-date-calculators" },
      ko: { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "단위와 기준값을 헷갈릴 때 왜 계산기를 활용하면 좋은지 설명하는 글입니다.", href: "/blog/everyday-percent-and-date-calculators" },
    },
    guide: {
      en: { title: "How to use date and hours calculators for work schedules", description: "Useful when conversion tasks are part of a schedule, travel, or planning workflow.", href: "/guides/date-calculator-for-schedules" },
      ko: { title: "날짜 차이 계산기로 일정 계산하기", description: "변환 결과를 일정이나 계획과 연결해야 할 때 참고하기 좋은 가이드입니다.", href: "/guides/date-calculator-for-schedules" },
    },
  },
  life: {
    blog: {
      en: { title: "Simple ways to use percentage and time calculators", description: "A practical article that connects everyday calculator tasks with real-life choices and deadlines.", href: "/blog/everyday-percent-and-date-calculators" },
      ko: { title: "퍼센트와 날짜 계산기를 일상에서 쓰는 방법", description: "생활 계산을 더 실용적으로 쓰는 예시를 담은 글입니다.", href: "/blog/everyday-percent-and-date-calculators" },
    },
    guide: {
      en: { title: "How to use date and hours calculators for work schedules", description: "Helpful when a life-planning question also depends on dates, hours, or timing.", href: "/guides/date-calculator-for-schedules" },
      ko: { title: "날짜 차이 계산기로 일정 계산하기", description: "생활 일정과 기준일 계산을 함께 볼 때 참고하기 좋은 가이드입니다.", href: "/guides/date-calculator-for-schedules" },
    },
  },
};

function buildFallbackCalculatorSeoContent(
  definition: CalculatorDefinition,
  locale: Locale,
  relatedLinks: RelatedLink[] = []
): CalculatorSeoContent {
  const isKo = locale === "ko";
  const categoryContent = categoryEditorial[definition.category] ?? categoryEditorial.life;
  const relatedArticles = [categoryContent.blog[locale], categoryContent.guide[locale]].map((item) => ({
    ...item,
    cta: isKo ? "콘텐츠 보기 →" : "Open article →",
  }));

  return {
    slug: definition.slug,
    audienceTitle: isKo ? `${definition.name} 계산기가 특히 유용한 상황` : `When this ${definition.name.toLowerCase()} is especially useful`,
    audienceIntro: isKo
      ? `${definition.name} 페이지는 숫자 하나를 빠르게 구하는 용도뿐 아니라, 입력값을 바꿔가며 여러 시나리오를 비교할 때 더 큰 도움이 됩니다. 결과를 보기 전에 어떤 질문을 풀고 싶은지 먼저 정리하면 활용도가 높아집니다.`
      : `${definition.name} is most useful when you compare more than one scenario instead of relying on a single quick answer. It works best when you know what decision, estimate, or comparison the result is supposed to support.`,
    audiences: isKo
      ? [
          `현재 수치를 빠르게 점검하고 결과를 다른 조건과 비교해보고 싶은 사용자.`,
          `${definition.name} 결과를 예산, 일정, 건강 계획, 학습, 혹은 생활 판단과 연결해보고 싶은 사용자.`,
          `공식 자료를 보기 전에 대략적인 범위를 먼저 파악하고 싶은 사용자.`,
        ]
      : [
          `People who want a quick answer and then want to compare it with a second scenario.`,
          `Users who need a practical estimate before checking official documents, lender quotes, or professional guidance.`,
          `Anyone trying to connect the result to a budget, schedule, health plan, study task, or everyday decision.`,
        ],
    checksTitle: isKo ? "입력 전에 먼저 확인할 점" : "What to check before you enter numbers",
    checks: isKo
      ? [
          `입력값 단위와 기준을 먼저 확인하세요. 같은 숫자라도 기준이 다르면 결과 해석이 달라질 수 있습니다.`,
          `한 가지 값만 넣지 말고, 조금 낮은 경우와 높은 경우를 함께 비교하면 더 실용적인 판단이 가능합니다.`,
          `중요한 결정에 사용할 때는 계산기 결과를 참고값으로 보고 공식 자료나 전문가 안내와 함께 확인하세요.`,
        ]
      : [
          `Check the unit, date basis, or measurement reference before you rely on the output. A small input mismatch can change the meaning of the result.`,
          `Run more than one scenario. Testing a lower and higher case usually gives you a more useful range than one optimistic number.`,
          `Use the result as a planning estimate, then verify important decisions with the official source or a qualified professional.`,
        ],
    readingTitle: isKo ? "결과를 읽는 방법" : "How to read the result",
    readingParagraphs: isKo
      ? [
          `결과 숫자 자체보다, 어떤 입력값이 결과를 가장 크게 바꾸는지 함께 보는 것이 중요합니다. 그러면 단순 계산을 넘어 실제 판단에 더 가까운 비교가 가능합니다.`,
          `${definition.name} 결과는 확정값이라기보다 빠른 비교 도구에 가깝습니다. 비슷한 수치라도 기준이나 기간, 조건이 다르면 실제 체감은 달라질 수 있습니다.`,
        ]
      : [
          `The most useful way to read the output is to notice which input changes the result the most. That turns the page from a one-time tool into a practical comparison aid.`,
          `Treat the number as a planning signal rather than a guaranteed answer. A similar result can lead to different real-life decisions depending on fees, timing, rules, or personal context.`,
        ],
    mistakesTitle: isKo ? "자주 하는 실수" : "Common mistakes people make",
    mistakes: isKo
      ? [
          `기준값이나 단위를 확인하지 않고 바로 입력하는 것.`,
          `하나의 시나리오만 보고 결과를 확정적으로 받아들이는 것.`,
          `계산기 결과만 보고 실제 조건이나 공식 규정을 다시 확인하지 않는 것.`,
        ]
      : [
          `Entering numbers without double-checking the correct base, unit, or date rule.`,
          `Relying on one scenario instead of comparing a realistic range.`,
          `Treating the calculator result as final without confirming the real-world rules or official terms.`,
        ],
    scenariosTitle: isKo ? "직접 비교해보기 좋은 시나리오" : "Practical scenarios to test",
    scenarios: isKo
      ? [
          { title: "기본값과 보수적 값 비교", description: `현재 생각한 조건보다 조금 더 보수적인 값을 넣어 결과 차이를 확인해보세요.` },
          { title: "시간이나 기간 차이 비교", description: `기간이 들어가는 계산기라면 기간을 바꾸었을 때 결과가 얼마나 달라지는지 확인하면 좋습니다.` },
          { title: "실제 적용 전 최종 점검", description: `결과를 실제 결정을 위한 참고값으로 쓰기 전에 관련 비용, 조건, 기준일을 다시 확인해보세요.` },
        ]
      : [
          { title: "Baseline vs. conservative case", description: `Compare your initial assumption with a slightly more conservative input to see how sensitive the result is.` },
          { title: "Short-term vs. long-term comparison", description: `If time is part of the formula, test a shorter and longer case to see whether duration changes the answer more than expected.` },
          { title: "Pre-decision reality check", description: `Before you act on the result, compare it with the official conditions, fee structure, or deadline rules that apply in real life.` },
        ],
    relatedContentTitle: isKo ? "같이 보면 좋은 콘텐츠" : "Related guides and articles",
    relatedContentIntro: isKo
      ? `이 계산기를 더 실용적으로 활용하려면 아래 글과 가이드를 함께 확인해보세요. 계산 결과를 실제 판단으로 연결하는 데 도움이 됩니다.`
      : `Use these supporting pages when you want more context than a single result can provide. They help connect the number to a more practical decision.`,
    relatedContent: relatedArticles,
  };
}

export function getCalculatorSeoContent(
  definition: CalculatorDefinition,
  locale: Locale,
  relatedLinks: RelatedLink[] = []
): CalculatorSeoContent {
  const specific = locale === "ko" ? koContent[definition.slug] : enContent[definition.slug];
  return specific ?? buildFallbackCalculatorSeoContent(definition, locale, relatedLinks);
}
