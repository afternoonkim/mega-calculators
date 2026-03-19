import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import AdSlot from "@/components/ads/AdSlot";
import CalculatorEngine from "@/components/calculators/CalculatorEngine";
import { calculatorCategories, calculators, calculatorsByCategory, getCalculator, getRelatedCalculators } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import { getCalculatorExamples, getFormulaSeo, getGuideSeo, getProgrammaticHubLinks, getUseCases } from "@/lib/calculators/programmatic";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import { calculatorKeywordLine, localizeCalculatorDefinition, localizeCalculatorName, localizeCategoryName, localizeDescription, localizeUiText } from "@/lib/calculators/localization";

const faqItems = {
  en: [
    { q: "Is Mega Calculators free to use?", a: "Yes. All calculators on Mega Calculators are free to use. You can open any calculator page and run as many scenarios as you need." },
    { q: "Are calculator results guaranteed to be accurate?", a: "Calculator results are designed for general planning and educational use. They can still differ from lender disclosures, tax filings, medical guidance, employer policies, or legal documents, so important decisions should be verified with an official source or qualified professional." },
    { q: "Does Mega Calculators offer financial, legal, tax, or medical advice?", a: "No. The site provides informational tools and explanations only. Nothing on the site should be treated as professional advice." },
    { q: "Can I request a correction or report a bug?", a: "Yes. If you notice a broken calculator, a content issue, or a formula problem, contact us through the contact page and include the calculator name, the values you entered, and the issue you found." },
    { q: "Why do some pages show ads?", a: "Ads help support hosting, maintenance, and the continued expansion of the calculator library. We aim to keep the experience clean and readable while using advertising to support the site." },
    { q: "Do you collect personal data?", a: "We may collect limited technical information such as analytics, cookies, and contact form or email details when you reach out. Please review the privacy policy for a fuller explanation." },
  ],
  ko: [
    { q: "Mega Calculators는 무료인가요?", a: "네. 사이트의 모든 계산기는 무료로 사용할 수 있습니다. 원하는 만큼 여러 시나리오를 계산해볼 수 있습니다." },
    { q: "계산 결과가 100% 정확한가요?", a: "결과는 일반적인 참고와 계획 수립용입니다. 실제 대출 조건, 세금 신고, 의료 판단, 회사 규정, 법적 문서와는 차이가 있을 수 있으므로 중요한 결정은 공식 자료와 전문가 확인이 필요합니다." },
    { q: "금융, 세무, 의료 자문을 제공하나요?", a: "아니요. Mega Calculators는 정보 제공용 계산기와 설명만 제공합니다. 전문 자문으로 받아들이면 안 됩니다." },
    { q: "오류 제보나 수정 요청이 가능한가요?", a: "네. 계산기 오류, 수식 문제, 콘텐츠 오탈자나 깨진 링크를 발견하면 문의 페이지를 통해 알려주세요." },
    { q: "왜 광고가 보이나요?", a: "광고는 서버 운영, 유지보수, 계산기 확장을 위한 비용을 지원합니다. 다만 화면이 과하게 복잡해지지 않도록 관리하고 있습니다." },
    { q: "개인정보를 수집하나요?", a: "기본적인 분석 정보, 쿠키, 문의 메일 정보처럼 제한적인 데이터가 수집될 수 있습니다. 자세한 내용은 개인정보처리방침을 확인해주세요." },
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const locale = normalizeLocale((await params).locale); return { title: "FAQ", description: locale === "ko" ? "Mega Calculators 이용 방법, 결과 해석, 개인정보, 광고 관련 자주 묻는 질문입니다." : "Frequently asked questions about Mega Calculators, calculator accuracy, privacy, advertising, and general site use.", alternates: { canonical: `/${locale}/faq`, languages: { en: "/en/faq", ko: "/ko/faq" } } }; }

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) { const locale = normalizeLocale((await params).locale); const faqs = faqItems[locale]; const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }; return <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><h1 className="text-4xl font-black tracking-tight text-slate-950">{locale === "ko" ? "자주 묻는 질문" : "Frequently Asked Questions"}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{locale === "ko" ? "Mega Calculators 사용 방법, 결과 해석, 문의, 광고, 개인정보에 대해 많이 물어보는 내용을 정리했습니다." : "This page answers common questions about how Mega Calculators works, how to interpret calculator outputs, and how to contact us if you notice an issue."}</p><div className="mt-8 space-y-4">{faqs.map((item) => <section key={item.q} className="rounded-2xl border border-slate-200 p-5"><h2 className="text-lg font-bold text-slate-950">{item.q}</h2><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p></section>)}</div></div>; }
