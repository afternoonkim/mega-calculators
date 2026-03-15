export type AdSlotKey =
  | "siteTop"
  | "siteBottom"
  | "homeMid"
  | "calculatorsIndexMid"
  | "categoryMid"
  | "contentMid"
  | "contentBottom";

export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const SHOW_AD_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS !== "false";

export const adSlotMap: Record<AdSlotKey, string> = {
  siteTop: process.env.NEXT_PUBLIC_AD_SLOT_SITE_TOP ?? "",
  siteBottom: process.env.NEXT_PUBLIC_AD_SLOT_SITE_BOTTOM ?? "",
  homeMid: process.env.NEXT_PUBLIC_AD_SLOT_HOME_MID ?? "",
  calculatorsIndexMid: process.env.NEXT_PUBLIC_AD_SLOT_CALCULATORS_INDEX_MID ?? "",
  categoryMid: process.env.NEXT_PUBLIC_AD_SLOT_CATEGORY_MID ?? "",
  contentMid: process.env.NEXT_PUBLIC_AD_SLOT_CONTENT_MID ?? "",
  contentBottom: process.env.NEXT_PUBLIC_AD_SLOT_CONTENT_BOTTOM ?? "",
};

export function getAdClientId() {
  return ADSENSE_CLIENT.startsWith("ca-pub-") ? ADSENSE_CLIENT : ADSENSE_CLIENT ? `ca-pub-${ADSENSE_CLIENT}` : "";
}
