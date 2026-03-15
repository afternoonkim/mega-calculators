import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-lg font-bold text-slate-950">Mega Calculators</div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              Mega Calculators is a free online calculator and converter library built for US and global English-speaking users.
              Every tool page is designed to be fast, mobile-friendly, and easy to understand.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              We focus on practical tools for finance, health, time, math, unit conversion, and everyday life.
              Our goal is to provide clear formulas, realistic examples, step-by-step guides, and simple explanations alongside each calculator.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</div>
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/calculators">All calculators</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Popular calculators</div>
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/calculators/finance/compound-interest-calculator">Compound Interest Calculator</Link>
                <Link href="/calculators/finance/mortgage-calculator">Mortgage Calculator</Link>
                <Link href="/calculators/health/bmi-calculator">BMI Calculator</Link>
                <Link href="/calculators/time/age-calculator">Age Calculator</Link>
                <Link href="/calculators/math/percentage-calculator">Percentage Calculator</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} Mega Calculators. Calculator outputs are provided for educational and general planning purposes only.
        </div>
      </div>
    </footer>
  );
}
