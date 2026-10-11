import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { categoryKeywords, getCategoryIntro } from "@/lib/seo/keywords";
import { getEditorialTeamAuthor } from "@/lib/seo/structuredData";

const source = (path: string) => readFileSync(path, "utf-8");

describe("final cross-language and SEO QA", () => {
  it("uses natural Korean category wording", () => {
    const serialized = JSON.stringify(categoryKeywords);
    expect(serialized).not.toContain("밀프렙");
    expect(serialized).toContain("식사 준비 비용 계산기");
    expect(getCategoryIntro("other", "ko")).not.toContain("주요 카테고리에 속하지 않는");
  });

  it("keeps category titles concise and does not expose passive SEO keyword pills", () => {
    const category = source("app/[locale]/calculators/[category]/page.tsx");
    expect(category).toContain('const title = isKo ? `${name} 모음` : match.name;');
    expect(category).not.toContain("모음 — 무료 온라인");
    expect(category).not.toContain("keywords.slice(0, 8)");
  });

  it("uses user-facing English navigation wording", () => {
    const allCalculators = source("app/[locale]/calculators/page.tsx");
    expect(allCalculators).not.toContain("Category page →");
    expect(allCalculators).toContain("See calculators →");
  });

  it("keeps Korean policy dates in Korean and advertising copy current", () => {
    const privacy = source("app/[locale]/privacy/page.tsx");
    const terms = source("app/[locale]/terms/page.tsx");
    expect(privacy).toContain("최종 업데이트: 2026년 4월 2일");
    expect(terms).toContain("최종 업데이트: 2026년 4월 2일");
    expect(privacy).not.toContain("향후 Google AdSense");
    expect(privacy).not.toContain("in the future");
  });

  it("avoids translationese on the contact page", () => {
    const contact = source("app/[locale]/contact/page.tsx");
    expect(contact).not.toContain("all from one page");
    expect(contact).not.toContain("send everything you need from this page");
    expect(contact).not.toContain("답이 늦다고 느껴지셔도 걱정하지 않으셔도 됩니다");
  });

  it("localizes Korean embed metadata", () => {
    const embed = source("app/[locale]/calculators/[category]/[slug]/embed/page.tsx");
    expect(embed).toContain('locale === "ko" ? `${localized.name} 삽입용` : `${localized.name} Embed`');
  });

  it("represents the editorial team as an Organization author", () => {
    const koAuthor = getEditorialTeamAuthor("ko");
    const enAuthor = getEditorialTeamAuthor("en");
    expect(koAuthor["@type"]).toBe("Organization");
    expect(enAuthor["@type"]).toBe("Organization");
    expect(koAuthor.name).toContain("에디토리얼팀");
    for (const page of ["app/[locale]/blog/[slug]/page.tsx", "app/[locale]/guides/[slug]/page.tsx"]) {
      const text = source(page);
      expect(text).not.toContain('"@type": "Person"');
      expect(text).toContain("getEditorialTeamAuthor(locale)");
    }
  });

  it("keeps known language-mixing phrases out of user-facing SEO sources", () => {
    const targets = [
      "lib/seo/keywords.ts",
      "app/[locale]/calculators/page.tsx",
      "app/[locale]/calculators/[category]/page.tsx",
      "app/[locale]/privacy/page.tsx",
      "app/[locale]/terms/page.tsx",
      "app/[locale]/contact/page.tsx",
    ];
    const combined = targets.map(source).join("\n");
    expect(combined).not.toContain("한국어 온라인 계산기");
    expect(combined).not.toContain("한국어로 확인");
    expect(combined).not.toContain("밀프렙");
    expect(combined).not.toContain("Category page →");
  });
});
