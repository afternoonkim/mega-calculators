import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CalculatorEngine from "@/components/calculators/CalculatorEngine";
import { getCalculator, getRelatedCalculators } from "@/lib/calculators/data";
import { localizeCalculatorDefinition, localizeCalculatorName } from "@/lib/calculators/localization";
import { normalizeLocale, withLocale } from "@/lib/i18n";

const SITE_URL = "https://mega-calculators.com";
export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }): Promise<Metadata> { const { locale: rawLocale, category, slug } = await params; const locale = normalizeLocale(rawLocale); const calculator = getCalculator(category, slug); if (!calculator) return {}; const localized = localizeCalculatorDefinition(calculator, locale); return { title: locale === "ko" ? `${localized.name} 삽입용` : `${localized.name} Embed`, description: locale === "ko" ? `${localized.name}만 간단히 표시하는 삽입용 화면입니다.` : `A compact embedded version of the ${localized.name}.`, robots: { index: false, follow: true }, alternates: { canonical: `${SITE_URL}/${locale}/calculators/${calculator.category}/${calculator.slug}/embed` } }; }
export default async function CalculatorEmbedPage({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }) { const { locale: rawLocale, category, slug } = await params; const locale = normalizeLocale(rawLocale); const calculator = getCalculator(category, slug); if (!calculator) notFound(); const localized = localizeCalculatorDefinition(calculator, locale); const related = getRelatedCalculators(calculator.relatedSlugs).map((item) => ({ name: localizeCalculatorName(item.name, locale, item.slug), href: withLocale(locale, `/calculators/${item.category}/${item.slug}`) })); return <CalculatorEngine definition={localized} relatedLinks={related} locale={locale} embedMode />; }
