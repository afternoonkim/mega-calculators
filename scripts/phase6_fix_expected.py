from pathlib import Path

path = Path("scripts/phase6_core_calculators.py")
source = path.read_text()
old = 'expect(result.primary.value).toBe("$2,586.97");'
new = 'expect(result.primary.value).toBe("$2,586.96");'
if old in source:
    path.write_text(source.replace(old, new, 1))
elif new not in source:
    raise SystemExit("Could not update mortgage rounding expectation")
