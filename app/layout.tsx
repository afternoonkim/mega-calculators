import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import AdSenseScript from "@/components/ads/AdSenseScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://mega-calculators.com"),
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  verification: {
    google: "utGZoboUYhCKflQygCPsZ_K8CdJiQaOfYBeunri0AcE",
    // Optional Bing Webmaster Tools verification token. Set
    // NEXT_PUBLIC_BING_SITE_VERIFICATION in the Vercel env after creating
    // the property at https://www.bing.com/webmasters and Bing's crawler
    // (bingbot) will start treating the property as verified, which
    // unlocks the Site Explorer and Search Performance reports.
    other: {
      "naver-site-verification": "c7b8ff2a84274ce6403736a44777d0e08942cee8",
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacalculators",
    creator: "@megacalculators",
  },
  other: {
    "google-adsense-account": "ca-pub-5407950462485150",
    // 네이버 검색 광고/통합 검색 키워드 노출용
    "referrer": "origin-when-cross-origin",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

const NAVER_ANALYTICS_ID = process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "ko" ? "ko" : "en";

  return (
    <html lang={locale}>
      <body>
        {children}
        <AdSenseScript />
        <Analytics />
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
        {NAVER_ANALYTICS_ID && locale === "ko" ? (
          <Script id="naver-wcslog" strategy="afterInteractive">
            {`
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "${NAVER_ANALYTICS_ID}";
              if(window.wcs) {
                wcs_do();
              } else {
                var s = document.createElement("script");
                s.src = "//wcs.naver.net/wcslog.js";
                s.async = true;
                s.onload = function() { if(window.wcs) wcs_do(); };
                document.body.appendChild(s);
              }
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
