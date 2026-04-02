import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";

export async function generateStaticParams() {
  return ["en", "ko"].flatMap((locale) =>
    getBlogPosts(locale as "en" | "ko").map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: {
        en: `/en/blog/${post.slug}`,
        ko: `/ko/blog/${post.slug}`,
      },
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const isKo = locale === "ko";
  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href={withLocale(locale, "/blog")} className="font-semibold text-blue-700">
          {isKo ? "블로그" : "Blog"}
        </Link>
        <span className="mx-2">/</span>
        <span>{post.title}</span>
      </nav>

      <header className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{post.updatedAt}</div>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{post.intro}</p>
        <div className="mt-6">
          <Link
            href={withLocale(locale, post.relatedCalculatorPath)}
            className="inline-flex rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {post.relatedCalculatorLabel}
          </Link>
        </div>
      </header>

      <div className="space-y-6">
        {post.sections.map((section) => (
          <section key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm leading-8 text-slate-600 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">{isKo ? "자주 묻는 질문" : "Frequently asked questions"}</h2>
        <div className="mt-5 space-y-4">
          {post.faq.map((item) => (
            <div key={item.question} className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-bold text-slate-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
