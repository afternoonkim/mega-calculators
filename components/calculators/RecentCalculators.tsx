"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/i18n";

const STORAGE_KEY = "mc:recent-calculators";
const MAX_RECENT = 6;

export type RecentCalculator = {
  category: string;
  slug: string;
  name: string;
  visitedAt: number;
};

// Utility — call from a calculator page to record a visit.
// Used by the RecentTracker component below.
function readRecents(): RecentCalculator[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.category === "string" &&
          typeof item.slug === "string" &&
          typeof item.name === "string" &&
          typeof item.visitedAt === "number",
      )
      .slice(0, MAX_RECENT);
  } catch {
    return [];
  }
}

function writeRecents(items: RecentCalculator[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_RECENT)));
  } catch {
    // Quota exceeded or storage disabled — silently ignore.
  }
}

/**
 * Drop this component on a calculator detail page; on mount it records
 * the visit so the homepage's `RecentCalculatorsList` can show it later.
 */
export function RecentTracker({
  category,
  slug,
  name,
}: {
  category: string;
  slug: string;
  name: string;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const current = readRecents();
    const next: RecentCalculator[] = [
      { category, slug, name, visitedAt: Date.now() },
      ...current.filter((item) => !(item.category === category && item.slug === slug)),
    ];
    writeRecents(next);
  }, [category, slug, name]);
  return null;
}

/**
 * Renders a "최근에 사용하신 계산기" / "Recently used" list.
 * Returns nothing on first render until hydration completes —
 * keeps the homepage SSR snapshot identical for SEO bots.
 */
export function RecentCalculatorsList({ locale }: { locale: Locale }) {
  const [items, setItems] = useState<RecentCalculator[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setItems(readRecents());
  }, []);

  if (!items || items.length === 0) return null;

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
        {items.map((item) => (
          <Link
            key={`${item.category}-${item.slug}`}
            href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
