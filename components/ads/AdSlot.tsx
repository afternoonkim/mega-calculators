"use client";

import { useEffect } from "react";
import { adSlotMap, type AdSlotKey, getAdClientId, SHOW_AD_PLACEHOLDERS } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({
  slotKey,
  label = "Advertisement",
  className = "",
  minHeightClass = "min-h-[120px]",
}: {
  slotKey: AdSlotKey;
  label?: string;
  className?: string;
  minHeightClass?: string;
}) {
  return null;
  // const adClient = getAdClientId();
  // const adSlot = adSlotMap[slotKey];
  // const shouldRenderLiveAd = Boolean(adClient && adSlot);

  // useEffect(() => {
  //   if (!shouldRenderLiveAd) return;

  //   try {
  //     window.adsbygoogle = window.adsbygoogle || [];
  //     window.adsbygoogle.push({});
  //   } catch {
  //     // no-op: this keeps the placeholder-safe component from breaking the page
  //   }
  // }, [shouldRenderLiveAd, slotKey]);

  // if (!shouldRenderLiveAd) {
  //   if (!SHOW_AD_PLACEHOLDERS) return null;

  //   return (
  //     <div className={className}>
  //       <div className={`overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-4 ${minHeightClass}`}>
  //         <div className="flex h-full flex-col items-center justify-center text-center">
  //           <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</div>
  //           <div className="mt-2 text-sm font-semibold text-slate-700">Reserved Ad Space</div>
  //           <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
  //             This area is pre-configured for AdSense. After approval, add the client ID and slot ID to the environment variables to activate ads with minimal code changes.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className={className}>
  //     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
  //       <div className="px-2 pb-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">{label}</div>
  //       <ins
  //         className="adsbygoogle block"
  //         style={{ display: "block" }}
  //         data-ad-client={adClient}
  //         data-ad-slot={adSlot}
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"
  //       />
  //     </div>
  //   </div>
  // );
}
