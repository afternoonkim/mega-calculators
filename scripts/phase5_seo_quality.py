from pathlib import Path

# 1) Programmatic indexing policy
path = Path("lib/calculators/programmatic.ts")
source = path.read_text()
anchor = '''export function getCalculatorExamples(definition: CalculatorDefinition): ProgrammaticExample[] {
  // Programmatic bundles (100+ scenarios per calculator) take priority.
  // These are the traffic-core calculators where long-tail SEO scales.
  const programmatic = programmaticBundles[definition.slug];
  if (programmatic) return programmatic;
  // Other calculators use the legacy hand-written specificExamples
  // or the generic 6-scenario fallback. Keep the small cap there since
  // those calculators don't benefit from a flood of thin pages.
  return (specificExamples[definition.slug] ?? buildGenericExamples(definition)).slice(0, 6);
}
'''
addition = '''
const INDEXABLE_EXAMPLE_LIMIT = 6;

function pickRepresentativeExamples(examples: ProgrammaticExample[], limit = INDEXABLE_EXAMPLE_LIMIT) {
  if (examples.length <= limit) return examples;
  return Array.from({ length: limit }, (_, index) => {
    const position = Math.floor((index * examples.length) / limit);
    return examples[Math.min(position, examples.length - 1)];
  });
}

export function getIndexableCalculatorExamples(definition: CalculatorDefinition): ProgrammaticExample[] {
  if (!isTopPriorityCalculator(definition.slug)) return [];
  return pickRepresentativeExamples(getCalculatorExamples(definition));
}

export function isIndexableCalculatorExample(definition: CalculatorDefinition, exampleSlug: string) {
  return getIndexableCalculatorExamples(definition).some((example) => example.slug === exampleSlug);
}
'''
if addition not in source:
    if anchor not in source:
        raise SystemExit("Could not add indexing policy")
    source = source.replace(anchor, anchor + addition, 1)
old_hub = '''  const allExamples = getCalculatorExamples(definition);
  // For priority calculators with 100+ scenarios, show a representative
  // sample on the detail page so the section stays readable. Pick evenly
  // spaced indices so the user sees range, not just the first 12 in a row.
  const displayExamples =
    allExamples.length <= HUB_EXAMPLE_DISPLAY_LIMIT
      ? allExamples
      : Array.from({ length: HUB_EXAMPLE_DISPLAY_LIMIT }, (_, i) => {
          const idx = Math.floor((i * allExamples.length) / HUB_EXAMPLE_DISPLAY_LIMIT);
          return allExamples[idx];
        });
'''
new_hub = '''  const allExamples = getIndexableCalculatorExamples(definition);
  const displayExamples = allExamples.slice(0, HUB_EXAMPLE_DISPLAY_LIMIT);
'''
if old_hub in source:
    source = source.replace(old_hub, new_hub, 1)
elif new_hub not in source:
    raise SystemExit("Could not tighten hub examples")
path.write_text(source)

# 2) Example robots policy
path = Path("app/[locale]/calculators/[category]/[slug]/examples/[example]/page.tsx")
source = path.read_text()
source = source.replace(
    'import { getCalculatorExamples, getProgrammaticHubLinks } from "@/lib/calculators/programmatic";',
    'import { getCalculatorExamples, getProgrammaticHubLinks, isIndexableCalculatorExample } from "@/lib/calculators/programmatic";',
    1,
)
old_robots = '''    // Strong explicit signal so example pages don't fall to "crawled — not
    // indexed". Each programmatic scenario page is a long-tail target that
    // deserves indexing once paired with unique per-scenario interpretation.
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },'''
new_robots = '''    robots: isIndexableCalculatorExample(calculator, exampleData.slug)
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        }
      : {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        },'''
if old_robots not in source:
    raise SystemExit("Could not replace example robots")
path.write_text(source.replace(old_robots, new_robots, 1))

# 3) Sitemap quality gate
path = Path("lib/seo/sitemap.ts")
source = path.read_text()
source = source.replace(
    'import { getCalculatorExamples } from "@/lib/calculators/programmatic";',
    'import { getIndexableCalculatorExamples, isTopPriorityCalculator } from "@/lib/calculators/programmatic";',
    1,
)
source = source.replace(
    'const RESOURCE_SUBPATHS = ["/formula", "/guide", "/use-cases"] as const;',
    'const RESOURCE_SUBPATHS = ["/formula", "/guide"] as const;',
    1,
)
old_loop = '''    for (const calculator of calculators) {
      const path = `/calculators/${calculator.category}/${calculator.slug}`;

      for (const subPath of RESOURCE_SUBPATHS) {'''
