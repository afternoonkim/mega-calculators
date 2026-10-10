import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const EDITORIAL_PATH = path.join(ROOT, "lib", "editorial.ts");
const BASELINE_PATH = path.join(ROOT, "scripts", "content-audit-baseline.json");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function findMatching(source, start, openChar, closeChar) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }

    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === openChar) depth += 1;
    if (char === closeChar) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function readStringField(block, field) {
  const marker = new RegExp(`\\b${field}\\s*:`).exec(block);
  if (!marker) return "";

  let index = marker.index + marker[0].length;
  while (/\s/.test(block[index] ?? "")) index += 1;

  const quote = block[index];
  if (!['"', "'", "`"].includes(quote)) return "";

  index += 1;
  let value = "";
  let escaped = false;

  for (; index < block.length; index += 1) {
    const char = block[index];
    if (escaped) {
      value += char;
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === quote) return value.trim();
    value += char;
  }

  return "";
}

function readArrayField(block, field) {
  const marker = new RegExp(`\\b${field}\\s*:`).exec(block);
  if (!marker) return "";

  const start = block.indexOf("[", marker.index + marker[0].length);
  if (start < 0) return "";
  const end = findMatching(block, start, "[", "]");
  if (end < 0) return "";
  return block.slice(start + 1, end);
}

function topLevelObjects(arrayBody) {
  const objects = [];
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  let depth = 0;
  let start = -1;

  for (let index = 0; index < arrayBody.length; index += 1) {
    const char = arrayBody[index];
    const next = arrayBody[index + 1];

    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }

    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) start = index;
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        objects.push(arrayBody.slice(start, index + 1));
        start = -1;
      }
    }
  }

  return objects;
}

function parseEditorial(source) {
  const entries = [];
  const arrayPattern = /const\s+([A-Za-z0-9_]+)\s*:\s*EditorialEntry\[\]\s*=\s*\[/g;
  let match;

  while ((match = arrayPattern.exec(source))) {
    const name = match[1];
    const lowerName = name.toLowerCase();
    const locale = lowerName.startsWith("ko") ? "ko" : lowerName.startsWith("en") ? "en" : "unknown";
    const kind = lowerName.includes("blog") ? "blog" : lowerName.includes("guide") ? "guide" : lowerName;
    const arrayStart = match.index + match[0].lastIndexOf("[");
    const arrayEnd = findMatching(source, arrayStart, "[", "]");
    if (arrayEnd < 0) throw new Error(`Could not parse ${name}`);

    const arrayBody = source.slice(arrayStart + 1, arrayEnd);
    for (const block of topLevelObjects(arrayBody)) {
      const slug = readStringField(block, "slug");
      if (!slug) continue;

      const sections = topLevelObjects(readArrayField(block, "sections")).map((section) => ({
        heading: readStringField(section, "heading"),
        body: readArrayField(section, "body"),
      }));
      const faq = topLevelObjects(readArrayField(block, "faq")).map((item) => ({
        question: readStringField(item, "question"),
        answer: readStringField(item, "answer"),
      }));

      entries.push({
        key: `${locale}:${kind}:${slug}`,
        locale,
        kind,
        slug,
        title: readStringField(block, "title"),
        description: readStringField(block, "description"),
        intro: readStringField(block, "intro"),
        updatedAt: readStringField(block, "updatedAt"),
        relatedCalculatorPath: readStringField(block, "relatedCalculatorPath"),
        relatedCalculatorLabel: readStringField(block, "relatedCalculatorLabel"),
        sections,
        faq,
      });
    }

    arrayPattern.lastIndex = arrayEnd + 1;
  }

  return entries;
}

function finding(code, entry, message) {
  return {
    code,
    entryKey: entry.key,
    fingerprint: `${code}:${entry.key}`,
    message,
  };
}

function auditEntries(entries) {
  const findings = [];
  const seen = new Set();

  for (const entry of entries) {
    if (seen.has(entry.key)) findings.push(finding("duplicate-entry", entry, "Duplicate locale/type/slug entry."));
    seen.add(entry.key);

    if (!entry.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) {
      findings.push(finding("invalid-slug", entry, "Slug must be lowercase kebab-case."));
    }
    if (entry.title.length < 8) findings.push(finding("short-title", entry, "Title is too short to be useful."));
    if (entry.description.length < 30) findings.push(finding("short-description", entry, "Description should explain the user value."));
    if (entry.intro.length < 50) findings.push(finding("short-intro", entry, "Intro should provide enough decision context."));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.updatedAt) || Number.isNaN(Date.parse(`${entry.updatedAt}T00:00:00Z`))) {
      findings.push(finding("invalid-updated-at", entry, "updatedAt must be a valid YYYY-MM-DD date."));
    }
    if (!entry.relatedCalculatorPath.startsWith("/calculators/") || /^\/(?:ko|en)\//.test(entry.relatedCalculatorPath)) {
      findings.push(finding("invalid-related-calculator-path", entry, "Related calculator path must be locale-neutral and start with /calculators/."));
    }
    if (!entry.relatedCalculatorLabel) findings.push(finding("missing-related-calculator-label", entry, "Related calculator label is required."));
    if (entry.sections.length < 3) findings.push(finding("too-few-sections", entry, "At least three useful sections are required."));
    if (entry.sections.some((section) => !section.heading || !section.body.trim())) {
      findings.push(finding("incomplete-section", entry, "Every section needs a heading and body."));
    }
    if (entry.faq.length < 2) findings.push(finding("too-few-faq", entry, "At least two FAQs are required."));
    if (entry.faq.some((item) => !item.question || !item.answer)) {
      findings.push(finding("incomplete-faq", entry, "Every FAQ needs a question and answer."));
    }
  }

  return findings.sort((a, b) => a.fingerprint.localeCompare(b.fingerprint));
}

