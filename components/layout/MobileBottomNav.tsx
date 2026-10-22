"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Calculator, CircleHelp, House, Newspaper } from "lucide-react";
import { withLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function MobileBottomNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const items = [
    { path: "/", ko: "홈", en: "Home", Icon: House },
    { path: "/calculators", ko: "계산기", en: "Calculators", Icon: Calculator },
    { path: "/blog", ko: "블로그", en: "Blog", Icon: Newspaper },
    { path: "/guides", ko: "가이드", en: "Guides", Icon: BookOpen },
    { path: "/faq", ko: "도움말", en: "Help", Icon: CircleHelp },
  ];
  return (
    <nav aria-label={locale === "ko" ? "모바일 주요 메뉴" : "Mobile main navigation"} className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-5 px-1 pt-1">
        {items.map(({ path, ko, en, Icon }) => {
          const href = withLocale(locale, path);
          const active = path === "/" ? pathname === href || pathname === href + "/" : pathname === href || pathname.startsWith(href + "/");
          return (
            <Link key={path} href={href} aria-current={active ? "page" : undefined} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-1 py-1 text-[11px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${active ? "text-blue-700" : "text-slate-500 hover:text-slate-800"}`}>
              <Icon size={20} strokeWidth={active ? 2.4 : 1.9} aria-hidden="true" />
              <span className="whitespace-nowrap">{locale === "ko" ? ko : en}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
