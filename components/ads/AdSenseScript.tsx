import Script from "next/script";
import { getAdClientId } from "@/lib/ads";

export default function AdSenseScript() {
  return null;
  // const adClient = getAdClientId();

  // if (!adClient) return null;

  // return (
  //   <Script
  //     async
  //     strategy="afterInteractive"
  //     crossOrigin="anonymous"
  //     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
  //   />
  // );
}
