import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  return {
    title: locale === "ko" ? "블로그" : "Blog",
    description:
      locale === "ko"
        ? "계산기를 더 잘 활용하시는 데 도움이 되는 팁과 실생활 사례를 모았습니다."
        : "Practical articles to help you make the most of every calculator — for money, health, time, and the everyday decisions in between.",
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: "/en/blog", ko: "/ko/blog" },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  const posts = getBlogPosts(locale);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "블로그" : "Blog"}</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">
          {isKo ? "계산기를 더 잘 쓰시도록 돕는 글들" : "Articles that help you decide with confidence"}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {isKo
            ? "실생활에서 자주 마주하시는 상황을 중심으로, 계산기 사용법과 비교 포인트, 숫자를 어떻게 해석하시면 좋을지 짧고 이해하기 쉽게 풀어드려요."
            : "Read short, practical articles that show you how to use common calculators, compare real-world scenarios, and read the numbers with more confidence before you decide."}
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Listing cards always show the same label so the grid stays
                visually consistent. Seasonal/dated information is surfaced
                on the article detail header instead, where it actually
                matters for the reader. */}
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              {isKo ? "읽을 거리" : "Article"}
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
            <div className="mt-5">
              <Link href={withLocale(locale, `/blog/${post.slug}`)} className="text-sm font-semibold text-blue-700">
                {isKo ? "자세히 보기 →" : "Read article →"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
