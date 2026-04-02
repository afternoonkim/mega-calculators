import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: isKo ? "소개" : "About",
    description: isKo
      ? "Mega Calculators가 어떤 사이트인지, 누구를 위한 사이트인지, 계산기 페이지를 어떤 원칙으로 구성하는지 소개합니다."
      : "Learn what Mega Calculators is, who it is for, and how calculator pages are built.",
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ko: "/ko/about" },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "Mega Calculators 소개" : "About Mega Calculators"}</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>{isKo ? "Mega Calculators는 실생활에서 자주 찾는 계산을 빠르게 처리하고, 결과를 이해하기 쉽게 설명하기 위해 만든 무료 온라인 계산기 사이트입니다. 금융, 건강, 시간, 수학, 단위 변환, 생활 계산처럼 자주 쓰는 주제를 중심으로 구성하고 있습니다." : "Mega Calculators is a free online calculator library built for people who want practical answers quickly. The site focuses on common topics such as finance, health, time, math, unit conversion, and everyday planning."}</p>
          <p>{isKo ? "이 사이트의 목표는 숫자 하나만 보여주는 것이 아니라, 그 숫자를 어떻게 읽고 활용하면 좋은지까지 함께 안내하는 것입니다. 그래서 주요 계산기 페이지에는 설명, 예시, FAQ, 관련 콘텐츠를 함께 제공하고 있습니다." : "Our goal is not only to generate a number, but also to help users understand what that number means. That is why many calculator pages include explanations, examples, FAQs, and related content."}</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "누구를 위한 사이트인가" : "Who the site is for"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "학생, 직장인, 가정 사용자, 계획이 필요한 누구나 빠른 계산과 비교가 필요할 때 사용할 수 있도록 설계했습니다." : "The site is designed for students, workers, families, and general users who need quick estimates and practical comparisons."}</p>
            <p>{isKo ? "대출 비교, 저축 계획, BMI 확인, 날짜 차이 계산, 퍼센트 계산처럼 일상적인 질문을 빠르게 정리하는 데 도움이 되도록 구성했습니다." : "It is especially useful for everyday questions such as loan comparisons, savings growth, BMI estimates, date differences, and percentage calculations."}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "페이지 구성 원칙" : "How we build pages"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "가능한 한 표준 공식과 이해하기 쉬운 입력 구조를 사용하고, 결과를 해석할 때 놓치기 쉬운 포인트도 함께 설명하려고 합니다." : "We aim to use standard formulas and a simple input structure whenever possible, while also explaining how to interpret the result more carefully."}</p>
            <p>{isKo ? "계산기 결과는 교육 및 일반 참고용입니다. 법률, 세금, 대출, 보험, 의료처럼 공식 기준이 필요한 주제는 반드시 공식 자료나 전문가 확인이 필요합니다." : "Calculator outputs are intended for educational and planning use. For lending, tax, legal, insurance, or medical decisions, users should verify the result with official sources or qualified professionals."}</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{isKo ? "운영과 콘텐츠 방향" : "Editorial approach and responsibility"}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
          <p>{isKo ? "계산기 수를 늘리는 것만이 아니라, 관련 글과 가이드를 통해 결과를 실제 판단에 연결할 수 있도록 계속 보강하고 있습니다. 오류나 애매한 표현을 발견하면 언제든지 문의해 주세요." : "As the calculator library grows, we continue to add articles and guides so users can connect calculator results to more practical decisions. If you notice an error or unclear explanation, please contact us."}</p>
          <p>{isKo ? "향후 광고나 분석 도구가 사용될 수 있지만, 사이트의 핵심은 언제나 읽기 쉬운 설명과 실용적인 계산 경험을 유지하는 것입니다." : "The site may be supported by analytics and advertising in the future, but the main priority remains a clear, practical, and readable user experience."}</p>
        </div>
      </section>
    </div>
  );
}
