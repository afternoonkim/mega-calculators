import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import { calculators, getCalculator } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import { getCalculatorExamples, getProgrammaticHubLinks } from "@/lib/calculators/programmatic";
import { normalizeLocale, withLocale } from "@/lib/i18n";
import {
  localizeCalculatorDefinition,
  localizeCategoryName,
  localizeDisplayValue,
  localizeProgrammaticExample,
  localizeResultText,
} from "@/lib/calculators/localization";

const SITE_URL = "https://mega-calculators.com";

export function generateStaticParams() {
  return calculators.flatMap((calculator) =>
    getCalculatorExamples(calculator).flatMap((example) => [
      { locale: "en", category: calculator.category, slug: calculator.slug, example: example.slug },
      { locale: "ko", category: calculator.category, slug: calculator.slug, example: example.slug },
    ]),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string; example: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, category, slug, example } = await params;
  const locale = normalizeLocale(rawLocale);
  const calculator = getCalculator(category, slug);
  if (!calculator) return {};
  const rawExampleData = getCalculatorExamples(calculator).find((item) => item.slug === example);
  if (!rawExampleData) return {};
  const exampleData = localizeProgrammaticExample(rawExampleData, calculator, locale);
  const isKo = locale === "ko";
  const url = `${SITE_URL}/${locale}/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`;

  return {
    title: isKo ? `${exampleData.title} | 예시 계산` : `${exampleData.title} | Example Calculation`,
    description: exampleData.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`,
        ko: `${SITE_URL}/ko/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`,
        "x-default": `${SITE_URL}/en/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`,
      },
    },
    openGraph: {
      title: exampleData.title,
      description: exampleData.description,
      url,
      siteName: "Mega Calculators",
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: isKo ? ["en_US"] : ["ko_KR"],
      type: "article",
      images: [{ url: `/opengraph-image?locale=${locale}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: exampleData.title,
      description: exampleData.description,
      images: [`/opengraph-image?locale=${locale}`],
    },
  };
}

