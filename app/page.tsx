import type { Metadata } from "next";
import Link from "next/link";
import { calculatorsByCategory } from "@/lib/calculators/data";
import AdSlot from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "Free Online Calculators and Converters",
  description:
    "Mega Calculators offers free online calculators and converters for finance, health, time, math, unit conversion, and everyday life. Browse calculator pages, formula pages, how-to guides, use-case hubs, and example scenarios built for SEO and mobile users.",
  alternates: { canonical: "/" },
};

const featuredCalculators = [
  { href: "/calculators/finance/compound-interest-calculator", name: "Compound Interest Calculator", tag: "Investing" },
  { href: "/calculators/finance/mortgage-calculator", name: "Mortgage Calculator", tag: "Home buying" },
  { href: "/calculators/finance/loan-calculator", name: "Loan Calculator", tag: "Borrowing" },
  { href: "/calculators/health/bmi-calculator", name: "BMI Calculator", tag: "Health" },
  { href: "/calculators/time/age-calculator", name: "Age Calculator", tag: "Time" },
  { href: "/calculators/math/percentage-calculator", name: "Percentage Calculator", tag: "Math" },
  { href: "/calculators/life/tip-calculator", name: "Tip Calculator", tag: "Everyday life" },
  { href: "/calculators/life/gpa-calculator", name: "GPA Calculator", tag: "Education" },
];

const seoPoints = [
  {
    title: "Clear formulas and examples",
    description:
      "Each calculator page includes an explanation, usage steps, and practical examples so visitors can understand the result instead of seeing a number only.",
  },
  {
    title: "Built for mobile and desktop",
    description:
      "Mega Calculators is designed for fast loading, simple inputs, and clean navigation across phones, tablets, and desktop screens.",
  },
  {
    title: "Useful internal linking",
    description:
      "Related calculator links and category hubs help users discover more tools while improving crawlability and site structure.",
  },
];

export default function HomePage() {
  const totalCalculators = calculatorsByCategory.reduce((sum, category) => sum + category.items.length, 0);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mega Calculators",
    url: "https://mega-calculators.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mega-calculators.com/calculators",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-sm md:px-10 md:py-16">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Free online calculators and converters
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Free online calculators for finance, health, time, math, units, and everyday life
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            Mega Calculators helps you solve common problems faster with free online calculators built for US and global English-speaking users.
            Browse calculators for compound interest, loans, mortgages, BMI, age, percentages, tips, GPA, conversions, and dozens of other daily tasks.
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
          <StatCard label="Core calculators" value={`${totalCalculators}`} />
          <StatCard label="SEO support pages" value={`${totalCalculators * 9}+`} />
          <StatCard label="Primary audience" value="US + English" />
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">SEO content network</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Every calculator now connects to formula, guide, use-case, and example pages</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Instead of publishing only one page per calculator, Mega Calculators now creates a full search cluster around each tool. That means more long-tail landing pages, stronger internal linking, and better chances to rank for intent-rich searches such as examples, formulas, and how-to queries.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Popular tools</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Start with the calculators people use most</h2>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-blue-700">
            View all 100 calculators →
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

      <AdSlot slotKey="homeMid" label="Homepage ad" minHeightClass="min-h-[140px]" />

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
          {calculatorsByCategory.map((category) => (
            <Link
              key={category.slug}
              href={`/calculators/${category.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{category.items.length} tools</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">{category.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore free online tools in the {category.name.toLowerCase()} category with formulas, examples, FAQs, and related calculator links.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Why Mega Calculators</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">A calculator site designed for usefulness first</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Many calculator websites only show a basic form and a result. Mega Calculators is built differently.
            We pair each tool with plain-English explanations, short how-to sections, realistic examples, and FAQs so the page is useful to both searchers and returning visitors.
          </p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {seoPoints.map((item) => (
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
