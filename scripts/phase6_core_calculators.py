from pathlib import Path
import re


def get_object_block(path: Path, slug: str):
    source = path.read_text()
    marker = f'    "slug": "{slug}",'
    pos = source.find(marker)
    if pos < 0:
        raise SystemExit(f"Missing calculator: {slug}")
    start = source.rfind('  {\n', 0, pos)
    end = source.find('\n  },', pos)
    if start < 0 or end < 0:
        raise SystemExit(f"Could not isolate calculator: {slug}")
    end += len('\n  },')
    return source, start, end, source[start:end]


def replace_object(path_str: str, slug: str, transform):
    path = Path(path_str)
    source, start, end, block = get_object_block(path, slug)
    new_block = transform(block)
    if new_block == block:
        raise SystemExit(f"No change produced for {slug}")
    path.write_text(source[:start] + new_block + source[end:])


def add_inputs(block: str, inputs_text: str):
    marker = '\n    ],\n    "relatedSlugs"'
    pos = block.rfind(marker)
    if pos < 0:
        raise SystemExit("Could not locate end of inputs")
    before = block[:pos]
    after = block[pos:]
    if not before.rstrip().endswith('}'):
        raise SystemExit("Unexpected input array ending")
    return before.rstrip() + ',\n' + inputs_text + after


def patch_mortgage(block: str):
    block = block.replace(
        '"description": "Free mortgage calculator for monthly payment, total loan amount, and estimated repayment cost. Designed for US home buyers comparing home price, down payment, rate, and loan term.",',
        '"description": "Estimate a more realistic monthly housing payment with principal, interest, property tax, homeowners insurance, PMI, and HOA costs.",'
    )
    block = block.replace(
        '"intro": "This mortgage calculator gives you a quick estimate of your monthly principal and interest payment based on a home price, down payment, interest rate, and mortgage term. It is a useful first-pass tool for buyers comparing affordability before talking to a lender.",',
        '"intro": "Use this mortgage calculator to estimate the monthly cost of owning a home, not just principal and interest. Add property tax, homeowners insurance, HOA dues, and an estimated PMI rate so you can compare homes using a closer approximation of the payment that affects your monthly budget.",'
    )
    block = block.replace(
        '"formulaText": "The calculator first subtracts the down payment from the home price to estimate the mortgage principal. It then applies the standard fixed-rate mortgage payment formula using a monthly interest rate and the total number of monthly payments in the loan term.",',
        '"formulaText": "The calculator computes fixed-rate principal and interest from the financed amount, then adds monthly property tax, homeowners insurance, HOA dues, and estimated PMI when the down payment is below 20%. PMI is only a planning estimate and actual lender requirements can differ.",'
    )
    block = block.replace(
        '"Add your expected down payment amount.",\n      "Enter the mortgage interest rate and choose the loan term.",\n      "Use the monthly payment estimate to compare homes and down payment scenarios."',
        '"Add your expected down payment amount.",\n      "Enter the mortgage rate, term, property tax rate, annual homeowners insurance, and any HOA dues.",\n      "If your down payment is below 20%, enter an estimated annual PMI rate or set it to 0 if it does not apply.",\n      "Compare the all-in monthly housing estimate with your budget and lender quote."'
    )
    block = block.replace(
        '"a": "No. This version focuses on principal and interest. Property taxes, homeowners insurance, HOA fees, and mortgage insurance can raise the real monthly payment."',
        '"a": "Yes. The estimate can include property tax, homeowners insurance, HOA dues, and PMI in addition to principal and interest. These inputs are estimates, so compare the result with an actual lender disclosure before making a decision."'
    )
    if '"name": "propertyTaxRate"' not in block:
        new_inputs = '''      {
        "name": "propertyTaxRate",
        "label": "Annual property tax rate (%)",
        "type": "number",
        "defaultValue": "1.1",
        "min": "0",
        "step": "0.01"
      },
      {
        "name": "annualInsurance",
        "label": "Annual homeowners insurance (USD)",
        "type": "number",
        "defaultValue": "1800",
        "min": "0",
        "step": "1"
      },
      {
        "name": "monthlyHoa",
        "label": "Monthly HOA dues (USD)",
        "type": "number",
        "defaultValue": "0",
        "min": "0",
        "step": "1"
      },
      {
        "name": "annualPmiRate",
        "label": "Estimated annual PMI rate (%)",
        "type": "number",
        "defaultValue": "0.5",
        "min": "0",
        "step": "0.01"
      }'''
        block = add_inputs(block, new_inputs)
    return block