new_loop = '''    for (const calculator of calculators) {
      if (!isTopPriorityCalculator(calculator.slug)) continue;
      const path = `/calculators/${calculator.category}/${calculator.slug}`;

      for (const subPath of RESOURCE_SUBPATHS) {'''
if old_loop not in source:
    raise SystemExit("Could not gate resource sitemap")
source = source.replace(old_loop, new_loop, 1)
source = source.replace(
    'for (const example of getCalculatorExamples(calculator)) {',
    'for (const example of getIndexableCalculatorExamples(calculator)) {',
    1,
)
path.write_text(source)

# 4) Formula/guide: index only top-priority calculators
for page_path in [
    "app/[locale]/calculators/[category]/[slug]/formula/page.tsx",
    "app/[locale]/calculators/[category]/[slug]/guide/page.tsx",
]:
    path = Path(page_path)
    source = path.read_text()
    source = source.replace(
        'getProgrammaticHubLinks } from "@/lib/calculators/programmatic";',
        'getProgrammaticHubLinks, isTopPriorityCalculator } from "@/lib/calculators/programmatic";',
        1,
    )
    marker = 'alternates: { canonical:'
    if 'robots: isTopPriorityCalculator' not in source:
        if marker not in source:
            raise SystemExit(f"Could not add robots policy to {page_path}")
        source = source.replace(
            marker,
            'robots: isTopPriorityCalculator(calculator.slug) ? { index: true, follow: true } : { index: false, follow: true }, ' + marker,
            1,
        )
    path.write_text(source)

# 5) Use-cases are category-template derivatives: noindex, follow
path = Path("app/[locale]/calculators/[category]/[slug]/use-cases/page.tsx")
source = path.read_text()
marker = 'alternates: { canonical:'
if 'robots: { index: false, follow: true }' not in source:
    if marker not in source:
        raise SystemExit("Could not add noindex to use-cases")
    source = source.replace(marker, 'robots: { index: false, follow: true }, ' + marker, 1)
path.write_text(source)

# 6) Remove deprecated HowTo schema from guide
path = Path("app/[locale]/calculators/[category]/[slug]/guide/page.tsx")
source = path.read_text()
start = ' const howToSchema = {'
end = ' }; return <div className="space-y-8"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />'
if start in source and end in source:
    prefix, rest = source.split(start, 1)
    _, suffix = rest.split(end, 1)
    source = prefix + ' return <div className="space-y-8">' + suffix
elif 'howToSchema' in source:
    raise SystemExit("Could not safely remove HowTo schema")
path.write_text(source)

# 7) Remove obsolete FAQ schema from calculator page; visible FAQ remains
path = Path("app/[locale]/calculators/[category]/[slug]/page.tsx")
source = path.read_text()
faq_decl = '  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: localized.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };\n'
source = source.replace(faq_decl, '', 1)
source = source.replace('<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />', '', 1)
if 'faqSchema' in source:
    raise SystemExit("FAQ schema remains")
path.write_text(source)

# 8) Regression tests
Path("lib/seo/indexing.test.ts").write_text('''import { describe, expect, it } from "vitest";\nimport { calculators } from "@/lib/calculators/data";\nimport { getIndexableCalculatorExamples, isTopPriorityCalculator } from "@/lib/calculators/programmatic";\nimport { getCalculatorResourceSitemapEntries, getExampleSitemapEntries } from "@/lib/seo/sitemap";\n\ndescribe("programmatic SEO indexing policy", () => {\n  it("indexes examples only for top-priority calculators and caps each at six", () => {\n    for (const calculator of calculators) {\n      const examples = getIndexableCalculatorExamples(calculator);\n      expect(examples.length).toBeLessThanOrEqual(6);\n      if (!isTopPriorityCalculator(calculator.slug)) expect(examples).toHaveLength(0);\n      expect(new Set(examples.map((example) => example.slug)).size).toBe(examples.length);\n    }\n  });\n\n  it("keeps example sitemap entries limited to curated scenarios", () => {\n    const expectedPerLocale = calculators.reduce((sum, calculator) => sum + getIndexableCalculatorExamples(calculator).length, 0);\n    expect(getExampleSitemapEntries()).toHaveLength(expectedPerLocale * 2);\n  });\n\n  it("publishes formula and guide resources only for top-priority calculators", () => {\n    const topPriorityCount = calculators.filter((calculator) => isTopPriorityCalculator(calculator.slug)).length;\n    const entries = getCalculatorResourceSitemapEntries();\n    expect(entries).toHaveLength(topPriorityCount * 2 * 2);\n    expect(entries.some((entry) => entry.pathSuffix.endsWith("/use-cases"))).toBe(false);\n  });\n});\n''')
