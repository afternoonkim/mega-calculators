from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: str, old: str, new: str) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    if old not in text:
        raise RuntimeError(f"Expected text not found in {path}: {old[:140]!r}")
    target.write_text(text.replace(old, new, 1), encoding="utf-8")


(ROOT / "lib/calculators/recent.ts").write_text(
    '''export const MAX_RECENT_CALCULATORS = 6;\n\nexport type RecentCalculator = {\n  category: string;\n  slug: string;\n  visitedAt: number;\n};\n\nexport function normalizeRecentCalculators(value: unknown): RecentCalculator[] {\n  if (!Array.isArray(value)) return [];\n\n  return value\n    .filter(\n      (item): item is Record<string, unknown> =>\n        Boolean(item) && typeof item === "object" && !Array.isArray(item),\n    )\n    .filter(\n      (item) =>\n        typeof item.category === "string" &&\n        typeof item.slug === "string" &&\n        typeof item.visitedAt === "number" &&\n        Number.isFinite(item.visitedAt),\n    )\n    .map((item) => ({\n      category: item.category as string,\n      slug: item.slug as string,\n      visitedAt: item.visitedAt as number,\n    }))\n    .slice(0, MAX_RECENT_CALCULATORS);\n}\n''',
    encoding="utf-8",
)

(ROOT / "lib/calculators/recent.test.ts").write_text(
    '''import { describe, expect, it } from "vitest";\nimport { MAX_RECENT_CALCULATORS, normalizeRecentCalculators } from "@/lib/calculators/recent";\n\ndescribe("recent calculator storage normalization", () => {\n  it("drops legacy localized names while preserving valid history", () => {\n    expect(\n      normalizeRecentCalculators([\n        { category: "finance", slug: "loan-calculator", name: "대출 계산기", visitedAt: 100 },\n        { category: "health", slug: "bmi-calculator", name: "BMI Calculator", visitedAt: 90 },\n      ]),\n    ).toEqual([\n      { category: "finance", slug: "loan-calculator", visitedAt: 100 },\n      { category: "health", slug: "bmi-calculator", visitedAt: 90 },\n    ]);\n  });\n\n  it("rejects malformed entries", () => {\n    expect(\n      normalizeRecentCalculators([\n        null,\n        { category: "finance", slug: "loan-calculator" },\n        { category: 1, slug: "loan-calculator", visitedAt: 1 },\n        { category: "finance", slug: "loan-calculator", visitedAt: Number.NaN },\n        { category: "finance", slug: "loan-calculator", visitedAt: 1 },\n      ]),\n    ).toEqual([{ category: "finance", slug: "loan-calculator", visitedAt: 1 }]);\n  });\n\n  it("keeps only the configured number of recent calculators", () => {\n    const input = Array.from({ length: MAX_RECENT_CALCULATORS + 3 }, (_, index) => ({\n      category: "math",\n      slug: `calculator-${index}`,\n      visitedAt: 100 - index,\n    }));\n\n    expect(normalizeRecentCalculators(input)).toHaveLength(MAX_RECENT_CALCULATORS);\n  });\n});\n''',
    encoding="utf-8",
)

