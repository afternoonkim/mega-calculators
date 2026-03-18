import type { Metadata } from "next";

const guides = [
  "How to use a mortgage calculator before house hunting",
  "How to estimate calorie needs and compare fitness goals",
  "How to use date and hours calculators for work schedules",
  "How to compare unit conversions without manual math",
  "How to read common results like percentages, rates, and totals",
];

export const metadata: Metadata = {
  title: "Guides",
  description: "Simple guides that help you use calculators with more confidence.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Guides</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Simple guides for common calculator questions</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          These guides explain how to use popular calculators, what the results mean, and when a quick estimate is enough versus when you should confirm the numbers elsewhere.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <div key={guide} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{guide}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use this space for straightforward help content that makes the calculators easier to understand and easier to apply in everyday situations.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
