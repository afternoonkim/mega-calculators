import { buildUrlsetXml, createXmlResponse, getCalculatorSitemapEntries } from "@/lib/seo/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  return createXmlResponse(buildUrlsetXml(getCalculatorSitemapEntries()));
}
