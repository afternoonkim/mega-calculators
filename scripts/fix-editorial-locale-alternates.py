from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: str, old: str, new: str) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    if old not in text:
        raise RuntimeError(f"Expected text not found in {path}: {old[:120]!r}")
    target.write_text(text.replace(old, new, 1), encoding="utf-8")


alternates = ROOT / "lib/editorialAlternates.ts"
alternates.write_text(
    '''export type EditorialSection = "blog" | "guides";
export type EditorialLocale = "en" | "ko";

type TranslationPair = Record<EditorialLocale, string>;

const editorialTranslations: Record<EditorialSection, TranslationPair[]> = {
  blog: [
    { en: "monthly-payment-vs-total-cost", ko: "monthly-payment-vs-total-cost" },
    { en: "how-to-compare-calculator-results", ko: "how-to-compare-calculator-results" },
    { en: "loan-calculator-vs-mortgage-calculator", ko: "loan-calculator-vs-mortgage-calculator" },
    { en: "when-bmi-calculator-is-useful", ko: "when-bmi-calculator-is-useful" },
    { en: "everyday-percent-and-date-calculators", ko: "everyday-percent-and-date-calculators" },
  ],
  guides: [
    { en: "loan-calculator-checklist", ko: "loan-calculator-checklist" },
    { en: "bmi-and-calorie-basics", ko: "bmi-and-calorie-basics" },
    { en: "mortgage-calculator-checklist", ko: "mortgage-calculator-checklist" },
    { en: "how-to-read-calorie-results", ko: "how-to-read-calorie-results" },
    { en: "date-calculator-for-schedules", ko: "date-calculator-for-schedules" },
  ],
};

function findTranslation(section: EditorialSection, slug: string): TranslationPair | undefined {
  return editorialTranslations[section].find((pair) => pair.en === slug || pair.ko === slug);
}

export function getEditorialLocaleSwitchPath(
  pathname: string,
  targetLocale: EditorialLocale,
): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 3) return null;

  const [currentLocale, sectionValue, slug] = segments;
  if ((currentLocale !== "en" && currentLocale !== "ko") || (sectionValue !== "blog" && sectionValue !== "guides")) {
    return null;
  }

  const section = sectionValue as EditorialSection;
  const translation = findTranslation(section, slug);
  return translation
    ? `/${targetLocale}/${section}/${translation[targetLocale]}`
    : `/${targetLocale}/${section}`;
}

export function getEditorialHreflangUrls(
  section: EditorialSection,
  slug: string,
  siteUrl: string,
): Record<string, string> | undefined {
  const translation = findTranslation(section, slug);
  if (!translation) return undefined;

  const base = siteUrl.replace(/\/$/, "");
  return {
    en: `${base}/en/${section}/${translation.en}`,
    ko: `${base}/ko/${section}/${translation.ko}`,
    "x-default": `${base}/en/${section}/${translation.en}`,
  };
}
''',
    encoding="utf-8",
)

replace_once(
    "lib/i18n.ts",
    'export const locales = ["en", "ko"] as const;\n',
    'import { getEditorialLocaleSwitchPath } from "@/lib/editorialAlternates";\n\nexport const locales = ["en", "ko"] as const;\n',
)
replace_once(
    "lib/i18n.ts",
    '''export function switchLocaleInPathname(pathname: string, locale: Locale) {
  return withLocale(locale, stripLocaleFromPathname(pathname));
}
''',
    '''export function switchLocaleInPathname(pathname: string, locale: Locale) {
  const editorialPath = getEditorialLocaleSwitchPath(pathname, locale);
  if (editorialPath) return editorialPath;
  return withLocale(locale, stripLocaleFromPathname(pathname));
}
''',
)

