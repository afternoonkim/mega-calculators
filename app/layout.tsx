import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import AdSenseScript from "@/components/ads/AdSenseScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://mega-calculators.com"),
  title: {
    default: "Mega Calculators",
    template: "%s | Mega Calculators",
  },
  description:
    "Mega Calculators offers free online calculators and converters for finance, health, time, math, unit conversion, and everyday life. Built for US and global English-speaking users.",
  keywords: [
    "free calculator",
    "online calculator",
    "compound interest calculator",
    "mortgage calculator",
    "BMI calculator",
    "percentage calculator",
    "tip calculator",
    "unit converter",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mega Calculators",
    description:
      "Free online calculators and converters for finance, health, time, math, units, and everyday life.",
    url: "https://mega-calculators.com",
    siteName: "Mega Calculators",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "utGZoboUYhCKflQygCPsZ_K8CdJiQaOfYBeunri0AcE",
    // other: {
    //   "naver-site-verification": "1dae33c8d0ab9be494b117f91e4d8a6ad911b520",
    //   "msvalidate.01": "A0623C2A4E78687DE6334EBC6E9BBE67"
    // }
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <AdSenseScript />
        <Analytics />
      </body>
    </html>
  );
}
