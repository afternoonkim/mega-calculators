from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: str, old: str, new: str) -> None:
    target = ROOT / path
    text = target.read_text(encoding="utf-8")
    if old not in text:
        raise RuntimeError(f"Expected text not found in {path}: {old[:160]!r}")
    target.write_text(text.replace(old, new, 1), encoding="utf-8")


replace_once(
    "app/[locale]/calculators/[category]/[slug]/page.tsx",
    'title: locale === "ko" ? `${localized.name} | Mega Calculators` : `${calculator.name} - Free Online Calculator`',
    'title: locale === "ko" ? localized.name : `${calculator.name} - Free Online Calculator`',
)

replace_once(
    "app/[locale]/calculators/[category]/[slug]/formula/page.tsx",
    'const title = locale === "ko" ? `${localizeCalculatorName(calculator.name, locale, calculator.slug)} 공식` : `${seo.title} | Mega Calculators`;',
    'const title = locale === "ko" ? `${localizeCalculatorName(calculator.name, locale, calculator.slug)} 공식` : seo.title;',
)

for path in [
    "app/[locale]/editorial-standards/page.tsx",
    "app/[locale]/methodology/page.tsx",
    "app/[locale]/corrections/page.tsx",
]:
    replace_once(path, 'title: `${page.title} | Mega Calculators`', 'title: page.title')

replace_once(
    "app/[locale]/calculators/[category]/[slug]/embed/page.tsx",
    'title: `${localized.name} Embed | Mega Calculators`',
    'title: `${localized.name} Embed`',
)

# Guard the child metadata title contract. The locale layout owns the brand suffix.
checks = {
    "app/[locale]/calculators/[category]/[slug]/page.tsx": [
        'title: locale === "ko" ? localized.name : `${calculator.name} - Free Online Calculator`',
    ],
    "app/[locale]/calculators/[category]/[slug]/formula/page.tsx": [
        'const title = locale === "ko" ? `${localizeCalculatorName(calculator.name, locale, calculator.slug)} 공식` : seo.title;',
    ],
    "app/[locale]/editorial-standards/page.tsx": ['title: page.title'],
    "app/[locale]/methodology/page.tsx": ['title: page.title'],
    "app/[locale]/corrections/page.tsx": ['title: page.title'],
    "app/[locale]/calculators/[category]/[slug]/embed/page.tsx": ['title: `${localized.name} Embed`'],
}
for path, snippets in checks.items():
    text = (ROOT / path).read_text(encoding="utf-8")
    for snippet in snippets:
        if snippet not in text:
            raise RuntimeError(f"Expected title contract missing in {path}: {snippet}")

layout = (ROOT / "app/[locale]/layout.tsx").read_text(encoding="utf-8")
if 'template: "%s | Mega Calculators"' not in layout:
    raise RuntimeError("Locale title template is missing")

print("Title brand duplication fix applied.")
