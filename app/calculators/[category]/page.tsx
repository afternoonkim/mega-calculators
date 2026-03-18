import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { calculatorCategories, calculatorsByCategory } from "@/lib/calculators/data";

export function generateStaticParams() {
  return calculatorCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const match = calculatorsByCategory.find((item) => item.slug === category);
  if (!match) return {};
  return {
    title: `${match.name} - Free Online Tools`,
    description: `Browse ${match.items.length} free ${match.name.toLowerCase()} on Mega Calculators.`,
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
    description: `${categoryData.name} on Mega Calculators.`,
    url: `https://mega-calculators.com/calculators/${categoryData.slug}`,
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />

      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Category</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{categoryData.name}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
          Explore {categoryData.items.length} free tools in the {categoryData.name.toLowerCase()} section. Each page includes a working calculator,
          a short explanation, usage steps, and related tools you may also find helpful.
        </p>
      </section>

      <AdPlaceholder label="Category ad" />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categoryData.items.map((item) => (
          <Link key={`${item.category}-${item.slug}`} href={`/calculators/${item.category}/${item.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50">
            <div className="text-lg font-bold text-slate-950">{item.name}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">What you can do here</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Compare related tools without opening multiple tabs.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Find quick answers for common questions in {categoryData.name.toLowerCase()}.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Move between similar calculators and check examples when needed.</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Popular picks in this category</h2>
          <div className="mt-4 space-y-3">
            {categoryData.items.slice(0, 4).map((item) => (
              <Link key={`featured-${item.category}-${item.slug}`} href={`/calculators/${item.category}/${item.slug}`} className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                {item.name}
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
