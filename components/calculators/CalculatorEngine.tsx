"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalculatorDefinition } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import AdPlaceholder from "@/components/ads/AdPlaceholder";
import CalculatorSeoContent from "@/components/calculators/CalculatorSeoContent";
import ResultActions from "@/components/calculators/ResultActions";
import { RecentTracker } from "@/components/calculators/RecentCalculators";
import { localizeUiText, localizeInputLabel, localizeResultText } from "@/lib/calculators/localization";
import type { Locale } from "@/lib/i18n";

type RelatedLink = {
  name: string;
  href: string;
};

type HubLinks = {
  formula: string;
  guide: string;
  useCases: string;
  examples: {
    title: string;
    href: string;
  }[];
};

type CalculatorEngineProps = {
  definition: CalculatorDefinition;
  relatedLinks: RelatedLink[];
  hubLinks?: HubLinks;
  locale: Locale;
};

export default function CalculatorEngine({ definition, relatedLinks, hubLinks, locale }: CalculatorEngineProps) {
  const [values, setValues] = useState<Record<string, string>>(getDefaultValues(definition));
  const result = useMemo(() => computeCalculator(definition, values, locale), [definition, values, locale]);
  const t = (text: string) => localizeUiText(text, locale);

  return (
    <div className="space-y-8">
      <RecentTracker category={definition.category} slug={definition.slug} name={definition.name} />
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{locale === "ko" ? "무료 계산기" : "Free calculator"}</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{definition.name}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{definition.description}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {definition.inputs.map((input) => (
              <label key={input.name} className={`block ${input.type === "textarea" ? "md:col-span-2" : ""}`}>
                <span className="mb-2 block text-sm font-semibold text-slate-700">{localizeInputLabel(input.label, locale)}</span>
                {input.type === "select" ? (
                  <select
                    value={values[input.name] ?? ""}
                    onChange={(event) => setValues((current) => ({ ...current, [input.name]: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                  >
                    {input.options?.map((option) => (
                      <option key={option.value} value={option.value}>{localizeInputLabel(option.label, locale)}</option>
                    ))}
                  </select>
                ) : input.type === "textarea" ? (
                  <textarea
                    value={values[input.name] ?? ""}
                    onChange={(event) => setValues((current) => ({ ...current, [input.name]: event.target.value }))}
                    className="min-h-28 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                  />
                ) : (
                  <input
                    type={input.type}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={values[input.name] ?? ""}
                    onChange={(event) => setValues((current) => ({ ...current, [input.name]: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                  />
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t("Instant result")}</div>
            <div className="mt-5 rounded-3xl bg-white/5 p-6">
              <div className="text-sm text-slate-300">{localizeResultText(result.primary.label, locale)}</div>
              <div className="mt-3 break-words text-3xl font-extrabold tracking-tight text-white md:text-4xl">{localizeResultText(result.primary.value, locale)}</div>
            </div>
            {result.secondary?.length ? (
              <div className="mt-6 space-y-3">
                {result.secondary.map((item, index) => (
                  <div key={`${item.label}-${index}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">{localizeResultText(item.label, locale)}</span>
                    <span className="break-words text-right text-sm font-semibold text-white">{localizeResultText(item.value, locale)}</span>
                  </div>
                ))}
              </div>
            ) : null}
            {result.note ? <p className="mt-5 text-sm leading-7 text-amber-200">{localizeResultText(result.note, locale)}</p> : null}
            <ResultActions
              locale={locale}
              title={definition.name}
              resultText={`${localizeResultText(result.primary.label, locale)}: ${localizeResultText(result.primary.value, locale)}`}
              secondaryLines={result.secondary?.map((item) => `${localizeResultText(item.label, locale)}: ${localizeResultText(item.value, locale)}`) ?? []}
            />
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
              <p>{t("Calculator results are provided for planning and educational purposes. For taxes, legal decisions, lending, or medical advice, verify the numbers with an official source or qualified professional.")}</p>
            </div>
          </div>

          <AdPlaceholder label="Calculator ad" compact />
        </div>
      </section>

      <AdPlaceholder label="In-content ad" />

      {hubLinks ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{t("More tools for this calculator")}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{locale === "ko" ? "공식, 사용 가이드, 활용 사례, 예시 페이지를 통해 계산 결과를 더 쉽게 이해할 수 있습니다." : "Explore the formula, step-by-step guide, common use cases, and example scenarios related to this calculator."}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href={hubLinks.formula} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{t("Formula")}</div><div className="mt-2 text-sm text-blue-700">{t("View formula →")}</div></Link>
            <Link href={hubLinks.guide} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{t("Guide")}</div><div className="mt-2 text-sm text-blue-700">{t("Read guide →")}</div></Link>
            <Link href={hubLinks.useCases} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{t("Use cases")}</div><div className="mt-2 text-sm text-blue-700">{t("See use cases →")}</div></Link>
          </div>
          {hubLinks.examples?.length ? (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900">{t("Examples")}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Array.from(
                  new Map(
                    hubLinks.examples.map((item) => [item.href, item])
                  ).values()
                ).map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {localizeUiText(item.title, locale)}
                    </div>
                    <div className="mt-2 text-sm text-blue-700">
                      {t("Open example →")}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("About this calculator")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.intro}</p></section>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("How this calculator works")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.formulaText}</p></article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("How to use it")}</h2><ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">{definition.howToUse.map((item) => <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</li>)}</ol></article>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("Example")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.example}</p></section>
      <CalculatorSeoContent definition={definition} locale={locale} relatedLinks={relatedLinks} />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{locale === "ko" ? "자주 묻는 질문" : "Frequently asked questions"}</h2><div className="mt-5 space-y-4">{definition.faq.map((item) => <article key={item.q} className="rounded-2xl border border-slate-200 p-5"><h3 className="text-base font-semibold text-slate-900">{item.q}</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p></article>)}</div></section>
      {relatedLinks?.length ? <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("Related calculators")}</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{relatedLinks.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{item.name}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "바로가기 →" : "Open calculator →"}</div></Link>)}</div></section> : null}
    </div>
  );
}
