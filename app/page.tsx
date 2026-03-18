import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { calculatorCategories, calculators } from "@/lib/calculators/data";

export const metadata: Metadata = {
  title: "Free Online Calculators and Converters",
  description:
    "Mega Calculators offers free online calculators and converters for finance, health, time, math, unit conversion, and everyday life.",
  alternates: { canonical: "/" },
};

const featuredCalculators = [
  { href: "/calculators/finance/compound-interest-calculator", name: "Compound Interest Calculator", tag: "Investing" },
  { href: "/calculators/finance/mortgage-calculator", name: "Mortgage Calculator", tag: "Home" },
  { href: "/calculators/health/bmi-calculator", name: "BMI Calculator", tag: "Health" },
  { href: "/calculators/life/concrete-calculator", name: "Concrete Calculator", tag: "Projects" },
  { href: "/calculators/time/age-calculator", name: "Age Calculator", tag: "Time" },
  { href: "/calculators/math/kinetic-energy-calculator", name: "Kinetic Energy Calculator", tag: "Science" },
  { href: "/calculators/unit-converters/base-converter", name: "Base Converter", tag: "Conversion" },
  { href: "/calculators/unit-converters/cups-to-tablespoons-converter", name: "Cups to Tablespoons Converter", tag: "Kitchen" },
];

const highlights = [
  {
    title: "Fast answers",
    description: "Open a calculator, enter your numbers, and get a clear result without digging through cluttered screens.",
  },
  {
    title: "Useful explanations",
    description: "Each tool includes a short explanation, simple usage steps, and an example so the result is easier to understand.",
  },
  {
    title: "Everyday coverage",
    description: "Use Mega Calculators for money, health, dates, home projects, cooking, schoolwork, and common conversion tasks.",
  },
];

const categoryCards = calculatorCategories.map((category) => ({
  ...category,
  items: calculators.filter((item) => item.category === category.slug),
}));

export default function HomePage() {
  const totalCalculators = calculators.length;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mega Calculators",
    url: "https://mega-calculators.com",
  };

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-sm md:px-10 md:py-16">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Free online tools
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Free calculators for money, health, dates, conversions, and daily tasks
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            Mega Calculators helps you solve common questions faster with clean, easy-to-use online calculators. Browse tools for loans,
            mortgages, BMI, age, concrete, tile, cooking conversions, statistics, and much more.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/calculators" className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
              Browse all calculators
            </Link>
            <Link href="/faq" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Read site FAQ
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <StatCard label="Total calculators" value={`${totalCalculators}`} />
          <StatCard label="Main categories" value={`${categoryCards.length}`} />
          <StatCard label="Popular uses" value="Finance, health, projects" />
        </div>
      </section>

      <AdPlaceholder label="Homepage banner ad" />

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Popular tools</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Start with the calculators people use most</h2>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-blue-700">
            View all calculators →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCalculators.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{item.tag}</div>
              <div className="mt-3 text-lg font-bold text-slate-950">{item.name}</div>
              <div className="mt-2 text-sm text-slate-600">Open calculator →</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Categories</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Explore calculators by category</h2>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-blue-700">
            View all categories →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((category) => (
            <Link
              key={category.slug}
              href={`/calculators/${category.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{category.items.length} tools</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{category.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Find calculators in {category.name.toLowerCase()} for quick answers, simple comparisons, and everyday planning.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why people use Mega Calculators</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">A calculator site built to be practical</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Some calculator sites feel crowded or confusing. Mega Calculators keeps things simple with clear forms, readable results,
            and short explanations that help you use the answer right away.
          </p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <InfoCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-5 backdrop-blur">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-2 text-3xl font-black text-white">{value}</div>
    </div>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