def patch_paycheck(block: str, biweekly: bool):
    if biweekly:
        block = block.replace(
            '"description": "Estimate take-home pay for a biweekly payroll schedule with a simple effective tax assumption.",',
            '"description": "Estimate biweekly take-home pay with pre-tax deductions, an effective tax assumption, and post-tax deductions.",'
        )
        block = block.replace(
            '"intro": "Use this biweekly paycheck calculator to get a quick estimate with simple inputs and an instant result.",',
            '"intro": "Estimate a biweekly paycheck by separating gross pay, pre-tax deductions, estimated taxes, post-tax deductions, and final take-home pay. This is a planning tool rather than a payroll withholding engine.",'
        )
    else:
        block = block.replace(
            '"description": "Estimate net pay per paycheck using gross annual salary, pay periods, and an estimated tax rate.",',
            '"description": "Estimate take-home pay per paycheck with gross salary, pay frequency, pre-tax deductions, estimated taxes, and post-tax deductions.",'
        )
        block = block.replace(
            '"intro": "Use this paycheck calculator to get a quick estimate with simple inputs and an instant result.",',
            '"intro": "Estimate how gross annual pay turns into a paycheck by separating pre-tax deductions, estimated taxes, post-tax deductions, and take-home pay. Use your own effective tax assumption and compare the result with your actual pay stub.",'
        )
    block = block.replace(
        '"formulaText": "This calculator applies a direct formula to the values you enter and returns the result instantly.",',
        '"formulaText": "The calculator subtracts annual pre-tax deductions from gross salary to estimate taxable pay, applies your effective tax rate, subtracts post-tax deductions, and divides the remaining annual take-home amount by the selected number of pay periods.",'
    )
    if '"name": "annualPreTaxDeductions"' not in block:
        extra = '''      {
        "name": "annualPreTaxDeductions",
        "label": "Annual pre-tax deductions (USD)",
        "type": "number",
        "defaultValue": "6000",
        "min": "0",
        "step": "1"
      },
      {
        "name": "annualPostTaxDeductions",
        "label": "Annual post-tax deductions (USD)",
        "type": "number",
        "defaultValue": "1200",
        "min": "0",
        "step": "1"
      }'''
        block = add_inputs(block, extra)
    return block


replace_object("lib/calculators/data.ts", "mortgage-calculator", patch_mortgage)
replace_object("lib/calculators/additional.ts", "paycheck-calculator", lambda b: patch_paycheck(b, False))
replace_object("lib/calculators/additional.ts", "biweekly-paycheck-calculator", lambda b: patch_paycheck(b, True))

# Calculator engine upgrades.
engine_path = Path("lib/calculators/engine.ts")
engine = engine_path.read_text()

mortgage_pattern = re.compile(r'    case "mortgagePayment": \{.*?\n    \}\n    case "', re.S)
mortgage_replacement = '''    case "mortgagePayment": {
      const homePrice = Math.max(num(values.homePrice), 0);
      const downPayment = Math.min(Math.max(num(values.downPayment), 0), homePrice);
      const amount = Math.max(homePrice - downPayment, 0);
      const annualRate = Math.max(num(values.annualRate), 0) / 100;
      const months = positiveMonths(num(values.years));
      const monthlyRate = annualRate / 12;
      const principalAndInterest = monthlyRate === 0
        ? amount / months
        : amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const downPct = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
      const propertyTax = homePrice * Math.max(num(values.propertyTaxRate), 0) / 100 / 12;
      const homeownersInsurance = Math.max(num(values.annualInsurance), 0) / 12;
      const hoa = Math.max(num(values.monthlyHoa), 0);
      const pmi = downPct < 20 ? amount * Math.max(num(values.annualPmiRate), 0) / 100 / 12 : 0;
      const monthlyHousingCost = principalAndInterest + propertyTax + homeownersInsurance + hoa + pmi;
      const totalInterest = principalAndInterest * months - amount;
      return {
        primary: { label: "Estimated monthly housing cost", value: currency(monthlyHousingCost, locale) },
        secondary: [
          { label: "Principal & interest", value: currency(principalAndInterest, locale) },
          { label: "Property tax", value: currency(propertyTax, locale) },
          { label: "Homeowners insurance", value: currency(homeownersInsurance, locale) },
          { label: "PMI", value: currency(pmi, locale) },
          { label: "HOA dues", value: currency(hoa, locale) },
          { label: "Loan amount", value: currency(amount, locale) },
          { label: "Down payment", value: percent(downPct, 2, locale) },
          { label: "Total mortgage interest", value: currency(totalInterest, locale) },
        ],
        note: "Taxes, insurance, HOA dues, and PMI can change over time. Use this as a planning estimate and compare it with your lender's Loan Estimate.",
      };
    }
    case "'''
engine, count = mortgage_pattern.subn(mortgage_replacement, engine, count=1)
if count != 1:
    raise SystemExit("Could not replace mortgage engine case")

expression_anchor = '    case "expression": {\n      const result = evaluateNumericExpression(definition.expr || "0", values);'
if expression_anchor not in engine:
    raise SystemExit("Could not locate expression engine case")