replace_once(
    "app/[locale]/blog/[slug]/page.tsx",
    'import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";\n',
    'import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";\nimport { getEditorialHreflangUrls } from "@/lib/editorialAlternates";\n',
)
replace_once(
    "app/[locale]/blog/[slug]/page.tsx",
    '''  const isKo = locale === "ko";

  return {
''',
    '''  const isKo = locale === "ko";
  const hreflang = getEditorialHreflangUrls("blog", post.slug, SITE_URL);

  return {
''',
)
replace_once(
    "app/[locale]/blog/[slug]/page.tsx",
    '''    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${post.slug}`,
      languages: {
        en: `${SITE_URL}/en/blog/${post.slug}`,
        ko: `${SITE_URL}/ko/blog/${post.slug}`,
        "x-default": `${SITE_URL}/en/blog/${post.slug}`,
      },
    },
''',
    '''    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${post.slug}`,
      ...(hreflang ? { languages: hreflang } : {}),
    },
''',
)

replace_once(
    "app/[locale]/guides/[slug]/page.tsx",
    'import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";\n',
    'import { editorialSlugToSisterTopic } from "@/lib/seo/sister-sites";\nimport { getEditorialHreflangUrls } from "@/lib/editorialAlternates";\n',
)
replace_once(
    "app/[locale]/guides/[slug]/page.tsx",
    '''  const isKo = locale === "ko";

  return {
''',
    '''  const isKo = locale === "ko";
  const hreflang = getEditorialHreflangUrls("guides", guide.slug, SITE_URL);

  return {
''',
)
replace_once(
    "app/[locale]/guides/[slug]/page.tsx",
    '''    alternates: {
      canonical: `${SITE_URL}/${locale}/guides/${guide.slug}`,
      languages: {
        en: `${SITE_URL}/en/guides/${guide.slug}`,
        ko: `${SITE_URL}/ko/guides/${guide.slug}`,
        "x-default": `${SITE_URL}/en/guides/${guide.slug}`,
      },
    },
''',
    '''    alternates: {
      canonical: `${SITE_URL}/${locale}/guides/${guide.slug}`,
      ...(hreflang ? { languages: hreflang } : {}),
    },
''',
)

test_file = ROOT / "lib/editorialAlternates.test.ts"
test_file.write_text(
    '''import { describe, expect, it } from "vitest";
import { getEditorialHreflangUrls } from "@/lib/editorialAlternates";
import { switchLocaleInPathname } from "@/lib/i18n";

describe("editorial locale alternates", () => {
  it("keeps the article slug when a real translation exists", () => {
    expect(switchLocaleInPathname("/ko/blog/monthly-payment-vs-total-cost", "en")).toBe(
      "/en/blog/monthly-payment-vs-total-cost",
    );
    expect(switchLocaleInPathname("/en/guides/loan-calculator-checklist", "ko")).toBe(
      "/ko/guides/loan-calculator-checklist",
    );
  });

  it("falls back to the target editorial hub when no translation exists", () => {
    expect(switchLocaleInPathname("/ko/blog/year-end-tax-settlement-2026", "en")).toBe("/en/blog");
    expect(switchLocaleInPathname("/en/blog/30-vs-15-year-mortgage", "ko")).toBe("/ko/blog");
    expect(switchLocaleInPathname("/en/guides/bmi-us-standards-walkthrough", "ko")).toBe("/ko/guides");
    expect(switchLocaleInPathname("/ko/guides/bmi-korean-standards", "en")).toBe("/en/guides");
  });

  it("leaves non-editorial locale switching unchanged", () => {
    expect(switchLocaleInPathname("/ko/calculators/finance/loan-calculator", "en")).toBe(
      "/en/calculators/finance/loan-calculator",
    );
  });

  it("only emits hreflang clusters for real translations", () => {
    expect(getEditorialHreflangUrls("blog", "monthly-payment-vs-total-cost", "https://mega-calculators.com")).toEqual({
      en: "https://mega-calculators.com/en/blog/monthly-payment-vs-total-cost",
      ko: "https://mega-calculators.com/ko/blog/monthly-payment-vs-total-cost",
      "x-default": "https://mega-calculators.com/en/blog/monthly-payment-vs-total-cost",
    });
    expect(getEditorialHreflangUrls("blog", "year-end-tax-settlement-2026", "https://mega-calculators.com")).toBeUndefined();
  });
});
''',
    encoding="utf-8",
)

print("Editorial locale alternate fix applied.")
