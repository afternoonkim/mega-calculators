import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import { calculators, getCalculator } from "@/lib/calculators/data";
import { getCalculatorExamples, getGuideSeo, getProgrammaticHubLinks } from "@/lib/calculators/programmatic";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ category: calculator.category, slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};
  const seo = getGuideSeo(calculator);
  return {
    title: `${seo.title} | Mega Calculators`,
    description: seo.description,
    alternates: { canonical: `/calculators/${calculator.category}/${calculator.slug}/guide` },
  };
}

export default async function CalculatorGuidePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();
  const hubLinks = getProgrammaticHubLinks(calculator);
  const examples = getCalculatorExamples(calculator).slice(0, 3);

  return (
    <div className="space-y-8">
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
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Step by step guide</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">How to use the {calculator.name.toLowerCase()}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
          This guide explains how to use the {calculator.name.toLowerCase()} effectively, which inputs matter most, and how to interpret the result before making a real-world decision.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Step by step instructions</h2>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {calculator.howToUse.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</li>
            ))}
          </ol>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Practical interpretation tips</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Start with realistic numbers, not best-case assumptions. A conservative input often gives a more useful planning range.</p>
            <p>Change one variable at a time so you can clearly see which input is driving the output.</p>
            <p>Use this calculator as a planning tool first, then confirm the exact result with the institution or source that controls the real final number.</p>
          </div>
        </article>
      </section>

      <AdSlot slotKey="contentMid" label="Guide page ad" minHeightClass="min-h-[140px]" />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Continue exploring this calculator cluster</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Link href={hubLinks.formula} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
            <div className="text-sm font-semibold text-slate-900">{calculator.name} formula</div>
            <div className="mt-2 text-sm text-slate-600">Read the math explanation behind the result.</div>
          </Link>
          <Link href={hubLinks.useCases} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
            <div className="text-sm font-semibold text-slate-900">{calculator.name} use cases</div>
            <div className="mt-2 text-sm text-slate-600">See where this calculator is useful in real scenarios.</div>
          </Link>
          {examples.map((example) => (
            <Link key={example.slug} href={`/calculators/${calculator.category}/${calculator.slug}/examples/${example.slug}`} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
              <div className="text-sm font-semibold text-slate-900">{example.title}</div>
              <div className="mt-2 text-sm text-slate-600">Open example page</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
