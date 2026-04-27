import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: isKo ? "소개" : "About",
    description: isKo
      ? "Mega Calculators에서 어떤 도구를 쓸 수 있는지, 어떤 분께 도움이 되는지, 결과를 어떻게 활용하시면 좋은지 안내합니다."
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
          <p>{isKo ? "복잡한 계산이 필요할 때 빠르게 답을 얻고 싶으신가요? 금융, 건강, 시간, 수학, 단위 변환, 생활 계산까지 일상에서 자주 마주치는 도구를 한 곳에 모아 두어, 원하시는 계산기를 몇 초 만에 찾아 사용하실 수 있어요." : "Need a quick, reliable answer? You can find the right tool here in seconds. Calculators for finance, health, time, math, unit conversion, and everyday planning are all in one place, ready when you need them."}</p>
          <p>{isKo ? "단순히 숫자만 알려드리지 않습니다. 그 숫자가 어떤 의미인지, 어떻게 활용하시면 좋을지까지 함께 살펴보실 수 있도록 주요 페이지에 설명, 예시, 자주 묻는 질문, 관련 글을 함께 준비해 두었어요." : "You will not just see a number — you will understand what it means. On most pages you can read short explanations, walk through real examples, check FAQs, and follow related articles to put the answer to use."}</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "이런 분께 도움이 됩니다" : "Who will get the most out of it"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "학생이든, 직장인이든, 집에서 가계 계획을 세우는 분이든, 빠른 비교가 필요한 누구든 별도의 가입이나 설치 없이 바로 사용하실 수 있도록 만들었어요." : "Whether you are a student, a working professional, a family planner, or just someone who wants a quick comparison, you can use these calculators right away — no sign-up, no install."}</p>
            <p>{isKo ? "대출 비교, 저축 계획, BMI 확인, 날짜 차이 계산, 퍼센트 계산처럼 일상적인 질문도 몇 초 만에 정리하실 수 있습니다." : "Compare loan offers, plan savings, check your BMI, find the difference between two dates, work out percentages — answers you used to dig for, ready in seconds."}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "페이지를 이렇게 활용해보세요" : "How to get the most out of each page"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{isKo ? "표준 공식을 바탕으로 입력 칸을 단순하게 구성했기 때문에, 값만 채우시면 결과가 바로 나옵니다. 결과 아래의 짧은 해설까지 함께 읽으시면 의미를 더 정확하게 이해하실 수 있어요." : "Forms are kept short and based on standard formulas, so you can fill in the values and get the result right away. Reading the short explanation under the result helps you interpret the number more confidently."}</p>
            <p>{isKo ? "결과는 교육과 일반 참고용입니다. 세금, 대출, 보험, 의료, 법률처럼 공식적인 판단이 필요한 주제라면, 공식 자료나 전문가와 함께 한 번 더 확인하시는 것이 안전합니다." : "Treat the output as planning and educational guidance. For lending, tax, insurance, medical, or legal decisions, double-check the result with an official source or a qualified professional before you act on it."}</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{isKo ? "함께 만들어가요" : "Help shape what comes next"}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
          <p>{isKo ? "이미 있는 계산기 옆에 더 읽을 만한 글과 가이드를 꾸준히 더해, 화면에서 보신 결과가 자연스럽게 실제 결정으로 이어지도록 보강하고 있어요. 사용 중에 오류나 헷갈리는 표현이 보이면 언제든지 알려주세요. 의견을 받아 조금씩 더 나아지고 있습니다." : "More articles and guides are added regularly so the result on your screen leads naturally into a real decision. If you spot an error, an unclear sentence, or something that could work better for you, let us know any time — your feedback shapes what gets improved next."}</p>
          <p>{isKo ? "앞으로 광고나 분석 도구가 함께 쓰일 수 있지만, 페이지를 여셨을 때 가장 먼저 보이는 것은 언제나 깨끗한 화면과 명확한 결과입니다." : "Analytics and advertising may support the site, but the first thing you will see on any page is always a clean layout and a clear answer."}</p>
        </div>
      </section>
    </div>
  );
}
