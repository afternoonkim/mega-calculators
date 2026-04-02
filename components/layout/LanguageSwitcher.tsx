"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, type Locale, switchLocaleInPathname } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="inline-flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
      {(["en", "ko"] as const).map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={switchLocaleInPathname(pathname || `/${locale}`, target)}
            hrefLang={target}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold leading-none transition ${active ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:bg-white hover:text-slate-900"}`}
          >
            {localeLabels[target]}
          </Link>
        );
      })}
    </div>
  );
}
