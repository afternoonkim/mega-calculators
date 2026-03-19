import { CalculatorDefinition } from "@/lib/calculators/data";
import { localizeResultText } from "@/lib/calculators/localization";

export type CalculatorResult = {
  primary: { label: string; value: string };
  secondary?: { label: string; value: string }[];
  note?: string;
};

type Values = Record<string, string>;


function getLocalizedText(value: string | { en?: string; ko?: string } | undefined, locale: "en" | "ko") {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[locale] ?? value.en ?? value.ko ?? "";
}

function finalizeResult(result: CalculatorResult, locale: "en" | "ko"): CalculatorResult {
  if (locale === "en") return result;
  return {
    primary: {
      label: localizeResultText(result.primary.label, locale),
      value: localizeResultText(result.primary.value, locale),
    },
    secondary: result.secondary?.map((item) => ({
      label: localizeResultText(item.label, locale),
      value: localizeResultText(item.value, locale),
    })),
    note: result.note ? localizeResultText(result.note, locale) : undefined,
  };
}

function num(value: string | undefined) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function currency(value: number, locale: "en" | "ko" = "en") {
  if (locale === "ko") {
    return new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW", maximumFractionDigits: 0 }).format(value);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value);
}

function formatNumber(value: number, digits = 2, locale: "en" | "ko" = "en") {
  return new Intl.NumberFormat(locale === "ko" ? "ko-KR" : "en-US", { maximumFractionDigits: digits }).format(value);
}

function percent(value: number, digits = 2, locale: "en" | "ko" = "en") {
  return `${formatNumber(value, digits, locale)}%`;
}

function percentOrZero(value: number, digits = 2, locale: "en" | "ko" = "en") {
  return Number.isFinite(value) ? percent(value, digits, locale) : percent(0, digits, locale);
}

function positiveMonths(years: number) {
  return Math.max(Math.round(years * 12), 1);
}

function parseList(input: string | undefined) {
  return String(input ?? "")
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));
}


function parseDateSafe(dateString: string | undefined) {
  const date = new Date(String(dateString || ""));
  return Number.isNaN(date.getTime()) ? null : date;
}

function diffYMD(start: Date, end: Date) {
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();
  let days = end.getUTCDate() - start.getUTCDate();

  if (days < 0) {
    const prevMonth = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 0));
    days += prevMonth.getUTCDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0), days: Math.max(days, 0) };
}
function monthsToText(months: number, locale: "en" | "ko" = "en") {
  const years = Math.floor(months / 12);
  const remainingMonths = Math.round(months % 12);
  if (locale === "ko") {
    if (years <= 0) return `${remainingMonths}개월`;
    return `${years}년 ${remainingMonths}개월`;
  }
  if (years <= 0) return `${remainingMonths} months`;
  return `${years} years ${remainingMonths} months`;
}

