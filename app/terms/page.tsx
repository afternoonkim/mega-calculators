import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms of use for Mega Calculators, including acceptable use, content limitations, and responsibility disclaimers.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Terms of Use</h1>
      <p className="mt-4 text-sm leading-7 text-slate-500">Last updated: April 2, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. General use</h2>
          <p className="mt-3">Mega Calculators is provided for general informational, educational, and planning purposes. By using the site, you agree to use it lawfully and responsibly.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. No professional advice</h2>
          <p className="mt-3">Calculator outputs and written content do not constitute legal, tax, financial, accounting, lending, insurance, or medical advice. Important decisions should be verified with official sources or qualified professionals.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. Accuracy and availability</h2>
          <p className="mt-3">We aim to provide useful and readable tools, but we do not guarantee that every page is error-free, complete, or suitable for every purpose. Site features may change, be updated, or become unavailable at any time.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Acceptable use</h2>
          <p className="mt-3">You agree not to misuse the site, interfere with its normal operation, attempt unauthorized access, or use the content in a way that violates applicable law.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. Contact</h2>
          <p className="mt-3">For questions about these terms, contact <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
