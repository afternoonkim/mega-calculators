import type { MetadataRoute } from "next";

const baseUrl = "https://mega-calculators.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all bots
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/uploads/", "/*/calculators/*/*/embed"],
      },
      // Google primary crawler
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // Google AdSense crawler — required for ad serving
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      // Google AdsBot — landing page quality checks
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      // Naver primary crawler (한국어 트래픽 핵심)
      {
        userAgent: "Yeti",
        allow: "/",
      },
      // Naver mobile crawler
      {
        userAgent: "Yeti-Mobile",
        allow: "/",
      },
      // Daum (Kakao) crawler
      {
        userAgent: "Daum",
        allow: "/",
      },
      // Bing
      {
        userAgent: "bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
