from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: str, old: str, new: str) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    if old not in text:
        raise RuntimeError(f"Expected text not found in {path}: {old[:180]!r}")
    target.write_text(text.replace(old, new, 1), encoding="utf-8")


replace_once(
    "lib/calculators/enhancedContent.ts",
    '  if (category === "time") {',
    '  if (category === "time-date") {',
)

replace_once(
    "lib/calculators/seoContent.ts",
    'import type { Locale } from "@/lib/i18n";',
    'import { stripLocaleFromPathname, type Locale } from "@/lib/i18n";',
)

replace_once(
    "lib/calculators/seoContent.ts",
    '''        href: item.href,\n        cta: isKo ? "계산기 보기 →" : "Open calculator →",''',
    '''        href: stripLocaleFromPathname(item.href),\n        cta: isKo ? "계산기 보기 →" : "Open calculator →",''',
)

(ROOT / "lib/calculators/internalLinks.test.ts").write_text(
    '''import { describe, expect, it } from "vitest";\nimport { calculators } from "@/lib/calculators/data";\nimport { getEnhancedCalculatorContent } from "@/lib/calculators/enhancedContent";\nimport { getCalculatorSeoContent } from "@/lib/calculators/seoContent";\nimport { getBlogPost, getGuide } from "@/lib/editorial";\nimport { stripLocaleFromPathname, withLocale, type Locale } from "@/lib/i18n";\n\nconst locales: Locale[] = ["en", "ko"];\n\nfunction expectEditorialTarget(locale: Locale, href: string) {\n  const path = stripLocaleFromPathname(href);\n  const segments = path.split("/").filter(Boolean);\n  if (segments.length !== 2) return;\n\n  const [section, slug] = segments;\n  if (section === "blog") {\n    expect(getBlogPost(locale, slug), `${locale} blog target missing: ${href}`).toBeDefined();\n  } else if (section === "guides") {\n    expect(getGuide(locale, slug), `${locale} guide target missing: ${href}`).toBeDefined();\n  }\n}\n\ndescribe("calculator internal links", () => {\n  it("keeps fallback calculator links locale-neutral before rendering", () => {\n    const definition = calculators.find((item) => item.slug === "simple-interest-calculator");\n    expect(definition).toBeDefined();\n    if (!definition) return;\n\n    for (const locale of locales) {\n      const href = `/${locale}/calculators/finance/loan-calculator`;\n      const content = getCalculatorSeoContent(definition, locale, [\n        { name: "Loan calculator", href },\n      ]);\n\n      expect(content.relatedContent[0]?.href).toBe("/calculators/finance/loan-calculator");\n      expect(withLocale(locale, content.relatedContent[0]!.href)).toBe(\n        `/${locale}/calculators/finance/loan-calculator`,\n      );\n    }\n  });\n\n  it("uses the dedicated date and time guides for the time-date category", () => {\n    const definition = calculators.find((item) => item.slug === "age-calculator");\n    expect(definition?.category).toBe("time-date");\n    if (!definition) return;\n\n    for (const locale of locales) {\n      const enhanced = getEnhancedCalculatorContent(definition, locale);\n      expect(enhanced).not.toBeNull();\n      expect(enhanced?.relatedGuides.map((item) => item.href)).toEqual([\n        "/guides/date-calculator-for-schedules",\n        "/blog/everyday-percent-and-date-calculators",\n      ]);\n    }\n  });\n\n  it("only links to editorial pages that exist in the active locale", () => {\n    for (const locale of locales) {\n      for (const definition of calculators) {\n        const content = getCalculatorSeoContent(definition, locale, []);\n        for (const item of content.relatedContent) {\n          expectEditorialTarget(locale, item.href);\n        }\n\n        const enhanced = getEnhancedCalculatorContent(definition, locale);\n        for (const item of enhanced?.relatedGuides ?? []) {\n          expectEditorialTarget(locale, item.href);\n        }\n      }\n    }\n  });\n});\n''',
    encoding="utf-8",
)

# Guard the routing contract that the UI localizes exactly once.
seo = (ROOT / "lib/calculators/seoContent.ts").read_text(encoding="utf-8")
enhanced = (ROOT / "lib/calculators/enhancedContent.ts").read_text(encoding="utf-8")
if 'href: stripLocaleFromPathname(item.href)' not in seo:
    raise RuntimeError("Fallback related links are not normalized before rendering")
if 'if (category === "time-date") {' not in enhanced:
    raise RuntimeError("time-date related guide branch is missing")
if 'if (category === "time") {' in enhanced:
    raise RuntimeError("legacy time category branch still exists")

print("Editorial internal link fixes applied.")
