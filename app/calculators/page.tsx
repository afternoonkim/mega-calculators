import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { calculatorCategories, calculators } from "@/lib/calculators/data";

const categorySections = calculatorCategories.map((category) => ({
  ...category,
  items: calculators.filter((item) => item.category === category.slug),
}));

const total = calculators.length;

export const metadata: Metadata = {
  title: "All Calculators",
  description: `Browse ${total} free online calculators and converters across finance, business, health, fitness, math, statistics, unit conversion, time and date, construction, cooking, technology, science, education, and everyday life topics.`,
  alternates: { canonical: "/calculators" },
};

export default function AllCalculatorsPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">All calculators</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Browse all {total} free online calculators</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Explore calculators by category to quickly find finance, business, health, fitness, math, statistics, unit converters, time and date, construction, cooking, tech, science, education, and everyday life tools.
        </p>
      </section>

      <AdPlaceholder label="All calculators ad" />

      {categorySections.map((category) => (
        <section key={category.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">{category.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{category.items.length} calculators in this category.</p>
            </div>
            <Link href={`/calculators/${category.slug}`} className="text-sm font-semibold text-blue-700">Category page →</Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => (
              <Link
                key={`${item.category}-${item.slug}`}
                href={`/calculators/${item.category}/${item.slug}`}
                className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div className="text-base font-semibold text-slate-900">{item.name}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
