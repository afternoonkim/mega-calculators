from pathlib import Path

path = Path("lib/calculators/engine.ts")
source = path.read_text()
anchor = '    case "dateDiff": {\n'
guard = '''    case "dateDiff": {
      const strictStart = parseDateSafe(values.startDate);
      const strictEnd = parseDateSafe(values.endDate);
      if (!strictStart || !strictEnd) {
        return { primary: { label: "Date difference", value: "Invalid date" }, note: "Enter valid calendar dates." };
      }
'''
if guard in source:
    raise SystemExit(0)
if anchor not in source:
    raise SystemExit("Could not locate dateDiff case")
path.write_text(source.replace(anchor, guard, 1))
