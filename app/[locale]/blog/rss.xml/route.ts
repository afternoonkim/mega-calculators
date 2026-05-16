import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/editorial";
import { normalizeLocale } from "@/lib/i18n";

const SITE_URL = "https://mega-calculators.com";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}

// RSS 2.0 feed. Naver Search Advisor accepts this format under
// "요청 → RSS 제출", which gets the feed surfaced inside the Naver
// blog/inflnsr discovery areas in addition to the regular sitemap path.
// Google also reads RSS as a complementary discovery signal.

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(dateString: string): string {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return new Date().toUTCString();
  return d.toUTCString();
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ locale: string }> },
): Promise<Response> {
  const { locale: rawLocale } = await ctx.params;
  const locale = normalizeLocale(rawLocale);
  const isKo = locale === "ko";

  const channelTitle = isKo
    ? "Mega Calculators 블로그"
    : "Mega Calculators Blog";
  const channelDescription = isKo
    ? "계산기를 더 잘 활용하실 수 있도록 돕는 글들"
    : "Articles to help you read calculator results with confidence";
  const feedUrl = `${SITE_URL}/${locale}/blog/rss.xml`;
  const channelLink = `${SITE_URL}/${locale}/blog`;
  const language = isKo ? "ko-kr" : "en-us";

  const posts = getBlogPosts(locale);
  const buildDate = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/${locale}/blog/${post.slug}`;
      const pubDate = toRfc822(post.publishedAt ?? post.updatedAt);
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(post.description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>${language}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
