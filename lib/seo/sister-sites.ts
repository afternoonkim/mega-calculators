// Sister-site cross-traffic configuration.
//
// Two operator-owned sites we want to drive qualified traffic to:
//   - bluedino.kr — Korean-language finance site (no English version)
//   - momtools.kr — Parenting/child tools, with KO at root and EN at /en
//
// Topic-to-site matching (per the user's directive):
//   finance / tax  → bluedino       (KO only — site has no English version)
//   health / age   → momtools       (KO and EN, locale-routed)
//
// All outbound links use target="_blank" with rel="noopener" so a referrer is
// preserved (needed for the partner site to attribute the traffic) and they
// open in a new tab without giving the destination window-opener access.

import type { Locale } from "@/lib/i18n";

export type SisterSite = {
  /** Stable id used in analytics/UI keys */
  id: "bluedino" | "momtools";
  /** Display name used in card and footer */
  name: string;
  /** One-line value prop shown under the name */
  blurb: string;
  /** Call-to-action on the contextual card button */
  cta: string;
  /** Fully-qualified URL — always external, always absolute */
  url: string;
  /**
   * Locales this site is *available* in. If the visitor's locale is not in
   * this set, do not surface the site to them — bluedino is KO-only, so an
   * English visitor should never see a bluedino link.
   */
  availableLocales: readonly Locale[];
};

export type SisterSiteTopic = "finance" | "tax" | "health" | "age" | "pregnancy" | "child";

const bluedinoKo: SisterSite = {
  id: "bluedino",
  name: "Bluedino",
  blurb: "한국 금융·세금 정보를 더 깊이 다루는 사이트예요.",
  cta: "Bluedino에서 자세히 보기",
  url: "https://bluedino.kr",
  availableLocales: ["ko"] as const,
};

const momtoolsByLocale: Record<Locale, SisterSite> = {
  ko: {
    id: "momtools",
    name: "Momtools",
    blurb: "임신·출산·육아·아이 건강 도구를 모은 사이트예요.",
    cta: "Momtools에서 더 보기",
    url: "https://momtools.kr",
    availableLocales: ["ko", "en"] as const,
  },
  en: {
    id: "momtools",
    name: "Momtools",
    blurb: "Parenting tools for pregnancy, baby care, and family planning.",
    cta: "Visit Momtools",
    url: "https://momtools.kr/en",
    availableLocales: ["ko", "en"] as const,
  },
};

/**
 * Returns the right sister site (or null) for a given topic and locale.
 *
 * Returns null when:
 *   - Topic doesn't have a configured partner (no card shown)
 *   - The matching site isn't available in this locale (e.g. bluedino in EN)
 */
export function getSisterSiteForTopic(topic: SisterSiteTopic, locale: Locale): SisterSite | null {
  if (topic === "finance" || topic === "tax") {
    return locale === "ko" ? bluedinoKo : null;
  }
  if (topic === "health" || topic === "age" || topic === "pregnancy" || topic === "child") {
    return momtoolsByLocale[locale];
  }
  return null;
}

/**
 * Returns the full set of sister sites to surface in the footer for a locale.
 * KO footer gets both bluedino and momtools; EN footer gets only momtools.
 */
export function getFooterSisterSites(locale: Locale): SisterSite[] {
  if (locale === "ko") return [bluedinoKo, momtoolsByLocale.ko];
  return [momtoolsByLocale.en];
}

/**
 * Maps a calculator category slug to the topic used for sister-site matching.
 * Returns null if the category is not a contextual fit.
 */
export function categoryToSisterTopic(category: string): SisterSiteTopic | null {
  if (category === "finance" || category === "business") return "finance";
  if (category === "health" || category === "fitness") return "health";
  if (category === "time-date") return "age";
  return null;
}

/**
 * Heuristic — does a calculator slug specifically suggest pregnancy/child content
 * (more specific than the broad health category)? Used for finer-grained matching
 * on calculator detail pages where momtools is especially relevant.
 */
export function calculatorSlugToSisterTopic(slug: string): SisterSiteTopic | null {
  if (/pregnan|ovulation|due-date|baby|child|infant/i.test(slug)) return "pregnancy";
  if (/age-calculator|korean-age|birthday/i.test(slug)) return "age";
  if (/bmi|bmr|calorie|water|sleep/i.test(slug)) return "health";
  if (/loan|mortgage|interest|tax|salary|income|retirement|savings|invest/i.test(slug)) {
    return "finance";
  }
  return null;
}

/**
 * Heuristic for blog/guide slugs — picks finance topic for tax/loan/savings
 * articles and pregnancy/child topic where applicable.
 */
export function editorialSlugToSisterTopic(slug: string): SisterSiteTopic | null {
  if (/tax|year-end|연말정산|standard-deduction|federal-tax/i.test(slug)) return "tax";
  if (/mortgage|loan|jeonse|hysa|cd|treasury|ira|401k|roth|fixed-vs-variable|pension|savings|etf/i.test(slug)) {
    return "finance";
  }
  if (/bmi|korean-age|age-calculator/i.test(slug)) return "age";
  if (/calorie|bmr|sleep|pregnan|baby/i.test(slug)) return "health";
  return null;
}
