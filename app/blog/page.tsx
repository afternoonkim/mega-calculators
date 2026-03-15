import type { Metadata } from "next";

const posts = [
  {
    title: "How calculator pages rank for long-tail search",
    description: "A practical look at why formulas, examples, FAQs, and related links help calculator pages capture intent-rich search traffic.",
  },
  {
    title: "What makes a high-performing calculator landing page",
    description: "Fast inputs, instant results, clear copy, and strong internal linking usually outperform flashy but thin tool pages.",
  },
  {
    title: "How to scale from 100 calculators to 1,000",
    description: "A data-driven content system makes it easier to expand your tool library without breaking information architecture.",
  },
];

export const metadata: Metadata = {
  title: "Blog",
  description: "Read blog content about calculator SEO, tool UX, and scalable content architecture.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Blog</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Calculator SEO, tool UX, and content growth</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          This section can support the calculator library with informational content that targets broader search intent and strengthens internal linking.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
