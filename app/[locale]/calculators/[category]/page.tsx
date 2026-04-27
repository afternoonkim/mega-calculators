import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import { calculatorCategories, calculatorsByCategory } from "@/lib/calculators/data";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import {
  localizeCalculatorDefinition,
  localizeCategoryName,
} from "@/lib/calculators/localization";
import { getCategoryIntro, getCategoryKeywords } from "@/lib/seo/keywords";
import SisterSiteCard from "@/components/layout/SisterSiteCard";
import { categoryToSisterTopic } from "@/lib/seo/sister-sites";

const SITE_URL = "https://mega-calculators.com";

export function generateStaticParams() {
  return calculatorCategories.flatMap((category) => [
    { locale: "en", category: category.slug },
    { locale: "ko", category: category.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, category } = await params;
  const locale = normalizeLocale(rawLocale);
  const match = calculatorsByCategory.find((item) => item.slug === category);
  if (!match) return {};
  const isKo = locale === "ko";
  const name = localizeCategoryName(category, locale);
  const keywords = getCategoryKeywords(category, locale);
  const intro = getCategoryIntro(category, locale);

  const title = isKo
    ? `${name} 모음 — 무료 온라인 ${name}`
    : `${match.name} - Free Online Tools`;

  const description = isKo
    ? `${intro} 모두 무료이고, 별도 가입 없이 바로 사용하실 수 있어요.`
    : `${intro} Free, no sign-up, ${match.items.length} tools.`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/calculators/${match.slug}`,
      languages: {
        en: `${SITE_URL}/en/calculators/${match.slug}`,
        ko: `${SITE_URL}/ko/calculators/${match.slug}`,
        "x-default": `${SITE_URL}/en/calculators/${match.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/calculators/${match.slug}`,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: isKo ? ["en_US"] : ["ko_KR"],
      type: "website",
      images: [{ url: `/opengraph-image?locale=${locale}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/opengraph-image?locale=${locale}`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: rawLocale, category } = await params;
  const locale = normalizeLocale(rawLocale);
  const match = calculatorsByCategory.find((item) => item.slug === category);
  if (!match) notFound();
  const items = match.items.map((item) => localizeCalculatorDefinition(item, locale));
  const name = localizeCategoryName(category, locale);
  const keywords = getCategoryKeywords(category, locale);
  const intro = getCategoryIntro(category, locale);
  const isKo = locale === "ko";

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description: intro,
    url: `${SITE_URL}/${locale}/calculators/${match.slug}`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "Mega Calculators",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.slice(0, 20).map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        url: `${SITE_URL}/${locale}/calculators/${item.category}/${item.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isKo ? "홈" : "Home", item: `${SITE_URL}/${locale}` },
      {
        "@type": "ListItem",
        position: 2,
        name: isKo ? "계산기" : "Calculators",
        item: `${SITE_URL}/${locale}/calculators`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${SITE_URL}/${locale}/calculators/${match.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href={withLocale(locale, "/")}>{isKo ? "홈" : "Home"}</Link>
        <span className="mx-2">/</span>
        <Link href={withLocale(locale, "/calculators")}>{isKo ? "계산기" : "Calculators"}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{name}</span>
      </nav>

      <section className="rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {isKo ? "카테고리" : "Category"}
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{name}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{intro}</p>
        <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600">
          {isKo
            ? `${items.length}개 도구를 한 페이지에 모았어요. 자주 찾으시는 항목부터 시작하시거나, 아래 키워드로 원하시는 계산기를 빠르게 찾아보세요.`
            : `Browse ${items.length} tools curated in this category. Start with what you need, or jump straight to a specific calculator below.`}
        </p>
        {keywords.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {keywords.slice(0, 8).map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {kw}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      <AdPlaceholder label="Category ad" />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={`${item.category}-${item.slug}`}
            href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="text-lg font-bold text-slate-950">{item.name}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {isKo ? "이 카테고리에서 할 수 있는 것" : "What you can do here"}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <li className="rounded-2xl bg-slate-50 px-4 py-3">
              {isKo
                ? "비슷한 계산기를 한 번에 비교하실 수 있어요."
                : "Compare related tools without opening multiple tabs."}
            </li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">
              {isKo
                ? `${name} 관련 계산을 빠르게 찾으실 수 있어요.`
                : `Find quick answers for common questions in ${match.name.toLowerCase()}.`}
            </li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">
              {isKo
                ? "예시와 가이드 페이지까지 연결해 결과를 더 쉽게 이해하실 수 있어요."
                : "Move between similar calculators and check examples when you need more context."}
            </li>
          </ul>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {isKo ? "이 카테고리의 대표 계산기" : "Popular picks in this category"}
          </h2>
          <div className="mt-4 space-y-3">
            {items.slice(0, 5).map((item) => (
              <Link
                key={`featured-${item.category}-${item.slug}`}
                href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)}
                className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </article>
      </section>

      {(() => {
        const topic = categoryToSisterTopic(category);
        return topic ? <SisterSiteCard topic={topic} locale={locale} /> : null;
      })()}
    </div>
  );
}
