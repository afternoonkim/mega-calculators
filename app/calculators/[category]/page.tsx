import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { calculatorCategories, calculatorsByCategory } from "@/lib/calculators/data";
import AdSlot from "@/components/ads/AdSlot";

export function generateStaticParams() {
  return calculatorCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const match = calculatorsByCategory.find((item) => item.slug === category);
  if (!match) return {};
  return {
    title: `${match.name} - Free Online Tools`,
    description: `Browse free ${match.name.toLowerCase()} with calculators, formula pages, use-case hubs, example scenarios, FAQs, and related tools on Mega Calculators.`,
    alternates: { canonical: `/calculators/${match.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const match = calculatorsByCategory.find((item) => item.slug === category);
  if (!match) notFound();
  const categoryData = match!;

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: categoryData.name,
    description: `Collection page for ${categoryData.name.toLowerCase()} on Mega Calculators.`,
    url: `https://mega-calculators.com/calculators/${categoryData.slug}`,
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />

      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Category hub</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{categoryData.name}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
          Explore {categoryData.items.length} free online tools in the {categoryData.name.toLowerCase()} section.
          Each calculator now sits inside a larger SEO cluster with a live calculator page, formula explanation, step-by-step guide, use-case content, example scenarios, FAQ content, and related internal links.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Why this category can rank for more searches</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Category hubs are more useful when they do more than list links. This page now acts as a directory for calculators, but also as an entry point into example pages, formula pages, and how-to content that target long-tail search queries across the same topic cluster.
        </p>
      </section>

      <AdSlot slotKey="categoryMid" label="Category page ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categoryData.items.map((item) => (
          <Link key={item.slug} href={`/calculators/${item.category}/${item.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50">
            <div className="text-lg font-bold text-slate-950">{item.name}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Why use this category page</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Category hubs make it easier to compare similar tools, discover related use cases, and move between beginner-friendly calculators without starting a new search.
            They also help organize the site around clear topics, which improves navigation for both users and search engines.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">What you will find here</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Quick calculators for common questions in {categoryData.name.toLowerCase()}.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Plain-English explanations, formulas, and examples to support understanding.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Internal links to related calculators so you can compare multiple scenarios in one place.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
