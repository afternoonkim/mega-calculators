import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { describe, expect, it } from "vitest";

// Scan text produced by JSX, including conditional strings, on every public TSX route.
const banned = /\b(?:programmatic SEO|SEO.optimized|crawl budget|indexable page|content pipeline|keyword stuffing|internal linking strategy|admin dashboard|developer mode|this example page|free example page)\b|(?:검색엔진 최적화 작업|검색 노출을 위한 페이지|자동 생성된 콘텐츠|관리자 전용 화면|개발자 모드|키워드 채우기|내부 링크 전략)/i;
const roots = ["app", "components"];

function walkFiles(folder: string): string[] {
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(folder, entry.name);
    return entry.isDirectory() ? walkFiles(filename) : filename.endsWith(".tsx") ? [filename] : [];
  });
}

function renderedStrings(source: ts.SourceFile) {
  const strings: { value: string; position: number }[] = [];
  const visit = (node: ts.Node, inRender: boolean) => {
    if (ts.isJsxText(node) && node.getText(source).trim()) {
      strings.push({ value: node.getText(source), position: node.getStart(source) });
    }
    if (inRender && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node))) {
      strings.push({ value: node.text, position: node.getStart(source) });
    }
    const rendering = inRender || ts.isJsxExpression(node);
    ts.forEachChild(node, (child) => visit(child, rendering));
  };
  visit(source, false);
  return strings;
}

describe("public page visitor language", () => {
  it("rejects developer or operator wording in rendered content across all page components", () => {
    const problems: string[] = [];
    for (const filename of roots.flatMap(walkFiles)) {
      const content = fs.readFileSync(filename, "utf8");
      const parsed = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      for (const value of renderedStrings(parsed)) {
        if (banned.test(value.value)) {
          const line = parsed.getLineAndCharacterOfPosition(value.position).line + 1;
          problems.push(`${filename}:${line}: ${value.value.slice(0, 80)}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });
});
