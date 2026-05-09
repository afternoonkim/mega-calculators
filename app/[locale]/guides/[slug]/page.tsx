import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getGuides } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import SisterSiteCard from "@/components/layout/SisterSiteCard";
import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";

const SITE_URL = "https://mega-calculators.com";

export async function generateStaticParams() {
  return ["en", "ko"].flatMap((locale) =>
    getGuides(locale as "en" | "ko").map((guide) => ({ locale, slug: guide.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const guide = getGuide(locale, slug);

  if (!guide) {
    return {};
  }

  const isKo = locale === "ko";

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/guides/${guide.slug}`,
      languages: {
        en: `${SITE_URL}/en/guides/${guide.slug}`,
        ko: `${SITE_URL}/ko/guides/${guide.slug}`,
        "x-default": `${SITE_URL}/en/guides/${guide.slug}`,
      },
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}/${locale}/guides/${guide.slug}`,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: isKo ? ["en_US"] : ["ko_KR"],
      type: "article",
      publishedTime: guide.publishedAt ?? guide.updatedAt,
      modifiedTime: guide.updatedAt,
      images: [{ url: `/opengraph-image?locale=${locale}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [`/opengraph-image?locale=${locale}`],
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const isKo = locale === "ko";
  const guide = getGuide(locale, slug);

  if (!guide) {
    notFound();
  }

  const isEvergreen = guide.evergreen !== false;
  const publishedAt = guide.publishedAt ?? guide.updatedAt;
  const url = `${SITE_URL}/${locale}/guides/${guide.slug}`;

  // HowTo schema would also fit a guide, but we keep it as Article for
  // consistency. datePublished and dateModified are surfaced in JSON-LD
  // even when the visible date is suppressed on evergreen content.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: "Mega Calculators", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Mega Calculators", url: SITE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isKo ? "홈" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isKo ? "가이드" : "Guides", item: `${SITE_URL}/${locale}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href={withLocale(locale, "/guides")} className="font-semibold text-blue-700">
          {isKo ? "가이드" : "Guides"}
        </Link>
        <span className="mx-2">/</span>
        <span>{guide.title}</span>
      </nav>

      <header className="rounded-[2rem] bg-white p-8 shadow-sm">
        {!isEvergreen ? (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {isKo ? `발행 ${publishedAt}` : `Published ${publishedAt}`}
          </div>
        ) : (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {isKo ? "가이드" : "Guide"}
          </div>
        )}
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{guide.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{guide.intro}</p>
        <div className="mt-6">
          <Link
            href={withLocale(locale, guide.relatedCalculatorPath)}
            className="inline-flex rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {guide.relatedCalculatorLabel}
          </Link>
        </div>
      </header>

      <div className="space-y-6">
        {guide.sections.map((section) => (
          <section key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm leading-8 text-slate-600 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          {isKo ? "자주 묻는 질문" : "Frequently asked questions"}
        </h2>
        <div className="mt-5 space-y-4">
          {guide.faq.map((item) => (
            <div key={item.question} className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-bold text-slate-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          {isKo ? "계산기로 바로 확인해보세요" : "Try the related calculator"}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {isKo
            ? "읽은 내용을 본인 숫자로 확인하면 결과가 더 현실적으로 보입니다. 필요한 값을 입력해 여러 조건을 비교해보세요."
            : "Turn the idea into a number by entering your own values and comparing a few scenarios."}
        </p>
        <Link href={withLocale(locale, guide.relatedCalculatorPath)} className="mt-5 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          {guide.relatedCalculatorLabel}
        </Link>
      </section>

      {/* Topic-matched sister site (bluedino for finance/tax in KO,
          momtools for health/age in either locale). */}
      {(() => {
        const topic = editorialSlugToSisterTopic(guide.slug);
        return topic ? <SisterSiteCard topic={topic} locale={locale} /> : null;
      })()}

      {guide.reviewedAt ? (
        <p className="text-sm text-slate-500">
          {isKo
            ? `이 가이드는 ${guide.reviewedAt}에 마지막으로 검토되었어요.`
            : `Last reviewed on ${guide.reviewedAt}.`}
        </p>
      ) : null}
    </article>
  );
}
