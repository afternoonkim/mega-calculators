import type { Metadata } from "next";
import Link from "next/link";
import { getTrustPage } from "@/lib/trustPages";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import type { TrustPageSlug } from "@/lib/trustPages";

const SITE_URL = "https://mega-calculators.com";
const PAGE_SLUG: TrustPageSlug = "editorial-standards";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const page = getTrustPage(locale, PAGE_SLUG);
  const canonical = `${SITE_URL}/${locale}/${PAGE_SLUG}`;
  return {
    title: `${page.title} | Mega Calculators`, description: page.description,
    alternates: { canonical, languages: { en: `${SITE_URL}/en/${PAGE_SLUG}`, ko: `${SITE_URL}/ko/${PAGE_SLUG}`, "x-default": `${SITE_URL}/en/${PAGE_SLUG}` } },
    openGraph: { title: page.title, description: page.description, url: canonical, siteName: "Mega Calculators", locale: locale === "ko" ? "ko_KR" : "en_US", alternateLocale: locale === "ko" ? ["en_US"] : ["ko_KR"], type: "website", images: [{ url: `/opengraph-image?locale=${locale}`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [`/opengraph-image?locale=${locale}`] },
  };
}

export default async function TrustPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";
  const page = getTrustPage(locale, PAGE_SLUG);
  const url = `${SITE_URL}/${locale}/${PAGE_SLUG}`;
  const pageSchema = { "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, dateModified: page.updatedAt, inLanguage: isKo ? "ko-KR" : "en-US", url, publisher: { "@type": "Organization", name: "Mega Calculators", url: SITE_URL } };
  return (
    <article className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><Link href={withLocale(locale, "/")} className="font-semibold text-blue-700">{isKo ? "홈" : "Home"}</Link><span className="mx-2">/</span><span>{page.label}</span></nav>
      <header className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{page.label}</div><h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{page.title}</h1><p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">{page.intro}</p><p className="mt-4 text-sm text-slate-500">{isKo ? `마지막 검토일: ${page.updatedAt}` : `Last reviewed: ${page.updatedAt}`}</p></header>
      <div className="space-y-6">{page.sections.map((section) => (<section key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2><div className="mt-4 space-y-4">{section.body.map((paragraph) => (<p key={paragraph} className="text-sm leading-8 text-slate-600 md:text-base">{paragraph}</p>))}</div></section>))}</div>
      {page.ctaText ? (<section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-950">{page.ctaText}</h2><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{isKo ? "계산기 이름과 확인이 필요한 내용을 함께 보내주시면 더 빠르게 검토할 수 있습니다." : "Include the calculator name and the details you want reviewed so the issue can be checked more clearly."}</p><Link href={withLocale(locale, "/contact")} className="mt-5 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">{page.ctaLabel}</Link></section>) : null}
    </article>
  );
}
