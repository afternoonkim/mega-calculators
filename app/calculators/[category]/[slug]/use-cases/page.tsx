import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import { calculators, getCalculator } from "@/lib/calculators/data";
import { getProgrammaticHubLinks, getUseCases } from "@/lib/calculators/programmatic";

export function generateStaticParams() {
  return calculators.map((calculator) => ({ category: calculator.category, slug: calculator.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};
  return {
    title: `${calculator.name} Use Cases | Mega Calculators`,
    description: `See practical use cases for the ${calculator.name.toLowerCase()} and learn when this free online tool is most helpful.`,
    alternates: { canonical: `/calculators/${calculator.category}/${calculator.slug}/use-cases` },
  };
}

export default async function CalculatorUseCasesPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();
  const hubLinks = getProgrammaticHubLinks(calculator);
  const useCases = getUseCases(calculator);

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
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Practical scenarios</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">When to use the {calculator.name.toLowerCase()}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
          This page highlights common situations where the {calculator.name.toLowerCase()} can save time, reduce mistakes, and help you make faster decisions.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Common use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-700 md:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <AdSlot slotKey="contentBottom" label="Use cases page ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-4 md:grid-cols-3">
        <Link href={`/calculators/${calculator.category}/${calculator.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
          <div className="text-sm font-semibold text-slate-900">Open the calculator</div>
          <div className="mt-2 text-sm text-slate-600">Run your own numbers instantly.</div>
        </Link>
        <Link href={hubLinks.formula} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
          <div className="text-sm font-semibold text-slate-900">Read the formula</div>
          <div className="mt-2 text-sm text-slate-600">Understand the math behind the result.</div>
        </Link>
        <Link href={hubLinks.guide} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
          <div className="text-sm font-semibold text-slate-900">Read the guide</div>
          <div className="mt-2 text-sm text-slate-600">See the step-by-step instructions.</div>
        </Link>
      </section>
    </div>
  );
}
