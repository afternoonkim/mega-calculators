import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientLayout from "@/components/layout/ClientLayout";
import { normalizeLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  return {
    title: {
      default: "Mega Calculators",
      template: "%s | Mega Calculators",
    },
    description: isKo
      ? "Mega Calculators는 금융, 건강, 시간, 수학, 단위 변환, 생활 계산을 빠르게 처리할 수 있는 무료 온라인 계산기 사이트입니다. 한국어 검색과 네이버 SEO를 고려해 구성했습니다."
      : "Mega Calculators offers free online calculators and converters for finance, health, time, math, unit conversion, and everyday life. Built for English-speaking users and Google SEO.",
    openGraph: {
      title: "Mega Calculators",
      description: isKo
        ? "금융, 건강, 날짜, 퍼센트, 단위 변환 등 다양한 계산을 한국어로 빠르게 할 수 있는 무료 사이트입니다."
        : "Free online calculators and converters for finance, health, time, math, units, and everyday life.",
      url: `https://mega-calculators.com/${locale}`,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const locale = normalizeLocale((await params).locale);
  return <ClientLayout locale={locale}>{children}</ClientLayout>;
}