function addDays(dateString: string, days: number) {
  const d = new Date(dateString);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function daysBetween(start: Date, end: Date) {
  return Math.round((end.getTime() - start.getTime()) / 86400000);
}

function formatDate(date: Date, locale: "en" | "ko" = "en") {
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(date);
}

function isoWeekNumber(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);
  const tempDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((tempDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

function timeToMinutes(time: string) {
  const [hours, minutes] = String(time || "0:0").split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

function safeEvalExpression(expr: string, values: Values) {
  const keys = Object.keys(values);
  const vars = keys.map((key) => num(values[key]));
  const fn = new Function(...keys, `return ${expr};`);
  const result = fn(...vars);
  return Number.isFinite(result) ? Number(result) : 0;
}

function gcdTwo(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcmTwo(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcdTwo(a, b);
}

export function getDefaultValues(definition: CalculatorDefinition) {
  return Object.fromEntries(
    definition.inputs.map((input) => [input.name, input.defaultValue ?? ""]),
  );
}

function computeCalculatorRaw(definition: CalculatorDefinition, values: Values, locale: "en" | "ko" = "en"): CalculatorResult {
  switch (definition.kind) {
    case "bloodPressure": {
      const systolic = num(values.systolic);
      const diastolic = num(values.diastolic);
      const pulsePressure = systolic - diastolic;
      const map = diastolic + (pulsePressure / 3);
      return {
        primary: { label: "Mean arterial pressure", value: `${formatNumber(map)} mmHg` },
        secondary: [
          { label: "Pulse pressure", value: `${formatNumber(pulsePressure)} mmHg` },
          { label: "Blood pressure", value: `${formatNumber(systolic, 0)}/${formatNumber(diastolic, 0)} mmHg` },
        ],
      };
    }
    case "concreteVolume": {
      const lengthFt = num(values.lengthFt);
      const widthFt = num(values.widthFt);
      const depthFt = num(values.depthIn) / 12;
      const cubicFeet = lengthFt * widthFt * depthFt;
      const cubicYards = cubicFeet / 27;
      const bags80 = cubicYards / 0.022;
      return {
        primary: { label: "Concrete needed", value: `${formatNumber(cubicYards)} yd³` },
        secondary: [
          { label: "Volume", value: `${formatNumber(cubicFeet)} ft³` },
          { label: "Approx. 80 lb bags", value: formatNumber(bags80, 0) },
        ],
      };
    }
    case "tileCoverage": {
      const roomAreaIn2 = num(values.roomLengthFt) * 12 * num(values.roomWidthFt) * 12;
      const tileAreaIn2 = Math.max(num(values.tileLengthIn) * num(values.tileWidthIn), 0.0001);
      const tiles = roomAreaIn2 / tileAreaIn2;
      const withWaste = tiles * (1 + num(values.wastePct) / 100);
      return {
        primary: { label: "Estimated tiles needed", value: formatNumber(Math.ceil(withWaste), 0) },
        secondary: [
          { label: "Surface area", value: `${formatNumber(roomAreaIn2 / 144)} sq ft` },
          { label: "Tiles before waste", value: formatNumber(Math.ceil(tiles), 0) },
          { label: "Waste included", value: `${formatNumber(num(values.wastePct))}%` },
        ],
      };
    }
    case "gravelVolume": {
      const lengthFt = num(values.lengthFt);
      const widthFt = num(values.widthFt);
      const depthFt = num(values.depthIn) / 12;
      const cubicFeet = lengthFt * widthFt * depthFt;
      const cubicYards = cubicFeet / 27;
      const tons = cubicYards * 1.5;
      return {
        primary: { label: "Gravel needed", value: `${formatNumber(cubicYards)} yd³` },
        secondary: [
          { label: "Volume", value: `${formatNumber(cubicFeet)} ft³` },
          { label: "Approx. weight", value: `${formatNumber(tons)} tons` },
        ],
      };
    }
    case "acceleration": {
      const a = (num(values.finalVelocity) - num(values.initialVelocity)) / Math.max(num(values.timeSeconds), 0.0001);
      return {
        primary: { label: "Acceleration", value: `${formatNumber(a)} m/s²` },
        secondary: [
          { label: "Change in velocity", value: `${formatNumber(num(values.finalVelocity) - num(values.initialVelocity))} m/s` },
          { label: "Time", value: `${formatNumber(num(values.timeSeconds))} s` },
        ],
      };
    }
    case "kineticEnergy": {
      const energy = 0.5 * num(values.massKg) * Math.pow(num(values.velocity), 2);
      return {
        primary: { label: "Kinetic energy", value: `${formatNumber(energy)} J` },
        secondary: [
          { label: "Mass", value: `${formatNumber(num(values.massKg))} kg` },
          { label: "Velocity", value: `${formatNumber(num(values.velocity))} m/s` },
        ],
      };
    }
    case "baseConverter": {
      const raw = String(values.value || '').trim();
      const base = Number(values.fromBase || '10');
      const parsed = Number.parseInt(raw, base);
      if (!raw || Number.isNaN(parsed)) {
        return { primary: { label: 'Converted value', value: 'Invalid input' }, note: 'Enter a value that matches the base you selected.' };
      }
      return {
        primary: { label: 'Decimal', value: parsed.toString(10) },
        secondary: [
          { label: 'Binary', value: parsed.toString(2) },
          { label: 'Octal', value: parsed.toString(8) },
          { label: 'Hexadecimal', value: parsed.toString(16).toUpperCase() },
        ],
      };
    }
    case "ageDifference": {
      const d1 = parseDateSafe(values.dateOne);
      const d2 = parseDateSafe(values.dateTwo);
      if (!d1 || !d2) return { primary: { label: 'Age difference', value: 'Invalid date' } };
      const [start, end] = d1 <= d2 ? [d1, d2] : [d2, d1];
      const totalDays = daysBetween(start, end);
      const diff = diffYMD(start, end);
      return {
        primary: { label: 'Age difference', value: `${diff.years} years ${diff.months} months ${diff.days} days` },
        secondary: [
          { label: 'Total days', value: formatNumber(totalDays, 0) },
          { label: 'Earlier date', value: formatDate(start) },
          { label: 'Later date', value: formatDate(end) },
        ],
      };
    }
    case "anniversary": {
      const start = parseDateSafe(values.startDate);
      if (!start) return { primary: { label: 'Next anniversary', value: 'Invalid date' } };
      const today = new Date();
      let next = new Date(Date.UTC(today.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      if (next < new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))) {
        next = new Date(Date.UTC(today.getUTCFullYear() + 1, start.getUTCMonth(), start.getUTCDate()));
      }
      const upcomingYear = next.getUTCFullYear() - start.getUTCFullYear();
      const remainingDays = daysBetween(new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())), next);
      return {
        primary: { label: 'Next anniversary', value: formatDate(next) },
        secondary: [
          { label: 'Upcoming anniversary', value: `${upcomingYear}${upcomingYear === 1 ? 'st' : upcomingYear === 2 ? 'nd' : upcomingYear === 3 ? 'rd' : 'th'}` },
          { label: 'Days remaining', value: formatNumber(remainingDays, 0) },
        ],
      };
    }
    case "median": {
      const list = parseList(values.numbers).sort((a,b)=>a-b);
      if (!list.length) return { primary: { label: 'Median', value: '0' } };
      const mid = Math.floor(list.length/2);
      const median = list.length % 2 ? list[mid] : (list[mid-1]+list[mid])/2;
      return {
        primary: { label: 'Median', value: formatNumber(median) },
        secondary: [
          { label: 'Values', value: formatNumber(list.length,0) },
          { label: 'Lowest', value: formatNumber(list[0]) },
          { label: 'Highest', value: formatNumber(list[list.length-1]) },
        ],
      };
    }
    case "mode": {
      const list = parseList(values.numbers);
      if (!list.length) return { primary: { label: 'Mode', value: 'No data' } };
      const counts = new Map<number, number>();
      for (const n of list) counts.set(n, (counts.get(n)||0)+1);
      const maxCount = Math.max(...counts.values());
      const modes = [...counts.entries()].filter(([,c])=>c===maxCount).map(([n])=>n);
      const noMode = modes.length === counts.size;
      return {
        primary: { label: 'Mode', value: noMode ? 'No mode' : modes.map((n)=>formatNumber(n)).join(', ') },
        secondary: [
          { label: 'Highest frequency', value: formatNumber(maxCount,0) },
          { label: 'Unique values', value: formatNumber(counts.size,0) },
        ],
      };
    }
    case "halfLife": {
      const initial = num(values.initialAmount);
      const halfLife = Math.max(num(values.halfLife), 0.0001);
      const elapsed = Math.max(num(values.elapsedTime), 0);
      const remaining = initial * Math.pow(0.5, elapsed / halfLife);
      return {
        primary: { label: 'Remaining amount', value: formatNumber(remaining) },
        secondary: [
          { label: 'Initial amount', value: formatNumber(initial) },
          { label: 'Elapsed half-lives', value: formatNumber(elapsed / halfLife) },
        ],
      };
    }
    case "gramsToMoles": {
      const grams = num(values.grams);
      const molarMass = Math.max(num(values.molarMass), 0.0001);
      const moles = grams / molarMass;
      return {
        primary: { label: 'Moles', value: formatNumber(moles) },
        secondary: [
          { label: 'Mass', value: `${formatNumber(grams)} g` },
          { label: 'Molar mass', value: `${formatNumber(molarMass)} g/mol` },
        ],
      };
    }
    case "ph": {
      const h = Math.max(num(values.hConcentration), 1e-16);
      const ph = -Math.log10(h);
      return {
        primary: { label: 'pH', value: formatNumber(ph) },
        secondary: [
          { label: 'Hydrogen ion concentration', value: `${h} mol/L` },
          { label: 'Classification', value: ph < 7 ? 'Acidic' : ph > 7 ? 'Basic' : 'Neutral' },
        ],
      };
    }
    case "expression": {
      const result = safeEvalExpression(definition.expr || "0", values);

      if (definition.slug === "dividend-yield-calculator") {
        const annualDividend = num(values.annualDividend);
        const sharePrice = Math.max(num(values.sharePrice), 0.000001);
        const yieldPct = (annualDividend / sharePrice) * 100;
        return {
          primary: { label: "Dividend yield", value: percentOrZero(yieldPct, 2, locale) },
          secondary: [
            { label: "Annual income per 100 shares", value: currency(annualDividend * 100, locale) },
            { label: "Dividend per month equivalent", value: currency(annualDividend / 12, locale) },
          ],
        };
      }

      if (definition.slug === "interest-rate-calculator") {
        const principal = Math.max(num(values.principal), 0.000001);
        const interest = num(values.interest);
        const timeYears = Math.max(num(values.timeYears), 1 / 12);
        const annualizedRate = (interest / (principal * timeYears)) * 100;
        return {
          primary: { label: "Estimated annual rate", value: percentOrZero(annualizedRate, 2, locale) },
          secondary: [
            { label: "Principal", value: currency(principal, locale) },
            { label: "Interest paid", value: currency(interest, locale) },
          ],
        };
      }

      if (definition.slug === "roi-calculator") {
        const gain = num(values.gain);
        const cost = Math.max(num(values.cost), 0.000001);
        const totalValue = cost + gain;
        return {
          primary: { label: "Return on investment", value: percentOrZero((gain / cost) * 100, 2, locale) },
          secondary: [
            { label: "Net profit", value: currency(gain, locale) },
            { label: "Ending value", value: currency(totalValue, locale) },
          ],
        };
      }

      if (definition.slug === "net-worth-calculator") {
        const assets = num(values.assets);
        const liabilities = num(values.liabilities);
        const netWorth = assets - liabilities;
        return {
          primary: { label: "Net worth", value: currency(netWorth, locale) },
          secondary: [
            { label: "Assets", value: currency(assets, locale) },
            { label: "Liabilities", value: currency(liabilities, locale) },
          ],
        };
      }

      if (definition.slug === "budget-calculator") {
        const income = num(values.income);
        const expenses = num(values.expenses);
        const savings = income - expenses;
        return {
          primary: { label: "Monthly budget balance", value: currency(savings, locale) },
          secondary: [
            { label: "Monthly income", value: currency(income, locale) },
            { label: "Monthly expenses", value: currency(expenses, locale) },
          ],
          note: savings < 0 ? "Your expenses are higher than your income in this estimate." : "A positive balance means you have room to save, invest, or pay down debt.",
        };
      }

      if (definition.slug === "apr-calculator") {
        const totalCost = num(values.fees) + num(values.interest);
        const principal = Math.max(num(values.principal), 0.000001);
        const apr = (totalCost / principal) * 100;
        return {
          primary: { label: "Estimated APR", value: percentOrZero(apr, 2, locale) },
          secondary: [
            { label: "Loan amount", value: currency(principal, locale) },
            { label: "Total interest and fees", value: currency(totalCost, locale) },
          ],
        };
      }

      if (definition.slug === "present-value-calculator") {
        const futureValue = num(values.futureValue);
        const annualRate = num(values.annualRate) / 100;
        const years = Math.max(num(values.years), 1);
        const presentValue = futureValue / Math.pow(1 + annualRate, years);
        return {
          primary: { label: "Present value", value: currency(presentValue, locale) },
          secondary: [
            { label: "Future value target", value: currency(futureValue, locale) },
            { label: "Discount rate", value: percentOrZero(annualRate * 100, 2, locale) },
          ],
        };
      }

      const prefixText = getLocalizedText(definition.prefix, locale);
      const suffixText = getLocalizedText(definition.suffix, locale);
      const primaryLabel = getLocalizedText(definition.primary, locale) || (locale === "ko" ? "결과" : "Result");
      const output = prefixText === "$" || prefixText === "₩" ? currency(result, locale) : `${prefixText ?? ""}${formatNumber(result, 2, locale)}${suffixText ?? ""}`;
      return finalizeResult({ primary: { label: primaryLabel, value: output } }, locale);
    }
    case "compoundInterest": {
      const principal = num(values.principal);
      const monthlyContribution = num(values.monthlyContribution);
      const annualRate = num(values.annualRate) / 100;
      const years = Math.max(num(values.years), 0);
      const months = positiveMonths(years);
      const monthlyRate = annualRate / 12;
      const futurePrincipal = principal * Math.pow(1 + monthlyRate, months);
      const futureContrib = monthlyRate === 0
        ? monthlyContribution * months
        : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      const total = futurePrincipal + futureContrib;
      const invested = principal + (monthlyContribution * months);
      return {
        primary: { label: "Future value", value: currency(total, locale) },
        secondary: [
          { label: "Total contributed", value: currency(invested, locale) },
          { label: "Estimated growth", value: currency(total - invested, locale) },
          { label: "Time horizon", value: `${formatNumber(years, 0)} years` },
        ],
      };
    }
    case "futureValueWithContrib": {
      const startingAmount = num(values.startingAmount);
      const monthlyContribution = num(values.monthlyContribution);
      const annualRate = num(values.annualRate) / 100;
      const years = Math.max(num(values.years), 0);
      const months = positiveMonths(years);
      const monthlyRate = annualRate / 12;
      const futureValue = startingAmount * Math.pow(1 + monthlyRate, months) + (monthlyRate === 0
        ? monthlyContribution * months
        : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
      const invested = startingAmount + (monthlyContribution * months);
      return {
        primary: { label: definition.slug === "savings-calculator" ? "Projected savings balance" : "Projected value", value: currency(futureValue, locale) },
        secondary: [
          { label: "Total contributed", value: currency(invested, locale) },
          { label: "Estimated growth", value: currency(futureValue - invested, locale) },
          { label: "Average monthly addition", value: currency(monthlyContribution, locale) },
        ],
      };
    }
    case "loanPayment": {
      const amount = num(values.loanAmount);
      const annualRate = num(values.annualRate) / 100;
      const months = positiveMonths(num(values.years));
      const monthlyRate = annualRate / 12;
      const monthlyPayment = monthlyRate === 0 ? amount / months : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      const totalPaid = monthlyPayment * months;
      return {
        primary: { label: definition.slug === "amortization-calculator" ? "Monthly payment" : "Monthly payment", value: currency(monthlyPayment, locale) },
        secondary: [
          { label: "Loan amount", value: currency(amount, locale) },
          { label: "Total paid", value: currency(totalPaid, locale) },
          { label: "Total interest", value: currency(totalPaid - amount, locale) },
        ],
        note: definition.slug === "amortization-calculator" ? "This estimate shows the payment for a standard fixed-rate amortizing loan. Taxes, insurance, and fees are not included." : undefined,
      };
    }
    case "mortgagePayment": {
      const homePrice = num(values.homePrice);
      const downPayment = num(values.downPayment);
      const amount = Math.max(homePrice - downPayment, 0);
      const annualRate = num(values.annualRate) / 100;
      const months = positiveMonths(num(values.years));
      const monthlyRate = annualRate / 12;
      const monthlyPayment = monthlyRate === 0 ? amount / months : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      const totalPaid = monthlyPayment * months;
      return {
        primary: { label: "Estimated monthly mortgage", value: currency(monthlyPayment, locale) },
        secondary: [
          { label: "Loan amount", value: currency(amount, locale) },
          { label: "Down payment", value: percentOrZero(homePrice > 0 ? (downPayment / homePrice) * 100 : 0, 2, locale) },
          { label: "Total interest", value: currency(totalPaid - amount, locale) },
        ],
        note: "This estimate includes principal and interest only. Property taxes, homeowners insurance, HOA fees, and PMI can increase the real payment.",
      };
    }
    case "retirement": {
      const currentAge = num(values.currentAge);
      const retirementAge = num(values.retirementAge);
      const years = Math.max(retirementAge - currentAge, 0);
      const currentSavings = num(values.currentSavings);
      const monthlyContribution = num(values.monthlyContribution);
      const annualRate = num(values.annualRate) / 100;
      const monthlyRate = annualRate / 12;
      const months = positiveMonths(years);
      const futureValue = currentSavings * Math.pow(1 + monthlyRate, months) + (monthlyRate === 0
        ? monthlyContribution * months
        : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
      const invested = currentSavings + monthlyContribution * months;
      return {
        primary: { label: "Estimated retirement savings", value: currency(futureValue, locale) },
        secondary: [
          { label: "Years until retirement", value: formatNumber(years, 0) },
          { label: "Total contributed", value: currency(invested, locale) },
          { label: "Estimated investment growth", value: currency(futureValue - invested, locale) },
        ],
      };
    }
    case "creditCardPayoff": {
      const balance = num(values.balance);
      const monthlyRate = num(values.annualRate) / 100 / 12;
      const monthlyPayment = num(values.monthlyPayment);
      if (monthlyPayment <= balance * monthlyRate && monthlyRate > 0) {
        return {
          primary: { label: "Monthly payment too low", value: "Increase payment" },
          note: "Your payment does not cover the monthly interest, so the balance will not go down.",
        };
      }
      const months = monthlyRate === 0 ? balance / Math.max(monthlyPayment, 1) : -Math.log(1 - (balance * monthlyRate) / monthlyPayment) / Math.log(1 + monthlyRate);
      return {
        primary: { label: "Estimated payoff time", value: monthsToText(months, locale) },
        secondary: [
          { label: "Monthly payment", value: currency(monthlyPayment, locale) },
          { label: "Estimated total paid", value: currency(monthlyPayment * Math.ceil(months), locale) },
        ],
      };
    }
    case "inflation": {
      const amount = num(values.amount);
      const inflationRate = num(values.inflationRate) / 100;
      const years = Math.max(num(values.years), 0);
      const futureCost = amount * Math.pow(1 + inflationRate, years);
      return {
        primary: { label: "Future cost", value: currency(futureCost, locale) },
        secondary: [
          { label: "Purchasing power loss", value: currency(futureCost - amount, locale) },
          { label: "Value of today's amount in future dollars", value: currency(futureCost, locale) },
        ],
      };
    }
    case "stockAverage": {
      const shares1 = num(values.shares1);
      const shares2 = num(values.shares2);
      const price1 = num(values.price1);
      const price2 = num(values.price2);
      const totalShares = shares1 + shares2;
      const totalInvested = (shares1 * price1) + (shares2 * price2);
      const avgCost = totalShares === 0 ? 0 : totalInvested / totalShares;
      return {
        primary: { label: "Average cost basis", value: currency(avgCost, locale) },
        secondary: [
          { label: "Total shares", value: formatNumber(totalShares, 4) },
          { label: "Total invested", value: currency(totalInvested, locale) },
          { label: "Break-even share price", value: currency(avgCost, locale) },
        ],
      };
    }
    case "debtPayoff": {
      const balance = num(values.balance);
      const monthlyRate = num(values.annualRate) / 100 / 12;
      const monthlyPayment = num(values.monthlyPayment);
      if (monthlyPayment <= balance * monthlyRate && monthlyRate > 0) {
        return {
          primary: { label: "Payment too low", value: "Increase payment" },
          note: "The payment is not large enough to reduce the balance after interest.",
        };
      }
      const months = monthlyRate === 0 ? balance / Math.max(monthlyPayment, 1) : -Math.log(1 - (balance * monthlyRate) / monthlyPayment) / Math.log(1 + monthlyRate);
      return {
        primary: { label: "Estimated payoff time", value: monthsToText(months, locale) },
        secondary: [
          { label: "Monthly payment", value: currency(monthlyPayment, locale) },
          { label: "Estimated total paid", value: currency(monthlyPayment * Math.ceil(months), locale) },
        ],
      };
    }
    case "rentVsBuy": {
      const monthlyRent = num(values.monthlyRent);
      const years = Math.max(num(values.years), 1);
      const rentCost = monthlyRent * 12 * years;
      const amount = Math.max(num(values.homePrice) - num(values.downPayment), 0);
      const monthlyRate = num(values.annualRate) / 100 / 12;
      const months = 30 * 12;
      const mortgage = monthlyRate === 0 ? amount / months : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      const buyCost = num(values.downPayment) + mortgage * 12 * years;
      const cheaper = buyCost < rentCost ? "Buying looks cheaper in this simple estimate" : "Renting looks cheaper in this simple estimate";
      return {
        primary: { label: "Simple comparison", value: cheaper },
        secondary: [
          { label: `${formatNumber(years, 0)}-year rent cost`, value: currency(rentCost, locale) },
          { label: `${formatNumber(years, 0)}-year buy cash outflow`, value: currency(buyCost, locale) },
          { label: "Estimated monthly mortgage", value: currency(mortgage, locale) },
        ],
        note: "This comparison is intentionally simplified. It does not include home appreciation, maintenance, taxes, insurance, or investment returns on cash.",
      };
    }
    case "bmi": {
      const bmi = num(values.weightKg) / Math.pow(num(values.heightCm) / 100, 2);
      let category = "Healthy";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi >= 25 && bmi < 30) category = "Overweight";
      else if (bmi >= 30) category = "Obesity";
      return {
        primary: { label: "BMI", value: formatNumber(bmi) },
        secondary: [{ label: "Category", value: category }],
      };
    }
    case "bmr": {
      const weight = num(values.weightKg);
      const height = num(values.heightCm);
      const age = num(values.age);
      const sex = values.sex;
      const result = sex === "male" ? (10 * weight) + (6.25 * height) - (5 * age) + 5 : (10 * weight) + (6.25 * height) - (5 * age) - 161;
      return { primary: { label: "BMR", value: `${formatNumber(result, 0)} calories/day` } };
    }
    case "bodyFat": {
      const height = num(values.heightCm) / 2.54;
      const neck = num(values.neckCm) / 2.54;
      const waist = num(values.waistCm) / 2.54;
      const hip = num(values.hipCm) / 2.54;
      const sex = values.sex;
      const result = sex === "male"
        ? 86.01 * Math.log10(Math.max(waist - neck, 1)) - 70.041 * Math.log10(height) + 36.76
        : 163.205 * Math.log10(Math.max(waist + hip - neck, 1)) - 97.684 * Math.log10(height) - 78.387;
      return { primary: { label: "Estimated body fat", value: percent(result, 2, locale) } };
    }
    case "calorie":
    case "tdee": {
      const weight = num(values.weightKg);
      const height = num(values.heightCm);
      const age = num(values.age);
      const sex = values.sex;
      const activity = num(values.activity);
      const bmr = sex === "male" ? (10 * weight) + (6.25 * height) - (5 * age) + 5 : (10 * weight) + (6.25 * height) - (5 * age) - 161;
      const tdee = bmr * activity;
      return {
        primary: { label: definition.kind === "calorie" ? "Maintenance calories" : "TDEE", value: `${formatNumber(tdee, 0)} calories/day` },
        secondary: [{ label: "BMR", value: `${formatNumber(bmr, 0)} calories/day` }],
      };
    }
    case "idealWeight": {
      const heightIn = num(values.heightCm) / 2.54;
      const base = values.sex === "male" ? 50 : 45.5;
      const result = base + Math.max(heightIn - 60, 0) * 2.3;
      return { primary: { label: "Estimated ideal weight", value: `${formatNumber(result)} kg` } };
    }
    case "dueDate": {
      const dueDate = addDays(values.lastPeriod, 280);
      return { primary: { label: "Estimated due date", value: formatDate(dueDate) } };
    }
    case "ovulation": {
      const cycleLength = num(values.cycleLength);
      const ovulationDate = addDays(values.lastPeriod, cycleLength - 14);
      const fertileStart = addDays(values.lastPeriod, cycleLength - 19);
      const fertileEnd = addDays(values.lastPeriod, cycleLength - 14);
      return {
        primary: { label: "Estimated ovulation date", value: formatDate(ovulationDate) },
        secondary: [
          { label: "Fertile window starts", value: formatDate(fertileStart) },
          { label: "Fertile window ends", value: formatDate(fertileEnd) },
        ],
      };
    }
    case "heartRate": {
      const age = num(values.age);
      const maxHr = 220 - age;
      const restingHr = num(values.restingHr);
      const reserve = maxHr - restingHr;
      return {
        primary: { label: "Estimated max heart rate", value: `${formatNumber(maxHr, 0)} bpm` },
        secondary: [
          { label: "Moderate zone (50-70%)", value: `${formatNumber(restingHr + reserve * 0.5, 0)}-${formatNumber(restingHr + reserve * 0.7, 0)} bpm` },
          { label: "Vigorous zone (70-85%)", value: `${formatNumber(restingHr + reserve * 0.7, 0)}-${formatNumber(restingHr + reserve * 0.85, 0)} bpm` },
        ],
      };
    }
    case "pace": {
      const distance = num(values.distance);
      const totalSeconds = num(values.hours) * 3600 + num(values.minutes) * 60 + num(values.seconds);
      const paceSeconds = distance === 0 ? 0 : totalSeconds / distance;
      const mins = Math.floor(paceSeconds / 60);
      const secs = Math.round(paceSeconds % 60).toString().padStart(2, "0");
      return {
        primary: { label: "Average pace", value: `${mins}:${secs} per mile` },
        secondary: [{ label: "Average speed", value: `${formatNumber(distance / (totalSeconds / 3600))} mph` }],
      };
    }
    case "leanBodyMass": {
      const weight = num(values.weightKg);
      const bodyFatPercent = num(values.bodyFatPercent);
      const lbm = weight * (1 - bodyFatPercent / 100);
      return { primary: { label: "Lean body mass", value: `${formatNumber(lbm)} kg` } };
    }
    case "age": {
      const birthDate = new Date(`${values.birthDate}T00:00:00Z`);
      const today = new Date();
      const diffDays = daysBetween(birthDate, today);
      const years = Math.floor(diffDays / 365.2425);
      return {
        primary: { label: "Age", value: `${years} years` },
        secondary: [{ label: "Approximate days lived", value: formatNumber(diffDays, 0) }],
      };
    }
    case "dateDiff": {
      const start = new Date(`${values.startDate}T00:00:00Z`);
      const end = new Date(`${values.endDate}T00:00:00Z`);
      const diff = daysBetween(start, end);
      return {
        primary: { label: "Days between dates", value: formatNumber(diff, 0) },
        secondary: [{ label: "Weeks", value: formatNumber(diff / 7) }],
      };
    }
    case "timeDuration": {
      let diff = timeToMinutes(values.endTime) - timeToMinutes(values.startTime);
      if (diff < 0) diff += 24 * 60;
      return {
        primary: { label: "Time duration", value: `${Math.floor(diff / 60)} hours ${diff % 60} minutes` },
      };
    }
    case "workHours": {
      const total = num(values.hoursPerDay) * num(values.daysPerWeek) * num(values.weeks);
      return {
        primary: { label: "Total work hours", value: `${formatNumber(total)} hours` },
      };
    }
    case "businessDays": {
      const start = new Date(`${values.startDate}T00:00:00Z`);
      const end = new Date(`${values.endDate}T00:00:00Z`);
      let count = 0;
      const current = new Date(start);
      while (current <= end) {
        const day = current.getUTCDay();
        if (day !== 0 && day !== 6) count += 1;
        current.setUTCDate(current.getUTCDate() + 1);
      }
      return { primary: { label: "Business days", value: formatNumber(count, 0) } };
    }
    case "countdown": {
      const target = new Date(`${values.targetDate}T00:00:00Z`);
      const now = new Date();
      const diff = daysBetween(now, target);
      return { primary: { label: "Days remaining", value: formatNumber(diff, 0) } };
    }
    case "weekNumber": {
      return { primary: { label: "ISO week number", value: formatNumber(isoWeekNumber(values.date), 0) } };
    }
    case "dateAdd": {
      const resultDate = addDays(values.startDate, num(values.days));
      return { primary: { label: "Calculated date", value: formatDate(resultDate) } };
    }
    case "percentage": {
      const result = (num(values.part) / num(values.whole)) * 100;
      return { primary: { label: "Percentage", value: percent(result, 2, locale) } };
    }
    case "percentChange": {
      const oldValue = num(values.oldValue);
      const result = ((num(values.newValue) - oldValue) / oldValue) * 100;
      return { primary: { label: "Percent change", value: percent(result, 2, locale) } };
    }
    case "fraction": {
      const n1 = num(values.numerator1);
      const d1 = num(values.denominator1);
      const n2 = num(values.numerator2);
      const d2 = num(values.denominator2);
      const decimal1 = n1 / d1;
      const decimal2 = n2 / d2;
      const sum = decimal1 + decimal2;
      return {
        primary: { label: "Fraction sum", value: formatNumber(sum) },
        secondary: [
          { label: "Fraction 1 decimal", value: formatNumber(decimal1) },
          { label: "Fraction 2 decimal", value: formatNumber(decimal2) },
        ],
      };
    }
    case "ratio": {
      const ratioValue = num(values.value1) / num(values.value2);
      return { primary: { label: "Ratio", value: `${formatNumber(num(values.value1))}:${formatNumber(num(values.value2))} (${formatNumber(ratioValue)})` } };
    }
    case "average": {
      const valuesList = parseList(values.values);
      const avg = valuesList.reduce((sum, value) => sum + value, 0) / Math.max(valuesList.length, 1);
      return { primary: { label: "Average", value: formatNumber(avg) } };
    }
    case "weightedAverage": {
      const valuesList = parseList(values.values);
      const weights = parseList(values.weights);
      const totalWeight = weights.reduce((sum, value) => sum + value, 0);
      const weighted = valuesList.reduce((sum, value, index) => sum + value * (weights[index] ?? 0), 0) / Math.max(totalWeight, 1);
      return { primary: { label: "Weighted average", value: formatNumber(weighted) } };
    }
    case "stddev": {
      const valuesList = parseList(values.values);
      const avg = valuesList.reduce((sum, value) => sum + value, 0) / Math.max(valuesList.length, 1);
      const variance = valuesList.reduce((sum, value) => sum + Math.pow(value - avg, 2), 0) / Math.max(valuesList.length, 1);
      return { primary: { label: "Standard deviation", value: formatNumber(Math.sqrt(variance)) } };
    }
    case "factorial": {
      const value = Math.floor(num(values.value));
      let total = 1;
      for (let i = 2; i <= value; i += 1) total *= i;
      return { primary: { label: "Factorial", value: formatNumber(total, 0) } };
    }
    case "lcm": {
      const valuesList = parseList(values.values).map((value) => Math.floor(value));
      const result = valuesList.reduce((acc, value) => lcmTwo(acc, value), 1);
      return { primary: { label: "Least common multiple", value: formatNumber(result, 0) } };
    }
    case "gcd": {
      const valuesList = parseList(values.values).map((value) => Math.floor(value));
      const result = valuesList.reduce((acc, value) => gcdTwo(acc, value));
      return { primary: { label: "Greatest common divisor", value: formatNumber(result, 0) } };
    }
    case "converter": {
      const base = num(values.value) * (definition.units?.[values.fromUnit] ?? 1);
      const result = base / (definition.units?.[values.toUnit] ?? 1);
      const fromLabel = definition.unitLabels?.[values.fromUnit] ?? values.fromUnit;
      const toLabel = definition.unitLabels?.[values.toUnit] ?? values.toUnit;
      return { primary: { label: `${fromLabel} to ${toLabel}`, value: formatNumber(result, 6) } };
    }
    case "temperatureConverter": {
      const value = num(values.value);
      let celsius = value;
      if (values.fromUnit === "f") celsius = (value - 32) * 5 / 9;
      if (values.fromUnit === "k") celsius = value - 273.15;
      let result = celsius;
      if (values.toUnit === "f") result = (celsius * 9 / 5) + 32;
      if (values.toUnit === "k") result = celsius + 273.15;
      return { primary: { label: "Converted temperature", value: formatNumber(result, 2) } };
    }
    case "fuelEconomyConverter": {
      const value = num(values.value);
      const result = values.fromUnit === values.toUnit
        ? value
        : values.fromUnit === "mpg"
          ? 235.214583 / value
          : 235.214583 / value;
      return { primary: { label: "Converted fuel economy", value: formatNumber(result, 2) } };
    }
    case "tip": {
      const bill = num(values.bill);
      const tipAmount = bill * num(values.tipPercent) / 100;
      const total = bill + tipAmount;
      const people = Math.max(num(values.people), 1);
      return {
        primary: { label: "Tip amount", value: currency(tipAmount, locale) },
        secondary: [
          { label: "Total bill", value: currency(total, locale) },
          { label: "Per person", value: currency(total / people, locale) },
        ],
      };
    }
    case "discount": {
      const originalPrice = num(values.originalPrice);
      const finalPrice = originalPrice * (1 - num(values.discountPercent) / 100);
      return {
        primary: { label: "Final price", value: currency(finalPrice, locale) },
        secondary: [{ label: "You save", value: currency(originalPrice - finalPrice, locale) }],
      };
    }
    case "gpa": {
      const totalPoints = (num(values.course1) * num(values.credits1)) + (num(values.course2) * num(values.credits2)) + (num(values.course3) * num(values.credits3));
      const totalCredits = num(values.credits1) + num(values.credits2) + num(values.credits3);
      return { primary: { label: "Estimated GPA", value: formatNumber(totalPoints / totalCredits, 2) } };
    }
    case "splitBill": {
      const bill = num(values.bill);
      const tipAmount = bill * num(values.tipPercent) / 100;
      const total = bill + tipAmount;
      const perPerson = total / Math.max(num(values.people), 1);
      return {
        primary: { label: "Per person", value: currency(perPerson, locale) },
        secondary: [{ label: "Total with tip", value: currency(total, locale) }],
      };
    }
    case "salesTax": {
      const price = num(values.price);
      const tax = price * num(values.taxRate) / 100;
      return {
        primary: { label: "Final price", value: currency(price + tax, locale) },
        secondary: [{ label: "Sales tax", value: currency(tax, locale) }],
      };
    }
    case "commission": {
      const commission = num(values.sales) * num(values.commissionRate) / 100;
      return { primary: { label: "Commission", value: currency(commission, locale) } };
    }
    case "markup": {
      const cost = num(values.cost);
      const sellingPrice = cost * (1 + num(values.markupPercent) / 100);
      return { primary: { label: "Selling price", value: currency(sellingPrice, locale) } };
    }
    case "markdown": {
      const originalPrice = num(values.originalPrice);
      const salePrice = originalPrice * (1 - num(values.markdownPercent) / 100);
      return { primary: { label: "Sale price", value: currency(salePrice, locale) } };
    }
    case "fuelCost": {
      const gallons = num(values.distance) / Math.max(num(values.mpg), 1);
      const total = gallons * num(values.gasPrice);
      return { primary: { label: "Estimated fuel cost", value: currency(total, locale) } };
    }
    case "rentSplit": {
      const perPerson = num(values.rent) / Math.max(num(values.roommates), 1);
      return { primary: { label: "Rent per person", value: currency(perPerson, locale) } };
    }
    case "breakEven": {
      const contribution = num(values.pricePerUnit) - num(values.variableCost);
      const units = contribution <= 0 ? 0 : num(values.fixedCosts) / contribution;
      return { primary: { label: "Break-even units", value: formatNumber(units, 0) } };
    }
    case "rule72": {
      return { primary: { label: "Years to double", value: formatNumber(72 / Math.max(num(values.annualRate), 0.0001), 1) } };
    }
    case "unitPrice": {
      return { primary: { label: "Unit price", value: currency(num(values.price) / Math.max(num(values.quantity), 1), locale) } };
    }
    case "sleep": {
      const wakeMinutes = timeToMinutes(values.wakeTime);
      const cycles = num(values.sleepCycles);
      const totalSleepMinutes = cycles * 90 + 15;
      let bedtimeMinutes = wakeMinutes - totalSleepMinutes;
      while (bedtimeMinutes < 0) bedtimeMinutes += 24 * 60;
      const hours = Math.floor(bedtimeMinutes / 60).toString().padStart(2, "0");
      const minutes = Math.floor(bedtimeMinutes % 60).toString().padStart(2, "0");
      return { primary: { label: "Suggested bedtime", value: `${hours}:${minutes}` } };
    }
    case "dogAge": {
      const age = num(values.dogAge);
      const humanAge = age <= 2 ? age * 10.5 : 21 + ((age - 2) * 4);
      return { primary: { label: "Human years equivalent", value: formatNumber(humanAge, 1) } };
    }
    case "catAge": {
      const age = num(values.catAge);
      const humanAge = age <= 2 ? age * 12.5 : 25 + ((age - 2) * 4);
      return { primary: { label: "Human years equivalent", value: formatNumber(humanAge, 1) } };
    }
    case "overtimePay": {
      const overtimePay = num(values.hourlyRate) * num(values.overtimeHours) * num(values.multiplier);
      return { primary: { label: "Overtime pay", value: currency(overtimePay, locale) } };
    }
    case "hourlyToSalary": {
      const annual = num(values.hourlyRate) * num(values.hoursPerWeek) * num(values.weeksPerYear);
      return { primary: { label: "Estimated annual salary", value: currency(annual, locale) } };
    }
    case "salaryToHourly": {
      const hourly = num(values.annualSalary) / Math.max(num(values.hoursPerWeek) * num(values.weeksPerYear), 1);
      return { primary: { label: "Estimated hourly rate", value: currency(hourly, locale) } };
    }
    case "travelBudget": {
      const total = num(values.days) * num(values.dailyBudget) + num(values.transportation) + num(values.lodging);
      return { primary: { label: "Estimated trip budget", value: currency(total, locale) } };
    }
    default:
      return { primary: { label: "Result", value: "Not available" } };
  }
}


export function computeCalculator(definition: CalculatorDefinition, values: Values, locale: "en" | "ko" = "en"): CalculatorResult {
  return finalizeResult(computeCalculatorRaw(definition, values, locale), locale);
}
