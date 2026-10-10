from pathlib import Path

path = Path("scripts/phase6_core_calculators.py")
source = path.read_text()
old = '''def add_inputs(block: str, inputs_text: str):
    marker = '\\n    ],\\n    "relatedSlugs"'
    pos = block.rfind(marker)
    if pos < 0:
        raise SystemExit("Could not locate end of inputs")
    before = block[:pos]
    after = block[pos:]
    if not before.rstrip().endswith('}'):
        raise SystemExit("Unexpected input array ending")
    return before.rstrip() + ',\\n' + inputs_text + after
'''
new = '''def add_inputs(block: str, inputs_text: str):
    inputs_start = block.find('"inputs": [')
    if inputs_start < 0:
        raise SystemExit("Could not locate inputs array")
    pos = block.find('\\n    ],', inputs_start)
    if pos < 0:
        raise SystemExit("Could not locate end of inputs")
    before = block[:pos]
    after = block[pos:]
    if not before.rstrip().endswith('}'):
        raise SystemExit("Unexpected input array ending")
    return before.rstrip() + ',\\n' + inputs_text + after
'''
if old not in source:
    if new in source:
        raise SystemExit(0)
    raise SystemExit("Could not patch add_inputs helper")
path.write_text(source.replace(old, new, 1))