(ROOT / "components/calculators/RecentCalculators.tsx").write_text(
    '''"use client";\n\nimport Link from "next/link";\nimport { useEffect, useState } from "react";\nimport type { Locale } from "@/lib/i18n";\nimport { withLocale } from "@/lib/i18n";\nimport { MAX_RECENT_CALCULATORS, normalizeRecentCalculators, type RecentCalculator } from "@/lib/calculators/recent";\n\nconst STORAGE_KEY = "mc:recent-calculators";\n\nfunction readRecents(): RecentCalculator[] {\n  try {\n    const raw = window.localStorage.getItem(STORAGE_KEY);\n    if (!raw) return [];\n    return normalizeRecentCalculators(JSON.parse(raw));\n  } catch {\n    return [];\n  }\n}\n\nfunction writeRecents(items: RecentCalculator[]) {\n  try {\n    window.localStorage.setItem(\n      STORAGE_KEY,\n      JSON.stringify(items.slice(0, MAX_RECENT_CALCULATORS)),\n    );\n  } catch {\n    // Quota exceeded or storage disabled — silently ignore.\n  }\n}\n\n/** Records a calculator visit without storing locale-dependent display text. */\nexport function RecentTracker({\n  category,\n  slug,\n}: {\n  category: string;\n  slug: string;\n}) {\n  useEffect(() => {\n    if (typeof window === "undefined") return;\n    const current = readRecents();\n    const next: RecentCalculator[] = [\n      { category, slug, visitedAt: Date.now() },\n      ...current.filter((item) => !(item.category === category && item.slug === slug)),\n    ];\n    writeRecents(next);\n  }, [category, slug]);\n  return null;\n}\n\nexport function RecentCalculatorsList({\n  locale,\n  calculatorNames,\n}: {\n  locale: Locale;\n  calculatorNames: Record<string, string>;\n}) {\n  const [items, setItems] = useState<RecentCalculator[] | null>(() => {\n    if (typeof window === "undefined") return null;\n    return readRecents();\n  });\n\n  if (!items || items.length === 0) return null;\n\n  const visibleItems = items.filter((item) => Boolean(calculatorNames[`${item.category}/${item.slug}`]));\n  if (visibleItems.length === 0) return null;\n\n  const isKo = locale === "ko";\n\n  return (\n    <section\n      aria-label={isKo ? "최근에 사용하신 계산기" : "Recently used calculators"}\n      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"\n    >\n      <div className="flex items-end justify-between gap-4">\n        <div>\n          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">\n            {isKo ? "최근 사용" : "Recently used"}\n          </div>\n          <h2 className="mt-2 text-2xl font-bold text-slate-900">\n            {isKo ? "이어서 보시던 계산기" : "Pick up where you left off"}\n          </h2>\n        </div>\n        <button\n          type="button"\n          onClick={() => {\n            try {\n              window.localStorage.removeItem(STORAGE_KEY);\n            } catch {\n              // ignore\n            }\n            setItems([]);\n          }}\n          className="text-sm font-semibold text-slate-500 hover:text-slate-800"\n        >\n          {isKo ? "기록 지우기" : "Clear"}\n        </button>\n      </div>\n      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">\n        {visibleItems.map((item) => {\n          const key = `${item.category}/${item.slug}`;\n          return (\n            <Link\n              key={key}\n              href={withLocale(locale, `/calculators/${item.category}/${item.slug}`)}\n              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"\n            >\n              {calculatorNames[key]}\n            </Link>\n          );\n        })}\n      </div>\n    </section>\n  );\n}\n''',
    encoding="utf-8",
)

replace_once(
    "components/calculators/CalculatorEngine.tsx",
    '<RecentTracker category={definition.category} slug={definition.slug} name={definition.name} />',
    '<RecentTracker category={definition.category} slug={definition.slug} />',
)

replace_once(
    "app/[locale]/page.tsx",
    'import { localizeCalculatorDefinition, localizeCategoryName } from "@/lib/calculators/localization";',
    'import { localizeCalculatorDefinition, localizeCalculatorName, localizeCategoryName } from "@/lib/calculators/localization";',
)
replace_once(
    "app/[locale]/page.tsx",
    '''  const blogPosts = getBlogPosts(locale).slice(0, 3);\n  const guides = getGuides(locale).slice(0, 3);\n''',
    '''  const blogPosts = getBlogPosts(locale).slice(0, 3);\n  const guides = getGuides(locale).slice(0, 3);\n  const recentCalculatorNames = Object.fromEntries(\n    calculators.map((item) => [\n      `${item.category}/${item.slug}`,\n      localizeCalculatorName(item.name, locale, item.slug),\n    ]),\n  );\n''',
)
replace_once(
    "app/[locale]/page.tsx",
    '<RecentCalculatorsList locale={locale} />',
    '<RecentCalculatorsList locale={locale} calculatorNames={recentCalculatorNames} />',
)

print("Recent calculator locale isolation fix applied.")
