"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export default function ClientLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  const pathname = usePathname();
  const isEmbed = pathname.endsWith("/embed");
  if (isEmbed) return <div className="min-h-screen bg-white text-slate-900">{children}</div>;
  return <div className="min-h-screen bg-slate-50 text-slate-900"><Header locale={locale} /><main className="mx-auto min-h-[calc(100vh-180px)] max-w-7xl px-4 py-8 md:px-6 lg:px-8">{children}</main><SiteFooter locale={locale} /></div>;
}
