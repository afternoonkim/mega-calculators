import { describe, expect, it } from "vitest";
import {
  buildSitemapIndexXml,
  buildUrlsetXml,
  getCalculatorResourceSitemapEntries,
  getCoreCalculatorSitemapEntries,
  getExampleSitemapEntries,
  getStaticSitemapEntries,
  type SitemapEntry,
} from "@/lib/seo/sitemap";

const entry = (overrides: Partial<SitemapEntry> = {}): SitemapEntry => ({
  locale: "en",
  pathSuffix: "/calculators",
  changefreq: "weekly",
  priority: "0.8",
  ...overrides,
});

describe("sitemap lastmod handling", () => {
  it("omits lastmod when the page has no trustworthy modification date", () => {
    const xml = buildUrlsetXml([entry()]);
    expect(xml).not.toContain("<lastmod>");
  });

  it("keeps a valid editorial modification date", () => {
    const xml = buildUrlsetXml([entry({ lastmod: "2026-09-30" })]);
    expect(xml).toContain("<lastmod>2026-09-30T00:00:00.000Z</lastmod>");
  });

  it("omits an invalid modification date instead of replacing it with build time", () => {
    const xml = buildUrlsetXml([entry({ lastmod: "not-a-date" })]);
    expect(xml).not.toContain("<lastmod>");
  });

  it("does not publish deployment time as the sitemap-index lastmod", () => {
    expect(buildSitemapIndexXml()).not.toContain("<lastmod>");
  });

  it("leaves generated static, calculator, resource, and example URLs undated", () => {
    const staticNonEditorial = getStaticSitemapEntries().filter(
      (item) => !item.pathSuffix.startsWith("/blog/") && !item.pathSuffix.startsWith("/guides/"),
    );
    const generated = [
      ...staticNonEditorial,
      ...getCoreCalculatorSitemapEntries(),
      ...getCalculatorResourceSitemapEntries(),
      ...getExampleSitemapEntries(),
    ];
    expect(generated.length).toBeGreaterThan(0);
    expect(generated.every((item) => item.lastmod === undefined)).toBe(true);
  });

  it("continues to expose real editorial updatedAt dates", () => {
    const editorial = getStaticSitemapEntries().filter(
      (item) => item.pathSuffix.startsWith("/blog/") || item.pathSuffix.startsWith("/guides/"),
    );
    expect(editorial.length).toBeGreaterThan(0);
    expect(editorial.every((item) => Boolean(item.lastmod))).toBe(true);
  });
});
