import { type CalculatorDefinition } from "@/lib/calculators/data";

export type ProgrammaticExample = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  overrides: Record<string, string>;
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

function withOverrides(defaults: Record<string, string>, overrides: Record<string, string>) {
  return { ...defaults, ...Object.fromEntries(Object.entries(overrides).map(([k, v]) => [k, String(v)])) };
}

function buildGenericExamples(definition: CalculatorDefinition) {
  const defaults = Object.fromEntries(definition.inputs.map((input) => [input.name, input.defaultValue ?? ""]));
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

export function isTopPriorityCalculator(slug: string) {
  return TOP_PRIORITY_SLUGS.has(slug);
}

export function getCalculatorExamples(definition: CalculatorDefinition): ProgrammaticExample[] {
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
  const categoryCases: Record<string, string[]> = {
    finance: [
      `Compare multiple ${definition.name.toLowerCase()} scenarios before making a borrowing, saving, or investing decision.`,
      `Build a quick monthly budget around the result shown by this calculator.`,
      `Use the output as a planning estimate before reviewing a lender, broker, or financial institution quote.`,
      `Test how changes in rate, term, contribution, or starting balance affect the long-term result.`,
    ],
    health: [
      `Use the ${definition.name.toLowerCase()} as a quick educational check before building a broader health routine.`,
      `Compare changes in body measurements, calories, pace, or intake targets over time.`,
      `Use the result as a practical starting point before talking to a physician, dietitian, or coach.`,
      `Test different assumptions to understand how small changes can affect the final estimate.`,
    ],
    time: [
      `Estimate time gaps quickly when planning birthdays, schedules, deadlines, or work blocks.`,
      `Double-check a date or time calculation without opening a spreadsheet.`,
      `Use the result to compare multiple calendar or schedule scenarios side by side.`,
      `Turn a manual time calculation into a reusable workflow for everyday planning.`,
    ],
    math: [
      `Use the ${definition.name.toLowerCase()} to verify homework, business math, or spreadsheet results.`,
      `Run quick what-if scenarios before using a more advanced analytics tool.`,
      `Translate a written problem into a clear numeric answer with less manual work.`,
      `Check a formula step by step before applying it in school, work, or personal projects.`,
    ],
    "unit-converters": [
      `Convert between common US and metric units without memorizing conversion factors.`,
      `Use the converter while shopping, cooking, traveling, or comparing product specifications.`,
      `Quickly verify measurements copied from another website, document, or spreadsheet.`,
      `Reduce manual conversion mistakes when moving between systems or standards.`,
    ],
    life: [
      `Use the ${definition.name.toLowerCase()} for everyday decisions involving bills, school, shopping, or household planning.`,
      `Compare two or more scenarios before spending money or committing to a plan.`,
      `Use the output as a fast reference while making a practical real-world decision.`,
      `Save time on repetitive calculations that would otherwise be done by hand.`,
    ],
  };

  return categoryCases[definition.category] ?? [
    `Use the ${definition.name.toLowerCase()} to test a realistic scenario before making a decision.`,
    `Compare different inputs quickly and save time on manual math.`,
    `Treat the output as a helpful estimate, then verify with an official source if needed.`,
    `Use the result as a starting point for a more detailed plan.`,
  ];
}

export function getProgrammaticHubLinks(definition: CalculatorDefinition) {
  const base = `/calculators/${definition.category}/${definition.slug}`;
  return {
    formula: `${base}/formula`,
    guide: `${base}/guide`,
    useCases: `${base}/use-cases`,
    examples: getCalculatorExamples(definition).map((example) => ({
      title: example.title,
      href: `${base}/examples/${example.slug}`,
    })),
  };
}
