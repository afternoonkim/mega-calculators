import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what Mega Calculators is, who it is for, how we build calculator pages, and how to use the site responsibly.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">About Mega Calculators</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>Mega Calculators is a free calculator library built for people who want practical answers without digging through spreadsheets or scattered sources. The site focuses on everyday calculator tasks in finance, health, time, math, unit conversion, and daily planning.</p>
          <p>Our goal is simple: combine interactive tools with readable explanations so users can understand what a result means, not just generate a number. That is why key pages include guidance, examples, FAQs, and related reading alongside the calculator itself.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Who the site is for</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Mega Calculators is designed for general users, students, workers, families, and planners who need a fast estimate before making a decision or checking an official source.</p>
            <p>Some pages are especially useful for comparing scenarios, such as loan payments, savings growth, BMI trends, time differences, or percentage changes.</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">How we build pages</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>We aim to use standard formulas and straightforward assumptions where possible. We also try to explain what the result can and cannot tell you, especially on pages related to lending, health, taxes, or deadlines.</p>
            <p>Calculator results are intended for education and planning. When a decision depends on official rules, legal requirements, lender terms, tax treatment, or medical context, users should verify the result with the appropriate official source or qualified professional.</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Editorial approach and responsibility</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
          <p>We update site content as the calculator library grows and we add supporting articles and guides to improve context. We aim for clear labeling, readable structure, and practical examples that help visitors understand how to use a result more responsibly.</p>
          <p>The site may be supported by analytics and advertising in the future, but we aim to keep content readable and useful first. If you notice an error or unclear wording, please contact us so we can review it.</p>
        </div>
      </section>
    </div>
  );
}
