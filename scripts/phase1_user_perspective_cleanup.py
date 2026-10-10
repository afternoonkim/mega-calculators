from pathlib import Path

replacements = {
    "app/[locale]/calculators/[category]/[slug]/formula/page.tsx": [
        (
            '"공식 페이지는 계산 결과가 어떤 숫자 조합으로 만들어지는지 이해하기 쉽게 설명하는 공간입니다. 실제 계산은 페이지의 입력값을 기준으로 자동 처리됩니다."',
            '"각 입력값이 결과에 어떻게 반영되는지 확인해보세요. 직접 다시 계산하거나 스프레드시트와 비교할 때도 참고하실 수 있습니다."',
        ),
        (
            '"한국어 버전에서는 복잡한 수학 표현보다 결과 해석에 필요한 핵심 개념 위주로 설명합니다."',
            '"공식을 직접 풀지 않으셔도 계산기를 사용할 수 있습니다. 결과가 왜 그렇게 나왔는지 궁금할 때 핵심 개념만 확인하시면 됩니다."',
        ),
        (
            '"You do not need to solve the formula manually to use the calculator. The purpose of this page is to give context, improve trust, and answer search queries from users who specifically want the formula."',
            '"You do not need to solve the formula manually to use the calculator. Use this explanation when you want to understand why the result changes or check the math by hand or in a spreadsheet."',
        ),
        ('{isKo ? "바로 이동" : "Jump back to tools"}', '{isKo ? "다음으로 할 수 있는 것" : "What you can do next"}'),
        ('{isKo ? "예시 페이지" : "Example pages"}', '{isKo ? "다른 계산 예시" : "More calculation examples"}'),
        ('{isKo ? "예시 보기 →" : "Open example →"}', '{isKo ? "계산 예시 보기 →" : "See calculation →"}'),
    ],
    "app/[locale]/calculators/[category]/[slug]/guide/page.tsx": [
        ('{isKo ? "함께 보면 좋은 페이지" : "Helpful next steps"}', '{isKo ? "다음으로 확인해보세요" : "What to check next"}'),
        ('{isKo ? "공식 보기" : "Read the formula"}', '{isKo ? "계산 원리 이해하기" : "Understand the calculation"}'),
        ('{isKo ? "활용 사례 보기" : "See use cases"}', '{isKo ? "언제 활용하면 좋은지 보기" : "See when this is useful"}'),
    ],
    "app/[locale]/calculators/[category]/[slug]/use-cases/page.tsx": [
        ('{isKo ? "활용 사례" : "Practical scenarios"}', '{isKo ? "이럴 때 유용해요" : "When this calculator is useful"}'),
        ('{isKo ? "대표 활용 예시" : "Common use cases"}', '{isKo ? "이런 상황에서 활용해보세요" : "Try it in situations like these"}'),
        ('{isKo ? "공식 보기" : "Read the formula"}', '{isKo ? "계산 원리 이해하기" : "Understand the calculation"}'),
        ('{isKo ? "계산 논리를 확인할 수 있습니다." : "Understand the math behind the result."}', '{isKo ? "결과가 어떻게 계산되는지 확인해보세요." : "See how the result is calculated."}'),
    ],
    "app/[locale]/calculators/[category]/[slug]/examples/[example]/page.tsx": [
        (
            '"예시 페이지는 처음 보시는 계산기에서도 어떤 숫자를 넣으면 좋을지 감을 잡으실 수 있도록 도와드려요. 빈 화면에서 시작하지 않으셔도 되도록 시나리오 하나를 미리 풀어드린 형태입니다."',
            '"처음 사용하는 계산기라면 이 값을 출발점으로 삼아보세요. 어떤 숫자를 넣으면 결과가 어떻게 달라지는지 확인한 뒤 본인 상황에 맞게 입력값을 바꾸시면 됩니다."',
        ),
        (
            '"Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own situation."',
            '"If this calculator is new to you, use these values as a starting point. See how the result is produced, then adjust the numbers to match your own situation."',
        ),
        (
            '"구체적인 금액·조건을 검색하셔서 들어오신 분도 결과를 바로 보실 수 있도록 구성했어요. 본인 케이스로 바꿔 계산하고 싶으시면 위쪽 \\\"계산기 열기\\\" 링크에서 입력값만 수정하시면 됩니다."',
            '"지금 조건과 비슷한 상황이라면 결과를 참고한 뒤 본인 숫자로 다시 계산해보세요. 아래 \\\"계산기 열기\\\"에서 입력값만 바꾸면 바로 비교할 수 있습니다."',
        ),
        (
            '"This is especially useful for users who searched for a very specific long-tail question and want a quick answer. To run the same calculator with your own numbers, follow the \\\"Open calculator\\\" link below."',
            '"If these numbers are close to your situation, use the result as a reference and then run the calculator with your own values. Select \\\"Open calculator\\\" below to make the comparison."',
        ),
        ('{isKo ? "관련 페이지 이동" : "Continue exploring"}', '{isKo ? "다음으로 확인해보세요" : "What to check next"}'),
        ('{isKo ? "공식 보기" : "Read the formula"}', '{isKo ? "계산 원리 이해하기" : "Understand the calculation"}'),
        ('{isKo ? "가이드 보기" : "Read the guide"}', '{isKo ? "입력 방법 확인하기" : "See how to use it"}'),
    ],
    "components/calculators/CalculatorEngine.tsx": [
        ('{t("More tools for this calculator")}', '{locale === "ko" ? "결과를 더 잘 활용하려면" : "Get more from your result"}'),
        (
            '"공식, 사용 가이드, 활용 사례, 예시 페이지를 통해 계산 결과를 더 쉽게 이해할 수 있습니다."',
            '"결과가 왜 이렇게 나왔는지 확인하거나, 입력 방법과 다른 계산 예시가 필요할 때 아래 내용을 확인해보세요."',
        ),
        (
            '"Explore the formula, step-by-step guide, common use cases, and example scenarios related to this calculator."',
            '"Check how the result is calculated, review the inputs, or compare your numbers with practical examples."',
        ),
        ('{t("Formula")}', '{locale === "ko" ? "계산 원리" : "How it is calculated"}'),
        ('{t("View formula →")}', '{locale === "ko" ? "계산 원리 이해하기 →" : "Understand the calculation →"}'),
        ('{t("Guide")}', '{locale === "ko" ? "입력 방법" : "How to use it"}'),
        ('{t("Read guide →")}', '{locale === "ko" ? "입력 방법 확인하기 →" : "See how to use it →"}'),
        ('{t("Use cases")}', '{locale === "ko" ? "언제 유용한가요" : "When it is useful"}'),
        ('{t("See use cases →")}', '{locale === "ko" ? "활용 상황 확인하기 →" : "See practical uses →"}'),
        ('{t("Examples")}', '{locale === "ko" ? "다른 계산 예시" : "More calculation examples"}'),
        ('{t("Open example →")}', '{locale === "ko" ? "계산 예시 보기 →" : "See calculation →"}'),
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

print("user-perspective cleanup applied")
