import type { Metadata } from "next";

const posts = [
  {
    title: "How to compare loan and mortgage estimates",
    description: "A quick guide to reading monthly payment, total repayment, and interest results before you borrow.",
  },
  {
    title: "How to choose the right health calculator",
    description: "When to use BMI, calorie, heart rate, and body-composition tools, and when to ask a professional instead.",
  },
  {
    title: "Simple ways to use percentage and time calculators",
    description: "Practical examples for discounts, date math, work hours, and everyday calculations.",
  },
];

export const metadata: Metadata = {
  title: "Blog",
  description: "Helpful articles about using calculators for money, health, time, and everyday decisions.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Blog</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Helpful articles for everyday calculations</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Browse short articles that explain how to use common calculators, compare real-world scenarios, and understand the numbers before you make a decision.
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
