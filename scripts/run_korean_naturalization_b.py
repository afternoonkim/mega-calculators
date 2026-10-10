from pathlib import Path

source = Path("scripts/korean_naturalization_b.py").read_text()
source = source.replace(
    '        if old not in text:\n            raise SystemExit(f"missing target in {path}: {old}")\n        text = text.replace(old, new)',
    '        if old not in text:\n            print(f"skip missing target in {path}: {old}")\n            continue\n        text = text.replace(old, new)',
)
exec(compile(source, "scripts/korean_naturalization_b.py", "exec"))

path = Path("app/[locale]/calculators/[category]/[slug]/use-cases/page.tsx")
text = path.read_text()
text = text.replace(
    '빠르게 \\"어떤 결과가 나오는지\\"만 확인하시고 싶으실 때 활용하시기 좋아요.',
    '입력값에 따라 어떤 결과가 나오는지 빠르게 확인하고 싶을 때 유용해요.',
)
path.write_text(text)
