"use client";

import { useEffect, useRef } from "react";
import {
  ADFIT_ENABLED,
  adFitSlotMap,
  adSlotMap,
  type AdSlotKey,
  getAdClientId,
  SHOW_AD_PLACEHOLDERS,
} from "@/lib/ads";
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
   * Locale of the surrounding page so the label matches the page locale.
   */
  locale?: Locale;
}) {
  const adFitContainerRef = useRef<HTMLDivElement>(null);
  const adFitUnit = adFitSlotMap[slotKey];
  const shouldRenderAdFit = ADFIT_ENABLED && Boolean(adFitUnit?.unit);
  const adClient = getAdClientId();
  const adSlot = adSlotMap[slotKey];
  const shouldRenderAdSense = !shouldRenderAdFit && Boolean(adClient && adSlot);
  const isKo = locale === "ko";
  const headLabel = label ?? (isKo ? "광고" : "Advertisement");

  useEffect(() => {
    if (!shouldRenderAdFit || !adFitContainerRef.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://t1.daumcdn.net/kas/static/ba.min.js";
    adFitContainerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, [shouldRenderAdFit, adFitUnit?.unit, slotKey]);

  useEffect(() => {
    if (!shouldRenderAdSense) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // no-op: this keeps the ad component from breaking the page
    }
  }, [shouldRenderAdSense, slotKey]);

  if (shouldRenderAdFit) {
    return (
      <div className={className}>
        <div className={`overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 text-center shadow-sm ${minHeightClass}`}>
          <div className="px-2 pb-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            {headLabel}
          </div>
          <div ref={adFitContainerRef} className="flex w-full justify-center overflow-hidden">
            <ins
              className="kakao_ad_area"
              style={{ display: "none" }}
              data-ad-unit={adFitUnit.unit}
              data-ad-width={String(adFitUnit.width)}
              data-ad-height={String(adFitUnit.height)}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!shouldRenderAdSense) {
    if (!SHOW_AD_PLACEHOLDERS) return null;

    return (
      <div className={className}>
        <div className={`overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-4 ${minHeightClass}`}>
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{headLabel}</div>
            <div className="mt-2 text-sm font-semibold text-slate-700">
              {isKo ? "광고 영역입니다" : "Reserved ad space"}
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
              {isKo
                ? "광고 노출을 잠시 꺼둔 상태입니다."
                : "Ad rendering is currently disabled for this environment."}
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
