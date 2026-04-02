import Link from "next/link";
import { getCalculatorSeoContent } from "@/lib/calculators/seoContent";
import type { CalculatorDefinition } from "@/lib/calculators/data";
import { withLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type RelatedLink = {
  name: string;
  href: string;
};

type Props = {
  definition: CalculatorDefinition;
  locale: Locale;
  relatedLinks: RelatedLink[];
};

export default function CalculatorSeoContent({ definition, locale, relatedLinks }: Props) {
  const content = getCalculatorSeoContent(definition, locale, relatedLinks);

  return (
    <>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              {locale === "ko" ? "활용 가이드" : "Planning guide"}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">{content.audienceTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{content.audienceIntro}</p>
          </div>
          <div className="grid gap-3">
            {content.audiences.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{content.checksTitle}</h2>
          <div className="mt-5 space-y-3">
            {content.checks.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 px-4 py-4 text-sm leading-7 text-slate-600 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">{content.mistakesTitle}</h2>
          <div className="mt-5 space-y-3">
            {content.mistakes.map((item) => (
              <div key={item} className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-7 text-amber-950 md:text-base">
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{content.readingTitle}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
          {content.readingParagraphs.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{content.scenariosTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.scenarios.map((scenario) => (
            <article key={scenario.title} className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-base font-semibold text-slate-900">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{scenario.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{content.relatedContentTitle}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{content.relatedContentIntro}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {content.relatedContent.map((item) => (
            <Link
              key={item.href}
              href={withLocale(locale, item.href)}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="text-base font-semibold text-slate-900">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-4 text-sm font-semibold text-blue-700">{item.cta}</div>
            </Link>
          ))}
        </div>
      </section>

      {relatedLinks?.length ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {locale === "ko" ? "함께 보면 좋은 계산기" : "Compare with related calculators"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {locale === "ko"
              ? "입력값이나 결과를 다른 방식으로 비교하고 싶다면 아래 계산기를 함께 확인해보세요. 같은 주제를 다른 관점에서 보는 데 도움이 됩니다."
              : "Use these related tools when you want to compare the same question from a slightly different angle or test a second scenario before making a decision."}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                <div className="mt-2 text-sm text-blue-700">{locale === "ko" ? "계산기 열기 →" : "Open calculator →"}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
