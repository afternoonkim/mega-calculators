export const SITE_URL = "https://mega-calculators.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationReference = {
  "@id": ORGANIZATION_ID,
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Mega Calculators",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
} as const;


export function getEditorialTeamAuthor(locale: "en" | "ko") {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#editorial-team`,
    name: locale === "ko" ? "Mega Calculators 에디토리얼팀" : "Mega Calculators Editorial Team",
    url: `${SITE_URL}/${locale}/editorial-standards`,
    parentOrganization: organizationReference,
  } as const;
}
