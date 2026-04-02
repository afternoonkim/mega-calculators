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
        ? "계산기 활용법과 실생활 계산 팁을 정리한 글 모음입니다."
        : "Helpful articles about using calculators for money, health, time, and everyday decisions.",
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
          {isKo ? "계산기를 더 잘 쓰기 위한 실용적인 글" : "Helpful articles for everyday calculations"}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {isKo
            ? "실생활에서 많이 찾는 계산기 사용법, 비교 포인트, 숫자 해석 방법을 짧고 이해하기 쉽게 정리했습니다."
            : "Browse practical articles that explain how to use common calculators, compare real-world scenarios, and understand the numbers before you decide."}
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{post.updatedAt}</div>
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
