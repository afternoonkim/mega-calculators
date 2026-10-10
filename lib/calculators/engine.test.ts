import { describe, expect, it } from "vitest";
import { calculators, type CalculatorDefinition } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";

// Reference-value tests protect calculator formulas from silent regressions.
function definition(kind: string, slug = `${kind}-test`, category = "math"): CalculatorDefinition {
  return {
    category,
    categoryName: "Test Calculators",
    slug,
    name: "Test Calculator",
    kind,
    description: "Test definition",
    intro: "Test definition",
    formulaText: "Test definition",
    howToUse: [],
    example: "Test definition",
    faq: [],
    inputs: [],
  };
}

function secondaryValue(result: ReturnType<typeof computeCalculator>, label: string) {
  return result.secondary?.find((item) => item.label === label)?.value;
}

describe("calculator engine reference values", () => {
  it("calculates a fixed-rate loan using the standard amortization formula", () => {
    const result = computeCalculator(
      definition("loanPayment", "loan-calculator", "finance"),
      { loanAmount: "25000", annualRate: "6.5", years: "5" },
    );

    expect(result.primary.value).toBe("$489.15");
    expect(secondaryValue(result, "Total paid")).toBe("$29,349.22");
    expect(secondaryValue(result, "Total interest")).toBe("$4,349.22");
  });

  it("handles a zero-interest loan without dividing by zero", () => {
    const result = computeCalculator(
      definition("loanPayment", "loan-calculator", "finance"),
      { loanAmount: "12000", annualRate: "0", years: "1" },
    );

    expect(result.primary.value).toBe("$1,000.00");
    expect(secondaryValue(result, "Total interest")).toBe("$0.00");
  });

  it("calculates an all-in monthly mortgage estimate with PITI and HOA", () => {
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

    expect(result.primary.value).toBe("$2,586.96");
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
  });

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

  it("calculates compound growth with recurring monthly contributions", () => {
    const result = computeCalculator(
      definition("compoundInterest", "compound-interest-calculator", "finance"),
      { principal: "10000", monthlyContribution: "500", annualRate: "8", years: "10" },
    );

    expect(result.primary.value).toBe("$113,669.42");
    expect(secondaryValue(result, "Total contributed")).toBe("$70,000.00");
    expect(secondaryValue(result, "Estimated growth")).toBe("$43,669.42");
  });

  it("counts leap day in date differences", () => {
    const result = computeCalculator(
      definition("dateDiff", "date-difference-calculator", "time-date"),
      { startDate: "2024-02-28", endDate: "2024-03-01" },
    );

    expect(result.primary.value).toBe("2");
  });

  it("uses ISO week numbering around the start of a year", () => {
    const result = computeCalculator(
      definition("weekNumber", "week-number-calculator", "time-date"),
      { date: "2026-01-01" },
    );

    expect(result.primary.value).toBe("1");
  });

  it("calculates a straightforward percentage", () => {
    const result = computeCalculator(
      definition("percentage", "percentage-calculator", "math"),
      { part: "25", whole: "200" },
    );

    expect(result.primary.value).toBe("12.5%");
  });

  it("returns a controlled message for invalid base-conversion input", () => {
    const result = computeCalculator(
      definition("baseConverter", "base-converter", "math"),
      { value: "2", fromBase: "2" },
    );

    expect(result.primary.value).toBe("Invalid input");
  });
});

describe("calculator registry smoke coverage", () => {
  it("provides defaults for every registered calculator", () => {
    for (const calculator of calculators) {
      const defaults = getDefaultValues(calculator);
      expect(Object.keys(defaults)).toHaveLength(calculator.inputs.length);
    }
  });

  it("computes every registered calculator with its default values without throwing", () => {
    const failures: string[] = [];

    for (const calculator of calculators) {
      try {
        const result = computeCalculator(calculator, getDefaultValues(calculator));
        if (!result?.primary?.label || result.primary.value === undefined) {
          failures.push(`${calculator.slug}: missing primary result`);
        }
      } catch (error) {
        failures.push(`${calculator.slug}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    expect(failures).toEqual([]);
  });
});
