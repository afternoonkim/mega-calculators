import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: isKo ? "문의" : "Contact",
    description: isKo
      ? "계산기 오류, 콘텐츠 수정, 개인정보 관련 문의, 제휴 문의를 위한 Mega Calculators 연락 페이지입니다."
      : "Contact Mega Calculators for calculator issues, corrections, privacy questions, or business inquiries.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", ko: "/ko/contact" },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "문의하기" : "Contact Mega Calculators"}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{isKo ? "계산기 오류 제보, 콘텐츠 수정 요청, 개인정보 관련 문의, 제휴 또는 비즈니스 문의를 보낼 수 있습니다." : "Use this page to report calculator issues, request corrections, ask privacy questions, or contact us about partnerships and media inquiries."}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "일반 문의" : "General support"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>{isKo ? "계산기 결과가 이상하거나 링크가 깨졌거나, 모바일 또는 데스크톱 화면에서 문제가 있다면 계산기 이름과 함께 알려주세요." : "Contact us if a calculator is not working correctly, if a page has incorrect content, or if you notice a broken link or formatting issue on mobile or desktop."}</p>
            <p>{isKo ? "입력한 값, 기대한 결과, 사용한 기기나 브라우저를 함께 보내주시면 더 빠르게 확인할 수 있습니다." : "For faster help, include the calculator name, the values you entered, the result you expected, and the device or browser you used."}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{isKo ? "광고 및 제휴 문의" : "Business and media inquiries"}</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>Email: <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a></p>
            <p>{isKo ? "광고 집행, 파트너십, 콘텐츠 활용, 데이터 라이선스 관련 문의는 이 주소로 보내주세요." : "Use this address for advertising questions, partnership ideas, or content and data licensing discussions."}</p>
            <p>{isKo ? "문의량에 따라 답변까지 시간이 다를 수 있습니다." : "We aim to respond within a reasonable timeframe, but response times can vary depending on request volume."}</p>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{isKo ? "안내" : "Important note"}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{isKo ? "Mega Calculators는 법률, 세무, 금융, 의료 자문을 제공하지 않습니다. 규제나 전문 판단이 필요한 주제는 계산기 결과를 일반 참고용으로만 사용하고 반드시 공식 자료나 전문가와 함께 확인해야 합니다." : "Mega Calculators does not provide legal, tax, financial, or medical advice. If your message relates to a regulated or professional topic, calculator outputs should be treated as general information only and verified with an appropriate professional or official source."}</p>
      </section>
    </div>
  );
}
