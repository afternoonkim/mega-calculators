import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

const faqItems = {
  en: [
    { q: "Is Mega Calculators free to use?", a: "Yes. Every calculator on the site is free for you to use, with no sign-up. Open any page and run as many scenarios as you need." },
    { q: "Are the results accurate enough to rely on?", a: "Results are designed for planning and educational use. They can still differ from lender disclosures, tax filings, medical guidance, employer policies, or legal documents, so it's a good idea to verify important decisions with an official source or a qualified professional." },
    { q: "Will I get financial, legal, tax, or medical advice here?", a: "No. You'll only find informational tools and explanations. Nothing here should be treated as professional advice." },
    { q: "Can I report a bug or ask for a correction?", a: "Yes — please do. If a calculator looks wrong, a formula seems off, or a link is broken, send a quick note from the contact page with the calculator name, the values you entered, and what you expected to see." },
    { q: "Why do some pages show ads?", a: "Ads help cover hosting, maintenance, and the steady expansion of the calculator library. The layout is kept clean so ads don't get in the way of finding your answer." },
    { q: "What personal data do you collect?", a: "Only limited technical information such as analytics, cookies, and any details you choose to share when you contact us. The privacy policy explains it in more detail if you'd like to read further." },
  ],
  ko: [
    { q: "Mega Calculators는 정말 무료인가요?", a: "네, 별도의 가입 없이 모든 계산기를 자유롭게 사용하실 수 있어요. 원하시는 만큼 여러 시나리오를 비교해보셔도 됩니다." },
    { q: "결과가 100% 정확하다고 믿어도 될까요?", a: "결과는 일반적인 참고와 계획 수립을 돕기 위한 것입니다. 실제 대출 조건, 세금 신고, 의료 판단, 회사 규정, 법적 문서와는 차이가 있을 수 있으니 중요한 결정 전에는 공식 자료나 전문가와 한 번 더 확인해보시는 것이 안전해요." },
    { q: "금융, 세무, 의료 자문도 받을 수 있나요?", a: "아니요. 이곳에서는 정보 제공용 계산기와 설명만 보실 수 있어요. 전문 자문으로 받아들이지 않으시는 것이 좋습니다." },
    { q: "오류를 발견했어요. 어떻게 알려드리나요?", a: "문의 페이지에서 바로 메시지를 보내주세요. 계산기 이름, 입력하신 값, 기대하신 결과를 함께 적어주시면 더 빠르게 확인하고 고쳐드릴 수 있어요." },
    { q: "광고는 왜 보이나요?", a: "서버 운영과 유지보수, 그리고 계산기를 꾸준히 늘려가기 위한 비용을 광고가 함께 지원하고 있어요. 답을 찾으시는 데 방해되지 않도록 화면은 최대한 깔끔하게 유지하려고 합니다." },
    { q: "어떤 개인정보가 수집되나요?", a: "분석 정보, 쿠키, 문의를 보내실 때 직접 입력하신 정보처럼 제한적인 데이터만 수집될 수 있어요. 더 자세한 내용은 개인정보처리방침에서 확인하실 수 있습니다." },
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  return {
    title: "FAQ",
    description:
      locale === "ko"
        ? "Mega Calculators 이용 방법, 결과 해석, 개인정보, 광고에 대해 자주 묻는 질문을 모았습니다."
        : "Quick answers to the questions you most often ask about Mega Calculators — accuracy, privacy, advertising, and general site use.",
    alternates: { canonical: `/${locale}/faq`, languages: { en: "/en/faq", ko: "/ko/faq" } },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  const faqs = faqItems[locale];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-4xl font-black tracking-tight text-slate-950">{isKo ? "자주 묻는 질문" : "Frequently asked questions"}</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
        {isKo
          ? "Mega Calculators를 사용하시면서 많이 궁금해하시는 내용을 한자리에 모았어요. 결과를 어떻게 해석해야 할지, 광고나 개인정보는 어떻게 처리되는지 빠르게 확인하실 수 있습니다."
          : "Here are the things people most often want to know — how the calculators work, how to read the results, and how privacy and ads are handled."}
      </p>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <section key={item.q} className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-lg font-bold text-slate-950">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
