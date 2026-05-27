import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Mega Calculators, calculator accuracy, privacy, advertising, and general site use.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is Mega Calculators free to use?",
    a: "Yes. All calculators on Mega Calculators are free to use. You can open any calculator page and run as many scenarios as you need.",
  },
  {
    q: "Are calculator results guaranteed to be accurate?",
    a: "Calculator results are designed for general planning and educational use. They can still differ from lender disclosures, tax filings, medical guidance, employer policies, or legal documents, so important decisions should be verified with an official source or qualified professional.",
  },
  {
    q: "Does Mega Calculators offer financial, legal, tax, or medical advice?",
    a: "No. The site provides informational tools and explanations only. Nothing on the site should be treated as professional advice.",
  },
  {
    q: "Can I request a correction or report a bug?",
    a: "Yes. If you notice a broken calculator, a content issue, or a formula problem, contact us through the contact page and include the calculator name, the values you entered, and the issue you found.",
  },
  {
    q: "Why do some pages show ads?",
    a: "Ads help support hosting, maintenance, and the continued expansion of the calculator library. We aim to keep the experience clean and readable while using advertising to support the site.",
  },
  {
    q: "Do you collect personal data?",
    a: "We may collect limited technical information such as analytics, cookies, and contact form or email details when you reach out. Please review the privacy policy for a fuller explanation.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Frequently Asked Questions</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
        This page answers common questions about how Mega Calculators works, how to interpret calculator outputs, and how to contact us if you notice an issue.
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
