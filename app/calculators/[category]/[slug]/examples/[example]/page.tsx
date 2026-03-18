import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import { calculators, getCalculator } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import { getCalculatorExamples, getProgrammaticHubLinks } from "@/lib/calculators/programmatic";

export function generateStaticParams() {
  return calculators.flatMap((calculator) =>
    getCalculatorExamples(calculator).map((example) => ({ category: calculator.category, slug: calculator.slug, example: example.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string; example: string }> }): Promise<Metadata> {
  const { category, slug, example } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};
  const exampleData = getCalculatorExamples(calculator).find((item) => item.slug === example);
  if (!exampleData) return {};
  return {
    title: `${exampleData.title} | Mega Calculators`,
    description: exampleData.description,
    alternates: { canonical: `/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}` },
    openGraph: {
      title: `${exampleData.title} | Mega Calculators`,
      description: exampleData.description,
      url: `https://mega-calculators.com/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`,
      siteName: "Mega Calculators",
      type: "article",
    },
  };
}

export default async function CalculatorExamplePage({ params }: { params: Promise<{ category: string; slug: string; example: string }> }) {
  const { category, slug, example } = await params;
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();

  const exampleData = getCalculatorExamples(calculator).find((item) => item.slug === example);
  if (!exampleData) notFound();

  const values = { ...getDefaultValues(calculator), ...exampleData.overrides };
  const result = computeCalculator(calculator, values);
  const hubLinks = getProgrammaticHubLinks(calculator);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: exampleData.title,
    description: exampleData.description,
    mainEntityOfPage: `https://mega-calculators.com/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`,
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
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Example calculation</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{exampleData.title}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{exampleData.intro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Inputs used in this example</h2>
          <div className="mt-5 space-y-3">
            {calculator.inputs.map((input) => (
              <div key={input.name} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
                <span className="text-sm text-slate-600">{input.label}</span>
                <span className="text-sm font-semibold text-slate-900">{values[input.name] ?? "—"}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Estimated result</div>
          <div className="mt-5 rounded-3xl bg-white/5 p-6">
            <div className="text-sm text-slate-300">{result.primary.label}</div>
            <div className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{result.primary.value}</div>
          </div>
          {result.secondary?.length ? (
            <div className="mt-6 space-y-3">
              {result.secondary.map((item) => (
                <div key={`${item.label}-${item.value}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-300">{item.label}</span>
                  <span className="text-sm font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          ) : null}
          {result.note ? <p className="mt-5 text-sm leading-7 text-amber-200">{result.note}</p> : null}
        </article>
      </section>

      <AdSlot slotKey="contentMid" label="Example page ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Why this example matters</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own needs.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            This is especially useful for users who searched for a very specific long-tail question and want a quick answer before opening the full interactive tool.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Next step</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Use this example as a reference, then open the main calculator to test your own assumptions. You can also review the formula page and step-by-step guide if you want a deeper explanation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/calculators/${calculator.category}/${calculator.slug}`} className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Open live calculator
            </Link>
            <Link href={hubLinks.formula} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
              View formula
            </Link>
            <Link href={hubLinks.guide} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
              Read guide
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
