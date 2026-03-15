import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import { calculators, getCalculator } from "@/lib/calculators/data";
import { getCalculatorExamples, getFormulaSeo, getProgrammaticHubLinks } from "@/lib/calculators/programmatic";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ category: calculator.category, slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};
  const seo = getFormulaSeo(calculator);
  return {
    title: `${seo.title} | Mega Calculators`,
    description: seo.description,
    alternates: { canonical: `/calculators/${calculator.category}/${calculator.slug}/formula` },
    openGraph: {
      title: `${seo.title} | Mega Calculators`,
      description: seo.description,
      url: `https://mega-calculators.com/calculators/${calculator.category}/${calculator.slug}/formula`,
      siteName: "Mega Calculators",
      type: "article",
    },
  };
}

export default async function CalculatorFormulaPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();

  const hubLinks = getProgrammaticHubLinks(calculator);
  const examples = getCalculatorExamples(calculator).slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${calculator.name} Formula`,
    description: calculator.formulaText,
    mainEntityOfPage: `https://mega-calculators.com/calculators/${calculator.category}/${calculator.slug}/formula`,
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/calculators">Calculators</Link>
        <span className="mx-2">/</span>
        <Link href={`/calculators/${calculator.category}`}>{calculator.categoryName}</Link>
        <span className="mx-2">/</span>
        <Link href={`/calculators/${calculator.category}/${calculator.slug}`}>{calculator.name}</Link>
      </nav>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Formula guide</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{calculator.name} formula</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{calculator.formulaText}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">How to read the formula</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              The formula section explains the math logic behind the calculator result. On Mega Calculators, the formula is written in plain English so users can understand the relationship between the main inputs, not just copy numbers into a form.
            </p>
            <p>
              For {calculator.name.toLowerCase()}, the most important step is understanding how each input changes the output. Small changes in time, rate, quantity, or conversion values can materially change the final result.
            </p>
            <p>
              This page is meant to help with learning and comparison. For professional or regulated calculations, always confirm the result with an official document, lender, employer, school, or medical professional when relevant.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
          <h2 className="text-2xl font-bold">Open the working calculator</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
            Read the formula here, then move to the live calculator to test your own inputs and compare multiple scenarios in seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/calculators/${calculator.category}/${calculator.slug}`} className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
              Open {calculator.name}
            </Link>
            <Link href={hubLinks.guide} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Read how-to guide
            </Link>
          </div>
        </article>
      </section>

      <AdSlot slotKey="contentMid" label="Formula page ad" minHeightClass="min-h-[140px]" />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Example pages related to this formula</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {examples.map((example) => (
            <Link key={example.slug} href={`/calculators/${calculator.category}/${calculator.slug}/examples/${example.slug}`} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
              <div className="text-sm font-semibold text-slate-900">{example.title}</div>
              <div className="mt-2 text-sm text-slate-600">{example.description}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
