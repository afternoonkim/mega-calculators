import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: isKo ? "소개" : "About",
    description: isKo
      ? "Mega Calculators에서 어떤 계산기를 이용할 수 있는지, 누구에게 도움이 되는지, 결과를 어떻게 이해하면 좋은지 소개합니다."
      : "See what you can do with Mega Calculators, who it is built for, and how to get the most out of every calculator page.",
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
          <p>{isKo ? "복잡한 계산이 필요할 때 빠르게 답을 얻고 싶으신가요? 금융, 건강, 시간, 수학, 단위 변환, 생활 계산까지 자주 필요한 계산기를 한곳에 모아두어 몇 초 안에 원하는 계산을 시작할 수 있어요." : "Need a quick, reliable answer? You can find the right tool here in seconds. Calculators for finance, health, time, math, unit conversion, and everyday planning are all in one place, ready when you need them."}</p>
          <p>{isKo ? "단순히 숫자만 알려드리지 않습니다. 그 숫자가 어떤 의미인지 이해할 수 있도록 주요 계산기에 설명, 예시, 자주 묻는 질문과 관련 글을 함께 제공하고 있어요." : "You will not just see a number — you will understand what it means. On most pages you can read short explanations, walk through real examples, check FAQs, and follow related articles to put the answer to use."}</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "이런 분께 도움이 됩니다" : "Who will get the most out of it"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "학생이든, 직장인이든, 집에서 가계 계획을 세우는 분이든, 빠른 비교가 필요한 누구든 별도의 가입이나 설치 없이 바로 사용할 수 있어요." : "Whether you are a student, a working professional, a family planner, or just someone who wants a quick comparison, you can use these calculators right away — no sign-up, no install."}</p>
            <p>{isKo ? "대출 비교, 저축 계획, BMI 확인, 날짜 차이 계산, 퍼센트 계산처럼 일상적인 계산도 몇 초 안에 확인할 수 있습니다." : "Compare loan offers, plan savings, check your BMI, find the difference between two dates, work out percentages — answers you used to dig for, ready in seconds."}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "계산 결과를 더 잘 이해하려면" : "How to get the most out of each page"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "표준 공식을 바탕으로 입력 칸을 단순하게 구성했기 때문에, 값을 입력하면 결과가 바로 나옵니다. 결과 아래의 짧은 설명을 함께 보면 숫자의 의미도 더 쉽게 이해할 수 있어요." : "Forms are kept short and based on standard formulas, so you can fill in the values and get the result right away. Reading the short explanation under the result helps you interpret the number more confidently."}</p>
            <p>{isKo ? "결과는 학습이나 간단한 비교에 참고하는 용도입니다. 세금, 대출, 보험, 의료, 법률처럼 공식적인 판단이 필요한 주제라면, 공식 자료나 전문가와 함께 한 번 더 확인하시는 것이 안전합니다." : "Treat the output as planning and educational guidance. For lending, tax, insurance, medical, or legal decisions, double-check the result with an official source or a qualified professional before you act on it."}</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{isKo ? "사용하면서 불편한 점이 있다면" : "If something gets in your way"}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
          <p>{isKo ? "계산 결과가 이상하거나 설명이 헷갈리거나 사용하기 불편한 부분이 보이면 언제든지 알려주세요. 어떤 계산기에서 무엇이 불편했는지 남겨주시면 확인하고 개선하는 데 큰 도움이 됩니다." : "If a result looks wrong, an explanation is unclear, or something makes the calculator harder to use, let us know. Telling us which calculator you were using and what felt confusing helps us improve it."}</p>
          <p>{isKo ? "광고가 표시되는 경우에도 계산 입력과 결과 확인을 방해하지 않는 화면을 우선합니다." : "When ads are shown, the calculator inputs and results are kept as the priority so you can get your answer without unnecessary distraction."}</p>
        </div>
      </section>
    </div>
  );
}
