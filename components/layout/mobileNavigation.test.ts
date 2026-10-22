import { describe, expect, it } from "vitest";
import fs from "node:fs";

describe("mobile navigation accessibility", () => {
  it("provides the same five direct destinations in both locales", () => {
    const source = fs.readFileSync("components/layout/MobileBottomNav.tsx", "utf8");
    for (const destination of ["/", "/calculators", "/blog", "/guides", "/faq"]) {
      expect(source).toContain(`path: "${destination}"`);
    }
    expect(source).toContain("aria-current");
    expect(source).toContain("mobile-bottom-nav");
  });
  it("allows independent scrolling in the mobile menu", () => {
    const source = fs.readFileSync("components/layout/Header.tsx", "utf8");
    expect(source).toContain("overflow-y-auto");
    expect(source).toContain("overscroll-contain");
    expect(source).toContain("100dvh");
  });
  it("preserves safe-area spacing and limits headline sizes on phones", () => {
    const source = fs.readFileSync("app/globals.css", "utf8");
    expect(source).toContain("env(safe-area-inset-bottom)");
    expect(source).toContain("main h1");
    expect(source).toContain("-apple-system");
    expect(source).toContain("main input, main select, main textarea");
  });
});
