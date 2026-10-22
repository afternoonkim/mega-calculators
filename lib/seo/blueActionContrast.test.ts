import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

function components(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const item = path.join(dir, entry.name);
    return entry.isDirectory() ? components(item) : /\.tsx$/.test(item) ? [item] : [];
  });
}

describe("blue action text contrast", () => {
  it("enforces white text on solid-blue interactive elements", () => {
    const css = fs.readFileSync("app/globals.css", "utf8");
    for (const token of ["bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800"]) {
      expect(css).toContain(`[class~="${token}"]`);
    }
    expect(css).toMatch(/color: #fff !important/);
  });

  it("keeps plain blue informational links outside the solid-button override", () => {
    const css = fs.readFileSync("app/globals.css", "utf8");
    expect(css).toContain(':where(a, button, [role="button"])');
    expect(css).not.toContain('[class~="bg-blue-50"]');
    expect(css).not.toContain('[class~="bg-blue-100"]');
  });

  it("never sets dark text on a static solid blue button or link", () => {
    const offenders: string[] = [];
    for (const file of [...components("app"), ...components("components")]) {
      const text = fs.readFileSync(file, "utf8");
      for (const match of text.matchAll(/className="([^"]+)"/g)) {
        const classes = match[1].split(/\s+/);
        if (classes.some((c) => /^bg-(blue|sky|indigo)-(500|600|700|800)$/.test(c)) &&
            classes.some((c) => /^text-(slate|gray|zinc|neutral|black)-(\d+)$/.test(c))) {
          offenders.push(file);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
