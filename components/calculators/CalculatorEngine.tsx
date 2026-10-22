"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalculatorDefinition } from "@/lib/calculators/data";
import { computeCalculator, getDefaultValues } from "@/lib/calculators/engine";
import { validateCalculatorInputs } from "@/lib/calculators/validation";
import CalculatorSeoContent from "@/components/calculators/CalculatorSeoContent";
import { getEnhancedCalculatorContent } from "@/lib/calculators/enhancedContent";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import ResultActions from "@/components/calculators/ResultActions";
import { RecentTracker } from "@/components/calculators/RecentCalculators";
import AdvisoryNotice from "@/components/calculators/AdvisoryNotice";
import AdSlot from "@/components/ads/AdSlot";
import { localizeUiText, localizeInputLabel, localizeResultText, localizeProgrammaticExample } from "@/lib/calculators/localization";
import type { Locale } from "@/lib/i18n";

type RelatedLink = { name: string; href: string };
type HubLinks = { formula: string; guide: string; useCases: string; examples: { title: string; href: string }[] };
type CalculatorEngineProps = { definition: CalculatorDefinition; relatedLinks: RelatedLink[]; hubLinks?: HubLinks; locale: Locale; embedMode?: boolean };

export default function CalculatorEngine({ definition, relatedLinks, hubLinks, locale, embedMode = false }: CalculatorEngineProps) {
  const [values, setValues] = useState<Record<string, string>>(getDefaultValues(definition));
  const [copied, setCopied] = useState(false);
  const examplePresets = useMemo(() => {
    const defaults = getDefaultValues(definition);
    const seen = new Set<string>();
    return getCalculatorExamples(definition)
      .map((example) => {
        const values = { ...defaults, ...example.overrides };
        const keys = Object.keys(example.overrides);
        if (!keys.length || keys.some((key) => !definition.inputs.some((input) => input.name === key))) return null;
        if (Object.keys(validateCalculatorInputs(definition, values)).length) return null;
        const signature = definition.inputs.map((input) => values[input.name] ?? "").join("|");
        if (seen.has(signature)) return null;
        seen.add(signature);
        return { slug: example.slug, title: localizeProgrammaticExample(example, definition, locale).title, values };
      })
      .filter((item): item is { slug: string; title: string; values: Record<string, string> } => item !== null)
      .slice(0, 4);
  }, [definition, locale]);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const applyExample = (preset: (typeof examplePresets)[number]) => {
    setValues({ ...preset.values });
    setSelectedExample(preset.slug);
  };
  const resetExample = () => {
    setValues(getDefaultValues(definition));
    setSelectedExample(null);
  };

  const validationErrors = useMemo(() => validateCalculatorInputs(definition, values), [definition, values]);
  const hasValidationErrors = Object.keys(validationErrors).length > 0;
  const result = useMemo(
    () => hasValidationErrors
      ? {
          primary: {
            label: locale === "ko" ? "입력값 확인" : "Check your inputs",
            value: locale === "ko" ? "표시된 항목을 수정해주세요." : "Fix the highlighted fields.",
          },
          note: locale === "ko" ? "잘못된 입력값으로 계산하지 않습니다." : "No calculation is shown until the inputs are valid.",
        }
      : computeCalculator(definition, values, locale),
    [definition, values, locale, hasValidationErrors],
  );
  const enhanced = getEnhancedCalculatorContent(definition, locale);
  const t = (text: string) => localizeUiText(text, locale);
  const canonicalUrl = `https://mega-calculators.com/${locale}/calculators/${definition.category}/${definition.slug}`;
  const embedUrl = `${canonicalUrl}?embed=1`;
  const embedCode = `<iframe src="${embedUrl}" width="100%" height="600" style="border:0;" title="${definition.name}"></iframe>`;
  const copyEmbedCode = async () => { try { await navigator.clipboard.writeText(embedCode); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); } };

  return (
    <div className={embedMode ? "mx-auto max-w-3xl space-y-6 p-4" : "space-y-6 md:space-y-8"}>
      {embedMode ? null : <RecentTracker category={definition.category} slug={definition.slug} />}
      <section className={embedMode ? "grid gap-6" : "grid gap-4 md:gap-6 lg:grid-cols-[1.1fr_0.9fr]"}>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-3xl md:p-8">
          <div className="mb-4 md:mb-6"><div className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 md:inline-flex">{locale === "ko" ? "무료 계산기" : "Free calculator"}</div><h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:mt-4 md:text-4xl">{definition.name}</h1><p className="sr-only mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:not-sr-only md:block md:text-base">{definition.description}</p>{!embedMode ? <a href="#calculator-result" className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 md:hidden"><span className="min-w-0"><span className="block text-xs font-semibold text-blue-700">{locale === "ko" ? "현재 결과" : "Current result"}</span><span className="mt-1 block break-words text-lg font-extrabold text-slate-950">{localizeResultText(result.primary.value, locale)}</span></span><span className="shrink-0 text-xs font-semibold text-blue-700">{locale === "ko" ? "자세히 ↓" : "Details ↓"}</span></a> : null}</div>
          {examplePresets.length > 0 ? (
            <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-slate-900">{locale === "ko" ? "예시 값으로 바로 계산" : "Try a calculation example"}</h2>
                <button type="button" onClick={resetExample} className="text-xs font-semibold text-blue-700 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{locale === "ko" ? "기본값으로 초기화" : "Reset defaults"}</button>
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-600">{locale === "ko" ? "예시를 누르면 입력값이 적용되고 결과가 자동으로 바뀝니다." : "Select an example to fill the inputs and update the result automatically."}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {examplePresets.map((preset, index) => (
                  <button key={preset.slug} type="button" onClick={() => applyExample(preset)} aria-pressed={selectedExample === preset.slug} className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${selectedExample === preset.slug ? "border-blue-600 bg-blue-600 text-white" : "border-blue-200 bg-white text-blue-800 hover:border-blue-400"}`} title={preset.title}>
                    {locale === "ko" ? `예시 ${index + 1}` : `Example ${index + 1}`}
                    <span className="ml-1 font-normal opacity-80">{definition.inputs.filter((input) => preset.values[input.name] !== getDefaultValues(definition)[input.name]).slice(0, 1).map((input) => `${localizeInputLabel(input.label, locale)}: ${preset.values[input.name]}`).join("")}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {definition.inputs.map((input) => {
              const inputId = `calculator-input-${input.name}`;
              const errorId = `${inputId}-error`;
              const error = validationErrors[input.name];
              const sharedClass = `w-full rounded-xl border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:rounded-2xl md:px-4 md:py-3 ${error ? "border-red-400" : "border-slate-300"}`;
              const updateValue = (value: string) => { setSelectedExample(null); setValues((current) => ({ ...current, [input.name]: value })); };
              return (
                <div key={input.name} className={input.type === "textarea" ? "md:col-span-2" : ""}>
                  <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-slate-700 md:mb-2">{localizeInputLabel(input.label, locale)}</label>
                  {input.type === "select" ? (
                    <select id={inputId} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={sharedClass}>
                      {input.options?.map((option) => <option key={option.value} value={option.value}>{localizeInputLabel(option.label, locale)}</option>)}
                    </select>
                  ) : input.type === "textarea" ? (
                    <textarea id={inputId} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`min-h-28 ${sharedClass}`} />
                  ) : (
                    <input id={inputId} type={input.type} min={input.min} max={input.max} step={input.step} value={values[input.name] ?? ""} onChange={(event) => updateValue(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={sharedClass} />
                  )}
                  {error ? <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-red-700">{locale === "ko" ? "입력값을 확인해주세요." : error}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4 md:space-y-6"><div id="calculator-result" role="status" aria-live="polite" aria-atomic="true" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm md:rounded-3xl md:p-8"><div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t("Instant result")}</div><div className="mt-4 rounded-2xl bg-white/5 p-4 md:mt-5 md:rounded-3xl md:p-6"><div className="text-sm text-slate-300">{localizeResultText(result.primary.label, locale)}</div><div className="mt-2 break-words text-2xl font-extrabold tracking-tight text-white md:mt-3 md:text-4xl">{localizeResultText(result.primary.value, locale)}</div></div>{result.secondary?.length ? (<div className="mt-6 space-y-3">{result.secondary.map((item, index) => (<div key={`${item.label}-${index}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><span className="text-sm text-slate-300">{localizeResultText(item.label, locale)}</span><span className="break-words text-right text-sm font-semibold text-white">{localizeResultText(item.value, locale)}</span></div>))}</div>) : null}{result.note ? <p className="mt-5 text-sm leading-7 text-amber-200">{localizeResultText(result.note, locale)}</p> : null}<ResultActions locale={locale} title={definition.name} resultText={`${localizeResultText(result.primary.label, locale)}: ${localizeResultText(result.primary.value, locale)}`} secondaryLines={result.secondary?.map((item) => `${localizeResultText(item.label, locale)}: ${localizeResultText(item.value, locale)}`) ?? []} /><div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300"><h2 className="text-base font-bold text-white">{enhanced?.interpretationTitle ?? (locale === "ko" ? "결과를 읽는 방법" : "How to read this result")}</h2><div className="mt-3 space-y-3">{(enhanced?.interpretation ?? [t("Calculator results are provided for planning and educational purposes. For taxes, legal decisions, lending, or medical advice, verify the numbers with an official source or qualified professional.")]).map((item) => (<p key={item}>{item}</p>))}</div></div></div></div>
      </section>
      {!embedMode ? (
        <AdSlot
          slotKey="contentMid"
          label={locale === "ko" ? "광고" : "Advertisement"}
          minHeightClass="min-h-[120px]"
          locale={locale}
        />
      ) : null}
      {!embedMode ? <AdvisoryNotice definition={definition} locale={locale} /> : null}
      {embedMode ? <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600"><a href={canonicalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700">Powered by Mega Calculators</a></div> : null}
      {embedMode ? null : (<details className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"><summary className="cursor-pointer list-none text-sm font-semibold text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">{locale === "ko" ? "웹사이트에 이 계산기 추가" : "Add this calculator to a website"}<span aria-hidden="true" className="ml-2 inline-block transition group-open:rotate-180">⌄</span></summary><div className="mt-4 border-t border-slate-200 pt-4"><p className="text-sm leading-7 text-slate-600">{locale === "ko" ? "블로그나 웹사이트를 운영하신다면 아래 코드를 복사해 계산기를 삽입할 수 있습니다." : "If you run a blog or website, copy the code below to embed this calculator."}</p><div className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4"><code className="whitespace-pre text-sm leading-7 text-slate-100">{embedCode}</code></div><button type="button" onClick={copyEmbedCode} className="mt-4 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">{copied ? (locale === "ko" ? "복사 완료" : "Copied") : (locale === "ko" ? "삽입 코드 복사" : "Copy embed code")}</button></div></details>)}
      {!embedMode && hubLinks ? (<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{locale === "ko" ? "결과를 더 잘 이해하려면" : "Get more from your result"}</h2><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{locale === "ko" ? "결과가 왜 이렇게 나왔는지 확인하거나, 입력 방법과 다른 계산 예시가 필요할 때 아래 내용을 확인해보세요." : "Check how the result is calculated, review the inputs, or compare your numbers with practical examples."}</p><div className="mt-6 grid gap-4 md:grid-cols-3"><Link href={hubLinks.formula} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{locale === "ko" ? "계산 원리" : "How it is calculated"}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "계산 원리 이해하기 →" : "Understand the calculation →"}</div></Link><Link href={hubLinks.guide} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{locale === "ko" ? "입력 방법" : "How to use it"}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "입력 방법 확인하기 →" : "See how to use it →"}</div></Link><Link href={hubLinks.useCases} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{locale === "ko" ? "언제 유용한가요" : "When it is useful"}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "언제 유용한지 보기 →" : "See practical uses →"}</div></Link></div>{hubLinks.examples?.length ? (<div className="mt-6"><h3 className="text-lg font-semibold text-slate-900">{locale === "ko" ? "다른 계산 예시" : "More calculation examples"}</h3><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{Array.from(new Map(hubLinks.examples.map((item) => [item.href, item])).values()).map((item, index) => (<Link key={`${item.href}-${index}`} href={item.href} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{localizeUiText(item.title, locale)}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "계산 예시 보기 →" : "See calculation →"}</div></Link>))}</div></div>) : null}</section>) : null}
      {!embedMode ? <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("About this calculator")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.intro}</p></section> : null}
      {!embedMode ? <section className="grid gap-6 lg:grid-cols-2"><article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("How this calculator works")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.formulaText}</p></article><article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("How to use it")}</h2><ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">{definition.howToUse.map((item) => <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</li>)}</ol></article></section> : null}
      {!embedMode ? <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("Example")}</h2><p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{definition.example}</p></section> : null}
      {!embedMode ? <CalculatorSeoContent definition={definition} locale={locale} relatedLinks={relatedLinks} /> : null}
      {!embedMode ? <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{locale === "ko" ? "자주 묻는 질문" : "Frequently asked questions"}</h2><div className="mt-5 space-y-4">{definition.faq.map((item) => <article key={item.q} className="rounded-2xl border border-slate-200 p-5"><h3 className="text-base font-semibold text-slate-900">{item.q}</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p></article>)}</div></section> : null}
      {!embedMode && relatedLinks?.length ? <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><h2 className="text-2xl font-bold text-slate-900">{t("Related calculators")}</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{relatedLinks.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"><div className="text-sm font-semibold text-slate-900">{item.name}</div><div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "바로가기 →" : "Open calculator →"}</div></Link>)}</div></section> : null}
    </div>
  );
}
