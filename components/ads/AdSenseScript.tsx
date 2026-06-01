import Script from "next/script";
import { ADFIT_ENABLED, getAdClientId } from "@/lib/ads";

export default function AdSenseScript() {
  const adClient = getAdClientId();

  if (ADFIT_ENABLED || !adClient) return null;

  return (
    <Script
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
    />
  );
}
