import type { Metadata } from "next";
import Link from "next/link";
import { getGuides } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  return {
    title: locale === "ko" ? "가이드" : "Guides",
    description: locale === "ko" ? "계산기 사용법을 단계별로 정리한 가이드 모음입니다." : "Simple guides that help you use calculators with more confidence.",
    alternates: {
      canonical: `/${locale}/guides`,
      languages: { en: "/en/guides", ko: "/ko/guides" },
    },
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  const guides = getGuides(locale);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{isKo ? "가이드" : "Guides"}</div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{isKo ? "계산기를 더 쉽게 이해하는 방법" : "Simple guides for common calculator questions"}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {isKo ? "인기 계산기 사용법과 결과 해석 포인트를 단계별로 정리한 가이드입니다." : "These guides explain how to use popular calculators, what the results mean, and when a quick estimate is enough versus when you should confirm the numbers elsewhere."}
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{guide.updatedAt}</div>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
            <div className="mt-5">
              <Link href={withLocale(locale, `/guides/${guide.slug}`)} className="text-sm font-semibold text-blue-700">
                {isKo ? "가이드 보기 →" : "Open guide →"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
