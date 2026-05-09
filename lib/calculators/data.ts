import { additionalCalculators } from "@/lib/calculators/additional";
import { applyCanonicalCalculatorCategory, calculatorCategories } from "@/lib/calculators/categories";
export { calculatorCategories };
export type SelectOption = { label: string; value: string }

export type CalculatorInput = {
  name: string;
  label: string;
  type: "number" | "select" | "date" | "time" | "textarea" | "text";
  defaultValue?: string;
  min?: string;
  max?: string;
  step?: string;
  options?: SelectOption[];
};

export type CalculatorDefinition = {
  category: string;
  categoryName: string;
  slug: string;
  name: string;
  kind: string;
  description: string;
  intro: string;
  formulaText: string;
  howToUse: string[];
  example: string;
  faq: { q: string; a: string }[];
  inputs: CalculatorInput[];
  expr?: string;
  primary?: string;
  prefix?: string;
  suffix?: string;
  units?: Record<string, number>;
  unitLabels?: Record<string, string>;
  relatedSlugs?: string[];
};

const baseCalculators: CalculatorDefinition[] = [
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "compound-interest-calculator",
    "name": "Compound Interest Calculator",
    "kind": "compoundInterest",
    "description": "Free compound interest calculator with monthly contributions, annual return, and total future value. Ideal for savings, investing, and long-term wealth planning in USD.",
    "intro": "Use this compound interest calculator to estimate how your money can grow over time with a starting balance, recurring monthly deposits, and an annual rate of return. It is especially useful for comparing long-term investing scenarios in the US market where regular contributions matter as much as the starting amount.",
    "formulaText": "This calculator uses the future value of compound growth plus the future value of a monthly contribution stream. In simple terms, it compounds your initial deposit over the selected number of years and then adds the growth from each monthly contribution. The result helps you see the combined power of time, return, and consistency.",
    "howToUse": [
      "Enter your starting balance in US dollars.",
      "Add the amount you plan to contribute each month.",
      "Enter your expected annual return and the number of years you want to model.",
      "Review the ending balance, total contributions, and growth to compare saving or investing scenarios."
    ],
    "example": "For example, if you start with $10,000, add $500 per month, earn 8% per year, and stay invested for 10 years, the calculator shows how much of your ending balance comes from contributions and how much comes from compound growth.",
    "faq": [
      {
        "q": "What is compound interest?",
        "a": "Compound interest means you earn returns on both your original money and on the growth that has already accumulated. Over long periods, that compounding effect can become one of the biggest drivers of portfolio growth."
      },
      {
        "q": "Does this compound interest calculator include monthly contributions?",
        "a": "Yes. It factors in both your initial deposit and recurring monthly contributions, which makes it useful for retirement accounts, brokerage investing, and savings plans."
      },
      {
        "q": "Is the result guaranteed?",
        "a": "No. The output is an estimate based on the annual return you enter. Real investment results can differ due to market performance, taxes, fees, and timing."
      }
    ],
    "inputs": [
      {
        "name": "principal",
        "label": "Initial deposit",
        "type": "number",
        "defaultValue": "10000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution",
        "type": "number",
        "defaultValue": "500",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "10",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator",
      "dividend-yield-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "loan-calculator",
    "name": "Loan Calculator",
    "kind": "loanPayment",
    "description": "Free loan calculator for monthly payment, total repayment, and total interest. Useful for personal loans, auto loans, and other fixed-term borrowing in the US.",
    "intro": "This loan calculator helps you estimate what a fixed-rate loan will cost before you borrow. It is useful for personal loans, auto loans, home improvement loans, and any other installment loan where you pay the same amount every month.",
    "formulaText": "The calculator uses the standard amortizing loan payment formula. It converts the annual interest rate into a monthly rate, then calculates a fixed monthly payment based on the loan amount and loan term. That payment includes both principal and interest.",
    "howToUse": [
      "Enter the total amount you plan to borrow.",
      "Add the annual interest rate shown by your lender.",
      "Select the loan term in years.",
      "Compare the monthly payment and total interest before applying."
    ],
    "example": "If you borrow $25,000 at 6.5% for 5 years, the calculator estimates your monthly payment and shows how much interest you may pay over the full term.",
    "faq": [
      {
        "q": "Does this loan calculator work for car loans and personal loans?",
        "a": "Yes. It is best for standard fixed-rate loans with equal monthly payments, including many car loans and personal loans."
      },
      {
        "q": "Why is my lender quote different from this result?",
        "a": "Lenders may include fees, insurance, taxes, or different compounding assumptions. Use this tool as a planning estimate, not a final loan disclosure."
      },
      {
        "q": "Can I use this for variable-rate loans?",
        "a": "You can use it for a quick estimate, but variable-rate loans can change over time, so real payments may not stay constant."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "25000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "6.5",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Loan term (years)",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "mortgage-calculator",
      "investment-calculator",
      "dividend-yield-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "mortgage-calculator",
    "name": "Mortgage Calculator",
    "kind": "mortgagePayment",
    "description": "Free mortgage calculator for monthly payment, total loan amount, and estimated repayment cost. Designed for US home buyers comparing home price, down payment, rate, and loan term.",
    "intro": "This mortgage calculator gives you a quick estimate of your monthly principal and interest payment based on a home price, down payment, interest rate, and mortgage term. It is a useful first-pass tool for buyers comparing affordability before talking to a lender.",
    "formulaText": "The calculator first subtracts the down payment from the home price to estimate the mortgage principal. It then applies the standard fixed-rate mortgage payment formula using a monthly interest rate and the total number of monthly payments in the loan term.",
    "howToUse": [
      "Enter the home purchase price.",
      "Add your expected down payment amount.",
      "Enter the mortgage interest rate and choose the loan term.",
      "Use the monthly payment estimate to compare homes and down payment scenarios."
    ],
    "example": "A $400,000 home with a $80,000 down payment, a 6.75% mortgage rate, and a 30-year term can produce a very different monthly payment than the same home with a larger down payment or shorter loan.",
    "faq": [
      {
        "q": "Does this mortgage calculator include taxes and insurance?",
        "a": "No. This version focuses on principal and interest. Property taxes, homeowners insurance, HOA fees, and mortgage insurance can raise the real monthly payment."
      },
      {
        "q": "Is this good for comparing down payments?",
        "a": "Yes. Changing the down payment is one of the fastest ways to see how loan size and monthly cost move together."
      },
      {
        "q": "Can I use this for refinance estimates?",
        "a": "Yes. If you know your refinance loan balance, rate, and term, the formula works the same way for a basic monthly payment estimate."
      }
    ],
    "inputs": [
      {
        "name": "homePrice",
        "label": "Home price (USD)",
        "type": "number",
        "defaultValue": "400000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "downPayment",
        "label": "Down payment (USD)",
        "type": "number",
        "defaultValue": "80000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "6.25",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Mortgage term (years)",
        "type": "number",
        "defaultValue": "30",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "investment-calculator",
      "dividend-yield-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "investment-calculator",
    "name": "Investment Calculator",
    "kind": "futureValueWithContrib",
    "description": "Free investment calculator for future value with recurring contributions. Estimate portfolio growth, total invested amount, and projected ending balance over time.",
    "intro": "The investment calculator is built for long-term planning. You can use it to model a brokerage account, IRA, taxable investment account, or a simple market-return scenario with an initial investment plus monthly deposits.",
    "formulaText": "This calculator estimates future value by compounding your starting balance and adding the projected growth of monthly contributions. It is most useful for scenario planning when you want to compare conservative, moderate, and aggressive return assumptions.",
    "howToUse": [
      "Enter your starting investment amount.",
      "Add the amount you plan to invest each month.",
      "Choose an annual return assumption and time horizon.",
      "Compare different return rates or contribution amounts to see how your ending balance changes."
    ],
    "example": "If you invest $20,000 today and contribute $400 each month for 15 years, the calculator can show how strongly the ending balance changes when you test 6%, 8%, or 10% annual returns.",
    "faq": [
      {
        "q": "Is this different from a compound interest calculator?",
        "a": "They are very similar. An investment calculator is usually framed around market growth and recurring investing, while compound interest tools are often used for general savings or account growth."
      },
      {
        "q": "Should I enter an average stock market return?",
        "a": "You can, but it is best to test several scenarios. Long-term returns vary, and future performance is never guaranteed."
      },
      {
        "q": "Does this include taxes and fees?",
        "a": "No. This version is intended for quick forecasting. Taxes, fund expenses, and trading costs can reduce real returns."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "5000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "300",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual growth rate (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "15",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "dividend-yield-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "dividend-yield-calculator",
    "name": "Dividend Yield Calculator",
    "kind": "expression",
    "description": "Free dividend yield calculator to estimate annual dividend yield from share price and annual dividend per share. Helpful for dividend stock and ETF research.",
    "intro": "This dividend yield calculator helps income-focused investors quickly estimate how much annual income a stock or ETF may generate relative to its current share price. It is especially useful when you compare multiple dividend-paying investments side by side.",
    "formulaText": "Dividend yield is calculated by dividing the annual dividend per share by the current share price, then multiplying by 100 to express the result as a percentage. It tells you the annual cash yield before taxes and price changes.",
    "howToUse": [
      "Enter the current share price.",
      "Enter the annual dividend paid per share.",
      "Review the dividend yield percentage.",
      "Use the result to compare income potential across dividend stocks or ETFs."
    ],
    "example": "If a stock trades at $50 and pays $2.00 in annual dividends per share, the estimated dividend yield is 4.0%.",
    "faq": [
      {
        "q": "Is a higher dividend yield always better?",
        "a": "No. A very high yield can sometimes signal falling share prices or an unsustainable payout. Yield should be reviewed together with payout ratio, earnings, and dividend history."
      },
      {
        "q": "Does yield include dividend growth?",
        "a": "No. This calculator uses the current annual dividend and current share price only. It does not forecast future dividend increases."
      },
      {
        "q": "Can I use this for ETFs?",
        "a": "Yes. It works for dividend ETFs as long as you use the current share price and an annualized dividend amount."
      }
    ],
    "inputs": [
      {
        "name": "annualDividend",
        "label": "Annual dividend per share (USD)",
        "type": "number",
        "defaultValue": "2.4",
        "step": "0.01"
      },
      {
        "name": "sharePrice",
        "label": "Share price (USD)",
        "type": "number",
        "defaultValue": "48",
        "step": "0.01"
      }
    ],
    "expr": "(annualDividend / sharePrice) * 100",
    "primary": "Dividend yield",
    "suffix": "%",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "retirement-calculator",
    "name": "Retirement Calculator",
    "kind": "retirement",
    "description": "Free retirement calculator for long-term savings goals, projected nest egg, and retirement planning. Useful for 401(k), IRA, and general retirement investing scenarios.",
    "intro": "This retirement calculator helps you estimate whether your current savings plan may be enough for the future. It is designed for people who want a simple, fast estimate before doing deeper retirement planning with taxes, inflation, and withdrawal strategies.",
    "formulaText": "The calculator compounds your current retirement balance over time, adds recurring annual or monthly contributions, and estimates the future portfolio value at retirement age. It is intended for goal planning rather than a full retirement income plan.",
    "howToUse": [
      "Enter your current retirement savings balance.",
      "Add your planned recurring contribution amount.",
      "Choose an annual return estimate and years until retirement.",
      "Compare whether the projected ending balance aligns with your retirement target."
    ],
    "example": "Someone with $75,000 saved, contributing $8,400 per year, and expecting 7% annual growth can use the calculator to estimate a future retirement balance over the next 25 years.",
    "faq": [
      {
        "q": "Does this include inflation?",
        "a": "This version provides a nominal estimate. If you want a more realistic planning range, compare your results using lower return assumptions or pair it with an inflation calculator."
      },
      {
        "q": "Can I use this for a 401(k) or IRA?",
        "a": "Yes. It is suitable for basic scenario planning across retirement account types as long as you remember that taxes and employer matches are not fully modeled here."
      },
      {
        "q": "Is this enough to decide when I can retire?",
        "a": "Not by itself. Retirement readiness also depends on spending needs, healthcare, taxes, Social Security, and withdrawal strategy."
      }
    ],
    "inputs": [
      {
        "name": "currentAge",
        "label": "Current age",
        "type": "number",
        "defaultValue": "30",
        "min": "18",
        "max": "90",
        "step": "1"
      },
      {
        "name": "retirementAge",
        "label": "Retirement age",
        "type": "number",
        "defaultValue": "65",
        "min": "30",
        "max": "100",
        "step": "1"
      },
      {
        "name": "currentSavings",
        "label": "Current savings (USD)",
        "type": "number",
        "defaultValue": "50000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "600",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual return (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "savings-calculator",
    "name": "Savings Calculator",
    "kind": "futureValueWithContrib",
    "description": "Free savings calculator for projecting account growth with an initial deposit, monthly savings, and annual interest. Great for emergency funds and short- to medium-term goals.",
    "intro": "The savings calculator is useful when you want to estimate how quickly a savings account or cash goal may grow over time. It works well for emergency funds, house down payment goals, travel savings, or any target that depends on consistent monthly deposits.",
    "formulaText": "The calculator applies compound growth to your starting balance and recurring monthly savings using the annual rate you provide. It shows how consistent contributions can accelerate progress toward a goal even when rates are moderate.",
    "howToUse": [
      "Enter your current savings balance.",
      "Add the amount you plan to save each month.",
      "Enter the annual interest rate and number of years.",
      "Use the projected balance to set realistic goals and contribution targets."
    ],
    "example": "If you already have $5,000 saved and add $300 each month to an account earning 4% per year, the calculator shows how your balance may grow over the next few years.",
    "faq": [
      {
        "q": "Can I use this for a high-yield savings account?",
        "a": "Yes. It is a good fit for high-yield savings scenarios where interest compounds and monthly deposits are consistent."
      },
      {
        "q": "Is the interest rate fixed?",
        "a": "The calculator assumes a stable rate for estimation. Real savings account rates can change over time."
      },
      {
        "q": "What is the difference between this and an investment calculator?",
        "a": "Savings calculators are usually used for lower-risk accounts and shorter-term goals, while investment calculators are often used for higher-return market scenarios."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "5000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "300",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual growth rate (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "15",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "interest-rate-calculator",
    "name": "Interest Rate Calculator",
    "kind": "expression",
    "description": "Free interest rate calculator to estimate annual rate from principal, final amount, and time period. Useful for comparing savings, loans, and investment outcomes.",
    "intro": "This interest rate calculator helps you back into an annual interest rate when you know the starting amount, ending amount, and time period. It is useful for comparing offers, checking loan math, or understanding implied returns.",
    "formulaText": "The tool solves for the annualized rate that turns the starting value into the ending value over the selected time horizon. It works as a reverse calculation when the outcome is known but the rate is not.",
    "howToUse": [
      "Enter the starting amount or principal.",
      "Enter the final amount after growth or repayment.",
      "Add the total number of years.",
      "Review the implied annual interest rate or annualized return."
    ],
    "example": "If $10,000 grows to $14,000 over 5 years, the calculator estimates the annualized rate required to reach that ending value.",
    "faq": [
      {
        "q": "Can I use this to estimate investment return?",
        "a": "Yes. It can be used for a quick annualized return estimate when you know the beginning value, ending value, and time period."
      },
      {
        "q": "Does it work for loans too?",
        "a": "It can help with reverse math, but loan pricing can also include fees, compounding differences, and amortization details that affect the real APR."
      },
      {
        "q": "Why is the result only an estimate?",
        "a": "Real-world products can use different compounding schedules and include extra costs, so the output is best used as a planning guide."
      }
    ],
    "inputs": [
      {
        "name": "interest",
        "label": "Interest paid (USD)",
        "type": "number",
        "defaultValue": "600",
        "step": "0.01"
      },
      {
        "name": "principal",
        "label": "Principal (USD)",
        "type": "number",
        "defaultValue": "10000",
        "step": "0.01"
      },
      {
        "name": "timeYears",
        "label": "Time (years)",
        "type": "number",
        "defaultValue": "1",
        "step": "0.01"
      }
    ],
    "expr": "(interest / (principal * timeYears)) * 100",
    "primary": "Estimated annual interest rate",
    "suffix": "%",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "credit-card-payoff-calculator",
    "name": "Credit Card Payoff Calculator",
    "kind": "creditCardPayoff",
    "description": "Free credit card payoff calculator to estimate months to payoff, total paid, and debt reduction timeline based on balance, APR, and monthly payment.",
    "intro": "This credit card payoff calculator shows how long it may take to eliminate revolving debt when you make a fixed monthly payment. It is a practical planning tool for debt payoff strategies, balance reduction goals, and snowball or avalanche budgeting.",
    "formulaText": "The calculator uses your starting balance, monthly payment, and APR to estimate how many months it may take to pay the balance in full. If your payment is too low to outpace monthly interest, the tool warns you that the debt may not decline meaningfully.",
    "howToUse": [
      "Enter your current credit card balance.",
      "Add the annual percentage rate shown on your statement.",
      "Enter the monthly payment you plan to make.",
      "Check the estimated payoff timeline and test higher payment amounts to see how much time and interest you could save."
    ],
    "example": "A $6,000 balance at 22% APR with a $200 monthly payment can take much longer to pay off than most borrowers expect. Raising the payment even modestly can shorten the payoff period significantly.",
    "faq": [
      {
        "q": "Why does my balance drop so slowly at first?",
        "a": "With high APR debt, a large portion of each early payment goes toward interest instead of principal. That is why higher payments can make a disproportionate difference."
      },
      {
        "q": "Can I use this for multiple cards?",
        "a": "This version is designed for one balance at a time. For multiple cards, run each card separately or use the results inside a broader debt payoff plan."
      },
      {
        "q": "What if my monthly payment is too low?",
        "a": "If the payment is less than or only slightly above monthly interest, the payoff timeline can become extremely long or the balance may barely shrink."
      }
    ],
    "inputs": [
      {
        "name": "balance",
        "label": "Current balance (USD)",
        "type": "number",
        "defaultValue": "5000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "APR (%)",
        "type": "number",
        "defaultValue": "21",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyPayment",
        "label": "Monthly payment (USD)",
        "type": "number",
        "defaultValue": "200",
        "min": "1",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "inflation-calculator",
    "name": "Inflation Calculator",
    "kind": "inflation",
    "description": "Free inflation calculator to estimate future cost, inflation impact, and purchasing power change over time. Helpful for budgeting, retirement planning, and long-term pricing.",
    "intro": "An inflation calculator helps you understand how prices and purchasing power change over time. It is useful when you want to compare past and future dollar values, especially for retirement planning, salary goals, and long-term budgeting.",
    "formulaText": "The calculator applies the annual inflation rate to the starting amount over the selected time period. This estimates how much a future cost may rise or how much purchasing power a current amount could lose over time.",
    "howToUse": [
      "Enter the current amount in dollars.",
      "Add the expected annual inflation rate.",
      "Choose the number of years you want to project.",
      "Use the adjusted future value to set more realistic savings or spending targets."
    ],
    "example": "If something costs $1,000 today and inflation averages 3% for 10 years, the future price estimate will be much higher than the current sticker price.",
    "faq": [
      {
        "q": "What does inflation mean in simple terms?",
        "a": "Inflation means prices tend to rise over time, so the same amount of money usually buys less in the future than it buys today."
      },
      {
        "q": "Can I use this for retirement planning?",
        "a": "Yes. Inflation is one of the most important variables in long-term retirement planning because it affects future living costs."
      },
      {
        "q": "Is the inflation rate guaranteed?",
        "a": "No. Inflation can move higher or lower over time, so it is smart to test more than one scenario."
      }
    ],
    "inputs": [
      {
        "name": "amount",
        "label": "Amount today (USD)",
        "type": "number",
        "defaultValue": "10000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "inflationRate",
        "label": "Annual inflation rate (%)",
        "type": "number",
        "defaultValue": "3",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "10",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "roi-calculator",
    "name": "ROI Calculator",
    "kind": "expression",
    "description": "Use this roi calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The roi calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this roi calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "gain",
        "label": "Net gain (USD)",
        "type": "number",
        "defaultValue": "1800",
        "step": "0.01"
      },
      {
        "name": "cost",
        "label": "Cost of investment (USD)",
        "type": "number",
        "defaultValue": "12000",
        "step": "0.01"
      }
    ],
    "expr": "(gain / cost) * 100",
    "primary": "Return on investment",
    "suffix": "%",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "stock-average-calculator",
    "name": "Stock Average Calculator",
    "kind": "stockAverage",
    "description": "Use this stock average calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The stock average calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this stock average calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "shares1",
        "label": "First purchase shares",
        "type": "number",
        "defaultValue": "10",
        "min": "0",
        "step": "0.0001"
      },
      {
        "name": "price1",
        "label": "First purchase price",
        "type": "number",
        "defaultValue": "100",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "shares2",
        "label": "Second purchase shares",
        "type": "number",
        "defaultValue": "15",
        "min": "0",
        "step": "0.0001"
      },
      {
        "name": "price2",
        "label": "Second purchase price",
        "type": "number",
        "defaultValue": "85",
        "min": "0",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "net-worth-calculator",
    "name": "Net Worth Calculator",
    "kind": "expression",
    "description": "Use this net worth calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The net worth calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this net worth calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "assets",
        "label": "Total assets (USD)",
        "type": "number",
        "defaultValue": "120000",
        "step": "0.01"
      },
      {
        "name": "liabilities",
        "label": "Total liabilities (USD)",
        "type": "number",
        "defaultValue": "45000",
        "step": "0.01"
      }
    ],
    "expr": "assets - liabilities",
    "primary": "Net worth",
    "prefix": "$",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "debt-payoff-calculator",
    "name": "Debt Payoff Calculator",
    "kind": "debtPayoff",
    "description": "Use this debt payoff calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The debt payoff calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this debt payoff calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "balance",
        "label": "Debt balance (USD)",
        "type": "number",
        "defaultValue": "12000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Interest rate (%)",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      },
      {
        "name": "monthlyPayment",
        "label": "Monthly payment (USD)",
        "type": "number",
        "defaultValue": "300",
        "min": "1",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "amortization-calculator",
    "name": "Amortization Calculator",
    "kind": "loanPayment",
    "description": "Use this amortization calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The amortization calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this amortization calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "25000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "6.5",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Loan term (years)",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "budget-calculator",
    "name": "Budget Calculator",
    "kind": "expression",
    "description": "Use this budget calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The budget calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this budget calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "income",
        "label": "Monthly income (USD)",
        "type": "number",
        "defaultValue": "5000",
        "step": "0.01"
      },
      {
        "name": "expenses",
        "label": "Monthly expenses (USD)",
        "type": "number",
        "defaultValue": "3800",
        "step": "0.01"
      }
    ],
    "expr": "income - expenses",
    "primary": "Monthly surplus",
    "prefix": "$",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "rent-vs-buy-calculator",
    "name": "Rent vs Buy Calculator",
    "kind": "rentVsBuy",
    "description": "Use this rent vs buy calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The rent vs buy calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this rent vs buy calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "monthlyRent",
        "label": "Monthly rent (USD)",
        "type": "number",
        "defaultValue": "2200",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "homePrice",
        "label": "Home price (USD)",
        "type": "number",
        "defaultValue": "450000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "downPayment",
        "label": "Down payment (USD)",
        "type": "number",
        "defaultValue": "90000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Mortgage rate (%)",
        "type": "number",
        "defaultValue": "6.2",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Comparison horizon (years)",
        "type": "number",
        "defaultValue": "7",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "apr-calculator",
    "name": "APR Calculator",
    "kind": "expression",
    "description": "Use this apr calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The apr calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this apr calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "fees",
        "label": "Loan fees (USD)",
        "type": "number",
        "defaultValue": "500",
        "step": "0.01"
      },
      {
        "name": "interest",
        "label": "Interest over 1 year (USD)",
        "type": "number",
        "defaultValue": "3000",
        "step": "0.01"
      },
      {
        "name": "principal",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "50000",
        "step": "0.01"
      }
    ],
    "expr": "((interest + fees) / principal) * 100",
    "primary": "Estimated APR",
    "suffix": "%",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "future-value-calculator",
    "name": "Future Value Calculator",
    "kind": "futureValueWithContrib",
    "description": "Use this future value calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The future value calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this future value calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "5000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "300",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual growth rate (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "15",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "present-value-calculator",
    "name": "Present Value Calculator",
    "kind": "expression",
    "description": "Use this present value calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The present value calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this present value calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "futureValue",
        "label": "Future value (USD)",
        "type": "number",
        "defaultValue": "20000",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Discount rate (%)",
        "type": "number",
        "defaultValue": "6",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "10",
        "step": "1"
      }
    ],
    "expr": "futureValue / Math.pow(1 + annualRate / 100, years)",
    "primary": "Present value",
    "prefix": "$",
    "relatedSlugs": [
      "compound-interest-calculator",
      "loan-calculator",
      "mortgage-calculator",
      "investment-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "bmi-calculator",
    "name": "BMI Calculator",
    "kind": "bmi",
    "description": "Free BMI calculator using height and weight with US and metric-friendly inputs. Instantly estimate body mass index for general health screening.",
    "intro": "This BMI calculator helps you estimate body mass index using your height and weight. It is a quick screening tool commonly used in the US and other English-speaking countries to classify weight range categories at a high level.",
    "formulaText": "BMI is calculated by dividing weight by height squared. In metric terms the formula is kilograms divided by meters squared. In US-style usage, calculators convert feet, inches, or pounds into the equivalent metric calculation behind the scenes.",
    "howToUse": [
      "Enter your height and weight using the fields provided.",
      "Review the BMI value generated instantly.",
      "Use the result as a general screening estimate rather than a full health assessment.",
      "Consult a healthcare professional for advice that considers body composition, age, sex, and medical history."
    ],
    "example": "A person who weighs 180 pounds and is 5 feet 10 inches tall can use a BMI calculator to get a quick index number and compare it with standard BMI categories.",
    "faq": [
      {
        "q": "Is BMI always accurate?",
        "a": "No. BMI is a broad screening metric and does not directly measure body fat, muscle mass, or health status. Athletic or muscular individuals can have a higher BMI without having excess body fat."
      },
      {
        "q": "Can BMI be used for children?",
        "a": "Children and teens usually require age- and sex-specific BMI percentile charts rather than adult BMI categories."
      },
      {
        "q": "Should I rely on BMI alone?",
        "a": "No. BMI can be a useful starting point, but waist size, body composition, labs, lifestyle, and medical guidance matter too."
      }
    ],
    "inputs": [
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "30",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "bmr-calculator",
    "name": "BMR Calculator",
    "kind": "bmr",
    "description": "Use this bmr calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The bmr calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this bmr calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "30",
        "step": "0.1"
      },
      {
        "name": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": "35",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "body-fat-calculator",
      "calorie-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "body-fat-calculator",
    "name": "Body Fat Calculator",
    "kind": "bodyFat",
    "description": "Use this body fat calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The body fat calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this body fat calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "50",
        "step": "0.1"
      },
      {
        "name": "neckCm",
        "label": "Neck circumference (cm)",
        "type": "number",
        "defaultValue": "38",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "waistCm",
        "label": "Waist circumference (cm)",
        "type": "number",
        "defaultValue": "84",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "hipCm",
        "label": "Hip circumference (cm, female only)",
        "type": "number",
        "defaultValue": "96",
        "min": "1",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "calorie-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "calorie-calculator",
    "name": "Calorie Calculator",
    "kind": "calorie",
    "description": "Free calorie calculator to estimate daily calorie needs based on age, sex, height, weight, and activity level. Useful for maintenance, fat loss, or weight gain planning.",
    "intro": "The calorie calculator estimates how many calories you may need per day to maintain your current weight. It can also help you plan a calorie target for gradual weight loss or weight gain when paired with your activity level.",
    "formulaText": "Most calorie calculators estimate basal energy needs first, then multiply by an activity factor to approximate total daily energy expenditure. The result is an estimate, not a medical prescription, because metabolism and daily movement vary from person to person.",
    "howToUse": [
      "Enter your sex, age, height, and weight.",
      "Choose the activity level that best matches your routine.",
      "Review the estimated daily calories for maintenance and use that as a starting point.",
      "Adjust gradually if your real-world results differ from the estimate."
    ],
    "example": "An active adult can compare calorie estimates for maintenance, then subtract or add calories modestly to plan for fat loss or weight gain over time.",
    "faq": [
      {
        "q": "Is this the same as TDEE?",
        "a": "Very close. A calorie calculator often uses the same total daily energy expenditure concept, then frames the result in a more practical way for eating targets."
      },
      {
        "q": "Why is this only an estimate?",
        "a": "Activity trackers, body composition, hormones, stress, and daily movement all affect actual calorie burn. Use the result as a starting point and adjust based on progress."
      },
      {
        "q": "Can I use this for weight loss?",
        "a": "Yes, but it is best used for a moderate calorie deficit rather than an extreme cut. Medical guidance is appropriate if you have health concerns or a specialized nutrition goal."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "30",
        "step": "0.1"
      },
      {
        "name": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": "35",
        "min": "1",
        "step": "1"
      },
      {
        "name": "activity",
        "label": "Activity level",
        "type": "select",
        "defaultValue": "1.55",
        "options": [
          {
            "label": "Sedentary",
            "value": "1.2"
          },
          {
            "label": "Lightly active",
            "value": "1.375"
          },
          {
            "label": "Moderately active",
            "value": "1.55"
          },
          {
            "label": "Very active",
            "value": "1.725"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "ideal-weight-calculator",
    "name": "Ideal Weight Calculator",
    "kind": "idealWeight",
    "description": "Use this ideal weight calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The ideal weight calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this ideal weight calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "50",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "water-intake-calculator",
    "name": "Water Intake Calculator",
    "kind": "expression",
    "description": "Use this water intake calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The water intake calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this water intake calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "weightLb",
        "label": "Body weight (lb)",
        "type": "number",
        "defaultValue": "180",
        "step": "0.1"
      }
    ],
    "expr": "weightLb * 0.5",
    "primary": "Recommended water intake",
    "suffix": " oz/day",
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "tdee-calculator",
    "name": "TDEE Calculator",
    "kind": "tdee",
    "description": "Use this tdee calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The tdee calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this tdee calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "30",
        "step": "0.1"
      },
      {
        "name": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": "35",
        "min": "1",
        "step": "1"
      },
      {
        "name": "activity",
        "label": "Activity level",
        "type": "select",
        "defaultValue": "1.55",
        "options": [
          {
            "label": "Sedentary",
            "value": "1.2"
          },
          {
            "label": "Lightly active",
            "value": "1.375"
          },
          {
            "label": "Moderately active",
            "value": "1.55"
          },
          {
            "label": "Very active",
            "value": "1.725"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "pregnancy-due-date-calculator",
    "name": "Pregnancy Due Date Calculator",
    "kind": "dueDate",
    "description": "Free pregnancy due date calculator based on last menstrual period. Estimate expected due date and pregnancy timeline using a simple standard method.",
    "intro": "This pregnancy due date calculator estimates an expected due date using the first day of your last menstrual period, which is the most common starting point for basic due date estimation. It is a convenient tool for an early timeline before you receive individualized dating from a healthcare provider.",
    "formulaText": "The standard due date estimate adds 280 days, or 40 weeks, to the first day of the last menstrual period. This is a common medical convention for estimating a due date in uncomplicated pregnancies.",
    "howToUse": [
      "Select the first day of your last menstrual period.",
      "Review the estimated due date generated by the calculator.",
      "Use the date as a general planning reference for appointments and milestones.",
      "Confirm dating with your OB-GYN or midwife, especially if cycle length varies or ultrasound findings differ."
    ],
    "example": "If your last menstrual period began on January 1, the calculator adds 280 days to estimate an expected due date in early October.",
    "faq": [
      {
        "q": "Is the due date exact?",
        "a": "No. It is an estimate. Only a small percentage of babies arrive on the exact due date, and your provider may adjust dating based on cycle length or ultrasound measurements."
      },
      {
        "q": "Can I use this with irregular periods?",
        "a": "You can use it for a rough estimate, but irregular cycles can make the result less reliable. A clinician may provide a more accurate due date after evaluation."
      },
      {
        "q": "Does this replace medical advice?",
        "a": "No. This tool is for general planning only and should not replace prenatal care or professional medical guidance."
      }
    ],
    "inputs": [
      {
        "name": "lastPeriod",
        "label": "First day of last period",
        "type": "date",
        "defaultValue": "2026-01-01"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "ovulation-calculator",
    "name": "Ovulation Calculator",
    "kind": "ovulation",
    "description": "Use this ovulation calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The ovulation calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this ovulation calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "lastPeriod",
        "label": "First day of last period",
        "type": "date",
        "defaultValue": "2026-01-01"
      },
      {
        "name": "cycleLength",
        "label": "Average cycle length (days)",
        "type": "number",
        "defaultValue": "28",
        "min": "20",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "heart-rate-calculator",
    "name": "Heart Rate Calculator",
    "kind": "heartRate",
    "description": "Use this heart rate calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The heart rate calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this heart rate calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": "35",
        "min": "1",
        "step": "1"
      },
      {
        "name": "restingHr",
        "label": "Resting heart rate (optional)",
        "type": "number",
        "defaultValue": "60",
        "min": "30",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "pace-calculator",
    "name": "Pace Calculator",
    "kind": "pace",
    "description": "Use this pace calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The pace calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this pace calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "distance",
        "label": "Distance (miles)",
        "type": "number",
        "defaultValue": "3.1",
        "min": "0.1",
        "step": "0.01"
      },
      {
        "name": "hours",
        "label": "Hours",
        "type": "number",
        "defaultValue": "0",
        "min": "0",
        "step": "1"
      },
      {
        "name": "minutes",
        "label": "Minutes",
        "type": "number",
        "defaultValue": "30",
        "min": "0",
        "step": "1"
      },
      {
        "name": "seconds",
        "label": "Seconds",
        "type": "number",
        "defaultValue": "0",
        "min": "0",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "protein-intake-calculator",
    "name": "Protein Intake Calculator",
    "kind": "expression",
    "description": "Use this protein intake calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The protein intake calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this protein intake calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "weightLb",
        "label": "Body weight (lb)",
        "type": "number",
        "defaultValue": "180",
        "step": "0.1"
      },
      {
        "name": "gramsPerLb",
        "label": "Protein per lb (g)",
        "type": "number",
        "defaultValue": "0.8",
        "step": "0.01"
      }
    ],
    "expr": "weightLb * gramsPerLb",
    "primary": "Daily protein target",
    "suffix": " g/day",
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "body-surface-area-calculator",
    "name": "Body Surface Area Calculator",
    "kind": "expression",
    "description": "Use this body surface area calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The body surface area calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this body surface area calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "step": "0.1"
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "step": "0.1"
      }
    ],
    "expr": "Math.sqrt((heightCm * weightKg) / 3600)",
    "primary": "Body surface area",
    "suffix": " m²",
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "waist-to-hip-ratio-calculator",
    "name": "Waist to Hip Ratio Calculator",
    "kind": "expression",
    "description": "Use this waist to hip ratio calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The waist to hip ratio calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this waist to hip ratio calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "waistCm",
        "label": "Waist (cm)",
        "type": "number",
        "defaultValue": "84",
        "step": "0.1"
      },
      {
        "name": "hipCm",
        "label": "Hip (cm)",
        "type": "number",
        "defaultValue": "96",
        "step": "0.1"
      }
    ],
    "expr": "waistCm / hipCm",
    "primary": "Waist-to-hip ratio",
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "lean-body-mass-calculator",
    "name": "Lean Body Mass Calculator",
    "kind": "leanBodyMass",
    "description": "Use this lean body mass calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The lean body mass calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this lean body mass calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sex",
        "label": "Sex",
        "type": "select",
        "defaultValue": "male",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ]
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "72",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "bodyFatPercent",
        "label": "Body fat (%)",
        "type": "number",
        "defaultValue": "18",
        "min": "1",
        "max": "70",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "bmr-calculator",
      "body-fat-calculator",
      "calorie-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "age-calculator",
    "name": "Age Calculator",
    "kind": "age",
    "description": "Free age calculator to find exact age in years, months, and days from a birth date. Useful for forms, school, benefits, milestones, and general date calculations.",
    "intro": "This age calculator quickly shows how old someone is based on a birth date and a selected target date. It is useful for everyday situations such as official forms, insurance paperwork, school age checks, and milestone planning.",
    "formulaText": "The calculator compares two calendar dates and converts the difference into an age-style result. Depending on the tool version, the output may be shown in years, months, days, or a mix of all three.",
    "howToUse": [
      "Enter the date of birth.",
      "Choose the target date or use the current date.",
      "Review the exact age calculation.",
      "Use the result for age checks, records, or timeline planning."
    ],
    "example": "If someone was born on June 15, 1995, the calculator can show their exact age today or on any selected future or past date.",
    "faq": [
      {
        "q": "Can I calculate age on a past or future date?",
        "a": "Yes. Age calculators are often used to check age eligibility on a specific application date or event date."
      },
      {
        "q": "Does this account for leap years?",
        "a": "A properly built date calculator should account for the real calendar, including leap years and month lengths."
      },
      {
        "q": "Can I use this for school or legal age checks?",
        "a": "Yes, for a quick estimate, but always verify official eligibility rules when a legal deadline or institution-specific cutoff applies."
      }
    ],
    "inputs": [
      {
        "name": "birthDate",
        "label": "Birth date",
        "type": "date",
        "defaultValue": "1990-06-15"
      }
    ],
    "relatedSlugs": [
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator",
      "days-between-dates-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "date-difference-calculator",
    "name": "Date Difference Calculator",
    "kind": "dateDiff",
    "description": "Free date difference calculator to find the number of days, weeks, months, or years between two dates. Helpful for schedules, deadlines, contracts, and planning.",
    "intro": "This date difference calculator measures the time between two calendar dates. It is useful for project planning, trip timing, legal or contract deadlines, subscriptions, and any situation where you need a clear date-to-date interval.",
    "formulaText": "The calculator subtracts one date from another and returns the calendar difference. Depending on the output format, it can show the gap in days, weeks, months, years, or a combination of these units.",
    "howToUse": [
      "Enter the start date.",
      "Enter the end date.",
      "Review the number of days or other time units between the two dates.",
      "Use the result for planning, scheduling, or eligibility timelines."
    ],
    "example": "If you need to know how many days remain before a deadline, renewal date, vacation, or project milestone, enter both dates and the calculator does the count instantly.",
    "faq": [
      {
        "q": "Can this calculate business days?",
        "a": "This version focuses on calendar difference. For weekday-only counts, a dedicated business days calculator is usually better."
      },
      {
        "q": "Why are month-based results sometimes tricky?",
        "a": "Months have different lengths, so some tools emphasize total days to avoid ambiguity. Calendar math can look different depending on the output format selected."
      },
      {
        "q": "Can I use this for legal or contract deadlines?",
        "a": "You can use it for quick planning, but official deadlines should always be verified against the governing rule or document."
      }
    ],
    "inputs": [
      {
        "name": "startDate",
        "label": "Start date",
        "type": "date",
        "defaultValue": "2026-01-01"
      },
      {
        "name": "endDate",
        "label": "End date",
        "type": "date",
        "defaultValue": "2026-03-16"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "time-duration-calculator",
      "work-hours-calculator",
      "days-between-dates-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "time-duration-calculator",
    "name": "Time Duration Calculator",
    "kind": "timeDuration",
    "description": "Free time duration calculator to measure elapsed time between two clock times. Useful for shifts, schedules, events, productivity tracking, and daily planning.",
    "intro": "The time duration calculator tells you how much time passes between a start time and an end time. It is useful for work shifts, meetings, events, study sessions, sleep windows, and many everyday scheduling tasks.",
    "formulaText": "The calculator converts both clock times into total minutes, subtracts the start time from the end time, and then converts the result back into hours and minutes. Some time tools can also handle overnight spans or optional breaks.",
    "howToUse": [
      "Enter a start time.",
      "Enter an end time.",
      "Review the total elapsed duration.",
      "Use the result for timesheets, schedules, or productivity tracking."
    ],
    "example": "If a shift starts at 8:30 AM and ends at 5:15 PM, the calculator can instantly show the total time worked before or after subtracting breaks in a more advanced setup.",
    "faq": [
      {
        "q": "Does this work for overnight time spans?",
        "a": "Basic versions may require special handling for overnight cases, while more advanced tools can treat an end time after midnight as the next day."
      },
      {
        "q": "Can I use this for payroll?",
        "a": "Yes, for quick checks. However, payroll systems may round time differently or apply break and overtime rules."
      },
      {
        "q": "Is this the same as a work hours calculator?",
        "a": "Not exactly. A time duration calculator focuses on elapsed time between two clock times, while a work hours calculator may also account for breaks, overtime, and weekly totals."
      }
    ],
    "inputs": [
      {
        "name": "startTime",
        "label": "Start time",
        "type": "time",
        "defaultValue": "09:00"
      },
      {
        "name": "endTime",
        "label": "End time",
        "type": "time",
        "defaultValue": "17:30"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "work-hours-calculator",
      "days-between-dates-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "work-hours-calculator",
    "name": "Work Hours Calculator",
    "kind": "workHours",
    "description": "Use this work hours calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The work hours calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this work hours calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "hoursPerDay",
        "label": "Hours worked per day",
        "type": "number",
        "defaultValue": "8",
        "min": "0",
        "step": "0.25"
      },
      {
        "name": "daysPerWeek",
        "label": "Days worked per week",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      },
      {
        "name": "weeks",
        "label": "Number of weeks",
        "type": "number",
        "defaultValue": "4",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "days-between-dates-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "days-between-dates-calculator",
    "name": "Days Between Dates Calculator",
    "kind": "dateDiff",
    "description": "Use this days between dates calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The days between dates calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this days between dates calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "startDate",
        "label": "Start date",
        "type": "date",
        "defaultValue": "2026-01-01"
      },
      {
        "name": "endDate",
        "label": "End date",
        "type": "date",
        "defaultValue": "2026-03-16"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "business-days-calculator",
    "name": "Business Days Calculator",
    "kind": "businessDays",
    "description": "Use this business days calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The business days calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this business days calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "startDate",
        "label": "Start date",
        "type": "date",
        "defaultValue": "2026-03-01"
      },
      {
        "name": "endDate",
        "label": "End date",
        "type": "date",
        "defaultValue": "2026-03-31"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "countdown-calculator",
    "name": "Countdown Calculator",
    "kind": "countdown",
    "description": "Use this countdown calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The countdown calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this countdown calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "targetDate",
        "label": "Target date",
        "type": "date",
        "defaultValue": "2026-12-31"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "week-number-calculator",
    "name": "Week Number Calculator",
    "kind": "weekNumber",
    "description": "Use this week number calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The week number calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this week number calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "date",
        "label": "Date",
        "type": "date",
        "defaultValue": "2026-03-16"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "date-calculator",
    "name": "Date Calculator",
    "kind": "dateAdd",
    "description": "Use this date calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The date calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this date calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "startDate",
        "label": "Start date",
        "type": "date",
        "defaultValue": "2026-03-16"
      },
      {
        "name": "days",
        "label": "Days to add or subtract",
        "type": "number",
        "defaultValue": "30",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "hours-between-times-calculator",
    "name": "Hours Between Times Calculator",
    "kind": "timeDuration",
    "description": "Use this hours between times calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The hours between times calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this hours between times calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "startTime",
        "label": "Start time",
        "type": "time",
        "defaultValue": "09:00"
      },
      {
        "name": "endTime",
        "label": "End time",
        "type": "time",
        "defaultValue": "17:30"
      }
    ],
    "relatedSlugs": [
      "age-calculator",
      "date-difference-calculator",
      "time-duration-calculator",
      "work-hours-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percentage-calculator",
    "name": "Percentage Calculator",
    "kind": "percentage",
    "description": "Free percentage calculator for percentage of a number, percent increase, and percent decrease style math. Useful for school, finance, shopping, and everyday calculations.",
    "intro": "The percentage calculator helps with one of the most common forms of everyday math. You can use it to find a percentage of a number, compare values, or check increases and decreases in prices, grades, sales, and financial figures.",
    "formulaText": "Percentage math is usually based on three simple relationships: part divided by whole equals percentage, percentage times whole equals part, and change divided by original value equals percent change. This tool simplifies those calculations instantly.",
    "howToUse": [
      "Enter the values requested by the calculator.",
      "Choose the percentage-style question you want to answer.",
      "Review the result instantly without doing manual math.",
      "Use it for discounts, markups, score changes, or proportion problems."
    ],
    "example": "If you want to know what 15% of 240 is, or how much a value changed from 80 to 100 in percentage terms, the calculator provides the answer right away.",
    "faq": [
      {
        "q": "What is the easiest way to think about percentages?",
        "a": "A percentage is simply a part out of 100. For example, 25% means 25 out of every 100."
      },
      {
        "q": "Can I use this for percent increase and decrease?",
        "a": "Yes. Percentage tools are commonly used for price changes, grades, revenue growth, and many other before-and-after comparisons."
      },
      {
        "q": "Why are percentages used so often?",
        "a": "Percentages make comparisons easier because they normalize values into the same out-of-100 format."
      }
    ],
    "inputs": [
      {
        "name": "part",
        "label": "Part",
        "type": "number",
        "defaultValue": "25",
        "step": "0.01"
      },
      {
        "name": "whole",
        "label": "Whole",
        "type": "number",
        "defaultValue": "200",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator",
      "ratio-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percent-change-calculator",
    "name": "Percent Change Calculator",
    "kind": "percentChange",
    "description": "Use this percent change calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The percent change calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this percent change calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "oldValue",
        "label": "Original value",
        "type": "number",
        "defaultValue": "120",
        "step": "0.01"
      },
      {
        "name": "newValue",
        "label": "New value",
        "type": "number",
        "defaultValue": "150",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator",
      "ratio-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percentage-of-total-calculator",
    "name": "Percentage Of Total Calculator",
    "kind": "expression",
    "description": "Use this percentage of total calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The percentage of total calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this percentage of total calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "percentage",
        "label": "Percentage (%)",
        "type": "number",
        "defaultValue": "15",
        "step": "0.01"
      },
      {
        "name": "total",
        "label": "Total",
        "type": "number",
        "defaultValue": "250",
        "step": "0.01"
      }
    ],
    "expr": "(percentage / 100) * total",
    "primary": "Percentage of total",
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "fraction-calculator",
      "ratio-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "fraction-calculator",
    "name": "Fraction Calculator",
    "kind": "fraction",
    "description": "Use this fraction calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The fraction calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this fraction calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "numerator1",
        "label": "Fraction 1 numerator",
        "type": "number",
        "defaultValue": "1",
        "step": "1"
      },
      {
        "name": "denominator1",
        "label": "Fraction 1 denominator",
        "type": "number",
        "defaultValue": "2",
        "step": "1"
      },
      {
        "name": "numerator2",
        "label": "Fraction 2 numerator",
        "type": "number",
        "defaultValue": "1",
        "step": "1"
      },
      {
        "name": "denominator2",
        "label": "Fraction 2 denominator",
        "type": "number",
        "defaultValue": "3",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "ratio-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "ratio-calculator",
    "name": "Ratio Calculator",
    "kind": "ratio",
    "description": "Use this ratio calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The ratio calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this ratio calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value1",
        "label": "Value 1",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      },
      {
        "name": "value2",
        "label": "Value 2",
        "type": "number",
        "defaultValue": "12",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "average-calculator",
    "name": "Average Calculator",
    "kind": "average",
    "description": "Use this average calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The average calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this average calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "values",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "defaultValue": "12, 18, 24, 30"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "weighted-average-calculator",
    "name": "Weighted Average Calculator",
    "kind": "weightedAverage",
    "description": "Use this weighted average calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The weighted average calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this weighted average calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "values",
        "label": "Values (comma separated)",
        "type": "textarea",
        "defaultValue": "90, 80, 70"
      },
      {
        "name": "weights",
        "label": "Weights (comma separated)",
        "type": "textarea",
        "defaultValue": "0.5, 0.3, 0.2"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "probability-calculator",
    "name": "Probability Calculator",
    "kind": "expression",
    "description": "Use this probability calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The probability calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this probability calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "successes",
        "label": "Successful outcomes",
        "type": "number",
        "defaultValue": "3",
        "step": "1"
      },
      {
        "name": "totalOutcomes",
        "label": "Total outcomes",
        "type": "number",
        "defaultValue": "10",
        "step": "1"
      }
    ],
    "expr": "(successes / totalOutcomes) * 100",
    "primary": "Probability",
    "suffix": "%",
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "standard-deviation-calculator",
    "name": "Standard Deviation Calculator",
    "kind": "stddev",
    "description": "Use this standard deviation calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The standard deviation calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this standard deviation calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "values",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "defaultValue": "10, 12, 23, 23, 16, 23, 21, 16"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "log-calculator",
    "name": "Log Calculator",
    "kind": "expression",
    "description": "Use this log calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The log calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this log calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1000",
        "step": "0.01"
      },
      {
        "name": "base",
        "label": "Base",
        "type": "number",
        "defaultValue": "10",
        "step": "0.01"
      }
    ],
    "expr": "Math.log(value) / Math.log(base)",
    "primary": "Log result",
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "square-root-calculator",
    "name": "Square Root Calculator",
    "kind": "expression",
    "description": "Use this square root calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The square root calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this square root calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "144",
        "step": "0.01"
      }
    ],
    "expr": "Math.sqrt(value)",
    "primary": "Square root",
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "exponent-calculator",
    "name": "Exponent Calculator",
    "kind": "expression",
    "description": "Use this exponent calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The exponent calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this exponent calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "base",
        "label": "Base",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "exponent",
        "label": "Exponent",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      }
    ],
    "expr": "Math.pow(base, exponent)",
    "primary": "Exponent result",
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "factorial-calculator",
    "name": "Factorial Calculator",
    "kind": "factorial",
    "description": "Use this factorial calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The factorial calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this factorial calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Integer",
        "type": "number",
        "defaultValue": "6",
        "min": "0",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "lcm-calculator",
    "name": "LCM Calculator",
    "kind": "lcm",
    "description": "Use this lcm calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The lcm calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this lcm calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "values",
        "label": "Integers (comma separated)",
        "type": "textarea",
        "defaultValue": "12, 18, 30"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "gcd-calculator",
    "name": "GCD Calculator",
    "kind": "gcd",
    "description": "Use this gcd calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The gcd calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this gcd calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "values",
        "label": "Integers (comma separated)",
        "type": "textarea",
        "defaultValue": "24, 36, 60"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "percent-change-calculator",
      "percentage-of-total-calculator",
      "fraction-calculator"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "length-converter",
    "name": "Length Converter",
    "kind": "converter",
    "description": "Use this length converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The length converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this length converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "m",
        "options": [
          {
            "label": "Meters",
            "value": "m"
          },
          {
            "label": "Kilometers",
            "value": "km"
          },
          {
            "label": "Centimeters",
            "value": "cm"
          },
          {
            "label": "Millimeters",
            "value": "mm"
          },
          {
            "label": "Feet",
            "value": "ft"
          },
          {
            "label": "Inches",
            "value": "in"
          },
          {
            "label": "Yards",
            "value": "yd"
          },
          {
            "label": "Miles",
            "value": "mi"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "km",
        "options": [
          {
            "label": "Meters",
            "value": "m"
          },
          {
            "label": "Kilometers",
            "value": "km"
          },
          {
            "label": "Centimeters",
            "value": "cm"
          },
          {
            "label": "Millimeters",
            "value": "mm"
          },
          {
            "label": "Feet",
            "value": "ft"
          },
          {
            "label": "Inches",
            "value": "in"
          },
          {
            "label": "Yards",
            "value": "yd"
          },
          {
            "label": "Miles",
            "value": "mi"
          }
        ]
      }
    ],
    "units": {
      "m": 1,
      "km": 1000,
      "cm": 0.01,
      "mm": 0.001,
      "ft": 0.3048,
      "in": 0.0254,
      "yd": 0.9144,
      "mi": 1609.344
    },
    "unitLabels": {
      "m": "Meters",
      "km": "Kilometers",
      "cm": "Centimeters",
      "mm": "Millimeters",
      "ft": "Feet",
      "in": "Inches",
      "yd": "Yards",
      "mi": "Miles"
    },
    "relatedSlugs": [
      "weight-converter",
      "temperature-converter",
      "speed-converter",
      "area-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "weight-converter",
    "name": "Weight Converter",
    "kind": "converter",
    "description": "Use this weight converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The weight converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this weight converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "kg",
        "options": [
          {
            "label": "Kilograms",
            "value": "kg"
          },
          {
            "label": "Grams",
            "value": "g"
          },
          {
            "label": "Pounds",
            "value": "lb"
          },
          {
            "label": "Ounces",
            "value": "oz"
          },
          {
            "label": "Short tons",
            "value": "ton"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "g",
        "options": [
          {
            "label": "Kilograms",
            "value": "kg"
          },
          {
            "label": "Grams",
            "value": "g"
          },
          {
            "label": "Pounds",
            "value": "lb"
          },
          {
            "label": "Ounces",
            "value": "oz"
          },
          {
            "label": "Short tons",
            "value": "ton"
          }
        ]
      }
    ],
    "units": {
      "kg": 1,
      "g": 0.001,
      "lb": 0.45359237,
      "oz": 0.028349523125,
      "ton": 907.18474
    },
    "unitLabels": {
      "kg": "Kilograms",
      "g": "Grams",
      "lb": "Pounds",
      "oz": "Ounces",
      "ton": "Short tons"
    },
    "relatedSlugs": [
      "length-converter",
      "temperature-converter",
      "speed-converter",
      "area-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "temperature-converter",
    "name": "Temperature Converter",
    "kind": "temperatureConverter",
    "description": "Use this temperature converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The temperature converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "The temperature converter uses the standard Fahrenheit, Celsius, and Kelvin conversion formulas.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this temperature converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Temperature",
        "type": "number",
        "defaultValue": "32",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "f",
        "options": [
          {
            "label": "Fahrenheit",
            "value": "f"
          },
          {
            "label": "Celsius",
            "value": "c"
          },
          {
            "label": "Kelvin",
            "value": "k"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "c",
        "options": [
          {
            "label": "Fahrenheit",
            "value": "f"
          },
          {
            "label": "Celsius",
            "value": "c"
          },
          {
            "label": "Kelvin",
            "value": "k"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "speed-converter",
      "area-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "speed-converter",
    "name": "Speed Converter",
    "kind": "converter",
    "description": "Use this speed converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The speed converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this speed converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "mps",
        "options": [
          {
            "label": "Meters/second",
            "value": "mps"
          },
          {
            "label": "Kilometers/hour",
            "value": "kph"
          },
          {
            "label": "Miles/hour",
            "value": "mph"
          },
          {
            "label": "Feet/second",
            "value": "fps"
          },
          {
            "label": "Knots",
            "value": "knot"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kph",
        "options": [
          {
            "label": "Meters/second",
            "value": "mps"
          },
          {
            "label": "Kilometers/hour",
            "value": "kph"
          },
          {
            "label": "Miles/hour",
            "value": "mph"
          },
          {
            "label": "Feet/second",
            "value": "fps"
          },
          {
            "label": "Knots",
            "value": "knot"
          }
        ]
      }
    ],
    "units": {
      "mps": 1,
      "kph": 0.2777777778,
      "mph": 0.44704,
      "fps": 0.3048,
      "knot": 0.514444
    },
    "unitLabels": {
      "mps": "Meters/second",
      "kph": "Kilometers/hour",
      "mph": "Miles/hour",
      "fps": "Feet/second",
      "knot": "Knots"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "area-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "area-converter",
    "name": "Area Converter",
    "kind": "converter",
    "description": "Use this area converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The area converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this area converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "sqm",
        "options": [
          {
            "label": "Square meters",
            "value": "sqm"
          },
          {
            "label": "Square kilometers",
            "value": "sqkm"
          },
          {
            "label": "Square feet",
            "value": "sqft"
          },
          {
            "label": "Acres",
            "value": "acre"
          },
          {
            "label": "Hectares",
            "value": "hectare"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "sqkm",
        "options": [
          {
            "label": "Square meters",
            "value": "sqm"
          },
          {
            "label": "Square kilometers",
            "value": "sqkm"
          },
          {
            "label": "Square feet",
            "value": "sqft"
          },
          {
            "label": "Acres",
            "value": "acre"
          },
          {
            "label": "Hectares",
            "value": "hectare"
          }
        ]
      }
    ],
    "units": {
      "sqm": 1,
      "sqkm": 1000000,
      "sqft": 0.09290304,
      "acre": 4046.8564224,
      "hectare": 10000
    },
    "unitLabels": {
      "sqm": "Square meters",
      "sqkm": "Square kilometers",
      "sqft": "Square feet",
      "acre": "Acres",
      "hectare": "Hectares"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "volume-converter",
    "name": "Volume Converter",
    "kind": "converter",
    "description": "Use this volume converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The volume converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this volume converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "liter",
        "options": [
          {
            "label": "Liters",
            "value": "liter"
          },
          {
            "label": "Milliliters",
            "value": "ml"
          },
          {
            "label": "US gallons",
            "value": "gallon_us"
          },
          {
            "label": "US quarts",
            "value": "quart_us"
          },
          {
            "label": "US cups",
            "value": "cup_us"
          },
          {
            "label": "Cubic meters",
            "value": "cubic_meter"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "ml",
        "options": [
          {
            "label": "Liters",
            "value": "liter"
          },
          {
            "label": "Milliliters",
            "value": "ml"
          },
          {
            "label": "US gallons",
            "value": "gallon_us"
          },
          {
            "label": "US quarts",
            "value": "quart_us"
          },
          {
            "label": "US cups",
            "value": "cup_us"
          },
          {
            "label": "Cubic meters",
            "value": "cubic_meter"
          }
        ]
      }
    ],
    "units": {
      "liter": 1,
      "ml": 0.001,
      "gallon_us": 3.785411784,
      "quart_us": 0.946352946,
      "cup_us": 0.2365882365,
      "cubic_meter": 1000
    },
    "unitLabels": {
      "liter": "Liters",
      "ml": "Milliliters",
      "gallon_us": "US gallons",
      "quart_us": "US quarts",
      "cup_us": "US cups",
      "cubic_meter": "Cubic meters"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "energy-converter",
    "name": "Energy Converter",
    "kind": "converter",
    "description": "Use this energy converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The energy converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this energy converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "joule",
        "options": [
          {
            "label": "Joules",
            "value": "joule"
          },
          {
            "label": "Kilojoules",
            "value": "kilojoule"
          },
          {
            "label": "Calories",
            "value": "calorie"
          },
          {
            "label": "Kilocalories",
            "value": "kilocalorie"
          },
          {
            "label": "Watt-hours",
            "value": "wh"
          },
          {
            "label": "Kilowatt-hours",
            "value": "kwh"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kilojoule",
        "options": [
          {
            "label": "Joules",
            "value": "joule"
          },
          {
            "label": "Kilojoules",
            "value": "kilojoule"
          },
          {
            "label": "Calories",
            "value": "calorie"
          },
          {
            "label": "Kilocalories",
            "value": "kilocalorie"
          },
          {
            "label": "Watt-hours",
            "value": "wh"
          },
          {
            "label": "Kilowatt-hours",
            "value": "kwh"
          }
        ]
      }
    ],
    "units": {
      "joule": 1,
      "kilojoule": 1000,
      "calorie": 4.184,
      "kilocalorie": 4184,
      "wh": 3600,
      "kwh": 3600000
    },
    "unitLabels": {
      "joule": "Joules",
      "kilojoule": "Kilojoules",
      "calorie": "Calories",
      "kilocalorie": "Kilocalories",
      "wh": "Watt-hours",
      "kwh": "Kilowatt-hours"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "pressure-converter",
    "name": "Pressure Converter",
    "kind": "converter",
    "description": "Use this pressure converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The pressure converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this pressure converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "pa",
        "options": [
          {
            "label": "Pascal",
            "value": "pa"
          },
          {
            "label": "Kilopascal",
            "value": "kpa"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "PSI",
            "value": "psi"
          },
          {
            "label": "Atmosphere",
            "value": "atm"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kpa",
        "options": [
          {
            "label": "Pascal",
            "value": "pa"
          },
          {
            "label": "Kilopascal",
            "value": "kpa"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "PSI",
            "value": "psi"
          },
          {
            "label": "Atmosphere",
            "value": "atm"
          }
        ]
      }
    ],
    "units": {
      "pa": 1,
      "kpa": 1000,
      "bar": 100000,
      "psi": 6894.757293,
      "atm": 101325
    },
    "unitLabels": {
      "pa": "Pascal",
      "kpa": "Kilopascal",
      "bar": "Bar",
      "psi": "PSI",
      "atm": "Atmosphere"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "power-converter",
    "name": "Power Converter",
    "kind": "converter",
    "description": "Use this power converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The power converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this power converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "watt",
        "options": [
          {
            "label": "Watt",
            "value": "watt"
          },
          {
            "label": "Kilowatt",
            "value": "kilowatt"
          },
          {
            "label": "Horsepower",
            "value": "horsepower"
          },
          {
            "label": "BTU/hour",
            "value": "btu_per_hr"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kilowatt",
        "options": [
          {
            "label": "Watt",
            "value": "watt"
          },
          {
            "label": "Kilowatt",
            "value": "kilowatt"
          },
          {
            "label": "Horsepower",
            "value": "horsepower"
          },
          {
            "label": "BTU/hour",
            "value": "btu_per_hr"
          }
        ]
      }
    ],
    "units": {
      "watt": 1,
      "kilowatt": 1000,
      "horsepower": 745.699872,
      "btu_per_hr": 0.29307107
    },
    "unitLabels": {
      "watt": "Watt",
      "kilowatt": "Kilowatt",
      "horsepower": "Horsepower",
      "btu_per_hr": "BTU/hour"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "data-storage-converter",
    "name": "Data Storage Converter",
    "kind": "converter",
    "description": "Use this data storage converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The data storage converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this data storage converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "byte",
        "options": [
          {
            "label": "Bytes",
            "value": "byte"
          },
          {
            "label": "KB",
            "value": "kb"
          },
          {
            "label": "MB",
            "value": "mb"
          },
          {
            "label": "GB",
            "value": "gb"
          },
          {
            "label": "TB",
            "value": "tb"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kb",
        "options": [
          {
            "label": "Bytes",
            "value": "byte"
          },
          {
            "label": "KB",
            "value": "kb"
          },
          {
            "label": "MB",
            "value": "mb"
          },
          {
            "label": "GB",
            "value": "gb"
          },
          {
            "label": "TB",
            "value": "tb"
          }
        ]
      }
    ],
    "units": {
      "byte": 1,
      "kb": 1024,
      "mb": 1048576,
      "gb": 1073741824,
      "tb": 1099511627776
    },
    "unitLabels": {
      "byte": "Bytes",
      "kb": "KB",
      "mb": "MB",
      "gb": "GB",
      "tb": "TB"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "angle-converter",
    "name": "Angle Converter",
    "kind": "converter",
    "description": "Use this angle converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The angle converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this angle converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "degree",
        "options": [
          {
            "label": "Degrees",
            "value": "degree"
          },
          {
            "label": "Radians",
            "value": "radian"
          },
          {
            "label": "Gradians",
            "value": "gradian"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "radian",
        "options": [
          {
            "label": "Degrees",
            "value": "degree"
          },
          {
            "label": "Radians",
            "value": "radian"
          },
          {
            "label": "Gradians",
            "value": "gradian"
          }
        ]
      }
    ],
    "units": {
      "degree": 1,
      "radian": 57.2957795131,
      "gradian": 0.9
    },
    "unitLabels": {
      "degree": "Degrees",
      "radian": "Radians",
      "gradian": "Gradians"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "density-converter",
    "name": "Density Converter",
    "kind": "converter",
    "description": "Use this density converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The density converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this density converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "kg_m3",
        "options": [
          {
            "label": "kg/m³",
            "value": "kg_m3"
          },
          {
            "label": "g/cm³",
            "value": "g_cm3"
          },
          {
            "label": "lb/ft³",
            "value": "lb_ft3"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "g_cm3",
        "options": [
          {
            "label": "kg/m³",
            "value": "kg_m3"
          },
          {
            "label": "g/cm³",
            "value": "g_cm3"
          },
          {
            "label": "lb/ft³",
            "value": "lb_ft3"
          }
        ]
      }
    ],
    "units": {
      "kg_m3": 1,
      "g_cm3": 1000,
      "lb_ft3": 16.018463
    },
    "unitLabels": {
      "kg_m3": "kg/m³",
      "g_cm3": "g/cm³",
      "lb_ft3": "lb/ft³"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "fuel-economy-converter",
    "name": "Fuel Economy Converter",
    "kind": "fuelEconomyConverter",
    "description": "Use this fuel economy converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The fuel economy converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool converts US miles per gallon and liters per 100 kilometers using the standard reciprocal relationship.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this fuel economy converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Fuel economy value",
        "type": "number",
        "defaultValue": "30",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "mpg",
        "options": [
          {
            "label": "Miles per gallon",
            "value": "mpg"
          },
          {
            "label": "Liters per 100 km",
            "value": "l100"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "l100",
        "options": [
          {
            "label": "Miles per gallon",
            "value": "mpg"
          },
          {
            "label": "Liters per 100 km",
            "value": "l100"
          }
        ]
      }
    ],
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "time-unit-converter",
    "name": "Time Unit Converter",
    "kind": "converter",
    "description": "Use this time unit converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The time unit converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this time unit converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "second",
        "options": [
          {
            "label": "Seconds",
            "value": "second"
          },
          {
            "label": "Minutes",
            "value": "minute"
          },
          {
            "label": "Hours",
            "value": "hour"
          },
          {
            "label": "Days",
            "value": "day"
          },
          {
            "label": "Weeks",
            "value": "week"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "minute",
        "options": [
          {
            "label": "Seconds",
            "value": "second"
          },
          {
            "label": "Minutes",
            "value": "minute"
          },
          {
            "label": "Hours",
            "value": "hour"
          },
          {
            "label": "Days",
            "value": "day"
          },
          {
            "label": "Weeks",
            "value": "week"
          }
        ]
      }
    ],
    "units": {
      "second": 1,
      "minute": 60,
      "hour": 3600,
      "day": 86400,
      "week": 604800
    },
    "unitLabels": {
      "second": "Seconds",
      "minute": "Minutes",
      "hour": "Hours",
      "day": "Days",
      "week": "Weeks"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "frequency-converter",
    "name": "Frequency Converter",
    "kind": "converter",
    "description": "Use this frequency converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The frequency converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this frequency converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "hz",
        "options": [
          {
            "label": "Hz",
            "value": "hz"
          },
          {
            "label": "kHz",
            "value": "khz"
          },
          {
            "label": "MHz",
            "value": "mhz"
          },
          {
            "label": "GHz",
            "value": "ghz"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "khz",
        "options": [
          {
            "label": "Hz",
            "value": "hz"
          },
          {
            "label": "kHz",
            "value": "khz"
          },
          {
            "label": "MHz",
            "value": "mhz"
          },
          {
            "label": "GHz",
            "value": "ghz"
          }
        ]
      }
    ],
    "units": {
      "hz": 1,
      "khz": 1000,
      "mhz": 1000000,
      "ghz": 1000000000
    },
    "unitLabels": {
      "hz": "Hz",
      "khz": "kHz",
      "mhz": "MHz",
      "ghz": "GHz"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "force-converter",
    "name": "Force Converter",
    "kind": "converter",
    "description": "Use this force converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The force converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this force converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "newton",
        "options": [
          {
            "label": "Newtons",
            "value": "newton"
          },
          {
            "label": "Kilonewtons",
            "value": "kilonewton"
          },
          {
            "label": "Pound-force",
            "value": "pound_force"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "kilonewton",
        "options": [
          {
            "label": "Newtons",
            "value": "newton"
          },
          {
            "label": "Kilonewtons",
            "value": "kilonewton"
          },
          {
            "label": "Pound-force",
            "value": "pound_force"
          }
        ]
      }
    ],
    "units": {
      "newton": 1,
      "kilonewton": 1000,
      "pound_force": 4.4482216153
    },
    "unitLabels": {
      "newton": "Newtons",
      "kilonewton": "Kilonewtons",
      "pound_force": "Pound-force"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "torque-converter",
    "name": "Torque Converter",
    "kind": "converter",
    "description": "Use this torque converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The torque converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this torque converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "nm",
        "options": [
          {
            "label": "Newton-meters",
            "value": "nm"
          },
          {
            "label": "Pound-feet",
            "value": "lbft"
          },
          {
            "label": "Kilogram-force meter",
            "value": "kgfm"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "lbft",
        "options": [
          {
            "label": "Newton-meters",
            "value": "nm"
          },
          {
            "label": "Pound-feet",
            "value": "lbft"
          },
          {
            "label": "Kilogram-force meter",
            "value": "kgfm"
          }
        ]
      }
    ],
    "units": {
      "nm": 1,
      "lbft": 1.3558179483,
      "kgfm": 9.80665
    },
    "unitLabels": {
      "nm": "Newton-meters",
      "lbft": "Pound-feet",
      "kgfm": "Kilogram-force meter"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "flow-rate-converter",
    "name": "Flow Rate Converter",
    "kind": "converter",
    "description": "Use this flow rate converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The flow rate converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this flow rate converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "lps",
        "options": [
          {
            "label": "Liters/second",
            "value": "lps"
          },
          {
            "label": "US gallons/minute",
            "value": "gpm_us"
          },
          {
            "label": "Cubic meters/hour",
            "value": "cubic_m_per_hr"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "gpm_us",
        "options": [
          {
            "label": "Liters/second",
            "value": "lps"
          },
          {
            "label": "US gallons/minute",
            "value": "gpm_us"
          },
          {
            "label": "Cubic meters/hour",
            "value": "cubic_m_per_hr"
          }
        ]
      }
    ],
    "units": {
      "lps": 1,
      "gpm_us": 0.0630901964,
      "cubic_m_per_hr": 0.2777777778
    },
    "unitLabels": {
      "lps": "Liters/second",
      "gpm_us": "US gallons/minute",
      "cubic_m_per_hr": "Cubic meters/hour"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "electric-charge-converter",
    "name": "Electric Charge Converter",
    "kind": "converter",
    "description": "Use this electric charge converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The electric charge converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this electric charge converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "coulomb",
        "options": [
          {
            "label": "Coulombs",
            "value": "coulomb"
          },
          {
            "label": "Ampere-hour",
            "value": "ah"
          },
          {
            "label": "Milliampere-hour",
            "value": "mah"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "ah",
        "options": [
          {
            "label": "Coulombs",
            "value": "coulomb"
          },
          {
            "label": "Ampere-hour",
            "value": "ah"
          },
          {
            "label": "Milliampere-hour",
            "value": "mah"
          }
        ]
      }
    ],
    "units": {
      "coulomb": 1,
      "ah": 3600,
      "mah": 3.6
    },
    "unitLabels": {
      "coulomb": "Coulombs",
      "ah": "Ampere-hour",
      "mah": "Milliampere-hour"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "magnetic-field-converter",
    "name": "Magnetic Field Converter",
    "kind": "converter",
    "description": "Use this magnetic field converter to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The magnetic field converter helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This converter first maps the input to a base unit, then converts the base-unit value into the selected target unit.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this magnetic field converter?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1",
        "step": "0.0001"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "tesla",
        "options": [
          {
            "label": "Tesla",
            "value": "tesla"
          },
          {
            "label": "Gauss",
            "value": "gauss"
          },
          {
            "label": "Millitesla",
            "value": "millitesla"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "gauss",
        "options": [
          {
            "label": "Tesla",
            "value": "tesla"
          },
          {
            "label": "Gauss",
            "value": "gauss"
          },
          {
            "label": "Millitesla",
            "value": "millitesla"
          }
        ]
      }
    ],
    "units": {
      "tesla": 1,
      "gauss": 0.0001,
      "millitesla": 0.001
    },
    "unitLabels": {
      "tesla": "Tesla",
      "gauss": "Gauss",
      "millitesla": "Millitesla"
    },
    "relatedSlugs": [
      "length-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "tip-calculator",
    "name": "Tip Calculator",
    "kind": "tip",
    "description": "Free tip calculator to find tip amount, total bill, and per-person split. Useful for restaurants, bars, delivery, travel, and service-based spending.",
    "intro": "The tip calculator helps you quickly determine how much to tip and how much each person should pay when a bill is shared. It is especially useful in the US where tipping is a normal part of dining and many service experiences.",
    "formulaText": "The calculator multiplies the bill amount by the selected tip percentage to find the tip, then adds that amount to the bill total. If you split the bill, it divides the total by the number of people.",
    "howToUse": [
      "Enter the pre-tip bill amount.",
      "Choose or enter a tip percentage.",
      "Add the number of people if the bill will be split.",
      "Review the tip amount, grand total, and per-person total."
    ],
    "example": "For a $72 restaurant bill with a 20% tip and 3 people paying together, the calculator shows the tip amount and how much each person owes.",
    "faq": [
      {
        "q": "What is a normal tip in the US?",
        "a": "Common restaurant tipping ranges in the US are often around 15% to 20%, though customs vary by service type and region."
      },
      {
        "q": "Should I calculate tip before or after tax?",
        "a": "Many people tip based on the pre-tax subtotal, but some tip on the final total. Local habits can differ."
      },
      {
        "q": "Can this be used outside restaurants?",
        "a": "Yes. It can also be used for delivery, rides, salons, hotel staff, and other service scenarios where tipping is customary."
      }
    ],
    "inputs": [
      {
        "name": "bill",
        "label": "Bill amount (USD)",
        "type": "number",
        "defaultValue": "85",
        "step": "0.01"
      },
      {
        "name": "tipPercent",
        "label": "Tip percentage (%)",
        "type": "number",
        "defaultValue": "18",
        "step": "0.01"
      },
      {
        "name": "people",
        "label": "Number of people",
        "type": "number",
        "defaultValue": "2",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator",
      "sales-tax-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "discount-calculator",
    "name": "Discount Calculator",
    "kind": "discount",
    "description": "Free discount calculator to find sale price, amount saved, and final cost after a percent-off discount. Great for shopping, coupons, and retail price comparisons.",
    "intro": "This discount calculator shows how much you save and what you actually pay after a percentage discount. It is useful for retail shopping, coupon math, seasonal sales, and comparing which deal is truly better.",
    "formulaText": "The tool multiplies the original price by the discount percentage to find the savings amount, then subtracts that savings value from the original price to show the final sale price.",
    "howToUse": [
      "Enter the original price of the item.",
      "Enter the discount percentage.",
      "Review the amount saved and final sale price.",
      "Use it to compare multiple promotions or coupon offers before buying."
    ],
    "example": "If an item costs $80 and is 25% off, the calculator shows both the dollars saved and the final sale price so you can decide quickly.",
    "faq": [
      {
        "q": "Does this include sales tax?",
        "a": "No. This calculator focuses on the discount itself. If you want the post-tax total, combine it with a sales tax calculator."
      },
      {
        "q": "Can I compare two different deals?",
        "a": "Yes. Run the calculator multiple times to compare different discount percentages or starting prices."
      },
      {
        "q": "What if a store has stacked discounts?",
        "a": "Stacked discounts are usually applied one after another, not added together directly, so the final effective discount can be smaller than expected."
      }
    ],
    "inputs": [
      {
        "name": "originalPrice",
        "label": "Original price (USD)",
        "type": "number",
        "defaultValue": "120",
        "step": "0.01"
      },
      {
        "name": "discountPercent",
        "label": "Discount (%)",
        "type": "number",
        "defaultValue": "25",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "gpa-calculator",
      "split-bill-calculator",
      "sales-tax-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "gpa-calculator",
    "name": "GPA Calculator",
    "kind": "gpa",
    "description": "Free GPA calculator for weighted grade point average based on course grade points and credit hours. Useful for high school, college, and semester planning.",
    "intro": "This GPA calculator helps students estimate grade point average using course grade points and credit hours. It is useful for checking current performance, planning semester targets, or seeing how a specific course result may affect the overall GPA.",
    "formulaText": "GPA is calculated by multiplying each course grade point by its credit hours, adding those totals together, and dividing by the total number of credits. Courses with more credits have more impact on the final GPA.",
    "howToUse": [
      "Enter the grade points for each class.",
      "Enter the credit hours for each class.",
      "Review the weighted GPA result.",
      "Adjust course assumptions to see what grades you need to hit a target GPA."
    ],
    "example": "If you earn 4.0 in a 3-credit course and 3.0 in a 4-credit course, the calculator weights those classes differently when computing the final GPA.",
    "faq": [
      {
        "q": "Does this calculator use weighted credits?",
        "a": "Yes. Courses with more credits count more because GPA is based on total quality points divided by total credits."
      },
      {
        "q": "Can I use this for college GPA?",
        "a": "Yes, as long as your school uses a compatible grade-point system. Always confirm your institution’s exact GPA scale and rules."
      },
      {
        "q": "Does this calculate cumulative GPA?",
        "a": "This version works for the classes you enter. You can use it for semester GPA or approximate cumulative GPA by entering enough course and credit data."
      }
    ],
    "inputs": [
      {
        "name": "course1",
        "label": "Course 1 grade points",
        "type": "number",
        "defaultValue": "4",
        "step": "0.01"
      },
      {
        "name": "credits1",
        "label": "Course 1 credits",
        "type": "number",
        "defaultValue": "3",
        "step": "0.5"
      },
      {
        "name": "course2",
        "label": "Course 2 grade points",
        "type": "number",
        "defaultValue": "3.7",
        "step": "0.01"
      },
      {
        "name": "credits2",
        "label": "Course 2 credits",
        "type": "number",
        "defaultValue": "4",
        "step": "0.5"
      },
      {
        "name": "course3",
        "label": "Course 3 grade points",
        "type": "number",
        "defaultValue": "3.3",
        "step": "0.01"
      },
      {
        "name": "credits3",
        "label": "Course 3 credits",
        "type": "number",
        "defaultValue": "3",
        "step": "0.5"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "sales-tax-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "split-bill-calculator",
    "name": "Split Bill Calculator",
    "kind": "splitBill",
    "description": "Use this split bill calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The split bill calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this split bill calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "bill",
        "label": "Bill amount (USD)",
        "type": "number",
        "defaultValue": "140",
        "step": "0.01"
      },
      {
        "name": "tipPercent",
        "label": "Tip percentage (%)",
        "type": "number",
        "defaultValue": "18",
        "step": "0.01"
      },
      {
        "name": "people",
        "label": "Number of people",
        "type": "number",
        "defaultValue": "4",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "sales-tax-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "sales-tax-calculator",
    "name": "Sales Tax Calculator",
    "kind": "salesTax",
    "description": "Use this sales tax calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The sales tax calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this sales tax calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "price",
        "label": "Price before tax (USD)",
        "type": "number",
        "defaultValue": "49.99",
        "step": "0.01"
      },
      {
        "name": "taxRate",
        "label": "Sales tax rate (%)",
        "type": "number",
        "defaultValue": "8.25",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "commission-calculator",
    "name": "Commission Calculator",
    "kind": "commission",
    "description": "Use this commission calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The commission calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this commission calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "sales",
        "label": "Total sales (USD)",
        "type": "number",
        "defaultValue": "5000",
        "step": "0.01"
      },
      {
        "name": "commissionRate",
        "label": "Commission rate (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "markup-calculator",
    "name": "Markup Calculator",
    "kind": "markup",
    "description": "Use this markup calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The markup calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this markup calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "cost",
        "label": "Cost (USD)",
        "type": "number",
        "defaultValue": "40",
        "step": "0.01"
      },
      {
        "name": "markupPercent",
        "label": "Markup (%)",
        "type": "number",
        "defaultValue": "25",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "markdown-calculator",
    "name": "Markdown Calculator",
    "kind": "markdown",
    "description": "Use this markdown calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The markdown calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this markdown calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "originalPrice",
        "label": "Original price (USD)",
        "type": "number",
        "defaultValue": "80",
        "step": "0.01"
      },
      {
        "name": "markdownPercent",
        "label": "Markdown (%)",
        "type": "number",
        "defaultValue": "15",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "fuel-cost-calculator",
    "name": "Fuel Cost Calculator",
    "kind": "fuelCost",
    "description": "Use this fuel cost calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The fuel cost calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this fuel cost calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "distance",
        "label": "Trip distance (miles)",
        "type": "number",
        "defaultValue": "250",
        "step": "0.1"
      },
      {
        "name": "mpg",
        "label": "Vehicle MPG",
        "type": "number",
        "defaultValue": "28",
        "step": "0.1"
      },
      {
        "name": "gasPrice",
        "label": "Gas price per gallon (USD)",
        "type": "number",
        "defaultValue": "3.5",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "rent-split-calculator",
    "name": "Rent Split Calculator",
    "kind": "rentSplit",
    "description": "Use this rent split calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The rent split calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this rent split calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "rent",
        "label": "Monthly rent (USD)",
        "type": "number",
        "defaultValue": "2400",
        "step": "0.01"
      },
      {
        "name": "roommates",
        "label": "Number of roommates",
        "type": "number",
        "defaultValue": "3",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "break-even-calculator",
    "name": "Break Even Calculator",
    "kind": "breakEven",
    "description": "Use this break even calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The break even calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this break even calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "fixedCosts",
        "label": "Fixed costs (USD)",
        "type": "number",
        "defaultValue": "15000",
        "step": "0.01"
      },
      {
        "name": "pricePerUnit",
        "label": "Price per unit (USD)",
        "type": "number",
        "defaultValue": "35",
        "step": "0.01"
      },
      {
        "name": "variableCost",
        "label": "Variable cost per unit (USD)",
        "type": "number",
        "defaultValue": "15",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "rule-of-72-calculator",
    "name": "Rule Of 72 Calculator",
    "kind": "rule72",
    "description": "Use this rule of 72 calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The rule of 72 calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this rule of 72 calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "annualRate",
        "label": "Annual return rate (%)",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "unit-price-calculator",
    "name": "Unit Price Calculator",
    "kind": "unitPrice",
    "description": "Use this unit price calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The unit price calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this unit price calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "price",
        "label": "Total price (USD)",
        "type": "number",
        "defaultValue": "12",
        "step": "0.01"
      },
      {
        "name": "quantity",
        "label": "Quantity",
        "type": "number",
        "defaultValue": "24",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "sleep-calculator",
    "name": "Sleep Calculator",
    "kind": "sleep",
    "description": "Use this sleep calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The sleep calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this sleep calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "wakeTime",
        "label": "Wake-up time",
        "type": "time",
        "defaultValue": "07:00"
      },
      {
        "name": "sleepCycles",
        "label": "Sleep cycles",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "dog-age-calculator",
    "name": "Dog Age Calculator",
    "kind": "dogAge",
    "description": "Use this dog age calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The dog age calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this dog age calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "dogAge",
        "label": "Dog age (years)",
        "type": "number",
        "defaultValue": "5",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "cat-age-calculator",
    "name": "Cat Age Calculator",
    "kind": "catAge",
    "description": "Use this cat age calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The cat age calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this cat age calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "catAge",
        "label": "Cat age (years)",
        "type": "number",
        "defaultValue": "5",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "overtime-pay-calculator",
    "name": "Overtime Pay Calculator",
    "kind": "overtimePay",
    "description": "Use this overtime pay calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The overtime pay calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this overtime pay calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "hourlyRate",
        "label": "Hourly rate (USD)",
        "type": "number",
        "defaultValue": "20",
        "step": "0.01"
      },
      {
        "name": "overtimeHours",
        "label": "Overtime hours",
        "type": "number",
        "defaultValue": "8",
        "step": "0.1"
      },
      {
        "name": "multiplier",
        "label": "Overtime multiplier",
        "type": "number",
        "defaultValue": "1.5",
        "step": "0.1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "hourly-to-salary-calculator",
    "name": "Hourly To Salary Calculator",
    "kind": "hourlyToSalary",
    "description": "Use this hourly to salary calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The hourly to salary calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this hourly to salary calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "hourlyRate",
        "label": "Hourly rate (USD)",
        "type": "number",
        "defaultValue": "25",
        "step": "0.01"
      },
      {
        "name": "hoursPerWeek",
        "label": "Hours per week",
        "type": "number",
        "defaultValue": "40",
        "step": "0.1"
      },
      {
        "name": "weeksPerYear",
        "label": "Weeks per year",
        "type": "number",
        "defaultValue": "52",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "salary-to-hourly-calculator",
    "name": "Salary To Hourly Calculator",
    "kind": "salaryToHourly",
    "description": "Use this salary to hourly calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The salary to hourly calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this salary to hourly calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "annualSalary",
        "label": "Annual salary (USD)",
        "type": "number",
        "defaultValue": "65000",
        "step": "0.01"
      },
      {
        "name": "hoursPerWeek",
        "label": "Hours per week",
        "type": "number",
        "defaultValue": "40",
        "step": "0.1"
      },
      {
        "name": "weeksPerYear",
        "label": "Weeks per year",
        "type": "number",
        "defaultValue": "52",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "travel-budget-calculator",
    "name": "Travel Budget Calculator",
    "kind": "travelBudget",
    "description": "Use this travel budget calculator to get a fast estimate with inputs designed for US and global English-speaking users.",
    "intro": "The travel budget calculator helps you estimate results quickly without building your own spreadsheet. Enter your numbers, review the result, and use the explanation below to understand how the math works.",
    "formulaText": "This tool uses a standard estimation formula that updates instantly as you change the inputs.",
    "howToUse": [
      "Enter your values in the fields above.",
      "Review the calculated result and supporting details.",
      "Use the example and FAQ sections below if you want more context."
    ],
    "example": "Try the default sample values first, then replace them with your own numbers.",
    "faq": [
      {
        "q": "How accurate is this travel budget calculator?",
        "a": "It is designed for quick planning and estimation. Real-world outcomes may vary based on fees, taxes, rounding, and personal circumstances."
      },
      {
        "q": "Can I use this on mobile?",
        "a": "Yes. The page is designed to work on phones, tablets, and desktop screens."
      },
      {
        "q": "Is this tool free to use?",
        "a": "Yes. You can use the calculator as often as you need."
      }
    ],
    "inputs": [
      {
        "name": "days",
        "label": "Trip days",
        "type": "number",
        "defaultValue": "7",
        "step": "1"
      },
      {
        "name": "dailyBudget",
        "label": "Daily budget (USD)",
        "type": "number",
        "defaultValue": "120",
        "step": "0.01"
      },
      {
        "name": "transportation",
        "label": "Transportation (USD)",
        "type": "number",
        "defaultValue": "350",
        "step": "0.01"
      },
      {
        "name": "lodging",
        "label": "Lodging total (USD)",
        "type": "number",
        "defaultValue": "700",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "gpa-calculator",
      "split-bill-calculator"
    ]
  }
] as CalculatorDefinition[];





const calculatorMap = new Map<string, CalculatorDefinition>();
for (const calculator of [...baseCalculators, ...additionalCalculators]) {
  calculatorMap.set(calculator.slug, calculator);
}

const rawCalculators: CalculatorDefinition[] = Array.from(calculatorMap.values()).map(applyCanonicalCalculatorCategory);

const calculatorContentOverrides: Record<string, Partial<CalculatorDefinition>> = {
  "roi-calculator": {
    description: "Free ROI calculator to estimate return on investment, net profit, and ending value from your cost and gain.",
    intro: "Use this ROI calculator to measure how efficiently an investment, marketing campaign, project, or business expense performed. It is especially useful when you want a quick percentage return without building a spreadsheet.",
    formulaText: "Return on investment is commonly calculated as net gain divided by cost, multiplied by 100. The result shows your profit relative to what you originally spent.",
    howToUse: [
      "Enter your total net gain or profit.",
      "Enter the original cost of the investment or project.",
      "Review the ROI percentage and supporting amounts.",
      "Compare multiple scenarios to see which option produced the strongest return."
    ],
    example: "If a project costs $12,000 and generates a net gain of $1,800, the ROI is 15%.",
    faq: [
      { q: "What is a good ROI?", a: "That depends on the asset, the risk taken, and the time involved. A good ROI in one industry may be weak in another." },
      { q: "Does ROI include time?", a: "Basic ROI does not. Two investments can have the same ROI but very different timelines, which is why annualized returns can matter." },
      { q: "Can I use this for business spending?", a: "Yes. It works for marketing campaigns, equipment purchases, side projects, and other business decisions where cost and gain are known." }
    ],
  },
  "stock-average-calculator": {
    description: "Free stock average calculator to estimate your average cost basis after multiple share purchases at different prices.",
    intro: "This stock average calculator helps investors understand their average purchase price when they buy the same stock more than once. It is especially helpful for dollar-cost averaging and planning future buys.",
    formulaText: "Average cost basis is calculated by dividing the total amount invested by the total number of shares owned. This gives you the effective break-even price per share before fees and taxes.",
    howToUse: [
      "Enter the shares and purchase price for your first buy.",
      "Enter the shares and purchase price for your second buy.",
      "Review the combined average cost basis and total invested amount.",
      "Use the result to estimate break-even price or future portfolio scenarios."
    ],
    example: "If you bought 10 shares at $100 and 15 shares at $85, your average price becomes lower than your original entry price.",
    faq: [
      { q: "Does this include trading fees?", a: "No. This simplified version does not include brokerage commissions, taxes, or dividend reinvestment details." },
      { q: "Why does average cost matter?", a: "It helps you understand your break-even level and how additional purchases affect your position." },
      { q: "Can I use this for ETFs?", a: "Yes. The same average cost concept works for stocks, ETFs, and other securities bought in multiple transactions." }
    ],
  },
  "net-worth-calculator": {
    description: "Free net worth calculator to compare total assets and liabilities and estimate your current financial position.",
    intro: "The net worth calculator helps you measure your financial snapshot at a given moment. It is often used for personal finance tracking, goal setting, and debt reduction planning.",
    formulaText: "Net worth is calculated by subtracting total liabilities from total assets. A positive result means your assets exceed your debts, while a negative result means liabilities are higher.",
    howToUse: [
      "Enter the combined value of your assets, such as cash, investments, and property.",
      "Enter the combined value of your liabilities, such as loans, credit cards, and mortgages.",
      "Review your estimated net worth and compare it over time.",
      "Use recurring check-ins to track long-term financial progress."
    ],
    example: "If you have $120,000 in assets and $45,000 in liabilities, your net worth is $75,000.",
    faq: [
      { q: "What counts as an asset?", a: "Assets can include cash, checking and savings balances, retirement accounts, taxable investments, and real estate equity." },
      { q: "What counts as a liability?", a: "Liabilities can include mortgages, car loans, student loans, credit card debt, and other balances you owe." },
      { q: "How often should I calculate net worth?", a: "Many people update it monthly, quarterly, or a few times per year depending on how closely they track personal finances." }
    ],
  },
  "debt-payoff-calculator": {
    description: "Free debt payoff calculator to estimate payoff time and total paid based on your balance, interest rate, and monthly payment.",
    intro: "This debt payoff calculator helps you estimate how long it may take to eliminate a balance if you keep making the same monthly payment. It is useful for personal loans, medical debt, credit lines, and other fixed balances.",
    formulaText: "The calculator estimates the number of months needed to pay off a balance based on interest and your recurring payment. If your payment is too low to cover interest, the balance will not decrease.",
    howToUse: [
      "Enter your current debt balance.",
      "Add the annual interest rate charged on the balance.",
      "Enter the amount you plan to pay each month.",
      "Review the estimated payoff time and total amount paid."
    ],
    example: "Increasing your monthly payment can reduce both payoff time and the total interest you pay over the life of the debt.",
    faq: [
      { q: "Why does a small payment keep me in debt longer?", a: "Because a larger share of the payment may go toward interest instead of principal, especially when rates are high." },
      { q: "Can I use this for multiple debts at once?", a: "This version models one balance at a time. For multiple debts, compare each one separately." },
      { q: "What if my interest rate changes?", a: "Variable rates can change the result over time, so this tool should be treated as a simplified estimate." }
    ],
  },
  "amortization-calculator": {
    description: "Free amortization calculator to estimate fixed monthly loan payments, total repayment, and total interest over time.",
    intro: "Use this amortization calculator to estimate how a fixed-rate loan is repaid over time. It is a simple way to understand monthly payment size and total interest cost before borrowing.",
    formulaText: "An amortizing loan spreads repayment across equal monthly payments. Each payment covers both interest and principal, with more interest paid earlier in the term and more principal paid later.",
    howToUse: [
      "Enter the loan amount you plan to finance.",
      "Enter the annual interest rate.",
      "Choose the loan term in years.",
      "Review the monthly payment, total paid, and total interest estimate."
    ],
    example: "A longer loan term can reduce the monthly payment but may increase the total interest paid over time.",
    faq: [
      { q: "What is amortization?", a: "Amortization is the gradual repayment of a loan through scheduled payments over time." },
      { q: "Does this include taxes or insurance?", a: "No. This simplified payment estimate focuses on principal and interest only." },
      { q: "Is this useful for car loans and personal loans?", a: "Yes. It works well for many standard fixed-rate installment loans." }
    ],
  },
  "budget-calculator": {
    description: "Free budget calculator to compare monthly income and expenses and estimate whether your plan leaves a surplus or shortfall.",
    intro: "The budget calculator gives you a quick way to compare your monthly income against your monthly expenses. It is useful for basic cash-flow planning, debt reduction, and savings goal tracking.",
    formulaText: "Budget balance is calculated by subtracting total monthly expenses from total monthly income. A positive number means you have money left over, while a negative number signals a shortfall.",
    howToUse: [
      "Enter your estimated monthly after-tax income.",
      "Enter your total monthly expenses.",
      "Review whether the result shows a surplus or a deficit.",
      "Adjust income or expenses to build a more sustainable budget."
    ],
    example: "If your income is $5,000 and expenses are $4,200, the calculator shows an $800 monthly surplus.",
    faq: [
      { q: "Should I use gross income or take-home income?", a: "For everyday budgeting, take-home income is often the more practical number because it reflects what actually reaches your account." },
      { q: "Why is budgeting useful even if I invest?", a: "A clear budget shows how much money is truly available for savings, investing, and debt repayment each month." },
      { q: "Can I use this for yearly budgeting?", a: "Yes, but monthly budgeting is usually easier to maintain and compare over time." }
    ],
  },
  "apr-calculator": {
    description: "Free APR calculator to estimate annual percentage rate from loan amount, interest, fees, and time period.",
    intro: "This APR calculator helps you estimate the annualized cost of borrowing when both interest and fees matter. It can be useful when comparing lender offers that look similar at first glance.",
    formulaText: "APR reflects the annual cost of a loan after combining interest and certain fees. It gives borrowers a more complete comparison than rate alone, although exact lender disclosures can use more detailed methods.",
    howToUse: [
      "Enter the loan amount.",
      "Add the lender fees.",
      "Enter the interest expected over one year.",
      "Review the estimated APR and compare loan offers more clearly."
    ],
    example: "A loan with a lower stated rate can still have a higher APR if lender fees are large enough.",
    faq: [
      { q: "Is APR the same as interest rate?", a: "Not always. APR includes certain fees in addition to the interest rate, which can make it higher than the base rate." },
      { q: "Why does APR matter?", a: "APR can make lender comparisons more realistic because it reflects more of the true borrowing cost." },
      { q: "Will this always match a lender disclosure exactly?", a: "No. Official loan disclosures may use more detailed assumptions, fee treatment, or payment schedules." }
    ],
  },
  "future-value-calculator": {
    description: "Free future value calculator to estimate how much an investment or savings balance may grow with recurring contributions.",
    intro: "Use this future value calculator to estimate what your money could become over time. It works well for long-term investing plans, savings goals, and account growth scenarios with regular monthly contributions.",
    formulaText: "Future value combines compound growth on your starting amount with the accumulated value of recurring contributions. It is one of the most common formulas used for long-term financial planning.",
    howToUse: [
      "Enter your starting amount.",
      "Add your expected monthly contribution.",
      "Enter an annual growth or interest rate and the number of years.",
      "Review the projected ending value and total contributed amount."
    ],
    example: "The future value result helps you see how time and consistency can matter as much as return assumptions.",
    faq: [
      { q: "What is future value?", a: "Future value is the estimated amount an asset or account may be worth at a point in the future after growth and contributions." },
      { q: "Is this good for investment planning?", a: "Yes. It is commonly used for long-term projections in retirement and brokerage account planning." },
      { q: "Does this guarantee a result?", a: "No. The output is based entirely on the assumptions you enter." }
    ],
  },
  "present-value-calculator": {
    description: "Free present value calculator to estimate what a future sum of money is worth in today's dollars based on a discount rate.",
    intro: "The present value calculator helps you understand how much a future payment or target amount is worth today. It is useful in investing, business valuation, and general time-value-of-money decisions.",
    formulaText: "Present value discounts a future amount back to today using a chosen rate of return or discount rate. The higher the rate or the longer the time period, the lower the present value becomes.",
    howToUse: [
      "Enter the future amount you want to evaluate.",
      "Enter the annual discount rate or required return.",
      "Choose the number of years until that future amount is received.",
      "Review the equivalent value in today's dollars."
    ],
    example: "If you expect to receive a sum of money years from now, present value helps estimate how much that future amount is worth today.",
    faq: [
      { q: "What is the difference between present value and future value?", a: "Future value projects money forward in time, while present value discounts money backward into today's dollars." },
      { q: "Where is present value used?", a: "It is widely used in investing, corporate finance, discounted cash flow analysis, and long-term planning." },
      { q: "How do I choose a discount rate?", a: "Common choices include a target investment return, borrowing rate, inflation-adjusted hurdle rate, or another required rate of return." }
    ],
  },
};

export const calculators: CalculatorDefinition[] = rawCalculators.map((calculator) => {
  const override = calculatorContentOverrides[calculator.slug];
  return override ? { ...calculator, ...override } : calculator;
});

export const calculatorsByCategory = calculatorCategories.map((category) => ({
  ...category,
  items: calculators.filter((item) => item.category === category.slug),
}));

export function getCalculator(category: string, slug: string) {
  return calculators.find((item) => item.category === category && item.slug === slug);
}

export function getCalculatorBySlug(slug: string) {
  return calculators.find((item) => item.slug === slug);
}

export function getRelatedCalculators(slugs: string[] | undefined) {
  if (!slugs) return [];
  return slugs
    .map((slug) => calculators.find((item) => item.slug === slug))
    .filter((item): item is CalculatorDefinition => Boolean(item));
}
