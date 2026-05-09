"use client";

import { useEffect } from "react";
import { adSlotMap, type AdSlotKey, getAdClientId, SHOW_AD_PLACEHOLDERS } from "@/lib/ads";
import type { Locale } from "@/lib/i18n";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({
  slotKey,
  label,
  className = "",
  minHeightClass = "min-h-[120px]",
  locale = "en",
}: {
  slotKey: AdSlotKey;
  label?: string;
  className?: string;
  minHeightClass?: string;
  /**
   * Locale of the surrounding page so the placeholder copy (shown only
   * during the AdSense pre-approval period) matches the page locale.
   */
  locale?: Locale;
}) {
  const adClient = getAdClientId();
  const adSlot = adSlotMap[slotKey];
  const shouldRenderLiveAd = Boolean(adClient && adSlot);
  const isKo = locale === "ko";
  const headLabel = label ?? (isKo ? "광고" : "Advertisement");

  useEffect(() => {
    if (!shouldRenderLiveAd) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // no-op: this keeps the placeholder-safe component from breaking the page
    }
  }, [shouldRenderLiveAd, slotKey]);

  if (!shouldRenderLiveAd) {
    if (!SHOW_AD_PLACEHOLDERS) return null;

    return (
      <div className={className}>
        <div className={`overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-4 ${minHeightClass}`}>
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{headLabel}</div>
            <div className="mt-2 text-sm font-semibold text-slate-700">
              {isKo ? "광고가 들어갈 자리예요" : "Reserved ad space"}
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
              {isKo
                ? "AdSense 승인 이후 환경 변수에 슬롯 ID를 입력하시면 이 자리에서 광고가 자동으로 노출됩니다."
                : "This area is pre-configured for AdSense. After approval, add the client ID and slot ID to the environment variables to activate ads."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="px-2 pb-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">{headLabel}</div>
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
