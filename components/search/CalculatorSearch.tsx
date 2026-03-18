"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { calculators } from "@/lib/calculators/data";

export default function CalculatorSearch({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return [];
    return calculators
      .filter((item) => {
        const haystack = `${item.name} ${item.slug} ${item.description} ${item.categoryName}`.toLowerCase();
        return haystack.includes(keyword);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <div ref={wrapperRef} className={`relative ${compact ? "w-full" : "w-full max-w-md"}`}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          type="search"
          placeholder="Search calculators"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-11 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {open && query.trim() ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {results.length ? (
            <div className="max-h-[26rem] overflow-y-auto p-2">
              {results.map((item) => (
                <Link
                  key={`${item.category}-${item.slug}`}
                  href={`/calculators/${item.category}/${item.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                    onNavigate?.();
                  }}
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-50"
                >
                  <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-700">{item.categoryName}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5 text-sm text-slate-600">No matching calculators found. Try words like mortgage, calorie, GPA, discount, or converter.</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
