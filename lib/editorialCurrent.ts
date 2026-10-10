import {
  getBlogPost as getBaseBlogPost,
  getBlogPosts as getBaseBlogPosts,
  type EditorialEntry,
} from "@/lib/editorial";
import type { Locale } from "@/lib/i18n";

type AnnualUpdate = {
  replacements: Array<[string, string]>;
  reviewedAt?: string;
};

const REVIEWED_AT = "2026-10-10";

const annualUpdates: Partial<Record<Locale, Record<string, AnnualUpdate>>> = {
  ko: {
    "year-end-tax-settlement-2026": {
      reviewedAt: REVIEWED_AT,
      replacements: [
        [
          "총급여 7천만 원 이하 무주택 세대주(또는 세대원)면 연 750만 원 한도 안에서 월세의 17%(총급여 5,500만 원 이하)/15%를 세액에서 직접 빼줍니다.",
          "총급여 8천만 원 이하 무주택 세대주(또는 일정 요건의 세대원)라면 연 1,000만 원 한도 안에서 월세액의 17%(총급여 5,500만 원 이하) 또는 15%(총급여 5,500만 원 초과~8천만 원 이하)를 세액에서 직접 공제받을 수 있습니다.",
        ],
      ],
    },
    "savings-vs-etf-5-years-korea": {
      reviewedAt: REVIEWED_AT,
      replacements: [
        [
          "원금 보장 + 예금자보호 5천만 원",
          "원금 보장 + 금융회사별 1인당 원금과 이자를 합해 최대 1억 원까지 예금자보호",
        ],
        [
          "한국 상장 국내 주식형 ETF는 매매차익 비과세, 분배금만 15.4% 과세입니다. 해외 ETF(예: TIGER 미국S&P500)는 매매차익 22% 양도세 + 분배금 15.4% 과세이지만, ISA·연금저축 계좌 안에서는 세제혜택을 더 받을 수 있어요.",
          "국내 상장 국내주식형 ETF는 일반적으로 매매차익이 비과세이고 분배금에는 배당소득세가 적용됩니다. 반면 TIGER 미국S&P500처럼 국내에 상장된 해외지수 ETF는 매매차익과 과표기준가격 상승분 중 작은 금액을 기준으로 15.4% 배당소득세 방식의 보유기간 과세가 적용될 수 있어요. 미국 증시에 직접 상장된 ETF를 매매한 경우에는 국외주식 양도소득 체계가 적용되어 연간 기본공제 250만 원 후 과세되므로 두 유형을 구분해서 보셔야 합니다. ISA·연금저축·IRP는 계좌별 별도 세제 규칙을 확인해주세요.",
        ],
      ],
    },
    "pension-savings-vs-irp-korea": {
      reviewedAt: REVIEWED_AT,
      replacements: [],
    },
  },
  en: {
    "standard-deduction-vs-itemize": {
      reviewedAt: REVIEWED_AT,
      replacements: [
        [
          "For tax year 2026, the IRS standard deduction is $15,000 for single filers and $30,000 for married filing jointly (per current IRS Rev. Proc. inflation adjustments).",
          "For tax year 2026, the IRS standard deduction is $16,100 for single filers, $32,200 for married couples filing jointly, and $24,150 for heads of household, based on the IRS inflation adjustments in effect for 2026.",
        ],
        [
          "The big itemizable categories are: state and local taxes (capped at $10,000 by the SALT cap from TCJA), mortgage interest on up to $750,000 of debt, qualified charitable contributions (up to 60% of AGI), and unreimbursed medical expenses above 7.5% of AGI.",
          "The major itemized categories include deductible state and local taxes, qualifying mortgage interest, charitable contributions, and unreimbursed medical expenses above the applicable AGI threshold. For 2026, the SALT deduction cap is generally $40,400 ($20,200 for married filing separately), with a phase-down beginning above specified high-income thresholds and a statutory floor.",
        ],
        [
          "The SALT cap is the killer for high-tax-state filers. If you're in California, New York, or New Jersey paying $20,000+ in state and local taxes, you can still only deduct $10,000. That alone has pushed millions of filers from itemizing to standard since 2018.",
          "The higher 2026 SALT cap can make itemizing more relevant again for some taxpayers in high-tax states. The allowed amount can phase down for higher-income filers, so use the IRS rules for your filing status and MAGI instead of assuming a flat $10,000 ceiling.",
        ],
        [
          "Run a quick mental test: do your mortgage interest + $10,000 SALT + charitable giving exceed your filing status's standard deduction? For a married couple, that means more than $30,000 of qualifying deductions.",
          "Run a quick first-pass test: do your eligible Schedule A deductions exceed your filing status's 2026 standard deduction? For married filing jointly the comparison point is $32,200; for single filers it is $16,100; and for heads of household it is $24,150.",
        ],
        [
          "Qualified Charitable Distributions let donors aged 70½+ give directly from a Traditional IRA to charity, up to $108,000 per year in 2025 (indexed annually).",
          "Qualified Charitable Distributions let eligible IRA owners age 70½+ transfer money directly to qualified charities. The 2026 annual exclusion limit is $111,000, indexed for inflation.",
        ],
        [
          "Yes — the IRS publishes inflation-adjusted figures each fall for the following year, and the 2026 numbers ($15,000 single / $30,000 MFJ) are based on the most recent Rev. Proc. release.",
          "Yes. For tax year 2026, the IRS standard deduction is $16,100 for single filers, $32,200 for married filing jointly, and $24,150 for heads of household. Always verify the filing-year figures on IRS.gov before filing.",
        ],
        [
          "Self-employed filers also get a 20% QBI deduction (through 2025) that's separate from both.",
          "Eligible self-employed filers may also qualify for the Section 199A qualified business income deduction, which current federal law made permanent; eligibility limits and calculation rules still apply separately from the standard-vs.-itemized deduction choice.",
        ],
      ],
    },
    "roth-vs-traditional-ira": {
      reviewedAt: REVIEWED_AT,
      replacements: [
        [
          "The 2026 IRA contribution limit is $7,000 ($8,000 if you're 50 or older), per the IRS inflation-adjusted Rev. Proc. Roth IRA direct contributions phase out for single filers between $150,000 and $165,000 MAGI, and for joint filers between $236,000 and $246,000.",
          "The 2026 IRA contribution limit is $7,500. The age-50-and-older catch-up contribution is $1,100, for a total of $8,600. Roth IRA direct contributions phase out for single and head-of-household filers between $153,000 and $168,000 MAGI, and for married couples filing jointly between $242,000 and $252,000.",
        ],
        ["Putting $7,000 into a Roth costs $7,000 of after-tax money.", "Putting $7,500 into a Roth costs $7,500 of after-tax money."],
        ["Putting $7,000 into a Traditional costs $7,000 minus your marginal tax rate today", "Putting $7,500 into a deductible Traditional IRA effectively costs $7,500 minus the current-year tax benefit, subject to deduction eligibility"],
        [
          "Yes, but the combined contribution can't exceed the annual limit ($7,000 in 2026, or $8,000 if 50+). You can split however you want — for example, $4,000 to Roth and $3,000 to Traditional.",
          "Yes, but your combined Traditional and Roth IRA contributions cannot exceed the 2026 annual limit of $7,500, or $8,600 if you are age 50 or older. You can split that limit between the two account types as long as you also meet the applicable eligibility rules.",
        ],
      ],
    },
    "401k-employer-match-strategy": {
      reviewedAt: REVIEWED_AT,
      replacements: [
        [
          "The 2026 employee contribution limit is $24,000, per IRS inflation adjustments (catch-up contribution adds $7,500 if you're 50+, or $11,250 if you're 60–63 under SECURE 2.0). Employer match doesn't count against this limit.",
          "The 2026 employee elective-deferral limit for 401(k), 403(b), and most governmental 457 plans is $24,500. The general age-50+ catch-up limit is $8,000, while eligible participants ages 60–63 can use the higher $11,250 SECURE 2.0 catch-up. Employer matching contributions do not count against the $24,500 elective-deferral limit.",
        ],
        [
          "The combined limit (employee + employer) is $71,000 in 2026.",
          "The 2026 defined-contribution annual-additions limit is $72,000 before applicable catch-up contributions.",
        ],
        [
          "you can put up to ~$47,000/year (the gap between the $24,000 employee limit and the $71,000 combined limit, minus employer match) into a Roth account.",
          "the theoretical gap between the $24,500 elective-deferral limit and the $72,000 annual-additions limit is $47,500 before subtracting employer contributions and other amounts that count toward the plan limit.",
        ],
      ],
    },
  },
};

function replaceText(value: string, replacements: Array<[string, string]>): string {
  return replacements.reduce((current, [from, to]) => current.split(from).join(to), value);
}

function applyCurrentOfficialValues(post: EditorialEntry, locale: Locale): EditorialEntry {
  const update = annualUpdates[locale]?.[post.slug];
  if (!update) return post;

  const replace = (value: string) => replaceText(value, update.replacements);

  return {
    ...post,
    description: replace(post.description),
    intro: replace(post.intro),
    updatedAt: update.reviewedAt ?? post.updatedAt,
    reviewedAt: update.reviewedAt ?? post.reviewedAt,
    sections: post.sections.map((section) => ({
      heading: replace(section.heading),
      body: section.body.map(replace),
    })),
    faq: post.faq.map((item) => ({
      question: replace(item.question),
      answer: replace(item.answer),
    })),
  };
}

export function getBlogPosts(locale: Locale): EditorialEntry[] {
  return getBaseBlogPosts(locale).map((post) => applyCurrentOfficialValues(post, locale));
}

export function getBlogPost(locale: Locale, slug: string): EditorialEntry | undefined {
  const post = getBaseBlogPost(locale, slug);
  return post ? applyCurrentOfficialValues(post, locale) : undefined;
}
