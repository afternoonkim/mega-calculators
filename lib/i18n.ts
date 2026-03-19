export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale {
  return value === "ko" ? "ko" : "en";
}

export function withLocale(locale: Locale, path: string) {
  if (!path.startsWith("/")) return `/${locale}/${path}`;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function switchLocaleInPathname(pathname: string, locale: Locale) {
  return withLocale(locale, stripLocaleFromPathname(pathname));
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
};
