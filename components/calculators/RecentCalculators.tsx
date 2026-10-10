"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";
import { MAX_RECENT_CALCULATORS, normalizeRecentCalculators, type RecentCalculator } from "@/lib/calculators/recent";

const STORAGE_KEY = "mc:recent-calculators";

function readRecents(): RecentCalculator[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return normalizeRecentCalculators(JSON.parse(raw));
  } catch {
    return [];
  }
}

function writeRecents(items: RecentCalculator[]) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items.slice(0, MAX_RECENT_CALCULATORS)),
    );
  } catch {
    // Quota exceeded or storage disabled — silently ignore.
  }
}

/** Records a calculator visit without storing locale-dependent display text. */
export function RecentTracker({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const current = readRecents();
    const next: RecentCalculator[] = [
      { category, slug, visitedAt: Date.now() },
      ...current.filter((item) => !(item.category === category && item.slug === slug)),
    ];
    writeRecents(next);
  }, [category, slug]);
  return null;
}

export function RecentCalculatorsList({
  locale,
  calculatorNames,
}: {
  locale: Locale;
  calculatorNames: Record<string, string>;
}) {
  const [items, setItems] = useState<RecentCalculator[] | null>(() => {
    if (typeof window === "undefined") return null;
    return readRecents();
  });

  if (!items || items.length === 0) return null;

  const visibleItems = items.filter((item) => Boolean(calculatorNames[`${item.category}/${item.slug}`]));
  if (visibleItems.length === 0) return null;

  const isKo = locale === "ko";

  return (
    <section
      aria-label={isKo ? "최근에 사용하신 계산기" : "Recently used calculators"}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            {isKo ? "최근 사용" : "Recently used"}
          </div>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {isKo ? "이어서 보시던 계산기" : "Pick up where you left off"}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => {
            try {
              window.localStorage.removeItem(STORAGE_KEY);
            } catch {
              // ignore
            }
            setItems([]);
          }}
          className="text-sm font-semibold text-slate-500 hover:text-slate-800"
        >
          {isKo ? "기록 지우기" : "Clear"}
        </button>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => {
          const key = `${item.category}/${item.slug}`;
          return (
            <Link
              key={key}
              href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              {calculatorNames[key]}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
