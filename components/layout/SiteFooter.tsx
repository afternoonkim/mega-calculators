import Link from "next/link";
import { localizeCalculatorName } from "@/lib/calculators/localization";
import { withLocale, type Locale } from "@/lib/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = locale === "ko"
    ? {
        explore: "바로가기",
        popular: "인기 계산기",
        all: "전체 계산기",
        faq: "FAQ",
        about: "소개",
        contact: "문의",
        privacy: "개인정보처리방침",
        description: "Mega Calculators는 실생활에서 자주 찾는 계산을 빠르게 처리할 수 있도록 만든 무료 온라인 계산기 사이트입니다. 금융, 건강, 날짜, 퍼센트, 단위 변환 같은 주제를 간편하게 계산할 수 있습니다.",
        note: "결과는 일반적인 참고용입니다. 세금, 대출, 법률, 의료처럼 중요한 판단은 공식 기관이나 전문가와 함께 확인하세요.",
        copyright: "계산 결과는 교육 및 일반 참고용으로 제공됩니다.",
      }
    : {
        explore: "Explore",
        popular: "Popular calculators",
        all: "All calculators",
        faq: "FAQ",
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
        description: "Mega Calculators is a free online calculator and converter library built to answer practical questions clearly and quickly. Use it for money decisions, health estimates, date math, percentages, and everyday conversions.",
        note: "Results are intended for planning and education. When taxes, lending, legal matters, payroll, or medical decisions are involved, verify the numbers with an official source or qualified professional.",
        copyright: "Calculator outputs are provided for educational and general planning purposes only.",
      };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-lg font-bold text-slate-950">Mega Calculators</div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{t.description}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{t.note}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.explore}</div>
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-600">
                <Link href={withLocale(locale, "/calculators")}>{t.all}</Link>
                <Link href={withLocale(locale, "/faq")}>{t.faq}</Link>
                <Link href={withLocale(locale, "/about")}>{t.about}</Link>
                <Link href={withLocale(locale, "/contact")}>{t.contact}</Link>
                <Link href={withLocale(locale, "/privacy")}>{t.privacy}</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.popular}</div>
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-600">
                <Link href={withLocale(locale, "/calculators/finance/compound-interest-calculator")}>{localizeCalculatorName("Compound Interest Calculator", locale)}</Link>
                <Link href={withLocale(locale, "/calculators/finance/mortgage-calculator")}>{localizeCalculatorName("Mortgage Calculator", locale)}</Link>
                <Link href={withLocale(locale, "/calculators/health/bmi-calculator")}>{localizeCalculatorName("BMI Calculator", locale)}</Link>
                <Link href={withLocale(locale, "/calculators/time/age-calculator")}>{localizeCalculatorName("Age Calculator", locale)}</Link>
                <Link href={withLocale(locale, "/calculators/math/percentage-calculator")}>{localizeCalculatorName("Percentage Calculator", locale)}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} Mega Calculators. {t.copyright}
        </div>
      </div>
    </footer>
  );
}
