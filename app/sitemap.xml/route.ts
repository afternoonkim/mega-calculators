import { buildSitemapIndexXml, createXmlResponse } from "@/lib/seo/sitemap";

export const runtime = "nodejs";
// 1-hour ISR — sitemap content changes only when calculators/posts change,
// so we don't need to re-render on every crawl. Helps the edge cache
// preserve our application/xml Content-Type without serverless re-entry.
export const revalidate = 3600;

export function GET() {
  return createXmlResponse(buildSitemapIndexXml());
}