paycheck_logic = '''    case "expression": {
      if (definition.slug === "paycheck-calculator" || definition.slug === "biweekly-paycheck-calculator") {
        const grossAnnual = Math.max(num(values.grossAnnual), 0);
        const preTax = Math.min(Math.max(num(values.annualPreTaxDeductions), 0), grossAnnual);
        const taxableAnnual = Math.max(grossAnnual - preTax, 0);
        const estimatedTax = taxableAnnual * Math.min(Math.max(num(values.taxRate), 0), 100) / 100;
        const postTax = Math.max(num(values.annualPostTaxDeductions), 0);
        const payPeriods = definition.slug === "biweekly-paycheck-calculator"
          ? 26
          : Math.max(Math.round(num(values.payPeriods)), 1);
        const annualTakeHome = Math.max(grossAnnual - preTax - estimatedTax - postTax, 0);
        const takeHomePerPaycheck = annualTakeHome / payPeriods;
        const grossPerPaycheck = grossAnnual / payPeriods;
        const deductionsPct = grossAnnual > 0 ? ((grossAnnual - annualTakeHome) / grossAnnual) * 100 : 0;
        return {
          primary: { label: "Estimated take-home pay per paycheck", value: currency(takeHomePerPaycheck, locale) },
          secondary: [
            { label: "Gross pay per paycheck", value: currency(grossPerPaycheck, locale) },
            { label: "Pre-tax deductions per paycheck", value: currency(preTax / payPeriods, locale) },
            { label: "Estimated tax per paycheck", value: currency(estimatedTax / payPeriods, locale) },
            { label: "Post-tax deductions per paycheck", value: currency(postTax / payPeriods, locale) },
            { label: "Estimated annual take-home pay", value: currency(annualTakeHome, locale) },
            { label: "Estimated total deduction rate", value: percent(deductionsPct, 2, locale) },
          ],
          note: "This uses an effective tax-rate estimate, not federal/state withholding tables. Compare the result with your pay stub or payroll provider for exact withholding.",
        };
      }

      const result = evaluateNumericExpression(definition.expr || "0", values);'''
engine = engine.replace(expression_anchor, paycheck_logic, 1)
engine_path.write_text(engine)

# Reference tests for PITI and paycheck breakdown.
test_path = Path("lib/calculators/engine.test.ts")
tests = test_path.read_text()
old_mortgage_test = '''  it("calculates mortgage principal and interest separately from the down payment", () => {
    const result = computeCalculator(
      definition("mortgagePayment", "mortgage-calculator", "finance"),
      { homePrice: "400000", downPayment: "80000", annualRate: "6.25", years: "30" },
    );

    expect(result.primary.value).toBe("$1,970.30");
    expect(secondaryValue(result, "Loan amount")).toBe("$320,000.00");
    expect(secondaryValue(result, "Down payment")).toBe("20%");
    expect(secondaryValue(result, "Total interest")).toBe("$389,306.21");
  });'''
new_mortgage_test = '''  it("calculates an all-in monthly mortgage estimate with PITI and HOA", () => {
    const result = computeCalculator(
      definition("mortgagePayment", "mortgage-calculator", "finance"),
      {
        homePrice: "400000",
        downPayment: "80000",
        annualRate: "6.25",
        years: "30",
        propertyTaxRate: "1.1",
        annualInsurance: "1800",
        monthlyHoa: "100",
        annualPmiRate: "0.5",
      },
    );

    expect(result.primary.value).toBe("$2,586.97");
    expect(secondaryValue(result, "Principal & interest")).toBe("$1,970.30");
    expect(secondaryValue(result, "Property tax")).toBe("$366.67");
    expect(secondaryValue(result, "Homeowners insurance")).toBe("$150.00");
    expect(secondaryValue(result, "PMI")).toBe("$0.00");
    expect(secondaryValue(result, "HOA dues")).toBe("$100.00");
    expect(secondaryValue(result, "Loan amount")).toBe("$320,000.00");
  });

  it("adds estimated PMI when the down payment is below 20 percent", () => {
    const result = computeCalculator(
      definition("mortgagePayment", "mortgage-calculator", "finance"),
      {
        homePrice: "400000",
        downPayment: "40000",
        annualRate: "6.25",
        years: "30",
        propertyTaxRate: "0",
        annualInsurance: "0",
        monthlyHoa: "0",
        annualPmiRate: "0.5",
      },
    );

    expect(secondaryValue(result, "PMI")).toBe("$150.00");
  });'''
if old_mortgage_test not in tests:
    raise SystemExit("Could not replace mortgage reference test")
tests = tests.replace(old_mortgage_test, new_mortgage_test, 1)
insert_before = '\n  it("calculates compound growth with recurring monthly contributions", () => {'
paycheck_test = '''
  it("shows a paycheck deduction breakdown instead of a single net-pay number", () => {
    const result = computeCalculator(
      definition("expression", "paycheck-calculator", "finance"),
      {
        grossAnnual: "85000",
        annualPreTaxDeductions: "6000",
        taxRate: "24",
        annualPostTaxDeductions: "1200",
        payPeriods: "26",
      },
    );

    expect(result.primary.value).toBe("$2,263.08");
    expect(secondaryValue(result, "Gross pay per paycheck")).toBe("$3,269.23");
    expect(secondaryValue(result, "Estimated annual take-home pay")).toBe("$58,840.00");
  });
'''
if paycheck_test.strip() not in tests:
    tests = tests.replace(insert_before, paycheck_test + insert_before, 1)
test_path.write_text(tests)
