from pathlib import Path

path = Path("scripts/korean_naturalization_c.py")
code = path.read_text()
code = code.replace('    ("아래 콘텐츠가 도움이 됩니다.", "아래 글과 가이드가 도움이 됩니다."),\n', '')
exec(compile(code, str(path), "exec"))
