import type { Metadata } from "next";
import Link from "next/link";
import { getGuides } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  return {
    title: locale === "ko" ? "가이드" : "Guides",
    description: locale === "ko" ? "계산기 사용법을 단계별로 따라오시며 익히실 수 있도록 정리한 가이드 모음입니다." : "Step-by-step guides to help you use the calculators with more confidence.",
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
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{isKo ? "한 단계씩 따라오시면 더 쉽게 이해하실 수 있어요" : "Walk through it step by step"}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {isKo ? "자주 쓰시는 계산기의 사용법과 결과 해석 포인트를 단계별로 풀어드려요. 어디까지가 빠른 어림이면 충분한지, 어떤 경우엔 다른 곳에서 한 번 더 확인하시는 게 좋은지도 함께 알려드립니다." : "Each guide walks you through a popular calculator step by step, shows you what the result means, and tells you when a quick estimate is enough versus when it's worth double-checking elsewhere."}
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Listing cards always show the same label so the grid stays
                visually consistent. Seasonal/dated information is surfaced
                on the guide detail header instead, where it actually
                matters for the reader. */}
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              {isKo ? "가이드" : "Guide"}
            </div>
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
