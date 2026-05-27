import { calculatorCategories, calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import { getBlogPosts, getGuides } from "@/lib/editorial";
import type { Locale } from "@/lib/i18n";

export const SITEMAP_BASE_URL = "https://mega-calculators.com";
export const SITEMAP_LOCALES = ["en", "ko"] as const satisfies readonly Locale[];

const BUILD_LASTMOD = new Date().toISOString();
const STATIC_ROUTES = ["", "/about", "/blog", "/calculators", "/contact", "/faq", "/guides", "/privacy", "/terms", "/editorial-standards", "/methodology", "/corrections"] as const;

const RESOURCE_SUBPATHS = ["/formula", "/guide", "/use-cases"] as const;

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitemapEntry = {
  locale: Locale;
  pathSuffix: string;
  lastmod?: string;
  changefreq: ChangeFrequency;
  priority: string;
};

export const sitemapIndexItems = [
  { loc: `${SITEMAP_BASE_URL}/sitemap-static.xml`, lastmod: BUILD_LASTMOD },
  { loc: `${SITEMAP_BASE_URL}/sitemap-calculators.xml`, lastmod: BUILD_LASTMOD },
  { loc: `${SITEMAP_BASE_URL}/sitemap-examples.xml`, lastmod: BUILD_LASTMOD },
] as const;

export const sitemapResponseHeaders: HeadersInit = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
};

export function createXmlResponse(xml: string): Response {
  const headers = new Headers(sitemapResponseHeaders);
  return new Response(xml, {
    status: 200,
    headers,
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizePath(pathSuffix: string): string {
  if (!pathSuffix || pathSuffix === "/") return "";
  return pathSuffix.startsWith("/") ? pathSuffix : `/${pathSuffix}`;
}

function absoluteUrl(locale: Locale, pathSuffix: string): string {
  const pathname = `/${locale}${normalizePath(pathSuffix)}`.replace(/\/+/g, "/");
  return new URL(pathname, SITEMAP_BASE_URL).toString();
}

function normalizeLastmod(value?: string): string {
  if (!value) return BUILD_LASTMOD;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return BUILD_LASTMOD;
  return parsed.toISOString();
}

function dedupeEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();
  const unique: SitemapEntry[] = [];

  for (const entry of entries) {
    const loc = absoluteUrl(entry.locale, entry.pathSuffix);
    if (seen.has(loc)) continue;
    seen.add(loc);
    unique.push(entry);
  }

  return unique;
}

function addUrl(xmlParts: string[], entry: SitemapEntry) {
  const normalizedPath = normalizePath(entry.pathSuffix);
  const loc = absoluteUrl(entry.locale, normalizedPath);

  xmlParts.push("  <url>");
  xmlParts.push(`    <loc>${escapeXml(loc)}</loc>`);
  xmlParts.push(`    <lastmod>${escapeXml(normalizeLastmod(entry.lastmod))}</lastmod>`);
  xmlParts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  xmlParts.push(`    <priority>${entry.priority}</priority>`);
  xmlParts.push("  </url>");
}

export function buildUrlsetXml(entries: SitemapEntry[]): string {
  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of dedupeEntries(entries)) {
    addUrl(xmlParts, entry);
  }

  xmlParts.push("</urlset>");
  return `${xmlParts.join("\n")}\n`;
}

export function buildSitemapIndexXml(): string {
  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const item of sitemapIndexItems) {
    xmlParts.push("  <sitemap>");
    xmlParts.push(`    <loc>${escapeXml(item.loc)}</loc>`);
    xmlParts.push(`    <lastmod>${escapeXml(normalizeLastmod(item.lastmod))}</lastmod>`);
    xmlParts.push("  </sitemap>");
  }

  xmlParts.push("</sitemapindex>");
  return `${xmlParts.join("\n")}\n`;
}

export function getStaticSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const locale of SITEMAP_LOCALES) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        locale,
        pathSuffix: route,
        lastmod: BUILD_LASTMOD,
        changefreq: route === "" ? "daily" : "weekly",
        priority: route === "" ? "1.0" : "0.8",
      });
    }

    for (const post of getBlogPosts(locale)) {
      entries.push({
        locale,
        pathSuffix: `/blog/${post.slug}`,
        lastmod: post.updatedAt,
        changefreq: "monthly",
        priority: "0.8",
      });
    }

    for (const guide of getGuides(locale)) {
      entries.push({
        locale,
        pathSuffix: `/guides/${guide.slug}`,
        lastmod: guide.updatedAt,
        changefreq: "monthly",
        priority: "0.8",
      });
    }
  }

  return entries;
}

export function getCoreCalculatorSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const locale of SITEMAP_LOCALES) {
    for (const category of calculatorCategories) {
      entries.push({
        locale,
        pathSuffix: `/calculators/${category.slug}`,
        lastmod: BUILD_LASTMOD,
        changefreq: "weekly",
        priority: "0.8",
      });
    }

    for (const calculator of calculators) {
      entries.push({
        locale,
        pathSuffix: `/calculators/${calculator.category}/${calculator.slug}`,
        lastmod: BUILD_LASTMOD,
        changefreq: "weekly",
        priority: "0.9",
      });
    }
  }

  return entries;
}

export function getCalculatorResourceSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const locale of SITEMAP_LOCALES) {
    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;

      for (const subPath of RESOURCE_SUBPATHS) {
        entries.push({
          locale,
          pathSuffix: `${path}${subPath}`,
          lastmod: BUILD_LASTMOD,
          changefreq: "monthly",
          priority: "0.6",
        });
      }
    }
  }

  return entries;
}

export function getCalculatorSitemapEntries(): SitemapEntry[] {
  return [...getCoreCalculatorSitemapEntries(), ...getCalculatorResourceSitemapEntries()];
}

export function getPrimarySitemapEntries(): SitemapEntry[] {
  // /sitemap.xml is intentionally a direct URL set rather than a sitemap index.
  // Search Console was showing the submitted sitemap index as "0 discovered pages"
  // when child sitemap processing was delayed, which made the site look empty.
  // The primary sitemap now carries the important, crawl-worthy URLs directly:
  // static hubs, blog/guides, category hubs, calculator detail pages, and the
  // formula/guide/use-case support pages that are linked from each calculator.
  // High-volume example pages stay out of the primary sitemap to avoid feeding
  // thousands of near-template pages to Google before the core calculators settle.
  return [
    ...getStaticSitemapEntries(),
    ...getCoreCalculatorSitemapEntries(),
    ...getCalculatorResourceSitemapEntries(),
  ];
}

export function getExampleSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  for (const locale of SITEMAP_LOCALES) {
    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;
      const seenExamplePaths = new Set<string>();

      for (const example of getCalculatorExamples(calculator)) {
        const examplePath = `${path}/examples/${example.slug}`;
        if (seenExamplePaths.has(examplePath)) continue;
        seenExamplePaths.add(examplePath);
        entries.push({
          locale,
          pathSuffix: examplePath,
          lastmod: BUILD_LASTMOD,
          changefreq: "monthly",
          priority: "0.4",
        });
      }
    }
  }

  return entries;
}
