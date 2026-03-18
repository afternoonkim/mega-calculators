import type { CalculatorDefinition } from "@/lib/calculators/data";

export const additionalCalculators: CalculatorDefinition[] = [
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "auto-loan-calculator",
    "name": "Auto Loan Calculator",
    "kind": "loanPayment",
    "description": "Estimate monthly auto loan payments, total repayment, and interest for a car purchase.",
    "intro": "The auto loan calculator estimates a fixed monthly payment for a common borrowing scenario.",
    "formulaText": "This calculator uses the standard amortizing loan payment formula with a monthly rate and a fixed number of monthly payments.",
    "howToUse": [
      "Enter your loan amount (usd).",
      "Enter your annual interest rate (%).",
      "Enter your loan term (years).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the auto loan calculator using Loan amount (USD) 32000, Annual interest rate (%) 6.9, Loan term (years) 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the auto loan calculator show?",
        "a": "The auto loan calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the auto loan calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "32000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "6.9",
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
      "loan-calculator",
      "mortgage-calculator",
      "budget-calculator",
      "debt-payoff-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "student-loan-calculator",
    "name": "Student Loan Calculator",
    "kind": "loanPayment",
    "description": "Estimate monthly student loan payments and total repayment over time.",
    "intro": "The student loan calculator estimates a fixed monthly payment for a common borrowing scenario.",
    "formulaText": "This calculator uses the standard amortizing loan payment formula with a monthly rate and a fixed number of monthly payments.",
    "howToUse": [
      "Enter your loan amount (usd).",
      "Enter your annual interest rate (%).",
      "Enter your loan term (years).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the student loan calculator using Loan amount (USD) 45000, Annual interest rate (%) 5.8, Loan term (years) 10 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the student loan calculator show?",
        "a": "The student loan calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the student loan calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "45000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "5.8",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Loan term (years)",
        "type": "number",
        "defaultValue": "10",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "budget-calculator",
      "debt-payoff-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "personal-loan-calculator",
    "name": "Personal Loan Calculator",
    "kind": "loanPayment",
    "description": "Estimate payments for a personal installment loan with a fixed rate and term.",
    "intro": "The personal loan calculator estimates a fixed monthly payment for a common borrowing scenario.",
    "formulaText": "This calculator uses the standard amortizing loan payment formula with a monthly rate and a fixed number of monthly payments.",
    "howToUse": [
      "Enter your loan amount (usd).",
      "Enter your annual interest rate (%).",
      "Enter your loan term (years).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the personal loan calculator using Loan amount (USD) 12000, Annual interest rate (%) 11.5, Loan term (years) 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the personal loan calculator show?",
        "a": "The personal loan calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the personal loan calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "12000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "11.5",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Loan term (years)",
        "type": "number",
        "defaultValue": "4",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "budget-calculator",
      "debt-payoff-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "business-loan-calculator",
    "name": "Business Loan Calculator",
    "kind": "loanPayment",
    "description": "Estimate payments for a fixed-rate business loan using amount, APR, and term.",
    "intro": "The business loan calculator estimates a fixed monthly payment for a common borrowing scenario.",
    "formulaText": "This calculator uses the standard amortizing loan payment formula with a monthly rate and a fixed number of monthly payments.",
    "howToUse": [
      "Enter your loan amount (usd).",
      "Enter your annual interest rate (%).",
      "Enter your loan term (years).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the business loan calculator using Loan amount (USD) 75000, Annual interest rate (%) 8.2, Loan term (years) 7 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the business loan calculator show?",
        "a": "The business loan calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the business loan calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "loanAmount",
        "label": "Loan amount (USD)",
        "type": "number",
        "defaultValue": "75000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "8.2",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Loan term (years)",
        "type": "number",
        "defaultValue": "7",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "budget-calculator",
      "debt-payoff-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "savings-goal-calculator",
    "name": "Savings Goal Calculator",
    "kind": "futureValueWithContrib",
    "description": "Project how much your savings can grow with an initial balance and monthly deposits.",
    "intro": "Use the savings goal calculator to project how a balance can grow with regular monthly contributions over time.",
    "formulaText": "This calculator compounds the starting amount and adds the future value of monthly contributions to estimate long-term growth.",
    "howToUse": [
      "Enter your starting amount (usd).",
      "Enter your monthly contribution (usd).",
      "Enter your annual return (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the savings goal calculator using Starting amount (USD) 5000, Monthly contribution (USD) 400, Annual return (%) 4.5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the savings goal calculator show?",
        "a": "The savings goal calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the savings goal calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
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
        "defaultValue": "400",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual return (%)",
        "type": "number",
        "defaultValue": "4.5",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "investment-calculator",
      "savings-calculator",
      "future-value-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "down-payment-savings-calculator",
    "name": "Down Payment Savings Calculator",
    "kind": "futureValueWithContrib",
    "description": "Estimate how your home down payment fund can grow over time.",
    "intro": "Use the down payment savings calculator to project how a balance can grow with regular monthly contributions over time.",
    "formulaText": "This calculator compounds the starting amount and adds the future value of monthly contributions to estimate long-term growth.",
    "howToUse": [
      "Enter your starting amount (usd).",
      "Enter your monthly contribution (usd).",
      "Enter your annual return (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the down payment savings calculator using Starting amount (USD) 10000, Monthly contribution (USD) 800, Annual return (%) 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the down payment savings calculator show?",
        "a": "The down payment savings calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the down payment savings calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "10000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "800",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual return (%)",
        "type": "number",
        "defaultValue": "4",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "4",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "investment-calculator",
      "savings-calculator",
      "future-value-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "ira-calculator",
    "name": "IRA Calculator",
    "kind": "futureValueWithContrib",
    "description": "Estimate the future value of an IRA with regular monthly contributions.",
    "intro": "Use the ira calculator to project how a balance can grow with regular monthly contributions over time.",
    "formulaText": "This calculator compounds the starting amount and adds the future value of monthly contributions to estimate long-term growth.",
    "howToUse": [
      "Enter your starting amount (usd).",
      "Enter your monthly contribution (usd).",
      "Enter your annual return (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the ira calculator using Starting amount (USD) 15000, Monthly contribution (USD) 500, Annual return (%) 7 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the ira calculator show?",
        "a": "The ira calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the ira calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "15000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "500",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual return (%)",
        "type": "number",
        "defaultValue": "7",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "25",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "investment-calculator",
      "savings-calculator",
      "future-value-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "college-savings-calculator",
    "name": "College Savings Calculator",
    "kind": "futureValueWithContrib",
    "description": "Estimate the future value of a college savings plan with monthly contributions.",
    "intro": "Use the college savings calculator to project how a balance can grow with regular monthly contributions over time.",
    "formulaText": "This calculator compounds the starting amount and adds the future value of monthly contributions to estimate long-term growth.",
    "howToUse": [
      "Enter your starting amount (usd).",
      "Enter your monthly contribution (usd).",
      "Enter your annual return (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the college savings calculator using Starting amount (USD) 3000, Monthly contribution (USD) 350, Annual return (%) 6 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the college savings calculator show?",
        "a": "The college savings calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the college savings calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "startingAmount",
        "label": "Starting amount (USD)",
        "type": "number",
        "defaultValue": "3000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyContribution",
        "label": "Monthly contribution (USD)",
        "type": "number",
        "defaultValue": "350",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual return (%)",
        "type": "number",
        "defaultValue": "6",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "18",
        "min": "1",
        "step": "1"
      }
    ],
    "relatedSlugs": [
      "compound-interest-calculator",
      "investment-calculator",
      "savings-calculator",
      "future-value-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "emergency-fund-calculator",
    "name": "Emergency Fund Calculator",
    "kind": "expression",
    "description": "Calculate an emergency fund target based on your monthly expenses and target months of coverage.",
    "intro": "Use this emergency fund calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator multiplies your monthly living expenses by the number of months of cash coverage you want.",
    "howToUse": [
      "Enter your monthly expenses (usd).",
      "Enter your months of coverage.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the emergency fund calculator using Monthly expenses (USD) 3500, Months of coverage 6 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the emergency fund calculator show?",
        "a": "The emergency fund calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the emergency fund calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "monthlyExpenses",
        "label": "Monthly expenses (USD)",
        "type": "number",
        "defaultValue": "3500",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "months",
        "label": "Months of coverage",
        "type": "number",
        "defaultValue": "6",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "monthlyExpenses*months",
    "primary": "Emergency fund target",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "debt-to-income-calculator",
    "name": "Debt-to-Income Calculator",
    "kind": "expression",
    "description": "Calculate your debt-to-income ratio using monthly debt payments and gross monthly income.",
    "intro": "Use this debt-to-income calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your monthly debt payments (usd).",
      "Enter your gross monthly income (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the debt-to-income calculator using Monthly debt payments (USD) 1200, Gross monthly income (USD) 6000 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the debt-to-income calculator show?",
        "a": "The debt-to-income calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the debt-to-income calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "monthlyDebt",
        "label": "Monthly debt payments (USD)",
        "type": "number",
        "defaultValue": "1200",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "grossMonthlyIncome",
        "label": "Gross monthly income (USD)",
        "type": "number",
        "defaultValue": "6000",
        "min": "1",
        "step": "0.01"
      }
    ],
    "expr": "(monthlyDebt/grossMonthlyIncome)*100",
    "primary": "Debt-to-income ratio",
    "prefix": "",
    "suffix": "%",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "paycheck-calculator",
    "name": "Paycheck Calculator",
    "kind": "expression",
    "description": "Estimate net pay per paycheck using gross annual salary, pay periods, and an estimated tax rate.",
    "intro": "Use this paycheck calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your gross annual salary (usd).",
      "Enter your estimated total tax rate (%).",
      "Enter your pay periods per year.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the paycheck calculator using Gross annual salary (USD) 85000, Estimated total tax rate (%) 24, Pay periods per year 26 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the paycheck calculator show?",
        "a": "The paycheck calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the paycheck calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "grossAnnual",
        "label": "Gross annual salary (USD)",
        "type": "number",
        "defaultValue": "85000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "taxRate",
        "label": "Estimated total tax rate (%)",
        "type": "number",
        "defaultValue": "24",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "payPeriods",
        "label": "Pay periods per year",
        "type": "number",
        "defaultValue": "26",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "(grossAnnual*(1-taxRate/100))/payPeriods",
    "primary": "Estimated take-home pay per paycheck",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "biweekly-paycheck-calculator",
    "name": "Biweekly Paycheck Calculator",
    "kind": "expression",
    "description": "Estimate take-home pay for a biweekly payroll schedule with a simple effective tax assumption.",
    "intro": "Use this biweekly paycheck calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your gross annual salary (usd).",
      "Enter your estimated total tax rate (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the biweekly paycheck calculator using Gross annual salary (USD) 85000, Estimated total tax rate (%) 24 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the biweekly paycheck calculator show?",
        "a": "The biweekly paycheck calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the biweekly paycheck calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "grossAnnual",
        "label": "Gross annual salary (USD)",
        "type": "number",
        "defaultValue": "85000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "taxRate",
        "label": "Estimated total tax rate (%)",
        "type": "number",
        "defaultValue": "24",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(grossAnnual*(1-taxRate/100))/26",
    "primary": "Estimated biweekly take-home pay",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "annual-income-calculator",
    "name": "Annual Income Calculator",
    "kind": "expression",
    "description": "Convert an hourly wage into estimated annual income using hours per week and weeks per year.",
    "intro": "Use this annual income calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hourly rate (usd).",
      "Enter your hours per week.",
      "Enter your weeks per year.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the annual income calculator using Hourly rate (USD) 28, Hours per week 40, Weeks per year 52 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the annual income calculator show?",
        "a": "The annual income calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the annual income calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hourlyRate",
        "label": "Hourly rate (USD)",
        "type": "number",
        "defaultValue": "28",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "hoursPerWeek",
        "label": "Hours per week",
        "type": "number",
        "defaultValue": "40",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "weeksPerYear",
        "label": "Weeks per year",
        "type": "number",
        "defaultValue": "52",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "hourlyRate*hoursPerWeek*weeksPerYear",
    "primary": "Estimated annual income",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "hourly-wage-calculator",
    "name": "Hourly Wage Calculator",
    "kind": "expression",
    "description": "Convert annual salary into an estimated hourly wage based on weekly hours and weeks worked.",
    "intro": "Use this hourly wage calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your annual salary (usd).",
      "Enter your hours per week.",
      "Enter your weeks per year.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the hourly wage calculator using Annual salary (USD) 65000, Hours per week 40, Weeks per year 52 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the hourly wage calculator show?",
        "a": "The hourly wage calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the hourly wage calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "annualSalary",
        "label": "Annual salary (USD)",
        "type": "number",
        "defaultValue": "65000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "hoursPerWeek",
        "label": "Hours per week",
        "type": "number",
        "defaultValue": "40",
        "min": "1",
        "step": "0.1"
      },
      {
        "name": "weeksPerYear",
        "label": "Weeks per year",
        "type": "number",
        "defaultValue": "52",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "annualSalary/(hoursPerWeek*weeksPerYear)",
    "primary": "Estimated hourly wage",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "simple-interest-calculator",
    "name": "Simple Interest Calculator",
    "kind": "expression",
    "description": "Calculate simple interest based on principal, annual rate, and time.",
    "intro": "Use this simple interest calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "Simple interest equals principal multiplied by rate and time.",
    "howToUse": [
      "Enter your principal (usd).",
      "Enter your annual rate (%).",
      "Enter your years.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the simple interest calculator using Principal (USD) 10000, Annual rate (%) 5, Years 3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the simple interest calculator show?",
        "a": "The simple interest calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the simple interest calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "principal",
        "label": "Principal (USD)",
        "type": "number",
        "defaultValue": "10000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual rate (%)",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "years",
        "label": "Years",
        "type": "number",
        "defaultValue": "3",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "principal*(annualRate/100)*years",
    "primary": "Simple interest",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "dividend-income-calculator",
    "name": "Dividend Income Calculator",
    "kind": "expression",
    "description": "Estimate annual dividend income using shares owned and annual dividend per share.",
    "intro": "Use this dividend income calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your shares owned.",
      "Enter your annual dividend per share (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the dividend income calculator using Shares owned 250, Annual dividend per share (USD) 3.20 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the dividend income calculator show?",
        "a": "The dividend income calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the dividend income calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "shares",
        "label": "Shares owned",
        "type": "number",
        "defaultValue": "250",
        "min": "0",
        "step": "1"
      },
      {
        "name": "dividendPerShare",
        "label": "Annual dividend per share (USD)",
        "type": "number",
        "defaultValue": "3.20",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "shares*dividendPerShare",
    "primary": "Estimated annual dividend income",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "house-down-payment-calculator",
    "name": "House Down Payment Calculator",
    "kind": "expression",
    "description": "Calculate a down payment amount from home price and down payment percentage.",
    "intro": "Use this house down payment calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your home price (usd).",
      "Enter your down payment (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the house down payment calculator using Home price (USD) 425000, Down payment (%) 20 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the house down payment calculator show?",
        "a": "The house down payment calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the house down payment calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "homePrice",
        "label": "Home price (USD)",
        "type": "number",
        "defaultValue": "425000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "downPercent",
        "label": "Down payment (%)",
        "type": "number",
        "defaultValue": "20",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "homePrice*(downPercent/100)",
    "primary": "Down payment amount",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "car-affordability-calculator",
    "name": "Car Affordability Calculator",
    "kind": "expression",
    "description": "Estimate the loan amount you may support from a target monthly car payment, interest rate, and term.",
    "intro": "Use this car affordability calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This estimate rearranges the standard loan payment formula to solve for loan amount from a target payment.",
    "howToUse": [
      "Enter your target monthly payment (usd).",
      "Enter your annual interest rate (%).",
      "Enter your loan term (years).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the car affordability calculator using Target monthly payment (USD) 550, Annual interest rate (%) 6.5, Loan term (years) 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the car affordability calculator show?",
        "a": "The car affordability calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the car affordability calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "monthlyBudget",
        "label": "Target monthly payment (USD)",
        "type": "number",
        "defaultValue": "550",
        "min": "1",
        "step": "0.01"
      },
      {
        "name": "annualRate",
        "label": "Annual interest rate (%)",
        "type": "number",
        "defaultValue": "6.5",
        "min": "0",
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
    "expr": "monthlyBudget*(1-Math.pow(1+(annualRate/100/12),-(years*12)))/(annualRate/100/12)",
    "primary": "Estimated affordable loan amount",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "refinance-savings-calculator",
    "name": "Refinance Savings Calculator",
    "kind": "expression",
    "description": "Estimate total payment savings from refinancing into a lower monthly payment.",
    "intro": "Use this refinance savings calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your current monthly payment (usd).",
      "Enter your new monthly payment (usd).",
      "Enter your years remaining.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the refinance savings calculator using Current monthly payment (USD) 2100, New monthly payment (USD) 1825, Years remaining 20 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the refinance savings calculator show?",
        "a": "The refinance savings calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the refinance savings calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "currentPayment",
        "label": "Current monthly payment (USD)",
        "type": "number",
        "defaultValue": "2100",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "newPayment",
        "label": "New monthly payment (USD)",
        "type": "number",
        "defaultValue": "1825",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "yearsRemaining",
        "label": "Years remaining",
        "type": "number",
        "defaultValue": "20",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "(currentPayment-newPayment)*12*yearsRemaining",
    "primary": "Estimated total payment savings",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "savings-rate-calculator",
    "name": "Savings Rate Calculator",
    "kind": "expression",
    "description": "Calculate your savings rate using monthly income and monthly savings.",
    "intro": "Use this savings rate calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your monthly savings (usd).",
      "Enter your monthly income (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the savings rate calculator using Monthly savings (USD) 1200, Monthly income (USD) 6000 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the savings rate calculator show?",
        "a": "The savings rate calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the savings rate calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "monthlySavings",
        "label": "Monthly savings (USD)",
        "type": "number",
        "defaultValue": "1200",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "monthlyIncome",
        "label": "Monthly income (USD)",
        "type": "number",
        "defaultValue": "6000",
        "min": "1",
        "step": "0.01"
      }
    ],
    "expr": "(monthlySavings/monthlyIncome)*100",
    "primary": "Savings rate",
    "prefix": "",
    "suffix": "%",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "real-return-calculator",
    "name": "Real Return Calculator",
    "kind": "expression",
    "description": "Estimate inflation-adjusted return using nominal return and inflation rate.",
    "intro": "Use this real return calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your nominal return (%).",
      "Enter your inflation rate (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the real return calculator using Nominal return (%) 8, Inflation rate (%) 3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the real return calculator show?",
        "a": "The real return calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the real return calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "nominalReturn",
        "label": "Nominal return (%)",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      },
      {
        "name": "inflationRate",
        "label": "Inflation rate (%)",
        "type": "number",
        "defaultValue": "3",
        "step": "0.01"
      }
    ],
    "expr": "(((1+nominalReturn/100)/(1+inflationRate/100))-1)*100",
    "primary": "Real return",
    "prefix": "",
    "suffix": "%",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "lease-vs-buy-calculator",
    "name": "Lease vs Buy Calculator",
    "kind": "expression",
    "description": "Compare the simple total cash cost of leasing a car versus buying it with financing.",
    "intro": "Use this lease vs buy calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This simplified comparison subtracts the estimated total buy cost from the estimated total lease cost.",
    "howToUse": [
      "Enter your total lease cost (usd).",
      "Enter your total buy cost (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the lease vs buy calculator using Total lease cost (USD) 14800, Total buy cost (USD) 17600 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the lease vs buy calculator show?",
        "a": "The lease vs buy calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the lease vs buy calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "leaseTotal",
        "label": "Total lease cost (USD)",
        "type": "number",
        "defaultValue": "14800",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "buyTotal",
        "label": "Total buy cost (USD)",
        "type": "number",
        "defaultValue": "17600",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "leaseTotal-buyTotal",
    "primary": "Lease minus buy cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "capital-gains-tax-calculator",
    "name": "Capital Gains Tax Calculator",
    "kind": "expression",
    "description": "Estimate capital gains tax from a taxable gain and tax rate.",
    "intro": "Use this capital gains tax calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your capital gain (usd).",
      "Enter your capital gains tax rate (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the capital gains tax calculator using Capital gain (USD) 12000, Capital gains tax rate (%) 15 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the capital gains tax calculator show?",
        "a": "The capital gains tax calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the capital gains tax calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "capitalGain",
        "label": "Capital gain (USD)",
        "type": "number",
        "defaultValue": "12000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "taxRate",
        "label": "Capital gains tax rate (%)",
        "type": "number",
        "defaultValue": "15",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "capitalGain*(taxRate/100)",
    "primary": "Estimated capital gains tax",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "finance",
    "categoryName": "Finance Calculators",
    "slug": "net-pay-raise-calculator",
    "name": "Net Pay Raise Calculator",
    "kind": "expression",
    "description": "Estimate your new gross annual salary after a raise percentage.",
    "intro": "Use this net pay raise calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your current annual salary (usd).",
      "Enter your raise (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the net pay raise calculator using Current annual salary (USD) 72000, Raise (%) 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the net pay raise calculator show?",
        "a": "The net pay raise calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the net pay raise calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast finance calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "currentSalary",
        "label": "Current annual salary (USD)",
        "type": "number",
        "defaultValue": "72000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "raisePercent",
        "label": "Raise (%)",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "currentSalary*(1+raisePercent/100)",
    "primary": "Estimated new annual salary",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "loan-calculator",
      "mortgage-calculator",
      "compound-interest-calculator",
      "budget-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "hydration-calculator",
    "name": "Hydration Calculator",
    "kind": "expression",
    "description": "Estimate daily water intake using body weight and a hydration multiplier.",
    "intro": "Use this water intake calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your body weight (lb).",
      "Enter your fluid ounces per pound.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the water intake calculator using Body weight (lb) 180, Fluid ounces per pound 0.5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the water intake calculator show?",
        "a": "The water intake calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the water intake calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "weightLb",
        "label": "Body weight (lb)",
        "type": "number",
        "defaultValue": "180",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "ouncesPerPound",
        "label": "Fluid ounces per pound",
        "type": "number",
        "defaultValue": "0.5",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "weightLb*ouncesPerPound",
    "primary": "Estimated water intake",
    "prefix": "",
    "suffix": " oz",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "daily-protein-calculator",
    "name": "Daily Protein Calculator",
    "kind": "expression",
    "description": "Estimate daily protein intake using body weight and grams per pound.",
    "intro": "Use this protein intake calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your body weight (lb).",
      "Enter your protein target (g per lb).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the protein intake calculator using Body weight (lb) 180, Protein target (g per lb) 0.8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the protein intake calculator show?",
        "a": "The protein intake calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the protein intake calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "weightLb",
        "label": "Body weight (lb)",
        "type": "number",
        "defaultValue": "180",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "gramsPerPound",
        "label": "Protein target (g per lb)",
        "type": "number",
        "defaultValue": "0.8",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "weightLb*gramsPerPound",
    "primary": "Daily protein target",
    "prefix": "",
    "suffix": " g",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "dubois-body-surface-area-calculator",
    "name": "DuBois Body Surface Area Calculator",
    "kind": "expression",
    "description": "Estimate body surface area using height and weight.",
    "intro": "Use this body surface area calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your height (cm).",
      "Enter your weight (kg).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the body surface area calculator using Height (cm) 175, Weight (kg) 75 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the body surface area calculator show?",
        "a": "The body surface area calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the body surface area calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "heightCm",
        "label": "Height (cm)",
        "type": "number",
        "defaultValue": "175",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "weightKg",
        "label": "Weight (kg)",
        "type": "number",
        "defaultValue": "75",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "Math.sqrt((heightCm*weightKg)/3600)",
    "primary": "Estimated body surface area",
    "prefix": "",
    "suffix": " m\u00b2",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "calorie-deficit-calculator",
    "name": "Calorie Deficit Calculator",
    "kind": "expression",
    "description": "Calculate a target calorie intake using maintenance calories and a chosen deficit.",
    "intro": "Use this calorie deficit calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your maintenance calories.",
      "Enter your daily calorie deficit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the calorie deficit calculator using Maintenance calories 2400, Daily calorie deficit 500 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the calorie deficit calculator show?",
        "a": "The calorie deficit calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the calorie deficit calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "maintenanceCalories",
        "label": "Maintenance calories",
        "type": "number",
        "defaultValue": "2400",
        "min": "0",
        "step": "1"
      },
      {
        "name": "calorieDeficit",
        "label": "Daily calorie deficit",
        "type": "number",
        "defaultValue": "500",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "maintenanceCalories-calorieDeficit",
    "primary": "Target cutting calories",
    "prefix": "",
    "suffix": " calories/day",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "target-heart-rate-calculator",
    "name": "Target Heart Rate Calculator",
    "kind": "expression",
    "description": "Estimate target heart rate using age, resting heart rate, and exercise intensity.",
    "intro": "Use this target heart rate calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your age.",
      "Enter your resting heart rate.",
      "Enter your intensity (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the target heart rate calculator using Age 35, Resting heart rate 62, Intensity (%) 70 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the target heart rate calculator show?",
        "a": "The target heart rate calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the target heart rate calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "age",
        "label": "Age",
        "type": "number",
        "defaultValue": "35",
        "min": "0",
        "step": "1"
      },
      {
        "name": "restingHr",
        "label": "Resting heart rate",
        "type": "number",
        "defaultValue": "62",
        "min": "0",
        "step": "1"
      },
      {
        "name": "intensity",
        "label": "Intensity (%)",
        "type": "number",
        "defaultValue": "70",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "((220-age-restingHr)*(intensity/100))+restingHr",
    "primary": "Target heart rate",
    "prefix": "",
    "suffix": " bpm",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "one-rep-max-calculator",
    "name": "One Rep Max Calculator",
    "kind": "expression",
    "description": "Estimate your one-rep max using lifted weight and repetitions performed.",
    "intro": "Use this one rep max calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your weight lifted.",
      "Enter your repetitions.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the one rep max calculator using Weight lifted 185, Repetitions 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the one rep max calculator show?",
        "a": "The one rep max calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the one rep max calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "weight",
        "label": "Weight lifted",
        "type": "number",
        "defaultValue": "185",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "reps",
        "label": "Repetitions",
        "type": "number",
        "defaultValue": "5",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "weight*(1+reps/30)",
    "primary": "Estimated one-rep max",
    "prefix": "",
    "suffix": " lb",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "pace-per-km-calculator",
    "name": "Pace Per Kilometer Calculator",
    "kind": "expression",
    "description": "Estimate running or walking pace per kilometer using time and distance.",
    "intro": "Use this pace per kilometer calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your total time (minutes).",
      "Enter your distance (km).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pace per kilometer calculator using Total time (minutes) 52, Distance (km) 10 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pace per kilometer calculator show?",
        "a": "The pace per kilometer calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pace per kilometer calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "totalMinutes",
        "label": "Total time (minutes)",
        "type": "number",
        "defaultValue": "52",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "distanceKm",
        "label": "Distance (km)",
        "type": "number",
        "defaultValue": "10",
        "min": "0.1",
        "step": "0.01"
      }
    ],
    "expr": "totalMinutes/distanceKm",
    "primary": "Average pace",
    "prefix": "",
    "suffix": " min/km",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "pace-per-mile-calculator",
    "name": "Pace Per Mile Calculator",
    "kind": "expression",
    "description": "Estimate running or walking pace per mile using time and distance.",
    "intro": "Use this pace per mile calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your total time (minutes).",
      "Enter your distance (miles).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pace per mile calculator using Total time (minutes) 52, Distance (miles) 6.21 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pace per mile calculator show?",
        "a": "The pace per mile calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pace per mile calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "totalMinutes",
        "label": "Total time (minutes)",
        "type": "number",
        "defaultValue": "52",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "distanceMiles",
        "label": "Distance (miles)",
        "type": "number",
        "defaultValue": "6.21",
        "min": "0.1",
        "step": "0.01"
      }
    ],
    "expr": "totalMinutes/distanceMiles",
    "primary": "Average pace",
    "prefix": "",
    "suffix": " min/mile",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "walking-calories-calculator",
    "name": "Walking Calories Calculator",
    "kind": "expression",
    "description": "Estimate calories burned while walking using minutes, body weight, and MET value.",
    "intro": "Use this walking calories calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your minutes walked.",
      "Enter your body weight (kg).",
      "Enter your met value.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the walking calories calculator using Minutes walked 45, Body weight (kg) 75, MET value 3.8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the walking calories calculator show?",
        "a": "The walking calories calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the walking calories calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "minutes",
        "label": "Minutes walked",
        "type": "number",
        "defaultValue": "45",
        "min": "0",
        "step": "1"
      },
      {
        "name": "weightKg",
        "label": "Body weight (kg)",
        "type": "number",
        "defaultValue": "75",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "met",
        "label": "MET value",
        "type": "number",
        "defaultValue": "3.8",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "minutes*met*weightKg*0.0175",
    "primary": "Estimated calories burned",
    "prefix": "",
    "suffix": " calories",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "running-calories-calculator",
    "name": "Running Calories Calculator",
    "kind": "expression",
    "description": "Estimate calories burned while running using minutes, body weight, and MET value.",
    "intro": "Use this running calories calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your minutes run.",
      "Enter your body weight (kg).",
      "Enter your met value.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the running calories calculator using Minutes run 35, Body weight (kg) 75, MET value 9.8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the running calories calculator show?",
        "a": "The running calories calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the running calories calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "minutes",
        "label": "Minutes run",
        "type": "number",
        "defaultValue": "35",
        "min": "0",
        "step": "1"
      },
      {
        "name": "weightKg",
        "label": "Body weight (kg)",
        "type": "number",
        "defaultValue": "75",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "met",
        "label": "MET value",
        "type": "number",
        "defaultValue": "9.8",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "minutes*met*weightKg*0.0175",
    "primary": "Estimated calories burned",
    "prefix": "",
    "suffix": " calories",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "target-body-fat-calculator",
    "name": "Target Body Fat Calculator",
    "kind": "expression",
    "description": "Estimate target body weight after cutting to a goal body fat percentage while maintaining lean mass.",
    "intro": "Use this target body fat calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your current weight (lb).",
      "Enter your current body fat (%).",
      "Enter your target body fat (%).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the target body fat calculator using Current weight (lb) 190, Current body fat (%) 22, Target body fat (%) 15 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the target body fat calculator show?",
        "a": "The target body fat calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the target body fat calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "currentWeight",
        "label": "Current weight (lb)",
        "type": "number",
        "defaultValue": "190",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "currentBodyFat",
        "label": "Current body fat (%)",
        "type": "number",
        "defaultValue": "22",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "targetBodyFat",
        "label": "Target body fat (%)",
        "type": "number",
        "defaultValue": "15",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "(currentWeight*(1-currentBodyFat/100))/(1-targetBodyFat/100)",
    "primary": "Estimated target body weight",
    "prefix": "",
    "suffix": " lb",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "bmi-prime-calculator",
    "name": "BMI Prime Calculator",
    "kind": "expression",
    "description": "Calculate BMI Prime by dividing BMI by the healthy upper-range threshold of 25.",
    "intro": "Use this bmi prime calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your bmi.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the bmi prime calculator using BMI 27.5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the bmi prime calculator show?",
        "a": "The bmi prime calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the bmi prime calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "bmi",
        "label": "BMI",
        "type": "number",
        "defaultValue": "27.5",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "bmi/25",
    "primary": "BMI Prime",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "waist-to-height-ratio-calculator",
    "name": "Waist to Height Ratio Calculator",
    "kind": "expression",
    "description": "Calculate waist-to-height ratio using waist and height in the same unit.",
    "intro": "Use this waist to height ratio calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your waist measurement.",
      "Enter your height measurement.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the waist to height ratio calculator using Waist measurement 34, Height measurement 70 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the waist to height ratio calculator show?",
        "a": "The waist to height ratio calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the waist to height ratio calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "waist",
        "label": "Waist measurement",
        "type": "number",
        "defaultValue": "34",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "height",
        "label": "Height measurement",
        "type": "number",
        "defaultValue": "70",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "waist/height",
    "primary": "Waist-to-height ratio",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "lean-bulk-calorie-calculator",
    "name": "Lean Bulk Calorie Calculator",
    "kind": "expression",
    "description": "Estimate a lean bulk calorie target using maintenance calories and a surplus.",
    "intro": "Use this lean bulk calorie calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your maintenance calories.",
      "Enter your daily calorie surplus.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the lean bulk calorie calculator using Maintenance calories 2600, Daily calorie surplus 250 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the lean bulk calorie calculator show?",
        "a": "The lean bulk calorie calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the lean bulk calorie calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "maintenanceCalories",
        "label": "Maintenance calories",
        "type": "number",
        "defaultValue": "2600",
        "min": "0",
        "step": "1"
      },
      {
        "name": "surplus",
        "label": "Daily calorie surplus",
        "type": "number",
        "defaultValue": "250",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "maintenanceCalories+surplus",
    "primary": "Lean bulk calorie target",
    "prefix": "",
    "suffix": " calories/day",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "health",
    "categoryName": "Health Calculators",
    "slug": "protein-per-meal-calculator",
    "name": "Protein Per Meal Calculator",
    "kind": "expression",
    "description": "Split a daily protein goal across a chosen number of meals.",
    "intro": "Use this protein per meal calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your daily protein goal (g).",
      "Enter your meals per day.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the protein per meal calculator using Daily protein goal (g) 180, Meals per day 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the protein per meal calculator show?",
        "a": "The protein per meal calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the protein per meal calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast health calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "dailyProtein",
        "label": "Daily protein goal (g)",
        "type": "number",
        "defaultValue": "180",
        "min": "0",
        "step": "1"
      },
      {
        "name": "meals",
        "label": "Meals per day",
        "type": "number",
        "defaultValue": "4",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "dailyProtein/meals",
    "primary": "Protein per meal",
    "prefix": "",
    "suffix": " g",
    "relatedSlugs": [
      "bmi-calculator",
      "calorie-calculator",
      "bmr-calculator",
      "ideal-weight-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "hours-to-minutes-calculator",
    "name": "Hours to Minutes Calculator",
    "kind": "converter",
    "description": "Convert hours to minutes and back again with a simple time unit converter.",
    "intro": "Use this hours to minutes calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the hours to minutes calculator using Value 2, From unit hours, To unit minutes to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the hours to minutes calculator show?",
        "a": "The hours to minutes calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the hours to minutes calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "hours",
        "options": [
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Minutes",
            "value": "minutes"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "minutes",
        "options": [
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Minutes",
            "value": "minutes"
          }
        ]
      }
    ],
    "units": {
      "hours": 1,
      "minutes": 0.016666666666666666
    },
    "unitLabels": {
      "hours": "Hours",
      "minutes": "Minutes"
    },
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
    "slug": "minutes-to-seconds-calculator",
    "name": "Minutes to Seconds Calculator",
    "kind": "converter",
    "description": "Convert minutes to seconds and seconds to minutes instantly.",
    "intro": "Use this minutes to seconds calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the minutes to seconds calculator using Value 5, From unit minutes, To unit seconds to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the minutes to seconds calculator show?",
        "a": "The minutes to seconds calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the minutes to seconds calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "5",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "minutes",
        "options": [
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Seconds",
            "value": "seconds"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "seconds",
        "options": [
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Seconds",
            "value": "seconds"
          }
        ]
      }
    ],
    "units": {
      "minutes": 1,
      "seconds": 0.016666666666666666
    },
    "unitLabels": {
      "minutes": "Minutes",
      "seconds": "Seconds"
    },
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
    "slug": "days-to-hours-calculator",
    "name": "Days to Hours Calculator",
    "kind": "converter",
    "description": "Convert days to hours and hours to days for scheduling and planning.",
    "intro": "Use this days to hours calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the days to hours calculator using Value 3, From unit days, To unit hours to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the days to hours calculator show?",
        "a": "The days to hours calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the days to hours calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "3",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "days",
        "options": [
          {
            "label": "Days",
            "value": "days"
          },
          {
            "label": "Hours",
            "value": "hours"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "hours",
        "options": [
          {
            "label": "Days",
            "value": "days"
          },
          {
            "label": "Hours",
            "value": "hours"
          }
        ]
      }
    ],
    "units": {
      "days": 1,
      "hours": 0.041666666666666664
    },
    "unitLabels": {
      "days": "Days",
      "hours": "Hours"
    },
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
    "slug": "weeks-to-days-calculator",
    "name": "Weeks to Days Calculator",
    "kind": "converter",
    "description": "Convert weeks to days and days to weeks with a quick planner-friendly tool.",
    "intro": "Use this weeks to days calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the weeks to days calculator using Value 2, From unit weeks, To unit days to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the weeks to days calculator show?",
        "a": "The weeks to days calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the weeks to days calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "weeks",
        "options": [
          {
            "label": "Weeks",
            "value": "weeks"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "days",
        "options": [
          {
            "label": "Weeks",
            "value": "weeks"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      }
    ],
    "units": {
      "weeks": 1,
      "days": 0.14285714285714285
    },
    "unitLabels": {
      "weeks": "Weeks",
      "days": "Days"
    },
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
    "slug": "months-to-days-calculator",
    "name": "Months to Days Calculator",
    "kind": "converter",
    "description": "Convert months to approximate days using a standard 30.4375-day month.",
    "intro": "Use this months to days calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the months to days calculator using Value 6, From unit months, To unit days to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the months to days calculator show?",
        "a": "The months to days calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the months to days calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "6",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "months",
        "options": [
          {
            "label": "Months",
            "value": "months"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "days",
        "options": [
          {
            "label": "Months",
            "value": "months"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      }
    ],
    "units": {
      "months": 1,
      "days": 0.03285420944558522
    },
    "unitLabels": {
      "months": "Months",
      "days": "Days"
    },
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
    "slug": "years-to-months-calculator",
    "name": "Years to Months Calculator",
    "kind": "converter",
    "description": "Convert years to months and months to years for long-range planning.",
    "intro": "Use this years to months calculator to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the years to months calculator using Value 2, From unit years, To unit months to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the years to months calculator show?",
        "a": "The years to months calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the years to months calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "years",
        "options": [
          {
            "label": "Years",
            "value": "years"
          },
          {
            "label": "Months",
            "value": "months"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "months",
        "options": [
          {
            "label": "Years",
            "value": "years"
          },
          {
            "label": "Months",
            "value": "months"
          }
        ]
      }
    ],
    "units": {
      "years": 1,
      "months": 0.08333333333333333
    },
    "unitLabels": {
      "years": "Years",
      "months": "Months"
    },
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
    "slug": "pto-accrual-calculator",
    "name": "PTO Accrual Calculator",
    "kind": "expression",
    "description": "Estimate paid time off accrual using hours worked and PTO hours earned per hour worked.",
    "intro": "Use this pto accrual calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hours worked.",
      "Enter your pto hours earned per hour worked.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pto accrual calculator using Hours worked 2080, PTO hours earned per hour worked 0.05 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pto accrual calculator show?",
        "a": "The pto accrual calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pto accrual calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hoursWorked",
        "label": "Hours worked",
        "type": "number",
        "defaultValue": "2080",
        "min": "0",
        "step": "1"
      },
      {
        "name": "accrualRate",
        "label": "PTO hours earned per hour worked",
        "type": "number",
        "defaultValue": "0.05",
        "min": "0",
        "step": "0.001"
      }
    ],
    "expr": "hoursWorked*accrualRate",
    "primary": "Estimated PTO accrued",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "meeting-duration-calculator",
    "name": "Meeting Duration Calculator",
    "kind": "timeDuration",
    "description": "Calculate meeting length from a start time and end time in hours and minutes.",
    "intro": "Use this meeting duration calculator to estimate how long a meeting, event, or appointment lasts.",
    "formulaText": "The calculator converts the start and end time into minutes, then measures the gap between them. If the end time is earlier than the start time, it rolls into the next day.",
    "howToUse": [
      "Enter a start time.",
      "Enter an end time.",
      "Review the duration shown in hours and minutes.",
      "Adjust the times to compare different scheduling options."
    ],
    "example": "Try a meeting from 09:30 to 11:00 to see the length instantly.",
    "faq": [
      {
        "q": "What does the meeting duration calculator show?",
        "a": "The meeting duration calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the meeting duration calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "startTime",
        "label": "Start time",
        "type": "time",
        "defaultValue": "09:30"
      },
      {
        "name": "endTime",
        "label": "End time",
        "type": "time",
        "defaultValue": "11:00"
      }
    ],
    "relatedSlugs": [
      "time-duration-calculator",
      "work-hours-calculator",
      "date-difference-calculator",
      "countdown-calculator"
    ]
  },
  {
    "category": "time",
    "categoryName": "Time Calculators",
    "slug": "shift-break-calculator",
    "name": "Shift Break Calculator",
    "kind": "expression",
    "description": "Estimate paid working time after subtracting break minutes from a shift length.",
    "intro": "Use this shift break calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your shift length (hours).",
      "Enter your break minutes.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the shift break calculator using Shift length (hours) 8.5, Break minutes 30 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the shift break calculator show?",
        "a": "The shift break calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the shift break calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "shiftHours",
        "label": "Shift length (hours)",
        "type": "number",
        "defaultValue": "8.5",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "breakMinutes",
        "label": "Break minutes",
        "type": "number",
        "defaultValue": "30",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "shiftHours-(breakMinutes/60)",
    "primary": "Net working time",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "pay-period-hours-calculator",
    "name": "Pay Period Hours Calculator",
    "kind": "expression",
    "description": "Estimate total hours in a pay period using weekly hours and number of weeks.",
    "intro": "Use this pay period hours calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hours per week.",
      "Enter your weeks in pay period.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pay period hours calculator using Hours per week 40, Weeks in pay period 2 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pay period hours calculator show?",
        "a": "The pay period hours calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pay period hours calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hoursPerWeek",
        "label": "Hours per week",
        "type": "number",
        "defaultValue": "40",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "weeks",
        "label": "Weeks in pay period",
        "type": "number",
        "defaultValue": "2",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "hoursPerWeek*weeks",
    "primary": "Pay period hours",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "study-hours-calculator",
    "name": "Study Hours Calculator",
    "kind": "expression",
    "description": "Estimate total study time from hours per day and study days.",
    "intro": "Use this study hours calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hours per day.",
      "Enter your number of days.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the study hours calculator using Hours per day 2, Number of days 30 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the study hours calculator show?",
        "a": "The study hours calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the study hours calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hoursPerDay",
        "label": "Hours per day",
        "type": "number",
        "defaultValue": "2",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "days",
        "label": "Number of days",
        "type": "number",
        "defaultValue": "30",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "hoursPerDay*days",
    "primary": "Total study time",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "project-hours-calculator",
    "name": "Project Hours Calculator",
    "kind": "expression",
    "description": "Estimate total project hours from number of tasks and average minutes per task.",
    "intro": "Use this project hours calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your number of tasks.",
      "Enter your average minutes per task.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the project hours calculator using Number of tasks 45, Average minutes per task 18 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the project hours calculator show?",
        "a": "The project hours calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the project hours calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "tasks",
        "label": "Number of tasks",
        "type": "number",
        "defaultValue": "45",
        "min": "0",
        "step": "1"
      },
      {
        "name": "minutesPerTask",
        "label": "Average minutes per task",
        "type": "number",
        "defaultValue": "18",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "(tasks*minutesPerTask)/60",
    "primary": "Estimated project time",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "commute-time-calculator",
    "name": "Commute Time Calculator",
    "kind": "expression",
    "description": "Estimate total commute time from one-way minutes, weekly trips, and number of weeks.",
    "intro": "Use this commute time calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your one-way commute (minutes).",
      "Enter your round-trip commute days per week.",
      "Enter your weeks.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the commute time calculator using One-way commute (minutes) 35, Round-trip commute days per week 5, Weeks 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the commute time calculator show?",
        "a": "The commute time calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the commute time calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "oneWayMinutes",
        "label": "One-way commute (minutes)",
        "type": "number",
        "defaultValue": "35",
        "min": "0",
        "step": "1"
      },
      {
        "name": "tripsPerWeek",
        "label": "Round-trip commute days per week",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "1"
      },
      {
        "name": "weeks",
        "label": "Weeks",
        "type": "number",
        "defaultValue": "4",
        "min": "0",
        "step": "1"
      }
    ],
    "expr": "(oneWayMinutes*2*tripsPerWeek*weeks)/60",
    "primary": "Total commute time",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "overtime-hours-calculator",
    "name": "Overtime Hours Calculator",
    "kind": "expression",
    "description": "Calculate weekly overtime hours by comparing total hours worked to a standard 40-hour week.",
    "intro": "Use this overtime hours calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hours worked this week.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the overtime hours calculator using Hours worked this week 47 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the overtime hours calculator show?",
        "a": "The overtime hours calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the overtime hours calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hoursWorked",
        "label": "Hours worked this week",
        "type": "number",
        "defaultValue": "47",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "Math.max(hoursWorked-40,0)",
    "primary": "Overtime hours",
    "prefix": "",
    "suffix": " hours",
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
    "slug": "deadline-days-left-calculator",
    "name": "Deadline Days Left Calculator",
    "kind": "countdown",
    "description": "Count the number of days remaining until a target deadline date.",
    "intro": "Use this deadline days left calculator to see how many days remain until a due date, deadline, or event.",
    "formulaText": "The calculator compares today with your target date and returns the number of calendar days remaining.",
    "howToUse": [
      "Choose a target date.",
      "Review the number of days remaining.",
      "Use the result to plan milestones or reminders.",
      "Update the target date to compare different deadlines."
    ],
    "example": "Select a future date to see how many days are left before the deadline arrives.",
    "faq": [
      {
        "q": "What does the deadline days left calculator show?",
        "a": "The deadline days left calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the deadline days left calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast time calculator estimate without using a spreadsheet."
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
      "countdown-calculator",
      "date-difference-calculator",
      "business-days-calculator",
      "week-number-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percentage-increase-calculator",
    "name": "Percentage Increase Calculator",
    "kind": "percentChange",
    "description": "Calculate percentage increase from an old value to a new value.",
    "intro": "Use this percentage increase calculator to measure how much a value has grown relative to the starting point.",
    "formulaText": "Percent change is calculated by subtracting the old value from the new value, dividing by the old value, and multiplying by 100.",
    "howToUse": [
      "Enter the old value.",
      "Enter the new value.",
      "Review the percent increase shown by the calculator.",
      "Adjust either number to compare multiple scenarios."
    ],
    "example": "For example, compare 80 and 100 to see the percentage increase instantly.",
    "faq": [
      {
        "q": "What does the percentage increase calculator show?",
        "a": "The percentage increase calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the percentage increase calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "oldValue",
        "label": "Old value",
        "type": "number",
        "defaultValue": "80",
        "step": "0.01"
      },
      {
        "name": "newValue",
        "label": "New value",
        "type": "number",
        "defaultValue": "100",
        "step": "0.01"
      }
    ],
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percentage-decrease-calculator",
    "name": "Percentage Decrease Calculator",
    "kind": "percentChange",
    "description": "Calculate percentage decrease from an old value to a new value.",
    "intro": "Use this percentage decrease calculator to measure how much a value has dropped relative to the starting point.",
    "formulaText": "Percent change is calculated by subtracting the old value from the new value, dividing by the old value, and multiplying by 100.",
    "howToUse": [
      "Enter the old value.",
      "Enter the new value.",
      "Review the percent decrease shown by the calculator.",
      "Adjust either number to compare scenarios."
    ],
    "example": "For example, compare 200 and 150 to see the percentage decrease instantly.",
    "faq": [
      {
        "q": "What does the percentage decrease calculator show?",
        "a": "The percentage decrease calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the percentage decrease calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "oldValue",
        "label": "Old value",
        "type": "number",
        "defaultValue": "200",
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
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "ratio-to-percentage-calculator",
    "name": "Ratio to Percentage Calculator",
    "kind": "expression",
    "description": "Convert a ratio into a percentage using a numerator and denominator.",
    "intro": "Use this ratio to percentage calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your numerator.",
      "Enter your denominator.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the ratio to percentage calculator using Numerator 3, Denominator 8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the ratio to percentage calculator show?",
        "a": "The ratio to percentage calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the ratio to percentage calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "numerator",
        "label": "Numerator",
        "type": "number",
        "defaultValue": "3",
        "step": "0.01"
      },
      {
        "name": "denominator",
        "label": "Denominator",
        "type": "number",
        "defaultValue": "8",
        "step": "0.01"
      }
    ],
    "expr": "(numerator/denominator)*100",
    "primary": "Percentage equivalent",
    "prefix": "",
    "suffix": "%",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "decimal-to-percent-calculator",
    "name": "Decimal to Percent Calculator",
    "kind": "expression",
    "description": "Convert a decimal number into a percentage.",
    "intro": "Use this decimal to percent calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your decimal value.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the decimal to percent calculator using Decimal value 0.375 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the decimal to percent calculator show?",
        "a": "The decimal to percent calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the decimal to percent calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Decimal value",
        "type": "number",
        "defaultValue": "0.375",
        "step": "0.001"
      }
    ],
    "expr": "value*100",
    "primary": "Percent value",
    "prefix": "",
    "suffix": "%",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "percent-to-decimal-calculator",
    "name": "Percent to Decimal Calculator",
    "kind": "expression",
    "description": "Convert a percentage into decimal form.",
    "intro": "Use this percent to decimal calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your percent value.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the percent to decimal calculator using Percent value 37.5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the percent to decimal calculator show?",
        "a": "The percent to decimal calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the percent to decimal calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Percent value",
        "type": "number",
        "defaultValue": "37.5",
        "step": "0.01"
      }
    ],
    "expr": "value/100",
    "primary": "Decimal value",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "circle-area-calculator",
    "name": "Circle Area Calculator",
    "kind": "expression",
    "description": "Calculate the area of a circle from its radius.",
    "intro": "Use this circle area calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your radius.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the circle area calculator using Radius 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the circle area calculator show?",
        "a": "The circle area calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the circle area calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "radius",
        "label": "Radius",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "Math.PI*radius*radius",
    "primary": "Circle area",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "circle-circumference-calculator",
    "name": "Circle Circumference Calculator",
    "kind": "expression",
    "description": "Calculate the circumference of a circle from its radius.",
    "intro": "Use this circle circumference calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your radius.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the circle circumference calculator using Radius 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the circle circumference calculator show?",
        "a": "The circle circumference calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the circle circumference calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "radius",
        "label": "Radius",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "2*Math.PI*radius",
    "primary": "Circumference",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "rectangle-area-calculator",
    "name": "Rectangle Area Calculator",
    "kind": "expression",
    "description": "Calculate the area of a rectangle from length and width.",
    "intro": "Use this rectangle area calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your length.",
      "Enter your width.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the rectangle area calculator using Length 12, Width 8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the rectangle area calculator show?",
        "a": "The rectangle area calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the rectangle area calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "length",
        "label": "Length",
        "type": "number",
        "defaultValue": "12",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "width",
        "label": "Width",
        "type": "number",
        "defaultValue": "8",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "length*width",
    "primary": "Rectangle area",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "triangle-area-calculator",
    "name": "Triangle Area Calculator",
    "kind": "expression",
    "description": "Calculate the area of a triangle from base and height.",
    "intro": "Use this triangle area calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your base.",
      "Enter your height.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the triangle area calculator using Base 10, Height 6 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the triangle area calculator show?",
        "a": "The triangle area calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the triangle area calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "base",
        "label": "Base",
        "type": "number",
        "defaultValue": "10",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "height",
        "label": "Height",
        "type": "number",
        "defaultValue": "6",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(base*height)/2",
    "primary": "Triangle area",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "pythagorean-theorem-calculator",
    "name": "Pythagorean Theorem Calculator",
    "kind": "expression",
    "description": "Calculate the hypotenuse using the Pythagorean theorem.",
    "intro": "Use this pythagorean theorem calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your side a.",
      "Enter your side b.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pythagorean theorem calculator using Side a 3, Side b 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pythagorean theorem calculator show?",
        "a": "The pythagorean theorem calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pythagorean theorem calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "a",
        "label": "Side a",
        "type": "number",
        "defaultValue": "3",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "b",
        "label": "Side b",
        "type": "number",
        "defaultValue": "4",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "Math.sqrt((a*a)+(b*b))",
    "primary": "Hypotenuse",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "slope-calculator",
    "name": "Slope Calculator",
    "kind": "expression",
    "description": "Calculate the slope between two coordinate points.",
    "intro": "Use this slope calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your x1.",
      "Enter your y1.",
      "Enter your x2.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the slope calculator using x1 1, y1 2, x2 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the slope calculator show?",
        "a": "The slope calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the slope calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "x1",
        "label": "x1",
        "type": "number",
        "defaultValue": "1",
        "step": "0.01"
      },
      {
        "name": "y1",
        "label": "y1",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "x2",
        "label": "x2",
        "type": "number",
        "defaultValue": "5",
        "step": "0.01"
      },
      {
        "name": "y2",
        "label": "y2",
        "type": "number",
        "defaultValue": "10",
        "step": "0.01"
      }
    ],
    "expr": "(y2-y1)/(x2-x1)",
    "primary": "Slope",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "distance-formula-calculator",
    "name": "Distance Formula Calculator",
    "kind": "expression",
    "description": "Calculate the distance between two coordinate points.",
    "intro": "Use this distance formula calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your x1.",
      "Enter your y1.",
      "Enter your x2.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the distance formula calculator using x1 1, y1 2, x2 5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the distance formula calculator show?",
        "a": "The distance formula calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the distance formula calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "x1",
        "label": "x1",
        "type": "number",
        "defaultValue": "1",
        "step": "0.01"
      },
      {
        "name": "y1",
        "label": "y1",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "x2",
        "label": "x2",
        "type": "number",
        "defaultValue": "5",
        "step": "0.01"
      },
      {
        "name": "y2",
        "label": "y2",
        "type": "number",
        "defaultValue": "10",
        "step": "0.01"
      }
    ],
    "expr": "Math.sqrt(((x2-x1)**2)+((y2-y1)**2))",
    "primary": "Distance",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "power-function-calculator",
    "name": "Power Function Calculator",
    "kind": "expression",
    "description": "Raise a base to a chosen exponent power.",
    "intro": "Use this exponent calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your base.",
      "Enter your exponent.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the exponent calculator using Base 5, Exponent 3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the exponent calculator show?",
        "a": "The exponent calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the exponent calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "base",
        "label": "Base",
        "type": "number",
        "defaultValue": "5",
        "step": "0.01"
      },
      {
        "name": "exponent",
        "label": "Exponent",
        "type": "number",
        "defaultValue": "3",
        "step": "0.01"
      }
    ],
    "expr": "base**exponent",
    "primary": "Power result",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "cube-root-calculator",
    "name": "Cube Root Calculator",
    "kind": "expression",
    "description": "Calculate the cube root of a number.",
    "intro": "Use this cube root calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your value.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the cube root calculator using Value 125 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the cube root calculator show?",
        "a": "The cube root calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the cube root calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "125",
        "step": "0.01"
      }
    ],
    "expr": "value**(1/3)",
    "primary": "Cube root",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "math",
    "categoryName": "Math Calculators",
    "slug": "density-calculator",
    "name": "Density Calculator",
    "kind": "expression",
    "description": "Calculate density from mass and volume.",
    "intro": "Use this density calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your mass.",
      "Enter your volume.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the density calculator using Mass 150, Volume 20 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the density calculator show?",
        "a": "The density calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the density calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast math calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "mass",
        "label": "Mass",
        "type": "number",
        "defaultValue": "150",
        "step": "0.01"
      },
      {
        "name": "volume",
        "label": "Volume",
        "type": "number",
        "defaultValue": "20",
        "step": "0.01"
      }
    ],
    "expr": "mass/volume",
    "primary": "Density",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
      "standard-deviation-calculator"
    ]
  },
  {
    "category": "unit-converters",
    "categoryName": "Unit Converters",
    "slug": "land-area-converter",
    "name": "Land Area Converter",
    "kind": "converter",
    "description": "Convert common area units such as square feet, square meters, acres, and hectares.",
    "intro": "Use this area converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the area converter using Value 1000, From unit sqft, To unit sqm to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the area converter show?",
        "a": "The area converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the area converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
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
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "sqft",
        "options": [
          {
            "label": "Square feet",
            "value": "sqft"
          },
          {
            "label": "Square meters",
            "value": "sqm"
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
        "defaultValue": "sqm",
        "options": [
          {
            "label": "Square feet",
            "value": "sqft"
          },
          {
            "label": "Square meters",
            "value": "sqm"
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
      "sqft": 1,
      "sqm": 10.7639104167,
      "acre": 43560,
      "hectare": 107639.104167
    },
    "unitLabels": {
      "sqft": "Square feet",
      "sqm": "Square meters",
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
    "slug": "liquid-volume-converter",
    "name": "Liquid Volume Converter",
    "kind": "converter",
    "description": "Convert common volume units such as liters, milliliters, gallons, and cubic feet.",
    "intro": "Use this volume converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the volume converter using Value 10, From unit liter, To unit gallon to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the volume converter show?",
        "a": "The volume converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the volume converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "10",
        "step": "0.01"
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
            "value": "milliliter"
          },
          {
            "label": "US gallons",
            "value": "gallon"
          },
          {
            "label": "Cubic feet",
            "value": "cubic-foot"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "gallon",
        "options": [
          {
            "label": "Liters",
            "value": "liter"
          },
          {
            "label": "Milliliters",
            "value": "milliliter"
          },
          {
            "label": "US gallons",
            "value": "gallon"
          },
          {
            "label": "Cubic feet",
            "value": "cubic-foot"
          }
        ]
      }
    ],
    "units": {
      "liter": 1,
      "milliliter": 0.001,
      "gallon": 3.785411784,
      "cubic-foot": 28.316846592
    },
    "unitLabels": {
      "liter": "Liters",
      "milliliter": "Milliliters",
      "gallon": "US gallons",
      "cubic-foot": "Cubic feet"
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
    "slug": "air-pressure-converter",
    "name": "Air Pressure Converter",
    "kind": "converter",
    "description": "Convert pressure units such as psi, bar, kPa, and atm.",
    "intro": "Use this pressure converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pressure converter using Value 30, From unit psi, To unit bar to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pressure converter show?",
        "a": "The pressure converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pressure converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "30",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "psi",
        "options": [
          {
            "label": "PSI",
            "value": "psi"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "kPa",
            "value": "kpa"
          },
          {
            "label": "Atmospheres",
            "value": "atm"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "bar",
        "options": [
          {
            "label": "PSI",
            "value": "psi"
          },
          {
            "label": "Bar",
            "value": "bar"
          },
          {
            "label": "kPa",
            "value": "kpa"
          },
          {
            "label": "Atmospheres",
            "value": "atm"
          }
        ]
      }
    ],
    "units": {
      "psi": 1,
      "bar": 14.5037738,
      "kpa": 0.145037738,
      "atm": 14.6959488
    },
    "unitLabels": {
      "psi": "PSI",
      "bar": "Bar",
      "kpa": "kPa",
      "atm": "Atmospheres"
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
    "slug": "electricity-power-converter",
    "name": "Electricity Power Converter",
    "kind": "converter",
    "description": "Convert power units such as watts, kilowatts, horsepower, and BTU per hour.",
    "intro": "Use this power converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the power converter using Value 1500, From unit watt, To unit horsepower to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the power converter show?",
        "a": "The power converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the power converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1500",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "watt",
        "options": [
          {
            "label": "Watts",
            "value": "watt"
          },
          {
            "label": "Kilowatts",
            "value": "kilowatt"
          },
          {
            "label": "Horsepower",
            "value": "horsepower"
          },
          {
            "label": "BTU/hour",
            "value": "btu-per-hour"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "horsepower",
        "options": [
          {
            "label": "Watts",
            "value": "watt"
          },
          {
            "label": "Kilowatts",
            "value": "kilowatt"
          },
          {
            "label": "Horsepower",
            "value": "horsepower"
          },
          {
            "label": "BTU/hour",
            "value": "btu-per-hour"
          }
        ]
      }
    ],
    "units": {
      "watt": 1,
      "kilowatt": 1000,
      "horsepower": 745.699872,
      "btu-per-hour": 0.29307107
    },
    "unitLabels": {
      "watt": "Watts",
      "kilowatt": "Kilowatts",
      "horsepower": "Horsepower",
      "btu-per-hour": "BTU/hour"
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
    "slug": "digital-storage-converter",
    "name": "Digital Storage Converter",
    "kind": "converter",
    "description": "Convert file sizes between bytes, kilobytes, megabytes, gigabytes, and terabytes.",
    "intro": "Use this data storage converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the data storage converter using Value 1024, From unit megabyte, To unit gigabyte to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the data storage converter show?",
        "a": "The data storage converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the data storage converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "1024",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "megabyte",
        "options": [
          {
            "label": "Bytes",
            "value": "byte"
          },
          {
            "label": "KB",
            "value": "kilobyte"
          },
          {
            "label": "MB",
            "value": "megabyte"
          },
          {
            "label": "GB",
            "value": "gigabyte"
          },
          {
            "label": "TB",
            "value": "terabyte"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "gigabyte",
        "options": [
          {
            "label": "Bytes",
            "value": "byte"
          },
          {
            "label": "KB",
            "value": "kilobyte"
          },
          {
            "label": "MB",
            "value": "megabyte"
          },
          {
            "label": "GB",
            "value": "gigabyte"
          },
          {
            "label": "TB",
            "value": "terabyte"
          }
        ]
      }
    ],
    "units": {
      "byte": 1,
      "kilobyte": 1024,
      "megabyte": 1048576,
      "gigabyte": 1073741824,
      "terabyte": 1099511627776
    },
    "unitLabels": {
      "byte": "Bytes",
      "kilobyte": "KB",
      "megabyte": "MB",
      "gigabyte": "GB",
      "terabyte": "TB"
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
    "slug": "signal-frequency-converter",
    "name": "Signal Frequency Converter",
    "kind": "converter",
    "description": "Convert frequency units such as hertz, kilohertz, megahertz, and gigahertz.",
    "intro": "Use this frequency converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the frequency converter using Value 2400, From unit mhz, To unit ghz to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the frequency converter show?",
        "a": "The frequency converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the frequency converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "2400",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "mhz",
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
        "defaultValue": "ghz",
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
    "slug": "load-force-converter",
    "name": "Load Force Converter",
    "kind": "converter",
    "description": "Convert force units such as newtons, pounds-force, and kilogram-force.",
    "intro": "Use this force converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the force converter using Value 100, From unit newton, To unit pound-force to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the force converter show?",
        "a": "The force converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the force converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "100",
        "step": "0.01"
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
            "label": "Pound-force",
            "value": "pound-force"
          },
          {
            "label": "Kilogram-force",
            "value": "kilogram-force"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "pound-force",
        "options": [
          {
            "label": "Newtons",
            "value": "newton"
          },
          {
            "label": "Pound-force",
            "value": "pound-force"
          },
          {
            "label": "Kilogram-force",
            "value": "kilogram-force"
          }
        ]
      }
    ],
    "units": {
      "newton": 1,
      "pound-force": 4.4482216153,
      "kilogram-force": 9.80665
    },
    "unitLabels": {
      "newton": "Newtons",
      "pound-force": "Pound-force",
      "kilogram-force": "Kilogram-force"
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
    "slug": "rotational-torque-converter",
    "name": "Rotational Torque Converter",
    "kind": "converter",
    "description": "Convert torque units such as newton-meters, foot-pounds, and inch-pounds.",
    "intro": "Use this torque converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the torque converter using Value 50, From unit newton-meter, To unit foot-pound to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the torque converter show?",
        "a": "The torque converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the torque converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "50",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "newton-meter",
        "options": [
          {
            "label": "Newton-meters",
            "value": "newton-meter"
          },
          {
            "label": "Foot-pounds",
            "value": "foot-pound"
          },
          {
            "label": "Inch-pounds",
            "value": "inch-pound"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "foot-pound",
        "options": [
          {
            "label": "Newton-meters",
            "value": "newton-meter"
          },
          {
            "label": "Foot-pounds",
            "value": "foot-pound"
          },
          {
            "label": "Inch-pounds",
            "value": "inch-pound"
          }
        ]
      }
    ],
    "units": {
      "newton-meter": 1,
      "foot-pound": 1.3558179483,
      "inch-pound": 0.112984829
    },
    "unitLabels": {
      "newton-meter": "Newton-meters",
      "foot-pound": "Foot-pounds",
      "inch-pound": "Inch-pounds"
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
    "slug": "heat-energy-converter",
    "name": "Heat Energy Converter",
    "kind": "converter",
    "description": "Convert energy units such as joules, calories, kilowatt-hours, and BTU.",
    "intro": "Use this energy converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the energy converter using Value 5000, From unit joule, To unit calorie to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the energy converter show?",
        "a": "The energy converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the energy converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "5000",
        "step": "0.01"
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
            "label": "Calories",
            "value": "calorie"
          },
          {
            "label": "kWh",
            "value": "kilowatt-hour"
          },
          {
            "label": "BTU",
            "value": "btu"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "calorie",
        "options": [
          {
            "label": "Joules",
            "value": "joule"
          },
          {
            "label": "Calories",
            "value": "calorie"
          },
          {
            "label": "kWh",
            "value": "kilowatt-hour"
          },
          {
            "label": "BTU",
            "value": "btu"
          }
        ]
      }
    ],
    "units": {
      "joule": 1,
      "calorie": 4.184,
      "kilowatt-hour": 3600000,
      "btu": 1055.05585
    },
    "unitLabels": {
      "joule": "Joules",
      "calorie": "Calories",
      "kilowatt-hour": "kWh",
      "btu": "BTU"
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
    "slug": "geometry-angle-converter",
    "name": "Geometry Angle Converter",
    "kind": "converter",
    "description": "Convert angle units such as degrees, radians, and gradians.",
    "intro": "Use this angle converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the angle converter using Value 180, From unit degree, To unit radian to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the angle converter show?",
        "a": "The angle converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the angle converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "180",
        "step": "0.01"
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
    "slug": "material-density-converter",
    "name": "Material Density Converter",
    "kind": "converter",
    "description": "Convert density units such as kilograms per cubic meter, pounds per cubic foot, and grams per milliliter.",
    "intro": "Use this density converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the density converter using Value 1000, From unit kg-m3, To unit lb-ft3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the density converter show?",
        "a": "The density converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the density converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
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
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "kg-m3",
        "options": [
          {
            "label": "kg/m\u00b3",
            "value": "kg-m3"
          },
          {
            "label": "lb/ft\u00b3",
            "value": "lb-ft3"
          },
          {
            "label": "g/mL",
            "value": "g-ml"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "lb-ft3",
        "options": [
          {
            "label": "kg/m\u00b3",
            "value": "kg-m3"
          },
          {
            "label": "lb/ft\u00b3",
            "value": "lb-ft3"
          },
          {
            "label": "g/mL",
            "value": "g-ml"
          }
        ]
      }
    ],
    "units": {
      "kg-m3": 1,
      "lb-ft3": 16.0184634,
      "g-ml": 1000
    },
    "unitLabels": {
      "kg-m3": "kg/m\u00b3",
      "lb-ft3": "lb/ft\u00b3",
      "g-ml": "g/mL"
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
    "slug": "duration-unit-converter",
    "name": "Duration Unit Converter",
    "kind": "converter",
    "description": "Convert time units such as seconds, minutes, hours, days, and weeks.",
    "intro": "Use this time unit converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the time unit converter using Value 48, From unit hour, To unit day to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the time unit converter show?",
        "a": "The time unit converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the time unit converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "48",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "hour",
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
        "defaultValue": "day",
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
    "slug": "cooking-volume-converter",
    "name": "Cooking Volume Converter",
    "kind": "converter",
    "description": "Convert cooking volume units such as teaspoons, tablespoons, cups, fluid ounces, and milliliters.",
    "intro": "Use this cooking volume converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the cooking volume converter using Value 2, From unit cup, To unit milliliter to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the cooking volume converter show?",
        "a": "The cooking volume converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the cooking volume converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "2",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "cup",
        "options": [
          {
            "label": "Teaspoons",
            "value": "teaspoon"
          },
          {
            "label": "Tablespoons",
            "value": "tablespoon"
          },
          {
            "label": "Cups",
            "value": "cup"
          },
          {
            "label": "Fluid ounces",
            "value": "fluid-ounce"
          },
          {
            "label": "Milliliters",
            "value": "milliliter"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "milliliter",
        "options": [
          {
            "label": "Teaspoons",
            "value": "teaspoon"
          },
          {
            "label": "Tablespoons",
            "value": "tablespoon"
          },
          {
            "label": "Cups",
            "value": "cup"
          },
          {
            "label": "Fluid ounces",
            "value": "fluid-ounce"
          },
          {
            "label": "Milliliters",
            "value": "milliliter"
          }
        ]
      }
    ],
    "units": {
      "teaspoon": 1,
      "tablespoon": 3,
      "cup": 48,
      "fluid-ounce": 6,
      "milliliter": 0.202884136
    },
    "unitLabels": {
      "teaspoon": "Teaspoons",
      "tablespoon": "Tablespoons",
      "cup": "Cups",
      "fluid-ounce": "Fluid ounces",
      "milliliter": "Milliliters"
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
    "slug": "fuel-volume-converter",
    "name": "Fuel Volume Converter",
    "kind": "converter",
    "description": "Convert fuel volume between gallons, liters, and cubic feet.",
    "intro": "Use this fuel volume converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the fuel volume converter using Value 15, From unit gallon, To unit liter to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the fuel volume converter show?",
        "a": "The fuel volume converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the fuel volume converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "15",
        "step": "0.01"
      },
      {
        "name": "fromUnit",
        "label": "From unit",
        "type": "select",
        "defaultValue": "gallon",
        "options": [
          {
            "label": "US gallons",
            "value": "gallon"
          },
          {
            "label": "Liters",
            "value": "liter"
          },
          {
            "label": "Cubic feet",
            "value": "cubic-foot"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "liter",
        "options": [
          {
            "label": "US gallons",
            "value": "gallon"
          },
          {
            "label": "Liters",
            "value": "liter"
          },
          {
            "label": "Cubic feet",
            "value": "cubic-foot"
          }
        ]
      }
    ],
    "units": {
      "gallon": 1,
      "liter": 0.264172052,
      "cubic-foot": 7.48051948
    },
    "unitLabels": {
      "gallon": "US gallons",
      "liter": "Liters",
      "cubic-foot": "Cubic feet"
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
    "slug": "battery-charge-converter",
    "name": "Battery Charge Converter",
    "kind": "converter",
    "description": "Convert electric charge units such as coulombs, ampere-hours, and milliampere-hours.",
    "intro": "Use this electric charge converter to convert values between common units instantly.",
    "formulaText": "The converter first changes your input to a shared base unit and then converts that base value to the destination unit.",
    "howToUse": [
      "Enter your value.",
      "Enter your from unit.",
      "Enter your to unit.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the electric charge converter using Value 7200, From unit coulomb, To unit amp-hour to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the electric charge converter show?",
        "a": "The electric charge converter gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the electric charge converter exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast unit converter estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "value",
        "label": "Value",
        "type": "number",
        "defaultValue": "7200",
        "step": "0.01"
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
            "label": "Ampere-hours",
            "value": "amp-hour"
          },
          {
            "label": "Milliampere-hours",
            "value": "milliamp-hour"
          }
        ]
      },
      {
        "name": "toUnit",
        "label": "To unit",
        "type": "select",
        "defaultValue": "amp-hour",
        "options": [
          {
            "label": "Coulombs",
            "value": "coulomb"
          },
          {
            "label": "Ampere-hours",
            "value": "amp-hour"
          },
          {
            "label": "Milliampere-hours",
            "value": "milliamp-hour"
          }
        ]
      }
    ],
    "units": {
      "coulomb": 1,
      "amp-hour": 3600,
      "milliamp-hour": 3.6
    },
    "unitLabels": {
      "coulomb": "Coulombs",
      "amp-hour": "Ampere-hours",
      "milliamp-hour": "Milliampere-hours"
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
    "slug": "paint-calculator",
    "name": "Paint Calculator",
    "kind": "expression",
    "description": "Estimate how many gallons of paint you need based on wall area and paint coverage.",
    "intro": "Use this paint calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your paintable area (sq ft).",
      "Enter your coverage per gallon (sq ft).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the paint calculator using Paintable area (sq ft) 1200, Coverage per gallon (sq ft) 350 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the paint calculator show?",
        "a": "The paint calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the paint calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "areaSqFt",
        "label": "Paintable area (sq ft)",
        "type": "number",
        "defaultValue": "1200",
        "min": "0",
        "step": "1"
      },
      {
        "name": "coveragePerGallon",
        "label": "Coverage per gallon (sq ft)",
        "type": "number",
        "defaultValue": "350",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "Math.ceil(areaSqFt/coveragePerGallon)",
    "primary": "Estimated paint needed",
    "prefix": "",
    "suffix": " gallons",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "flooring-calculator",
    "name": "Flooring Calculator",
    "kind": "expression",
    "description": "Estimate flooring area needed using room length and room width.",
    "intro": "Use this flooring calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your room length (ft).",
      "Enter your room width (ft).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the flooring calculator using Room length (ft) 18, Room width (ft) 14 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the flooring calculator show?",
        "a": "The flooring calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the flooring calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "length",
        "label": "Room length (ft)",
        "type": "number",
        "defaultValue": "18",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "width",
        "label": "Room width (ft)",
        "type": "number",
        "defaultValue": "14",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "length*width",
    "primary": "Flooring area",
    "prefix": "",
    "suffix": " sq ft",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "concrete-calculator",
    "name": "Concrete Calculator",
    "kind": "expression",
    "description": "Estimate cubic yards of concrete needed for a slab using length, width, and depth.",
    "intro": "Use this concrete calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your length (ft).",
      "Enter your width (ft).",
      "Enter your depth (in).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the concrete calculator using Length (ft) 20, Width (ft) 12, Depth (in) 4 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the concrete calculator show?",
        "a": "The concrete calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the concrete calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "length",
        "label": "Length (ft)",
        "type": "number",
        "defaultValue": "20",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "width",
        "label": "Width (ft)",
        "type": "number",
        "defaultValue": "12",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "depth",
        "label": "Depth (in)",
        "type": "number",
        "defaultValue": "4",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "(length*width*(depth/12))/27",
    "primary": "Concrete needed",
    "prefix": "",
    "suffix": " cubic yards",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "mulch-calculator",
    "name": "Mulch Calculator",
    "kind": "expression",
    "description": "Estimate cubic yards of mulch needed for a landscape bed.",
    "intro": "Use this mulch calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your length (ft).",
      "Enter your width (ft).",
      "Enter your depth (in).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the mulch calculator using Length (ft) 30, Width (ft) 8, Depth (in) 3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the mulch calculator show?",
        "a": "The mulch calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the mulch calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "length",
        "label": "Length (ft)",
        "type": "number",
        "defaultValue": "30",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "width",
        "label": "Width (ft)",
        "type": "number",
        "defaultValue": "8",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "depth",
        "label": "Depth (in)",
        "type": "number",
        "defaultValue": "3",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "(length*width*depth)/324",
    "primary": "Mulch needed",
    "prefix": "",
    "suffix": " cubic yards",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "tile-calculator",
    "name": "Tile Calculator",
    "kind": "expression",
    "description": "Estimate the number of tiles needed using room area, tile area, and a waste factor.",
    "intro": "Use this tile calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your room length (in).",
      "Enter your room width (in).",
      "Enter your tile length (in).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the tile calculator using Room length (in) 180, Room width (in) 144, Tile length (in) 12 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the tile calculator show?",
        "a": "The tile calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the tile calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "roomLength",
        "label": "Room length (in)",
        "type": "number",
        "defaultValue": "180",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "roomWidth",
        "label": "Room width (in)",
        "type": "number",
        "defaultValue": "144",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "tileLength",
        "label": "Tile length (in)",
        "type": "number",
        "defaultValue": "12",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "tileWidth",
        "label": "Tile width (in)",
        "type": "number",
        "defaultValue": "12",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "Math.ceil(((roomLength*roomWidth)/(tileLength*tileWidth))*1.1)",
    "primary": "Estimated tiles needed",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "wallpaper-calculator",
    "name": "Wallpaper Calculator",
    "kind": "expression",
    "description": "Estimate wallpaper rolls needed from room perimeter, wall height, and roll coverage.",
    "intro": "Use this wallpaper calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your room perimeter (ft).",
      "Enter your wall height (ft).",
      "Enter your coverage per roll (sq ft).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the wallpaper calculator using Room perimeter (ft) 56, Wall height (ft) 8, Coverage per roll (sq ft) 56 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the wallpaper calculator show?",
        "a": "The wallpaper calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the wallpaper calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "perimeter",
        "label": "Room perimeter (ft)",
        "type": "number",
        "defaultValue": "56",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "wallHeight",
        "label": "Wall height (ft)",
        "type": "number",
        "defaultValue": "8",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "coveragePerRoll",
        "label": "Coverage per roll (sq ft)",
        "type": "number",
        "defaultValue": "56",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "Math.ceil((perimeter*wallHeight)/coveragePerRoll)",
    "primary": "Estimated wallpaper rolls",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "fence-calculator",
    "name": "Fence Calculator",
    "kind": "expression",
    "description": "Estimate the number of fence panels needed from total fence length and panel width.",
    "intro": "Use this fence calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your fence length (ft).",
      "Enter your panel width (ft).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the fence calculator using Fence length (ft) 120, Panel width (ft) 8 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the fence calculator show?",
        "a": "The fence calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the fence calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "fenceLength",
        "label": "Fence length (ft)",
        "type": "number",
        "defaultValue": "120",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "panelWidth",
        "label": "Panel width (ft)",
        "type": "number",
        "defaultValue": "8",
        "min": "0.1",
        "step": "0.1"
      }
    ],
    "expr": "Math.ceil(fenceLength/panelWidth)",
    "primary": "Estimated fence panels",
    "prefix": "",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "pool-volume-calculator",
    "name": "Pool Volume Calculator",
    "kind": "expression",
    "description": "Estimate pool volume using length, width, and average depth.",
    "intro": "Use this pool volume calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your pool length (ft).",
      "Enter your pool width (ft).",
      "Enter your average depth (ft).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the pool volume calculator using Pool length (ft) 28, Pool width (ft) 14, Average depth (ft) 4.5 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the pool volume calculator show?",
        "a": "The pool volume calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the pool volume calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "length",
        "label": "Pool length (ft)",
        "type": "number",
        "defaultValue": "28",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "width",
        "label": "Pool width (ft)",
        "type": "number",
        "defaultValue": "14",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "avgDepth",
        "label": "Average depth (ft)",
        "type": "number",
        "defaultValue": "4.5",
        "min": "0",
        "step": "0.1"
      }
    ],
    "expr": "length*width*avgDepth*7.48052",
    "primary": "Estimated pool volume",
    "prefix": "",
    "suffix": " gallons",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "appliance-energy-cost-calculator",
    "name": "Appliance Energy Cost Calculator",
    "kind": "expression",
    "description": "Estimate appliance electricity cost from wattage, usage, days, and electricity rate.",
    "intro": "Use this appliance energy cost calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your appliance wattage.",
      "Enter your hours per day.",
      "Enter your days.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the appliance energy cost calculator using Appliance wattage 1500, Hours per day 3, Days 30 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the appliance energy cost calculator show?",
        "a": "The appliance energy cost calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the appliance energy cost calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "watts",
        "label": "Appliance wattage",
        "type": "number",
        "defaultValue": "1500",
        "min": "0",
        "step": "1"
      },
      {
        "name": "hoursPerDay",
        "label": "Hours per day",
        "type": "number",
        "defaultValue": "3",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "days",
        "label": "Days",
        "type": "number",
        "defaultValue": "30",
        "min": "0",
        "step": "1"
      },
      {
        "name": "rate",
        "label": "Electricity rate (USD per kWh)",
        "type": "number",
        "defaultValue": "0.16",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(watts/1000)*hoursPerDay*days*rate",
    "primary": "Estimated energy cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "road-trip-cost-calculator",
    "name": "Road Trip Cost Calculator",
    "kind": "expression",
    "description": "Estimate road trip fuel cost using distance, fuel economy, and gas price.",
    "intro": "Use this road trip cost calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your distance (miles).",
      "Enter your vehicle fuel economy (mpg).",
      "Enter your gas price (usd per gallon).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the road trip cost calculator using Distance (miles) 600, Vehicle fuel economy (mpg) 28, Gas price (USD per gallon) 3.65 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the road trip cost calculator show?",
        "a": "The road trip cost calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the road trip cost calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "distance",
        "label": "Distance (miles)",
        "type": "number",
        "defaultValue": "600",
        "min": "0",
        "step": "1"
      },
      {
        "name": "mpg",
        "label": "Vehicle fuel economy (mpg)",
        "type": "number",
        "defaultValue": "28",
        "min": "0.1",
        "step": "0.1"
      },
      {
        "name": "gasPrice",
        "label": "Gas price (USD per gallon)",
        "type": "number",
        "defaultValue": "3.65",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(distance/mpg)*gasPrice",
    "primary": "Estimated road trip fuel cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "babysitting-cost-calculator",
    "name": "Babysitting Cost Calculator",
    "kind": "expression",
    "description": "Estimate babysitting cost from hourly rate and total hours.",
    "intro": "Use this babysitting cost calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your hours.",
      "Enter your hourly rate (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the babysitting cost calculator using Hours 5, Hourly rate (USD) 22 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the babysitting cost calculator show?",
        "a": "The babysitting cost calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the babysitting cost calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hours",
        "label": "Hours",
        "type": "number",
        "defaultValue": "5",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "hourlyRate",
        "label": "Hourly rate (USD)",
        "type": "number",
        "defaultValue": "22",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "hours*hourlyRate",
    "primary": "Estimated babysitting cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "freelance-rate-calculator",
    "name": "Freelance Rate Calculator",
    "kind": "expression",
    "description": "Estimate the hourly freelance rate needed to hit a target income from billable hours.",
    "intro": "Use this freelance rate calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your target annual income (usd).",
      "Enter your annual billable hours.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the freelance rate calculator using Target annual income (USD) 90000, Annual billable hours 1400 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the freelance rate calculator show?",
        "a": "The freelance rate calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the freelance rate calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "targetIncome",
        "label": "Target annual income (USD)",
        "type": "number",
        "defaultValue": "90000",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "billableHours",
        "label": "Annual billable hours",
        "type": "number",
        "defaultValue": "1400",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "targetIncome/billableHours",
    "primary": "Required freelance hourly rate",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "meal-prep-cost-calculator",
    "name": "Meal Prep Cost Calculator",
    "kind": "expression",
    "description": "Estimate total meal prep cost from servings and cost per serving.",
    "intro": "Use this meal prep cost calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your number of servings.",
      "Enter your cost per serving (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the meal prep cost calculator using Number of servings 12, Cost per serving (USD) 4.75 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the meal prep cost calculator show?",
        "a": "The meal prep cost calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the meal prep cost calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "servings",
        "label": "Number of servings",
        "type": "number",
        "defaultValue": "12",
        "min": "0",
        "step": "1"
      },
      {
        "name": "costPerServing",
        "label": "Cost per serving (USD)",
        "type": "number",
        "defaultValue": "4.75",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "servings*costPerServing",
    "primary": "Estimated meal prep cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "party-budget-calculator",
    "name": "Party Budget Calculator",
    "kind": "expression",
    "description": "Estimate a simple party budget using guest count, cost per guest, and venue cost.",
    "intro": "Use this party budget calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your number of guests.",
      "Enter your cost per guest (usd).",
      "Enter your venue cost (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the party budget calculator using Number of guests 35, Cost per guest (USD) 18, Venue cost (USD) 250 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the party budget calculator show?",
        "a": "The party budget calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the party budget calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "guests",
        "label": "Number of guests",
        "type": "number",
        "defaultValue": "35",
        "min": "0",
        "step": "1"
      },
      {
        "name": "costPerGuest",
        "label": "Cost per guest (USD)",
        "type": "number",
        "defaultValue": "18",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "venueCost",
        "label": "Venue cost (USD)",
        "type": "number",
        "defaultValue": "250",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(guests*costPerGuest)+venueCost",
    "primary": "Estimated party budget",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "moving-cost-calculator",
    "name": "Moving Cost Calculator",
    "kind": "expression",
    "description": "Estimate moving cost using labor hours, hourly moving rate, and truck rental cost.",
    "intro": "Use this moving cost calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your moving labor hours.",
      "Enter your hourly moving rate (usd).",
      "Enter your truck rental cost (usd).",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the moving cost calculator using Moving labor hours 6, Hourly moving rate (USD) 160, Truck rental cost (USD) 120 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the moving cost calculator show?",
        "a": "The moving cost calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the moving cost calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "hours",
        "label": "Moving labor hours",
        "type": "number",
        "defaultValue": "6",
        "min": "0",
        "step": "0.1"
      },
      {
        "name": "hourlyRate",
        "label": "Hourly moving rate (USD)",
        "type": "number",
        "defaultValue": "160",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "truckCost",
        "label": "Truck rental cost (USD)",
        "type": "number",
        "defaultValue": "120",
        "min": "0",
        "step": "0.01"
      }
    ],
    "expr": "(hours*hourlyRate)+truckCost",
    "primary": "Estimated moving cost",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  },
  {
    "category": "life",
    "categoryName": "Life Calculators",
    "slug": "utility-bill-split-calculator",
    "name": "Utility Bill Split Calculator",
    "kind": "expression",
    "description": "Split a utility bill evenly across roommates or household members.",
    "intro": "Use this utility bill split calculator to get a quick estimate with simple inputs and an instant result.",
    "formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",
    "howToUse": [
      "Enter your total utility bill (usd).",
      "Enter your number of people.",
      "Review the result and change the inputs to compare different scenarios."
    ],
    "example": "For example, try the utility bill split calculator using Total utility bill (USD) 240, Number of people 3 to see how the estimate works before entering your own numbers.",
    "faq": [
      {
        "q": "What does the utility bill split calculator show?",
        "a": "The utility bill split calculator gives you a quick estimate based on the values you enter. It is useful for planning, comparison, and everyday decisions."
      },
      {
        "q": "Is the utility bill split calculator exact?",
        "a": "The result follows the formula described on the page, but it should still be treated as an estimate. Fees, local rules, taxes, rounding, or professional guidance can change the final outcome."
      },
      {
        "q": "Who is this tool for?",
        "a": "This tool is designed for people who want a fast life calculator estimate without using a spreadsheet."
      }
    ],
    "inputs": [
      {
        "name": "totalBill",
        "label": "Total utility bill (USD)",
        "type": "number",
        "defaultValue": "240",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "people",
        "label": "Number of people",
        "type": "number",
        "defaultValue": "3",
        "min": "1",
        "step": "1"
      }
    ],
    "expr": "totalBill/people",
    "primary": "Utility bill per person",
    "prefix": "$",
    "suffix": "",
    "relatedSlugs": [
      "tip-calculator",
      "discount-calculator",
      "split-bill-calculator",
      "travel-budget-calculator"
    ]
  }
];