function parseArgs(argv) {
  const result = { writeBaseline: false, batchSize: null };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--write-baseline") result.writeBaseline = true;
    if (arg === "--batch-size") {
      const value = Number(argv[index + 1]);
      if (!Number.isInteger(value) || value < 1) throw new Error("--batch-size requires a positive integer");
      result.batchSize = value;
      index += 1;
    }
  }
  return result;
}

function loadBaseline() {
  if (!fs.existsSync(BASELINE_PATH)) {
    throw new Error("Missing scripts/content-audit-baseline.json. Run npm run audit:content:baseline once after reviewing the current legacy findings.");
  }
  return JSON.parse(readText(BASELINE_PATH));
}

function getPreviousEditorialSource() {
  try {
    return execFileSync("git", ["show", "HEAD^:lib/editorial.ts"], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return null;
  }
}

function printFindings(title, findings) {
  if (!findings.length) return;
  console.log(`\n${title} (${findings.length})`);
  for (const item of findings) console.log(`- [${item.code}] ${item.entryKey}: ${item.message}`);
}

const args = parseArgs(process.argv.slice(2));
const entries = parseEditorial(readText(EDITORIAL_PATH));
if (!entries.length) throw new Error("No EditorialEntry arrays were found; audit parser needs attention.");
const findings = auditEntries(entries);

if (args.writeBaseline) {
  const baseline = {
    version: 1,
    generatedAt: new Date().toISOString().slice(0, 10),
    note: "Legacy findings are tolerated only because they predate this gate. New findings fail CI. Refresh deliberately after reviewed cleanup, not automatically.",
    knownEntryCount: entries.length,
    legacyFindings: findings.map((item) => item.fingerprint),
  };
  fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`, "utf8");
  console.log(`Content audit baseline written: ${entries.length} entries, ${findings.length} legacy findings.`);
  process.exit(0);
}

const baseline = loadBaseline();
const legacy = new Set(baseline.legacyFindings ?? []);
const newFindings = findings.filter((item) => !legacy.has(item.fingerprint));
const currentLegacyFindings = findings.filter((item) => legacy.has(item.fingerprint));
const currentFingerprints = new Set(findings.map((item) => item.fingerprint));
const resolvedLegacyCount = [...legacy].filter((fingerprint) => !currentFingerprints.has(fingerprint)).length;

let newEntries = [];
const previousSource = getPreviousEditorialSource();
if (previousSource) {
  const previousKeys = new Set(parseEditorial(previousSource).map((entry) => entry.key));
  newEntries = entries.filter((entry) => !previousKeys.has(entry.key));
}

console.log(`Content audit: ${entries.length} entries checked.`);
console.log(`Legacy findings still present: ${currentLegacyFindings.length}. Resolved since baseline: ${resolvedLegacyCount}.`);
console.log(`New findings: ${newFindings.length}. New entries in this commit: ${newEntries.length}.`);

if (args.batchSize !== null && newEntries.length > 0 && newEntries.length !== args.batchSize) {
  console.error(`\nNew editorial batch must contain exactly ${args.batchSize} entries; found ${newEntries.length}.`);
  for (const entry of newEntries) console.error(`- ${entry.key}`);
  process.exit(1);
}

if (args.batchSize !== null && newEntries.length === args.batchSize) {
  console.log(`New ${args.batchSize}-entry batch detected and validated.`);
}

printFindings("New content findings", newFindings);
if (newFindings.length > 0) process.exit(1);

console.log("Content audit passed: no findings beyond the reviewed legacy baseline.");
