import { NextResponse } from "next/server";
import { calculatorCategories, calculators } from "@/lib/calculators/data";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";

const baseUrl = "https://mega-calculators.com";
const locales = ["en", "ko"] as const;
const staticRoutes = ["", "/about", "/blog", "/calculators", "/contact", "/faq", "/guides", "/privacy"];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function addUrl(xmlParts: string[], url: string, lastmod: string, changefreq: string, priority: string) {
  xmlParts.push("<url>");
  xmlParts.push(`<loc>${escapeXml(url)}</loc>`);
  xmlParts.push(`<lastmod>${lastmod}</lastmod>`);
  xmlParts.push(`<changefreq>${changefreq}</changefreq>`);
  xmlParts.push(`<priority>${priority}</priority>`);
  xmlParts.push("</url>");
}

export async function GET() {
  const lastmod = new Date().toISOString();
  const xmlParts: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      addUrl(
        xmlParts,
        `${baseUrl}/${locale}${route}`,
        lastmod,
        route === "" ? "daily" : "weekly",
        route === "" ? "1.0" : "0.8"
      );
    }

    for (const category of calculatorCategories) {
      addUrl(
        xmlParts,
        `${baseUrl}/${locale}/calculators/${category.slug}`,
        lastmod,
        "weekly",
        "0.8"
      );
    }

    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;
      addUrl(xmlParts, `${baseUrl}/${locale}${path}`, lastmod, "weekly", "0.9");

      for (const subPath of ["/formula", "/guide", "/use-cases"]) {
        addUrl(xmlParts, `${baseUrl}/${locale}${path}${subPath}`, lastmod, "monthly", "0.7");
      }

      const seenExamplePaths = new Set<string>();
      for (const example of getCalculatorExamples(calculator)) {
        const examplePath = `${path}/examples/${example.slug}`;
        if (seenExamplePaths.has(examplePath)) continue;
        seenExamplePaths.add(examplePath);
        addUrl(xmlParts, `${baseUrl}/${locale}${examplePath}`, lastmod, "monthly", "0.6");
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
