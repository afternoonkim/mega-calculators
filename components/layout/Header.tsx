"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { calculatorCategories } from "@/lib/calculators/data";
import CalculatorSearch from "@/components/search/CalculatorSearch";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { localizeCategoryName } from "@/lib/calculators/localization";
import { withLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  const primaryLinks = useMemo(
    () =>
      locale === "ko"
        ? [
            { href: withLocale(locale, "/calculators"), label: "전체 계산기" },
            { href: withLocale(locale, "/blog"), label: "블로그" },
            { href: withLocale(locale, "/guides"), label: "가이드" },
            { href: withLocale(locale, "/faq"), label: "FAQ" },
            { href: withLocale(locale, "/about"), label: "소개" },
            { href: withLocale(locale, "/contact"), label: "문의" },
          ]
        : [
            { href: withLocale(locale, "/calculators"), label: "All calculators" },
            { href: withLocale(locale, "/blog"), label: "Blog" },
            { href: withLocale(locale, "/guides"), label: "Guides" },
            { href: withLocale(locale, "/faq"), label: "FAQ" },
            { href: withLocale(locale, "/about"), label: "About" },
            { href: withLocale(locale, "/contact"), label: "Contact" },
          ],
    [locale]
  );

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-4">
          <Link href={withLocale(locale, "/")} className="shrink-0 text-xl font-black tracking-tight text-slate-950">
            Mega Calculators
          </Link>

          <div className="hidden min-w-0 flex-1 lg:block">
            <CalculatorSearch locale={locale} />
          </div>
          <div className="hidden xl:flex items-center gap-6 ml-auto">
            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 xl:flex">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>    
          <button
            type="button"
            aria-label={open ? (locale === "ko" ? "메뉴 닫기" : "Close menu") : (locale === "ko" ? "메뉴 열기" : "Open menu")}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-900 transition hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden border-t border-slate-200 py-3 lg:block">
          <div className="flex flex-col items-end gap-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{locale === "ko" ? "계산기 카테고리" : "Calculator categories"}</div>
            <div className="flex flex-wrap justify-end gap-2">
              {calculatorCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={withLocale(locale, `/calculators/${category.slug}`)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  {localizeCategoryName(category.slug, locale).replace(locale === "ko" ? " 계산기" : " Calculators", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 md:px-6">
            <CalculatorSearch locale={locale} compact onNavigate={() => setOpen(false)} />
            <LanguageSwitcher locale={locale} />
            <div className="grid gap-2">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{locale === "ko" ? "계산기 카테고리" : "Calculator categories"}</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {calculatorCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={withLocale(locale, `/calculators/${category.slug}`)}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    {localizeCategoryName(category.slug, locale)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
