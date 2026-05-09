import type { Locale } from "@/lib/i18n";

type Props = {
  label?: string;
  compact?: boolean;
  /**
   * Locale of the surrounding page. When omitted the placeholder defaults to
   * English copy. Used so the brief placeholder text matches the page locale
   * during the AdSense pre-approval period (placeholders disappear once
   * NEXT_PUBLIC_AD_SLOT_* env vars are set).
   */
  locale?: Locale;
};

export default function AdPlaceholder({ label, compact = false, locale = "en" }: Props) {
  const isKo = locale === "ko";
  const headLabel = label ?? (isKo ? "광고" : "Advertisement");
  const bodyText = isKo ? "광고가 들어갈 자리예요" : "Reserved ad space";

  return (
    <div
      className={`rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center ${
        compact ? "p-4" : "p-6 md:p-8"
      }`}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {headLabel}
      </div>
      <div className="mt-2 text-sm text-slate-600">{bodyText}</div>
    </div>
  );
}
