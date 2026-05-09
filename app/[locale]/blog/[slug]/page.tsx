import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/editorial";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import SisterSiteCard from "@/components/layout/SisterSiteCard";
import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";

const SITE_URL = "https://mega-calculators.com";

export async function generateStaticParams() {
  return ["en", "ko"].flatMap((locale) =>
    getBlogPosts(locale as "en" | "ko").map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  const isKo = locale === "ko";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${post.slug}`,
      languages: {
        en: `${SITE_URL}/en/blog/${post.slug}`,
        ko: `${SITE_URL}/ko/blog/${post.slug}`,
        "x-default": `${SITE_URL}/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: isKo ? ["en_US"] : ["ko_KR"],
      type: "article",
      publishedTime: post.publishedAt ?? post.updatedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: `/opengraph-image?locale=${locale}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/opengraph-image?locale=${locale}`],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const isKo = locale === "ko";
  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  const isEvergreen = post.evergreen !== false;
  const publishedAt = post.publishedAt ?? post.updatedAt;
  const url = `${SITE_URL}/${locale}/blog/${post.slug}`;

  // BlogPosting schema. datePublished + dateModified always emitted —
  // search engines use these for freshness signal even when the date is
  // hidden from users on evergreen articles.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: publishedAt,
    dateModified: post.updatedAt,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: {
      "@type": "Organization",
      name: "Mega Calculators",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Mega Calculators",
      url: SITE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
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
      { "@type": "ListItem", position: 2, name: isKo ? "블로그" : "Blog", item: `${SITE_URL}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
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
        <Link href={withLocale(locale, "/blog")} className="font-semibold text-blue-700">
          {isKo ? "블로그" : "Blog"}
        </Link>
        <span className="mx-2">/</span>
        <span>{post.title}</span>
      </nav>

      <header className="rounded-[2rem] bg-white p-8 shadow-sm">
        {/* For seasonal/dated content the date is shown prominently — readers
            need to see whether the year-specific information matches their
            filing year. Evergreen content hides the date to avoid the
            "looks abandoned" effect when months pass without an update. */}
        {!isEvergreen ? (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {isKo ? `발행 ${publishedAt}` : `Published ${publishedAt}`}
          </div>
        ) : (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {isKo ? "읽을 거리" : "Article"}
          </div>
        )}
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{post.intro}</p>
        <div className="mt-6">
          <Link
            href={withLocale(locale, post.relatedCalculatorPath)}
            className="inline-flex rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {post.relatedCalculatorLabel}
          </Link>
        </div>
      </header>

      <div className="space-y-6">
        {post.sections.map((section) => (
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
          {post.faq.map((item) => (
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
        <Link href={withLocale(locale, post.relatedCalculatorPath)} className="mt-5 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          {post.relatedCalculatorLabel}
        </Link>
      </section>

      {/* Topic-matched sister site (bluedino for finance/tax in KO,
          momtools for health/age in either locale). Returns null when no
          match — no card shown on those articles. */}
      {(() => {
        const topic = editorialSlugToSisterTopic(post.slug);
        return topic ? <SisterSiteCard topic={topic} locale={locale} /> : null;
      })()}

      {/* "Last reviewed" footer — only when an explicit reviewedAt date exists.
          This signals "we re-checked this content" without committing to a
          monthly publish-date schedule. Reviewer date appears low-key at the
          bottom; it's a trust signal, not a headline. */}
      {post.reviewedAt ? (
        <p className="text-sm text-slate-500">
          {isKo
            ? `이 글은 ${post.reviewedAt}에 마지막으로 검토되었어요.`
            : `Last reviewed on ${post.reviewedAt}.`}
        </p>
      ) : null}
    </article>
  );
}