export default async function CalculatorExamplePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string; example: string }>;
}) {
  const { locale: rawLocale, category, slug, example } = await params;
  const locale = normalizeLocale(rawLocale);
  const calculator = getCalculator(category, slug);
  if (!calculator) notFound();
  const localized = localizeCalculatorDefinition(calculator, locale);
  const rawExampleData = getCalculatorExamples(calculator).find((item) => item.slug === example);
  if (!rawExampleData) notFound();
  const exampleData = localizeProgrammaticExample(rawExampleData, calculator, locale);
  const values = { ...getDefaultValues(calculator), ...exampleData.overrides };
  const result = computeCalculator(calculator, values, locale);
  const hubLinks = getProgrammaticHubLinks(calculator);
  const isKo = locale === "ko";
  const url = `${SITE_URL}/${locale}/calculators/${calculator.category}/${calculator.slug}/examples/${exampleData.slug}`;

  // Article schema with HowTo-friendly intro/inputs/outputs.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: exampleData.title,
    description: exampleData.description,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Organization", name: "Mega Calculators", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Mega Calculators", url: SITE_URL },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isKo ? "홈" : "Home", item: `${SITE_URL}/${locale}` },
      {
        "@type": "ListItem",
        position: 2,
        name: isKo ? "계산기" : "Calculators",
        item: `${SITE_URL}/${locale}/calculators`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: localizeCategoryName(calculator.category, locale),
        item: `${SITE_URL}/${locale}/calculators/${calculator.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: localized.name,
        item: `${SITE_URL}/${locale}/calculators/${calculator.category}/${calculator.slug}`,
      },
      { "@type": "ListItem", position: 5, name: exampleData.title, item: url },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href={withLocale(locale, "/")}>{isKo ? "홈" : "Home"}</Link>
        <span className="mx-2">/</span>
        <Link href={withLocale(locale, "/calculators")}>{isKo ? "계산기" : "Calculators"}</Link>
        <span className="mx-2">/</span>
        <Link href={withLocale(locale, `/calculators/${calculator.category}`)}>
          {localizeCategoryName(calculator.category, locale)}
        </Link>
        <span className="mx-2">/</span>
        <Link href={withLocale(locale, `/calculators/${calculator.category}/${calculator.slug}`)}>
          {localized.name}
        </Link>
      </nav>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          {isKo ? "예시 계산" : "Example calculation"}
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{exampleData.title}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{exampleData.intro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {isKo ? "이 예시에 사용된 입력값" : "Inputs used in this example"}
          </h2>
          <div className="mt-5 space-y-3">
            {localized.inputs.map((input) => (
              <div
                key={input.name}
                className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3"
              >
                <span className="text-sm text-slate-600">{input.label}</span>
                <span className="text-sm font-semibold text-slate-900">
                  {locale === "ko"
                    ? localizeDisplayValue(input.label, String(values[input.name] ?? "—"), locale)
                    : (values[input.name] ?? "—")}
                </span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            {isKo ? "예상 결과" : "Estimated result"}
          </div>
          <div className="mt-5 rounded-3xl bg-white/5 p-6">
            <div className="text-sm text-slate-300">{localizeResultText(result.primary.label, locale)}</div>
            <div className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {localizeResultText(result.primary.value, locale)}
            </div>
          </div>
          {result.secondary?.length ? (
            <div className="mt-6 space-y-3">
              {result.secondary.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-slate-300">{localizeResultText(item.label, locale)}</span>
                  <span className="text-sm font-semibold text-white">
                    {localizeResultText(item.value, locale)}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
          {result.note ? (
            <p className="mt-5 text-sm leading-7 text-amber-200">
              {localizeResultText(result.note, locale)}
            </p>
          ) : null}
        </article>
      </section>

      <AdSlot slotKey="contentMid" label="Example page ad" minHeightClass="min-h-[140px]" />

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {isKo ? "이 예시가 도움이 되는 이유" : "Why this example matters"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {isKo
              ? "예시 페이지는 처음 보시는 계산기에서도 어떤 숫자를 넣으면 좋을지 감을 잡으실 수 있도록 도와드려요. 빈 화면에서 시작하지 않으셔도 되도록 시나리오 하나를 미리 풀어드린 형태입니다."
              : "Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own situation."}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {isKo
              ? "구체적인 금액·조건을 검색하셔서 들어오신 분도 결과를 바로 보실 수 있도록 구성했어요. 본인 케이스로 바꿔 계산하고 싶으시면 위쪽 \"계산기 열기\" 링크에서 입력값만 수정하시면 됩니다."
              : "This is especially useful for users who searched for a very specific long-tail question and want a quick answer. To run the same calculator with your own numbers, follow the \"Open calculator\" link below."}
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {isKo ? "관련 페이지 이동" : "Continue exploring"}
          </h2>
          <div className="mt-4 space-y-3">
            <Link
              href={withLocale(locale, `/calculators/${calculator.category}/${calculator.slug}`)}
              className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            >
              {isKo ? "계산기 열기" : "Open calculator"}
            </Link>
            <Link
              href={withLocale(locale, hubLinks.formula)}
              className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            >
              {isKo ? "공식 보기" : "Read the formula"}
            </Link>
            <Link
              href={withLocale(locale, hubLinks.guide)}
              className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            >
              {isKo ? "가이드 보기" : "Read the guide"}
            </Link>
          </div>
        </article>
      </section>

      {/* Sibling-scenario discovery — surfaces 8 nearby example pages
          so the entire programmatic grid is internally linked together.
          Critical for crawl depth and topical authority. */}
      <NearbyScenarios
        calculatorBase={`/calculators/${calculator.category}/${calculator.slug}`}
        currentSlug={exampleData.slug}
        examples={getCalculatorExamples(calculator).map((item) =>
          localizeProgrammaticExample(item, calculator, locale),
        )}
        locale={locale}
      />
    </div>
  );
}

function NearbyScenarios({
  calculatorBase,
  currentSlug,
  examples,
  locale,
}: {
  calculatorBase: string;
  currentSlug: string;
  examples: ReturnType<typeof getCalculatorExamples>;
  locale: "en" | "ko";
}) {
  const isKo = locale === "ko";
  const currentIndex = examples.findIndex((item) => item.slug === currentSlug);
  if (currentIndex === -1 || examples.length <= 1) return null;

  // Pick 8 nearby scenarios in the grid: 4 before and 4 after, wrapping
  // around the array. This creates a natural "next/previous" mesh that
  // crawlers traverse quickly.
  const total = examples.length;
  const picks: typeof examples = [];
  for (let offset = -4; offset <= 4; offset++) {
    if (offset === 0) continue;
    const idx = (currentIndex + offset + total) % total;
    picks.push(examples[idx]);
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold text-slate-900">
        {isKo ? "비슷한 시나리오 더 보기" : "Explore nearby scenarios"}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
        {isKo
          ? "조건을 조금씩 바꿔본 다른 시나리오 페이지도 함께 살펴보시면 본인 상황에 가까운 결과를 더 빠르게 찾으실 수 있어요."
          : "Try a slightly different scenario to see how the result moves — useful for narrowing in on the values closest to your situation."}
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {picks.map((item) => (
          <Link
            key={item.slug}
            href={withLocale(locale, `${calculatorBase}/examples/${item.slug}`)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
