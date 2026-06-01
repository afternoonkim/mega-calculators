export type AdSlotKey =
  | "siteTop"
  | "siteBottom"
  | "homeMid"
  | "calculatorsIndexMid"
  | "categoryMid"
  | "contentMid"
  | "contentBottom";

export type AdFitUnit = {
  unit: string;
  width: 300 | 320;
  height: 50 | 100 | 250;
};

export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const SHOW_AD_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === "true";
export const ADFIT_ENABLED = process.env.NEXT_PUBLIC_ADFIT_ENABLED !== "false";

const env = (key: string) => process.env[key] ?? "";

export const adSlotMap: Record<AdSlotKey, string> = {
  siteTop: env("NEXT_PUBLIC_AD_SLOT_SITE_TOP"),
  siteBottom: env("NEXT_PUBLIC_AD_SLOT_SITE_BOTTOM"),
  homeMid: env("NEXT_PUBLIC_AD_SLOT_HOME_MID"),
  calculatorsIndexMid: env("NEXT_PUBLIC_AD_SLOT_CALCULATORS_INDEX_MID"),
  categoryMid: env("NEXT_PUBLIC_AD_SLOT_CATEGORY_MID"),
  contentMid: env("NEXT_PUBLIC_AD_SLOT_CONTENT_MID"),
  contentBottom: env("NEXT_PUBLIC_AD_SLOT_CONTENT_BOTTOM"),
};

export const adFitSlotMap: Record<AdSlotKey, AdFitUnit> = {
  siteTop: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_320_50") || "DAN-WmqCCZWlwyQBfAY5",
    width: 320,
    height: 50,
  },
  siteBottom: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_300_250") || "DAN-Xda4qFTcQxfBSlpN",
    width: 300,
    height: 250,
  },
  homeMid: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_320_100") || "DAN-jBAT8M2FjwiGS2pP",
    width: 320,
    height: 100,
  },
  calculatorsIndexMid: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_320_100") || "DAN-jBAT8M2FjwiGS2pP",
    width: 320,
    height: 100,
  },
  categoryMid: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_320_100") || "DAN-jBAT8M2FjwiGS2pP",
    width: 320,
    height: 100,
  },
  contentMid: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_320_100") || "DAN-jBAT8M2FjwiGS2pP",
    width: 320,
    height: 100,
  },
  contentBottom: {
    unit: env("NEXT_PUBLIC_ADFIT_UNIT_300_250") || "DAN-Xda4qFTcQxfBSlpN",
    width: 300,
    height: 250,
  },
};

export function getAdClientId() {
  return ADSENSE_CLIENT.startsWith("ca-pub-") ? ADSENSE_CLIENT : ADSENSE_CLIENT ? `ca-pub-${ADSENSE_CLIENT}` : "";
}
