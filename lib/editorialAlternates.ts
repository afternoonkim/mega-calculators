export type EditorialSection = "blog" | "guides";
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
