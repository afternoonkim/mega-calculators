import { describe, expect, it } from "vitest";
import { calculators } from "@/lib/calculators/data";
import { localizeCalculatorDefinition, localizeProgrammaticExample } from "@/lib/calculators/localization";
import { getCalculatorExamples } from "@/lib/calculators/programmatic";
import { getVisitorUseCases } from "@/lib/calculators/visitorUseCases";
import { getFormulaInputGuide, getFormulaReadingTips } from "@/lib/calculators/formulaGuide";
import { getCalculatorSeoContent } from "@/lib/calculators/seoContent";

// Check visitor-facing content, not implementation identifiers, code comments, or SEO metadata keys.
// Keep patterns precise to avoid treating legitimate explanations of calculation methods as defects.
const operatorCopy = [
  /\b(?:programmatic seo|seo[- ]optimized|search engine ranking|crawl budget|indexable page|content pipeline|auto[- ]generated content|keyword stuffing|internal linking strategy|template generated|admin dashboard|developer mode)\b/i,
  /(?:검색엔진 최적화 작업|검색 노출을 위한 페이지|자동 생성된 콘텐츠|관리자 전용 화면|개발자 모드|키워드 채우기|내부 링크 전략|프로그램 방식으로 생성된)/,
  /\b(?:this example page|free example page|our content strategy|content batch|editorial workflow)\b/i,
];

function inspect(text: string, identifier: string, findings: string[]) {
  for (const pattern of operatorCopy) {
    if (pattern.test(text)) findings.push(`${identifier}: ${pattern.source}`);
  }
}

describe("all calculator visitor-facing copy", () => {
  it("keeps operator and SEO production wording out of both locales", () => {
    const findings: string[] = [];
    for (const calculator of calculators) {
      for (const locale of ["ko", "en"] as const) {
        const localized = localizeCalculatorDefinition(calculator, locale);
        const seo = getCalculatorSeoContent(localized, locale);
        const candidates = [
          localized.name, localized.description, localized.intro, localized.formulaText,
          localized.example, ...localized.howToUse,
          ...localized.faq.flatMap((faq) => [faq.q, faq.a]),
          ...getVisitorUseCases(calculator, locale),
          ...getFormulaInputGuide(calculator, locale).flatMap((input) => [input.label, input.detail]),
          ...getFormulaReadingTips(calculator, locale),
          seo.audienceTitle, seo.audienceIntro, ...seo.audiences,
          seo.checksTitle, ...seo.checks, seo.readingTitle, ...seo.readingParagraphs,
          seo.mistakesTitle, ...seo.mistakes, seo.scenariosTitle,
          ...seo.scenarios.flatMap((scenario) => [scenario.title, scenario.description]),
        ];
        candidates.forEach((value, index) => inspect(value, `${calculator.slug}/${locale}/field-${index}`, findings));
        for (const example of getCalculatorExamples(calculator)) {
          const copy = localizeProgrammaticExample(example, calculator, locale);
          [copy.title, copy.description, copy.intro].forEach((value, index) =>
            inspect(value, `${calculator.slug}/${locale}/${example.slug}/${index}`, findings));
        }
      }
    }
    expect(findings).toEqual([]);
  });
});
