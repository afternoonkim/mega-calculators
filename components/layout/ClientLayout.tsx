import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";
import AdSlot from "@/components/ads/AdSlot";

import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export default function ClientLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header locale={locale} />
      <div className="mx-auto max-w-7xl px-4 pt-6 md:px-6 lg:px-8">
        <AdSlot slotKey="siteTop" label="Top banner ad" minHeightClass="min-h-[90px]" />
      </div>
      <main className="mx-auto min-h-[calc(100vh-180px)] max-w-7xl px-4 py-8 md:px-6 lg:px-8">{children}</main>
      <div className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
        <AdSlot slotKey="siteBottom" label="Bottom banner ad" minHeightClass="min-h-[90px]" />
      </div>
      <SiteFooter locale={locale} />
    </div>
  );
}
