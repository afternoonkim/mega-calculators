import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  return {
    title: isKo ? "이용약관" : "Terms of Use",
    description: isKo
      ? "Mega Calculators 이용약관과 책임 범위, 허용된 사용 범위를 확인할 수 있습니다."
      : "Read the Mega Calculators terms of use, including acceptable use and responsibility disclaimers.",
    alternates: { canonical: `/${locale}/terms`, languages: { en: "/en/terms", ko: "/ko/terms" } },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "이용약관" : "Terms of Use"}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-500">{isKo ? "최종 업데이트" : "Last updated"}: April 2, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. {isKo ? "일반 이용" : "General use"}</h2>
          <p className="mt-3">{isKo ? "Mega Calculators는 일반 정보, 교육, 계획 수립을 위한 사이트입니다. 사이트를 이용하면 합법적이고 책임 있는 방식으로 사용하는 데 동의한 것으로 봅니다." : "Mega Calculators is provided for general informational, educational, and planning purposes. By using the site, you agree to use it lawfully and responsibly."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. {isKo ? "전문 자문 아님" : "No professional advice"}</h2>
          <p className="mt-3">{isKo ? "계산기 결과와 텍스트 콘텐츠는 법률, 세금, 금융, 회계, 대출, 보험, 의료 자문이 아닙니다. 중요한 결정은 공식 자료나 전문가 확인이 필요합니다." : "Calculator outputs and written content do not constitute legal, tax, financial, accounting, lending, insurance, or medical advice. Important decisions should be verified with official sources or qualified professionals."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. {isKo ? "정확성과 서비스 제공" : "Accuracy and availability"}</h2>
          <p className="mt-3">{isKo ? "유용하고 읽기 쉬운 도구를 제공하기 위해 노력하지만, 모든 페이지가 오류 없이 완전하다고 보장하지는 않습니다. 사이트 기능은 언제든지 변경, 업데이트, 중단될 수 있습니다." : "We aim to provide useful and readable tools, but we do not guarantee that every page is error-free, complete, or suitable for every purpose. Site features may change, be updated, or become unavailable at any time."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. {isKo ? "허용된 사용" : "Acceptable use"}</h2>
          <p className="mt-3">{isKo ? "사이트를 오용하거나, 정상 작동을 방해하거나, 무단 접근을 시도하거나, 관련 법을 위반하는 방식으로 콘텐츠를 사용해서는 안 됩니다." : "You agree not to misuse the site, interfere with its normal operation, attempt unauthorized access, or use the content in a way that violates applicable law."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. {isKo ? "문의" : "Contact"}</h2>
          <p className="mt-3">{isKo ? "이용약관 관련 문의는" : "For questions about these terms, contact"} <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
