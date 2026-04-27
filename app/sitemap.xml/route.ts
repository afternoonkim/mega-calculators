import { NextResponse } from "next/server";
import { calculatorCategories, calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import { getBlogPosts, getGuides } from "@/lib/editorial";

const baseUrl = "https://mega-calculators.com";
const locales = ["en", "ko"] as const;
const staticRoutes = ["", "/about", "/blog", "/calculators", "/contact", "/faq", "/guides", "/privacy", "/terms"];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Adds a single <url> entry, with xhtml:link hreflang annotations for every locale.
// This is the format both Google Search Console and Naver Search Advisor accept
// for declaring localized alternates inside the sitemap itself.
function addUrl(
  xmlParts: string[],
  pathSuffix: string,
  currentLocale: (typeof locales)[number],
  lastmod: string,
  changefreq: string,
  priority: string,
) {
  const loc = `${baseUrl}/${currentLocale}${pathSuffix}`;
  xmlParts.push("<url>");
  xmlParts.push(`<loc>${escapeXml(loc)}</loc>`);
  xmlParts.push(`<lastmod>${lastmod}</lastmod>`);
  xmlParts.push(`<changefreq>${changefreq}</changefreq>`);
  xmlParts.push(`<priority>${priority}</priority>`);
  for (const locale of locales) {
    const altUrl = `${baseUrl}/${locale}${pathSuffix}`;
    xmlParts.push(`<xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(altUrl)}"/>`);
  }
  // x-default points at the English version
  xmlParts.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${baseUrl}/en${pathSuffix}`)}"/>`,
  );
  xmlParts.push("</url>");
}

export async function GET() {
  const lastmod = new Date().toISOString();
  const xmlParts: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      addUrl(
        xmlParts,
        route,
        locale,
        lastmod,
        route === "" ? "daily" : "weekly",
        route === "" ? "1.0" : "0.8",
      );
    }

    for (const post of getBlogPosts(locale)) {
      addUrl(xmlParts, `/blog/${post.slug}`, locale, post.updatedAt, "monthly", "0.8");
    }

    for (const guide of getGuides(locale)) {
      addUrl(xmlParts, `/guides/${guide.slug}`, locale, guide.updatedAt, "monthly", "0.8");
    }

    for (const category of calculatorCategories) {
      addUrl(xmlParts, `/calculators/${category.slug}`, locale, lastmod, "weekly", "0.8");
    }

    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;
      addUrl(xmlParts, path, locale, lastmod, "weekly", "0.9");

      for (const subPath of ["/formula", "/guide", "/use-cases"]) {
        addUrl(xmlParts, `${path}${subPath}`, locale, lastmod, "monthly", "0.7");
      }

      const seenExamplePaths = new Set<string>();
      for (const example of getCalculatorExamples(calculator)) {
        const examplePath = `${path}/examples/${example.slug}`;
        if (seenExamplePaths.has(examplePath)) continue;
        seenExamplePaths.add(examplePath);
        addUrl(xmlParts, examplePath, locale, lastmod, "monthly", "0.6");
      }
    }
  }

  xmlParts.push("</urlset>");
  const xml = xmlParts.join("");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
