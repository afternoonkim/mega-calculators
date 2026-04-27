import { getSisterSiteForTopic, type SisterSiteTopic } from "@/lib/seo/sister-sites";
import type { Locale } from "@/lib/i18n";

type Props = {
  topic: SisterSiteTopic;
  locale: Locale;
  /**
   * Optional override for the section heading shown above the card.
   * Defaults to a polite "관련 사이트" / "Related site" label.
   */
  heading?: string;
};

/**
 * Inline contextual card surfacing a sister site relevant to the page topic.
 * Renders nothing if no partner site matches the topic+locale combination
 * (e.g. an English health page when only momtools is configured for both —
 * fine; an English finance page where bluedino is KO-only — returns null).
 *
 * Uses the existing site theme: rounded-3xl, slate borders, blue accent.
 * Outbound links open in a new tab with rel="noopener" so the destination
 * preserves the referrer (for partner attribution) without exposing
 * window.opener.
 */
export default function SisterSiteCard({ topic, locale, heading }: Props) {
  const site = getSisterSiteForTopic(topic, locale);
  if (!site) return null;

  const isKo = locale === "ko";
  const sectionLabel = heading ?? (isKo ? "관련 사이트" : "Related site");

  return (
    <aside
      aria-label={`${site.name} ${sectionLabel}`}
      className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm md:p-8"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        {sectionLabel}
      </div>
      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-950">{site.name}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{site.blurb}</p>
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener"
          className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          {site.cta}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
