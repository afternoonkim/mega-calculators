import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { ORGANIZATION_ID, organizationReference, organizationSchema, SITE_URL } from "@/lib/seo/structuredData";

const source = (path: string) => readFileSync(path, "utf-8");

describe("structured data policy", () => {
  it("defines one canonical Organization identity", () => {
    expect(organizationSchema["@type"]).toBe("Organization");
    expect(organizationSchema["@id"]).toBe(`${SITE_URL}/#organization`);
    expect(organizationSchema.url).toBe(SITE_URL);
    expect(organizationSchema.logo.url).toBe(`${SITE_URL}/android-chrome-512x512.png`);
    expect(organizationReference).toEqual({ "@id": ORGANIZATION_ID });
  });

  it("does not publish deprecated SearchAction markup on the homepage", () => {
    const home = source("app/[locale]/page.tsx");
    expect(home).not.toContain('"@type": "SearchAction"');
    expect(home).not.toContain("query-input");
    expect(home).toContain('"@type": "WebSite"');
    expect(home).toContain("organizationSchema");
  });

  it("keeps guide schema focused on Article and BreadcrumbList", () => {
    const guide = source("app/[locale]/guides/[slug]/page.tsx");
    expect(guide).not.toContain('"@type": "HowTo"');
    expect(guide).not.toContain('"@type": "HowToStep"');
    expect(guide).not.toContain('"@type": "FAQPage"');
    expect(guide).toContain('"@type": "Article"');
    expect(guide).toContain('"@type": "BreadcrumbList"');
  });

  it("keeps blog schema focused on BlogPosting and BreadcrumbList", () => {
    const blog = source("app/[locale]/blog/[slug]/page.tsx");
    expect(blog).not.toContain('"@type": "FAQPage"');
    expect(blog).toContain('"@type": "BlogPosting"');
    expect(blog).toContain('"@type": "BreadcrumbList"');
  });

  it("keeps the site FAQ visible without FAQPage structured data", () => {
    const faq = source("app/[locale]/faq/page.tsx");
    expect(faq).not.toContain('"@type": "FAQPage"');
    expect(faq).toContain("faqItems");
    expect(faq).toContain("Frequently asked questions");
  });
});
