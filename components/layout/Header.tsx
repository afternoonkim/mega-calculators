"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { calculatorCategories } from "@/lib/calculators/data";
import CalculatorSearch from "@/components/search/CalculatorSearch";

const primaryLinks = [
  { href: "/calculators", label: "All calculators" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight text-slate-950">
          Mega Calculators
        </Link>

        <div className="hidden lg:block lg:flex-1">
          <CalculatorSearch />
        </div>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 xl:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
          {calculatorCategories.map((category) => (
            <Link key={category.slug} href={`/calculators/${category.slug}`} className="transition hover:text-slate-950">
              {category.name.replace(" Calculators", "")}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-900 transition hover:bg-slate-50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 md:px-6">
            <CalculatorSearch compact onNavigate={() => setOpen(false)} />

            <div className="grid gap-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Calculator categories</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {calculatorCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/calculators/${category.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    {category.name}
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
