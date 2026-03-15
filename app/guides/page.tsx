import type { Metadata } from "next";

const guides = [
  "How to choose calculator keywords with strong search demand",
  "Why explanation content matters for AdSense-friendly tool pages",
  "How category pages improve discovery and internal linking",
  "Best practices for calculator titles, metadata, and FAQ sections",
  "How to localize calculator pages for US users first",
];

export const metadata: Metadata = {
  title: "Guides",
  description: "Guides about calculator SEO, category planning, and content structure for a scalable tool platform.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Guides</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Guide pages for a scalable calculator site</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          These guide pages support the calculator library with informational content that can attract additional search traffic beyond pure calculator keywords.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <div key={guide} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{guide}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use this area for future long-form content that supports rankings, improves topical coverage, and creates stronger internal link pathways into calculator pages.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
