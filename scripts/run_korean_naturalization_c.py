from pathlib import Path

path = Path("scripts/korean_naturalization_c.py")
code = path.read_text()
code = code.replace('    ("아래 콘텐츠가 도움이 됩니다.", "아래 글과 가이드가 도움이 됩니다."),\n', '')
exec(compile(code, str(path), "exec"))

localization = Path("lib/calculators/localization.ts")
text = localization.read_text()
old = "수식과 숫자 계산을 빠르게 처리할 수 있는 한국어 수학 계산기입니다. 학습, 검산, 업무용 기초 계산에 활용하기 좋습니다."
new = "수식과 숫자 계산을 빠르게 처리할 수 있는 계산기입니다. 학습, 검산, 업무용 기초 계산이 필요할 때 유용합니다."
if old not in text:
    raise SystemExit(f"missing target in {localization}: {old}")
localization.write_text(text.replace(old, new))
