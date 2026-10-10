from pathlib import Path

replacements = {
    "app/calculators/[category]/[slug]/formula/page.tsx": [
        ("The formula section explains the math logic behind the calculator result. On Mega Calculators, the formula is written in plain English so users can understand the relationship between the main inputs, not just copy numbers into a form.", "See how the main inputs work together to produce the result. This can help when you want to check the math by hand or compare the result with a spreadsheet."),
        ("This page is meant to help with learning and comparison. For professional or regulated calculations, always confirm the result with an official document, lender, employer, school, or medical professional when relevant.", "Use the result for learning and comparison. For professional or regulated decisions, confirm the final number with the relevant official source or qualified professional."),
        ("Example pages related to this formula", "More calculation examples"),
    ],
    "app/calculators/[category]/[slug]/guide/page.tsx": [
        ("Continue exploring this calculator cluster", "What to check next"),
        ("{calculator.name} formula", "How the calculation works"),
        ("Read the math explanation behind the result.", "See how the result is calculated."),
        ("{calculator.name} use cases", "When this calculator is useful"),
        ("Open example page", "See calculation example"),
    ],
    "app/calculators/[category]/[slug]/use-cases/page.tsx": [
        ("Practical scenarios", "When this calculator is useful"),
        ("This page highlights common situations where the {calculator.name.toLowerCase()} can save time, reduce mistakes, and help you make faster decisions.", "See common situations where the {calculator.name.toLowerCase()} can save time, reduce mistakes, and help you compare your options."),
        ("Common use cases", "Try it in situations like these"),
        ("Read the formula", "Understand the calculation"),
        ("Understand the math behind the result.", "See how the result is calculated."),
        ("Read the guide", "See how to use it"),
    ],
    "app/calculators/[category]/[slug]/examples/[example]/page.tsx": [
        ("Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own needs.", "If this calculator is new to you, use these values as a starting point. See how the result is produced, then adjust the numbers to match your own situation."),
        ("This is especially useful for users who searched for a very specific long-tail question and want a quick answer before opening the full interactive tool.", "If these numbers are close to your situation, use the result as a reference and then open the calculator to compare your own values."),
        ("Next step", "What to check next"),
        ("Use this example as a reference, then open the main calculator to test your own assumptions. You can also review the formula page and step-by-step guide if you want a deeper explanation.", "Use this example as a reference, then open the calculator with your own values. You can also check how the result is calculated or review the input steps if you need more context."),
        ("View formula", "Understand the calculation"),
        ("Read guide", "See how to use it"),
    ],
}

for path_str, pairs in replacements.items():
    path = Path(path_str)
    text = path.read_text()
    for old, new in pairs:
        if old not in text:
            raise SystemExit(f"missing target in {path}: {old}")
        text = text.replace(old, new)
    path.write_text(text)

print("legacy route cleanup applied")
