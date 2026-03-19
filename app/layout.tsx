import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import "./globals.css";
import AdSenseScript from "@/components/ads/AdSenseScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://mega-calculators.com"),
  robots: { index: true, follow: true },
  verification: {
    google: "utGZoboUYhCKflQygCPsZ_K8CdJiQaOfYBeunri0AcE",
    other: {
      "naver-site-verification": "c7b8ff2a84274ce6403736a44777d0e08942cee8"
    }
  },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "ko" ? "ko" : "en";

  return (
    <html lang={locale}>
      <body>
        {children}
        <AdSenseScript />
        <Analytics />
      </body>
    </html>
  );
}
