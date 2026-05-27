import { type CalculatorDefinition } from "@/lib/calculators/data";

export type ProgrammaticExample = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  overrides: Record<string, string>;
  /**
   * Optional pre-translated Korean copy. When provided, the locale layer
   * uses these directly instead of running pattern-based translation on
   * the English title. This is essential for programmatic SEO at scale —
   * it gives us native, search-friendly Korean phrasing without needing
   * to teach the pattern matcher every variant we generate.
   */
  koTitle?: string;
  koDescription?: string;
  koIntro?: string;
};

const TOP_PRIORITY_SLUGS = new Set([
  "compound-interest-calculator",
  "loan-calculator",
  "mortgage-calculator",
  "investment-calculator",
  "retirement-calculator",
  "savings-calculator",
  "bmi-calculator",
  "calorie-calculator",
  "bmr-calculator",
  "age-calculator",
  "date-difference-calculator",
  "work-hours-calculator",
  "percentage-calculator",
  "average-calculator",
  "length-converter",
  "weight-converter",
  "temperature-converter",
  "tip-calculator",
  "discount-calculator",
  "gpa-calculator",
]);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanLabel(label: string) {
  return label
    .replace(/\(.*?\)/g, "")
    .replace(/[%$]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function hasSlugWord(slug: string, word: string) {
  return slug.includes(word);
}

function currencyLike(definition: CalculatorDefinition) {
  const slug = definition.slug;
  return definition.category === "finance" || ["tip-calculator", "discount-calculator", "sales-tax-calculator", "split-bill-calculator", "commission-calculator", "rent-split-calculator", "fuel-cost-calculator", "travel-budget-calculator", "unit-price-calculator"].includes(slug);
}

function formatExampleValue(definition: CalculatorDefinition, value: string) {
  const num = Number(value);
  if (Number.isFinite(num)) {
    if (currencyLike(definition)) return `$${Math.round(num).toLocaleString("en-US")}`;
    if (hasSlugWord(definition.slug, "temperature") || definition.slug === "bmi-calculator" || definition.slug === "bmr-calculator" || definition.slug === "calorie-calculator") return num.toLocaleString("en-US");
    if (hasSlugWord(definition.slug, "percentage") || hasSlugWord(definition.slug, "interest") || hasSlugWord(definition.slug, "discount") || hasSlugWord(definition.slug, "apr")) return `${num.toLocaleString("en-US")}`;
    return num.toLocaleString("en-US");
  }
  return value;
}

function buildGenericExamples(definition: CalculatorDefinition) {
  const numericInputs = definition.inputs.filter((input) => input.type === "number" && input.defaultValue && Number.isFinite(Number(input.defaultValue)));
  if (!numericInputs.length) {
    return [
      {
        slug: "basic-example",
        title: `${definition.name} basic example`,
        description: `See a basic ${definition.name.toLowerCase()} scenario using the default inputs on Mega Calculators.`,
        intro: `This example uses the default inputs for ${definition.name.toLowerCase()} so you can see how the calculator behaves before entering your own numbers.`,
        overrides: {},
      },
    ];
  }

  const first = numericInputs[0];
  const firstDefault = Math.max(Number(first.defaultValue || 1), 1);
  const secondary = numericInputs[1];
  const variants = [0.5, 1, 2, 3, 5, 10];

  return variants.map((multiplier, index) => {
    const firstValue = Math.max(Math.round(firstDefault * multiplier), 1);
    const overrides: Record<string, string> = { [first.name]: String(firstValue) };
    if (secondary?.defaultValue) {
      const secondDefault = Math.max(Number(secondary.defaultValue), 1);
      const secondValue = Math.max(Math.round(secondDefault * (index % 2 === 0 ? 1 : 1.25)), 1);
      overrides[secondary.name] = String(secondValue);
    }
    const label = cleanLabel(first.label);
    const valueText = formatExampleValue(definition, String(firstValue));
    const slug = `${slugify(String(firstValue))}-${slugify(label)}`;
    return {
      slug,
      title: `${definition.name} for ${valueText} ${label.toLowerCase()}`,
      description: `Try a ${definition.name.toLowerCase()} scenario for ${valueText} ${label.toLowerCase()} with a free example page from Mega Calculators.`,
      intro: `This example page shows how ${definition.name.toLowerCase()} works when the ${label.toLowerCase()} is set to ${valueText}. You can use it as a starting point before testing your own assumptions.`,
      overrides,
    };
  });
}

const specificExamples: Record<string, ProgrammaticExample[]> = {
  "loan-calculator": [
    { slug: "1000-loan", title: "Loan Calculator for $1,000", description: "Estimate payments for a $1,000 loan using a free online example.", intro: "See how a small $1,000 installment loan could look with a fixed rate and term.", overrides: { loanAmount: "1000", annualRate: "8", years: "2" } },
    { slug: "5000-loan", title: "Loan Calculator for $5,000", description: "Estimate payments for a $5,000 loan using a free online example.", intro: "This page models a $5,000 fixed-rate loan scenario for budgeting and comparison.", overrides: { loanAmount: "5000", annualRate: "8", years: "3" } },
    { slug: "10000-loan", title: "Loan Calculator for $10,000", description: "Estimate monthly payments for a $10,000 loan.", intro: "Use this example to see what a mid-size personal loan may cost over time.", overrides: { loanAmount: "10000", annualRate: "7", years: "4" } },
    { slug: "20000-loan", title: "Loan Calculator for $20,000", description: "Estimate monthly payments for a $20,000 loan.", intro: "This example is useful when comparing a larger personal or auto loan amount.", overrides: { loanAmount: "20000", annualRate: "6.5", years: "5" } },
    { slug: "30000-loan", title: "Loan Calculator for $30,000", description: "Estimate monthly payments for a $30,000 loan.", intro: "Review a $30,000 example to understand how term and interest affect borrowing cost.", overrides: { loanAmount: "30000", annualRate: "6.25", years: "5" } },
    { slug: "50000-loan", title: "Loan Calculator for $50,000", description: "Estimate monthly payments for a $50,000 loan.", intro: "This example shows how a larger financed balance increases payment and interest cost.", overrides: { loanAmount: "50000", annualRate: "6", years: "7" } },
  ],
  "mortgage-calculator": [
    { slug: "250000-home", title: "Mortgage Calculator for a $250,000 Home", description: "Estimate a monthly payment for a $250,000 home purchase.", intro: "Use this example to explore a starter-home mortgage scenario.", overrides: { homePrice: "250000", downPayment: "50000", annualRate: "6.5", years: "30" } },
    { slug: "300000-home", title: "Mortgage Calculator for a $300,000 Home", description: "Estimate a monthly payment for a $300,000 home purchase.", intro: "This example models a common home price point with a standard down payment.", overrides: { homePrice: "300000", downPayment: "60000", annualRate: "6.5", years: "30" } },
    { slug: "400000-home", title: "Mortgage Calculator for a $400,000 Home", description: "Estimate a monthly payment for a $400,000 home purchase.", intro: "See how a $400,000 mortgage changes with rate, term, and down payment.", overrides: { homePrice: "400000", downPayment: "80000", annualRate: "6.25", years: "30" } },
    { slug: "500000-home", title: "Mortgage Calculator for a $500,000 Home", description: "Estimate a monthly payment for a $500,000 home purchase.", intro: "Use this scenario when comparing higher-value homes and larger loan balances.", overrides: { homePrice: "500000", downPayment: "100000", annualRate: "6.25", years: "30" } },
    { slug: "15-year-mortgage", title: "15 Year Mortgage Example", description: "Estimate a 15-year mortgage payment using a practical example.", intro: "A shorter term usually means a higher payment but less total interest over time.", overrides: { homePrice: "400000", downPayment: "80000", annualRate: "5.75", years: "15" } },
    { slug: "20-percent-down", title: "Mortgage Calculator With 20 Percent Down", description: "See a mortgage example using a 20 percent down payment.", intro: "This page is useful for buyers comparing the effect of a full 20 percent down payment.", overrides: { homePrice: "450000", downPayment: "90000", annualRate: "6.15", years: "30" } },
  ],
  "compound-interest-calculator": [
    { slug: "10000-starting-balance", title: "Compound Interest Calculator for $10,000", description: "See a compound interest example starting with $10,000.", intro: "This example shows how a $10,000 balance can grow over time with regular contributions.", overrides: { principal: "10000", monthlyContribution: "250", annualRate: "7", years: "10" } },
    { slug: "500-monthly-contribution", title: "Compound Interest Calculator With $500 Monthly Contributions", description: "Model compound growth with a $500 monthly contribution.", intro: "A steady monthly deposit can make a major difference over long periods.", overrides: { principal: "5000", monthlyContribution: "500", annualRate: "8", years: "15" } },
    { slug: "1000-monthly-contribution", title: "Compound Interest Calculator With $1,000 Monthly Contributions", description: "Model compound growth with a $1,000 monthly contribution.", intro: "This example is helpful for high-savings or aggressive investing plans.", overrides: { principal: "10000", monthlyContribution: "1000", annualRate: "8", years: "20" } },
    { slug: "20-year-growth", title: "20 Year Compound Interest Example", description: "Estimate compound growth over a 20 year time horizon.", intro: "A 20-year example highlights the long-term power of compounding and consistency.", overrides: { principal: "10000", monthlyContribution: "400", annualRate: "7", years: "20" } },
    { slug: "30-year-growth", title: "30 Year Compound Interest Example", description: "Estimate compound growth over a 30 year time horizon.", intro: "This page shows why long holding periods are so powerful for investors and savers.", overrides: { principal: "15000", monthlyContribution: "500", annualRate: "7", years: "30" } },
    { slug: "8-percent-return", title: "Compound Interest Calculator at 8 Percent", description: "See compound growth using an 8 percent annual return assumption.", intro: "Testing a specific return assumption can help you compare optimistic and conservative scenarios.", overrides: { principal: "10000", monthlyContribution: "500", annualRate: "8", years: "25" } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────
// Programmatic SEO scenario generators.
//
// For our top-traffic calculators we generate ~100 example pages each by
// expanding realistic search-query patterns into a static URL grid. Each
// scenario page targets a long-tail query (e.g., "BMI for 175 cm 70 kg"
// or "$300,000 mortgage at 6.5% for 30 years") that the main calculator
// page would not rank for on its own.
//
// All generators emit BOTH English and Korean copy at build time so each
// locale's URL gets natural, indexable text — not template fallback.
// ─────────────────────────────────────────────────────────────────────────

const enUsd = (n: number) => `$${n.toLocaleString("en-US")}`;
const koKrwApprox = (usd: number) => {
  // Approximate display-only USD→KRW for readability in KO titles.
  // Calculator results still use the engine's locale-aware formatting.
  const krw = Math.round(usd * 1300 / 1000) * 1000;
  return `${krw.toLocaleString("ko-KR")}원`;
};

function buildBmiExamples(): ProgrammaticExample[] {
  // 10 heights × 10 weights = 100 scenarios.
  // Range covers most adult body sizes that users search for.
  const heightsCm = [150, 155, 160, 165, 170, 175, 180, 185, 190, 195];
  const weightsKg = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
  const result: ProgrammaticExample[] = [];
  for (const h of heightsCm) {
    for (const w of weightsKg) {
      const lbs = Math.round(w * 2.20462);
      const inches = Math.round(h / 2.54);
      const ft = Math.floor(inches / 12);
      const inchRem = inches - ft * 12;
      result.push({
        slug: `${h}cm-${w}kg`,
        title: `BMI for ${h} cm and ${w} kg (${ft}'${inchRem}" / ${lbs} lb)`,
        description: `See the BMI value and category for an adult who is ${h} cm tall and weighs ${w} kg, with the equivalent ${ft}'${inchRem}" / ${lbs} lb conversion.`,
        intro: `This example calculates BMI for someone ${h} cm (${ft}'${inchRem}") tall weighing ${w} kg (${lbs} lb), and shows where it falls on the standard WHO/CDC BMI category scale.`,
        overrides: { heightCm: String(h), weightKg: String(w) },
        koTitle: `키 ${h}cm 몸무게 ${w}kg BMI 결과`,
        koDescription: `키 ${h}cm 몸무게 ${w}kg일 때 BMI 값과 한국 비만 분류(대한비만학회 기준)를 한눈에 확인하실 수 있어요.`,
        koIntro: `키 ${h}cm 몸무게 ${w}kg일 때 BMI가 어느 범위에 들어가는지, 그리고 한국 기준(저체중·정상·과체중·비만)에서 어떻게 해석하면 좋을지 함께 정리해드려요.`,
      });
    }
  }
  return result;
}

function buildLoanExamples(): ProgrammaticExample[] {
  // 10 amounts × 10 terms = 100 scenarios. Rate held at 7% (typical
  // 2025–2026 personal-loan rate) so the variation comes from amount × term.
  const amounts = [1000, 2500, 5000, 7500, 10000, 15000, 20000, 25000, 30000, 50000];
  const terms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rate = 7;
  const result: ProgrammaticExample[] = [];
  for (const amount of amounts) {
    for (const term of terms) {
      result.push({
        slug: `${amount}-loan-${term}-years`,
        title: `${enUsd(amount)} Loan Over ${term} Year${term === 1 ? "" : "s"} at ${rate}%`,
        description: `Estimate the monthly payment and total interest on a ${enUsd(amount)} fixed-rate loan repaid over ${term} year${term === 1 ? "" : "s"} at ${rate}% APR.`,
        intro: `This example models a ${enUsd(amount)} loan at ${rate}% APR repaid over ${term} year${term === 1 ? "" : "s"}. You'll see the monthly payment, total interest, and total repayment so you can compare it against your lender quote.`,
        overrides: { loanAmount: String(amount), annualRate: String(rate), years: String(term) },
        koTitle: `${koKrwApprox(amount)} 대출 ${term}년 ${rate}% 예시`,
        koDescription: `${koKrwApprox(amount)} 원리금균등 대출을 ${term}년 ${rate}% 금리로 받았을 때 월 상환금과 총이자를 한국어로 확인하실 수 있어요.`,
        koIntro: `대출 원금 ${koKrwApprox(amount)}, 상환 기간 ${term}년, 연 ${rate}% 금리 시나리오로 월 상환금과 총이자를 미리 가늠해보실 수 있도록 정리한 예시입니다.`,
      });
    }
  }
  return result;
}

function buildMortgageExamples(): ProgrammaticExample[] {
  // 10 home prices × 5 rates × 2 terms = 100 scenarios.
  // Down payment is held at 20% (LTV 80%) — the conventional benchmark.
  const homePrices = [150000, 200000, 250000, 300000, 350000, 400000, 500000, 600000, 750000, 1000000];
  const rates = [5.5, 6.0, 6.5, 7.0, 7.5];
  const terms = [15, 30];
  const result: ProgrammaticExample[] = [];
  for (const price of homePrices) {
    for (const rate of rates) {
      for (const term of terms) {
        const down = Math.round(price * 0.2);
        result.push({
          slug: `${price}-home-${rate.toString().replace(".", "_")}-${term}yr`,
          title: `${enUsd(price)} Mortgage at ${rate}% for ${term} Years`,
          description: `Estimated monthly payment and total interest for a ${enUsd(price)} home with 20% down at a ${rate}% rate over a ${term}-year mortgage.`,
          intro: `This example models a ${enUsd(price)} home purchase with a 20% down payment (${enUsd(down)}) financed at ${rate}% over ${term} years. You'll see the monthly principal-and-interest payment and the total interest paid over the life of the loan.`,
          overrides: {
            homePrice: String(price),
            downPayment: String(down),
            annualRate: String(rate),
            years: String(term),
          },
          koTitle: `${koKrwApprox(price)} 주택담보대출 ${rate}% ${term}년 예시`,
          koDescription: `${koKrwApprox(price)} 주택을 자기자본 20%, 연 ${rate}% 금리, ${term}년 상환으로 받았을 때 월 상환금과 총이자를 정리한 예시입니다.`,
          koIntro: `주택 가격 ${koKrwApprox(price)}, 자기자본 20%, 연 ${rate}%, ${term}년 만기 시나리오로 월 상환금·총이자·잔금 흐름을 한 번에 가늠해보실 수 있어요.`,
        });
      }
    }
  }
  return result;
}

function buildCompoundInterestExamples(): ProgrammaticExample[] {
  // 5 starting balances × 5 horizons × 2 monthly contributions × 2 rates = 100 scenarios.
  const principals = [1000, 5000, 10000, 25000, 50000];
  const yearsList = [5, 10, 15, 20, 25];
  const monthlies = [100, 500];
  const rates = [6, 8];
  const result: ProgrammaticExample[] = [];
  for (const principal of principals) {
    for (const years of yearsList) {
      for (const monthly of monthlies) {
        for (const rate of rates) {
          result.push({
            slug: `${principal}-start-${monthly}-monthly-${rate}pct-${years}yr`,
            title: `${enUsd(principal)} Starting Balance, ${enUsd(monthly)}/Month at ${rate}% Over ${years} Years`,
            description: `See compound growth from a ${enUsd(principal)} starting balance with ${enUsd(monthly)} monthly contributions at ${rate}% annual return over ${years} years.`,
            intro: `This compound interest example uses a ${enUsd(principal)} starting balance, ${enUsd(monthly)} monthly contributions, ${rate}% annual return, and a ${years}-year horizon to show how the ending balance and growth break down.`,
            overrides: {
              principal: String(principal),
              monthlyContribution: String(monthly),
              annualRate: String(rate),
              years: String(years),
            },
            koTitle: `초기 ${koKrwApprox(principal)} · 월 ${koKrwApprox(monthly)} 적립 · 연 ${rate}% · ${years}년 복리 예시`,
            koDescription: `초기 ${koKrwApprox(principal)}에서 매월 ${koKrwApprox(monthly)}씩 ${years}년간 연 ${rate}% 복리로 굴렸을 때 결과를 한국어로 정리한 예시입니다.`,
            koIntro: `초기 자본 ${koKrwApprox(principal)}, 매월 ${koKrwApprox(monthly)} 적립, 연 ${rate}% 수익률 가정, ${years}년 기간으로 복리 효과가 얼마나 누적되는지 확인하실 수 있는 예시예요.`,
          });
        }
      }
    }
  }
  return result;
}

function buildSalesTaxExamples(): ProgrammaticExample[] {
  // 10 prices × 10 rates = 100 scenarios. Rates cover common US state +
  // local sales tax bands (4% no-state-tax base, up to 10%+ in high-tax cities).
  const prices = [10, 25, 50, 75, 100, 150, 200, 500, 1000, 2500];
  const rates = [4, 5, 6, 7, 7.25, 8, 8.25, 9, 9.5, 10];
  const result: ProgrammaticExample[] = [];
  for (const price of prices) {
    for (const rate of rates) {
      result.push({
        slug: `${price}-price-${rate.toString().replace(".", "_")}pct`,
        title: `Sales Tax on ${enUsd(price)} at ${rate}%`,
        description: `Calculate the sales tax and final total on a ${enUsd(price)} purchase at a ${rate}% sales tax rate.`,
        intro: `This example shows the tax owed and the final out-the-door price for a ${enUsd(price)} purchase taxed at ${rate}%. Useful when comparing prices across states or city tax zones.`,
        overrides: { price: String(price), taxRate: String(rate) },
        koTitle: `가격 ${koKrwApprox(price)} · 부가세 ${rate}% 계산 예시`,
        koDescription: `가격 ${koKrwApprox(price)}에 ${rate}% 부가세가 붙었을 때 세액과 최종 결제 금액을 한국어로 정리한 예시입니다.`,
        koIntro: `상품 가격 ${koKrwApprox(price)}, 부가세 ${rate}% 시나리오로 세액과 최종가격을 미리 확인하실 수 있는 예시입니다.`,
      });
    }
  }
  return result;
}

const programmaticBundles: Record<string, ProgrammaticExample[]> = {
  "bmi-calculator": buildBmiExamples(),
  "loan-calculator": buildLoanExamples(),
  "mortgage-calculator": buildMortgageExamples(),
  "compound-interest-calculator": buildCompoundInterestExamples(),
  "sales-tax-calculator": buildSalesTaxExamples(),
};

export function isTopPriorityCalculator(slug: string) {
  return TOP_PRIORITY_SLUGS.has(slug);
}

export function getCalculatorExamples(definition: CalculatorDefinition): ProgrammaticExample[] {
  // Programmatic bundles (100+ scenarios per calculator) take priority.
  // These are the traffic-core calculators where long-tail SEO scales.
  const programmatic = programmaticBundles[definition.slug];
  if (programmatic) return programmatic;
  // Other calculators use the legacy hand-written specificExamples
  // or the generic 6-scenario fallback. Keep the small cap there since
  // those calculators don't benefit from a flood of thin pages.
  return (specificExamples[definition.slug] ?? buildGenericExamples(definition)).slice(0, 6);
}

export function getFormulaSeo(definition: CalculatorDefinition) {
  return {
    title: `${definition.name} Formula`,
    description: `Learn the ${definition.name.toLowerCase()} formula, what each variable means, and how to apply it in a real example.`,
  };
}

export function getGuideSeo(definition: CalculatorDefinition) {
  return {
    title: `How to Use the ${definition.name}`,
    description: `Learn how to use the ${definition.name.toLowerCase()} with step-by-step instructions, example inputs, and practical tips.`,
  };
}

export function getUseCases(definition: CalculatorDefinition) {
  const name = definition.name.toLowerCase();
  // Use-case copy keyed by the new 15-category structure. Each category
  // gets US-anchored, user-perspective scenarios that match how readers
  // typically arrive at this kind of calculator from Google.
  const categoryCases: Record<string, string[]> = {
    finance: [
      `Compare multiple ${name} scenarios before making a borrowing, saving, or investing decision.`,
      `Build a quick monthly budget around the result shown by this calculator.`,
      `Use the output as a planning estimate before reviewing a lender, broker, or 401(k) provider quote.`,
      `Test how changes in rate, term, contribution, or starting balance affect the long-term result.`,
    ],
    business: [
      `Sanity-check pricing, payroll, or commission numbers before sending an invoice or contract.`,
      `Compare a few what-if scenarios on margin, markup, or break-even when planning a launch.`,
      `Use the ${name} as a quick reference before opening a spreadsheet or accounting tool.`,
      `Translate hourly, salary, or sales-tax inputs into the figures you actually need.`,
    ],
    health: [
      `Use the ${name} as an educational check before building a broader health routine.`,
      `Compare body measurements, hydration, or pregnancy timing over time.`,
      `Use the result as a practical starting point before talking to a physician or other clinician.`,
      `Test different assumptions to see how small changes affect the estimate.`,
    ],
    fitness: [
      `Estimate calorie, protein, BMR, TDEE, or pace targets when planning a training block.`,
      `Compare workout, recovery, or meal scenarios side by side without a spreadsheet.`,
      `Use the result alongside measured outcomes (scale trends, performance metrics) over 2–4 weeks.`,
      `Re-run the ${name} when intensity, body weight, or training volume changes.`,
    ],
    math: [
      `Use the ${name} to verify homework, work calculations, or spreadsheet results.`,
      `Run quick what-if scenarios before reaching for a more advanced tool.`,
      `Translate a word problem into a clear numeric answer with less manual work.`,
      `Walk through a formula step by step before applying it in school, work, or a personal project.`,
    ],
    statistics: [
      `Compute averages, weighted averages, probability, or standard deviation for a small dataset.`,
      `Sanity-check survey, lab, or analytics output without booting a stats package.`,
      `Re-run the ${name} as new data points come in to see how the result shifts.`,
      `Use the output to support a quick comparison or report, then verify with full software.`,
    ],
    "unit-converters": [
      `Convert between US imperial and metric units without memorizing conversion factors.`,
      `Use the converter while shopping, cooking, traveling, or comparing product specifications.`,
      `Verify measurements copied from another website, document, or spreadsheet.`,
      `Reduce manual conversion mistakes when moving between systems or standards.`,
    ],
    "time-date": [
      `Estimate gaps for birthdays, schedules, deadlines, or work blocks in a few seconds.`,
      `Double-check a date or time calculation without opening a calendar or spreadsheet.`,
      `Compare multiple schedule scenarios side by side before committing.`,
      `Turn a manual time calculation into a reusable workflow for everyday planning.`,
    ],
    construction: [
      `Estimate concrete, paint, tile, or flooring quantities before placing an order.`,
      `Run a quick check before getting a contractor quote to validate the rough size.`,
      `Compare two layouts or finishes on cost or material volume in a single screen.`,
      `Save the ${name} result as a starting reference, then add 5–10% waste during purchasing.`,
    ],
    "food-cooking": [
      `Convert recipe units (cups, ounces, grams) when cooking from an unfamiliar source.`,
      `Plan party food, meal prep, or grocery budgets without building a spreadsheet.`,
      `Compare prep cost or batch size across two or three menu options.`,
      `Use the ${name} as a quick kitchen reference, then verify weights for baking.`,
    ],
    "computer-tech": [
      `Convert KB, MB, GB, or TB when comparing storage plans or downloads.`,
      `Sanity-check tech specs, file sizes, or bandwidth math before quoting a project.`,
      `Use the ${name} as a fast reference next to a vendor spec sheet.`,
      `Compare two storage or transfer scenarios on the same scale.`,
    ],
    "physics-science": [
      `Convert energy, force, pressure, or torque units for engineering or coursework.`,
      `Sanity-check lab results before reporting them in a paper or technical document.`,
      `Compare two measurements that arrived in different unit systems.`,
      `Use the ${name} as a quick desk reference next to a textbook or datasheet.`,
    ],
    education: [
      `Plan GPA targets, study hours, or course load for a coming semester.`,
      `Compare two scheduling scenarios without manually averaging grades.`,
      `Use the ${name} as a planning aid when picking electives or balancing study time.`,
      `Re-run the calculation as midterm and final grades come in.`,
    ],
    "everyday-life": [
      `Split a bill, check a tip, or estimate a road-trip cost in a few seconds.`,
      `Use the ${name} for everyday decisions involving bills, shopping, or household planning.`,
      `Compare two or more scenarios before spending money or committing to a plan.`,
      `Save time on repetitive calculations that would otherwise be done by hand.`,
    ],
    other: [
      `Use the ${name} for a quick what-if check when no specialized tool is needed.`,
      `Compare a couple of input sets to see how the answer shifts.`,
      `Treat the result as a planning estimate and verify the final number with an official source if needed.`,
      `Save the calculator for future reference and reopen as your numbers change.`,
    ],
  };

  return categoryCases[definition.category] ?? [
    `Use the ${name} to test a realistic scenario before making a decision.`,
    `Compare different inputs quickly and save time on manual math.`,
    `Treat the output as a helpful estimate, then verify with an official source if needed.`,
    `Use the result as a starting point for a more detailed plan.`,
  ];
}

// Cap of examples surfaced in the calculator detail page hub. The full
// list (100+ for priority calculators) still appears in the sitemap and
// is crawled via the NearbyScenarios component on each example page.
const HUB_EXAMPLE_DISPLAY_LIMIT = 12;

export function getProgrammaticHubLinks(definition: CalculatorDefinition) {
  const base = `/calculators/${definition.category}/${definition.slug}`;
  const allExamples = getCalculatorExamples(definition);
  // For priority calculators with 100+ scenarios, show a representative
  // sample on the detail page so the section stays readable. Pick evenly
  // spaced indices so the user sees range, not just the first 12 in a row.
  const displayExamples =
    allExamples.length <= HUB_EXAMPLE_DISPLAY_LIMIT
      ? allExamples
      : Array.from({ length: HUB_EXAMPLE_DISPLAY_LIMIT }, (_, i) => {
          const idx = Math.floor((i * allExamples.length) / HUB_EXAMPLE_DISPLAY_LIMIT);
          return allExamples[idx];
        });
  return {
    formula: `${base}/formula`,
    guide: `${base}/guide`,
    useCases: `${base}/use-cases`,
    examples: displayExamples.map((example) => ({
      title: example.title,
      href: `${base}/examples/${example.slug}`,
    })),
    totalExampleCount: allExamples.length,
  };
}
