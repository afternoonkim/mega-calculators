import { buildUrlsetXml, createXmlResponse, getStaticSitemapEntries } from "@/lib/seo/sitemap";

export const runtime = "nodejs";
export const revalidate = 3600;

export function GET() {
  return createXmlResponse(buildUrlsetXml(getStaticSitemapEntries()));
}
