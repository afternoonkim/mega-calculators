import type { Metadata } from "next";
import AdSlot from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mega Calculators, our mission, editorial standards, calculator design approach, and how we serve English-speaking users.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">About Mega Calculators</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            Mega Calculators is a free online calculator and converter website built for US and global English-speaking users who want quick answers and clear explanations.
            Our goal is to make practical tools easy to use on both mobile and desktop without forcing visitors to open spreadsheets or search multiple websites.
          </p>
          <p>
            We organize the site around categories that people use in real life: finance, health, time, math, unit conversion, and everyday life.
            Each calculator page is designed to combine interactive inputs with formula explanations, usage guidance, examples, FAQs, and related tools.
          </p>
        </div>
      </section>

      <AdSlot slotKey="contentMid" label="Content ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">What we focus on</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Fast and easy-to-understand calculators for common personal and everyday questions.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Mobile-friendly pages that load quickly and work well across devices.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Plain-English explanations so users can understand how a result was produced.</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Editorial and calculator standards</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              We aim to keep each calculator consistent, readable, and practical. That means using standard formulas where possible, labeling inputs clearly, and avoiding unnecessary complexity for users who simply need a reliable estimate.
            </p>
            <p>
              Calculator outputs are intended for informational and planning use. Some topics, such as taxes, loans, insurance, healthcare, and legal matters, can depend on local rules or personal circumstances, so users should confirm important decisions with an official source or qualified professional.
            </p>
          </div>
        </article>
      </section>

      <AdSlot slotKey="contentBottom" label="Bottom content ad" minHeightClass="min-h-[140px]" />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How the site is supported</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Mega Calculators may be supported by advertising, analytics, and future business partnerships that help us maintain the site and continue expanding the calculator library.
          We aim to keep the experience readable and useful even when ads are present.
        </p>
      </section>
    </div>
  );
}
