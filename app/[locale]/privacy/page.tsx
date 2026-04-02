import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  return {
    title: isKo ? "개인정보처리방침" : "Privacy Policy",
    description: isKo
      ? "쿠키, 분석 도구, 광고, 문의 정보 처리에 관한 Mega Calculators 개인정보처리방침입니다."
      : "Read the Mega Calculators privacy policy covering cookies, analytics, advertising, contact information, and user rights.",
    alternates: { canonical: `/${locale}/privacy`, languages: { en: "/en/privacy", ko: "/ko/privacy" } },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "개인정보처리방침" : "Privacy Policy"}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-500">{isKo ? "최종 업데이트" : "Last updated"}: April 2, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600 md:text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. {isKo ? "개요" : "Overview"}</h2>
          <p className="mt-3">{isKo ? "Mega Calculators는 무료 온라인 계산기 및 정보 콘텐츠 사이트입니다. 이 문서는 사이트 이용 중 수집될 수 있는 정보, 활용 방식, 이용자의 선택권을 설명합니다." : "Mega Calculators is a free online calculator and content website. This policy explains what information may be collected when you use the site, how that information may be used, and what choices may be available to you."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. {isKo ? "수집될 수 있는 정보" : "Information we may collect"}</h2>
          <div className="mt-3 space-y-3">
            <p>{isKo ? "브라우저 종류, 기기 유형, 유입 페이지, 조회한 페이지, 일반적인 분석 데이터 등 제한적인 기술 정보가 수집될 수 있습니다." : "We may collect limited technical and usage information such as browser type, device type, referring pages, pages viewed, and general analytics data."}</p>
            <p>{isKo ? "문의 시 사용자가 직접 보낸 이름, 이메일, 메시지 내용이 함께 저장될 수 있습니다." : "We may also collect information you choose to send directly, such as your name, email address, and message contents when you contact us."}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. {isKo ? "쿠키와 분석 도구" : "Cookies and analytics"}</h2>
          <div className="mt-3 space-y-3">
            <p>{isKo ? "사이트 성능 파악, 사용자 경험 개선, 트래픽 측정, 서비스 유지 목적으로 쿠키와 분석 도구가 사용될 수 있습니다." : "We may use cookies, analytics tools, and similar technologies to understand site performance, improve user experience, measure traffic, and keep the website functioning properly."}</p>
            <p>{isKo ? "이 과정에서 방문 페이지, 대략적인 위치, 기기 정보, 상호작용 패턴 등이 수집될 수 있습니다." : "Analytics services may collect information such as pages visited, approximate location, device details, and interaction patterns."}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. {isKo ? "광고" : "Advertising"}</h2>
          <div className="mt-3 space-y-3">
            <p>{isKo ? "향후 Google AdSense 같은 광고 파트너를 통해 광고가 표시될 수 있습니다. 광고 제공자는 쿠키 등을 사용해 광고 제공 및 성과 측정을 할 수 있습니다." : "The site may display advertising, including ads served by Google AdSense or similar partners, in the future. Advertising providers may use cookies or similar technologies to deliver ads, measure performance, and personalize content where permitted."}</p>
            <p>{isKo ? "구글과 파트너사는 사용자의 방문 기록을 바탕으로 광고를 표시할 수 있으며, 자세한 내용은 구글의 광고 및 개인정보 자료에서 확인할 수 있습니다." : "Google and its partners may use cookies to serve ads based on visits to this site and other websites. Users can learn more about available controls through Google’s advertising and privacy resources."}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. {isKo ? "정보 활용 목적" : "How information may be used"}</h2>
          <p className="mt-3">{isKo ? "운영, 문의 대응, 계산기와 콘텐츠 개선, 성과 분석, 악용 방지, 광고 지원을 위해 정보가 활용될 수 있습니다." : "Information may be used to operate the website, respond to messages, improve calculators and content, analyze performance, prevent abuse, and support advertising."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">6. {isKo ? "정보 공유" : "Data sharing"}</h2>
          <p className="mt-3">{isKo ? "호스팅, 분석, 광고 등 사이트 운영을 돕는 서비스 제공자와 정보가 공유될 수 있으며, 법적 요구나 보안 보호 목적상 공개될 수 있습니다." : "We may share data with service providers that help operate the site, such as hosting providers, analytics providers, and advertising partners. We may also disclose information if required by law or to protect the security and integrity of the site."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">7. {isKo ? "보관 기간" : "Data retention"}</h2>
          <p className="mt-3">{isKo ? "운영, 문의 대응, 법적 의무 이행, 합리적인 비즈니스 목적 달성에 필요한 기간 동안만 정보를 보관합니다." : "We keep information only for as long as reasonably necessary to operate the site, respond to inquiries, meet legal obligations, or support legitimate business needs."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">8. {isKo ? "아동 개인정보" : "Children’s privacy"}</h2>
          <p className="mt-3">{isKo ? "Mega Calculators는 13세 미만 아동을 직접 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다." : "Mega Calculators is not directed to children under 13, and we do not knowingly collect personal information from children under 13."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">9. {isKo ? "이용자의 선택" : "Your choices"}</h2>
          <p className="mt-3">{isKo ? "브라우저 설정에서 쿠키를 제어할 수 있으며, 이메일이나 문의를 통해 개인정보를 보내지 않을 수도 있습니다. 지역에 따라 열람, 정정, 삭제 관련 권리가 있을 수 있습니다." : "You can control cookies through your browser settings and may choose not to send personal information through email or contact messages. Depending on your location, you may also have rights related to access, correction, or deletion of personal information."}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">10. {isKo ? "문의" : "Contact"}</h2>
          <p className="mt-3">{isKo ? "개인정보 관련 문의는" : "For privacy-related questions, contact"} <a className="font-semibold text-blue-700" href="mailto:afternoonkim93@gmail.com">afternoonkim93@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
