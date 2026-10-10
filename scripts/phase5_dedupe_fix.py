from pathlib import Path

path = Path("lib/calculators/programmatic.ts")
source = path.read_text()
old = '''function pickRepresentativeExamples(examples: ProgrammaticExample[], limit = INDEXABLE_EXAMPLE_LIMIT) {
  if (examples.length <= limit) return examples;
  return Array.from({ length: limit }, (_, index) => {
    const position = Math.floor((index * examples.length) / limit);
    return examples[Math.min(position, examples.length - 1)];
  });
}
'''
new = '''function pickRepresentativeExamples(examples: ProgrammaticExample[], limit = INDEXABLE_EXAMPLE_LIMIT) {
  const unique = Array.from(new Map(examples.map((example) => [example.slug, example])).values());
  if (unique.length <= limit) return unique;
  return Array.from({ length: limit }, (_, index) => {
    const position = Math.floor((index * unique.length) / limit);
    return unique[Math.min(position, unique.length - 1)];
  });
}
'''
if old not in source:
    if new in source:
        raise SystemExit(0)
    raise SystemExit("Could not patch representative example dedupe")
path.write_text(source.replace(old, new, 1))
