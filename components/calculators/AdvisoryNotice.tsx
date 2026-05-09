import { getAdvisoryFor } from "@/lib/calculators/advisories";
import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";

type Props = {
  definition: Pick<CalculatorDefinition, "slug" | "category">;
  locale: Locale;
};

/**
 * Authoritative advisory paragraph rendered directly under a calculator
 * result. Picks the most specific advisory for the calculator (slug-level
 * override, then category fallback, then a global default).
 *
 * Uses the existing site theme (rounded-3xl, slate borders, blue accent)
 * with a small amber-tinted icon block so the user reads the advisory as
 * "useful guidance" rather than a warning. Designed to be a positive
 * trust signal, not an alarm.
 */
export default function AdvisoryNotice({ definition, locale }: Props) {
  const advisory = getAdvisoryFor(definition, locale);
  const isKo = locale === "ko";
  const sectionLabel = isKo ? "참고 사항" : "Good to know";

  return (
    <aside
      aria-label={advisory.heading}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-7"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {sectionLabel}
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900 md:text-lg">{advisory.heading}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{advisory.body}</p>
        </div>
      </div>
    </aside>
  );
}
