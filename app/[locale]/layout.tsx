import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientLayout from "@/components/layout/ClientLayout";
import { normalizeLocale } from "@/lib/i18n";

const SITE_URL = "https://mega-calculators.com";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = normalizeLocale((await params).locale);
  const isKo = locale === "ko";

  // Korean longtail keywords tuned for Naver integrated search 통합검색
  const koKeywords = [
    "무료 계산기",
    "온라인 계산기",
    "대출 이자 계산기",
    "복리 계산기",
    "BMI 계산기",
    "나이 계산기",
    "퍼센트 계산기",
    "단위 변환기",
    "월급 실수령액 계산기",
    "주택담보대출 계산기",
  ];

  // English keywords for Google
  const enKeywords = [
    "free calculator",
    "online calculator",
    "loan calculator",
    "compound interest calculator",
    "BMI calculator",
    "age calculator",
    "percentage calculator",
    "unit converter",
    "mortgage calculator",
    "math calculator",
  ];

  const title = isKo
    ? "무료 온라인 계산기 모음 | 대출, 복리, BMI, 나이, 퍼센트, 단위 변환"
    : "Mega Calculators — Free Online Calculators and Converters";

  const description = isKo
    ? "대출 이자, 복리, BMI, 나이, 퍼센트, 단위 변환까지 자주 쓰시는 계산기를 한국어로 빠르게 사용하실 수 있어요. 별도 가입 없이 바로 결과를 확인하실 수 있습니다."
    : "Free, fast online calculators for finance, health, time, math, and unit conversion. Get clear answers in seconds — no sign-up, no install.";

  const ogDescription = isKo
    ? "대출, 복리, BMI, 나이, 퍼센트, 단위 변환까지 한국어로 무료 계산하실 수 있는 온라인 계산기 모음입니다."
    : "Free online calculators for money, health, time, math, and conversions. Clear answers, no sign-up.";

  return {
    title: { default: title, template: "%s | Mega Calculators" },
    description,
    keywords: isKo ? koKeywords : enKeywords,
    applicationName: "Mega Calculators",
    authors: [{ name: "Mega Calculators" }],
    publisher: "Mega Calculators",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ko: `${SITE_URL}/ko`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description: ogDescription,
      url: `${SITE_URL}/${locale}`,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: isKo ? ["en_US"] : ["ko_KR"],
      type: "website",
      images: [
        {
          url: `/opengraph-image?locale=${locale}`,
          width: 1200,
          height: 630,
          alt: isKo ? "Mega Calculators - 무료 온라인 계산기" : "Mega Calculators - Free online calculators",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [`/opengraph-image?locale=${locale}`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = normalizeLocale((await params).locale);
  return <ClientLayout locale={locale}>{children}</ClientLayout>;
}
