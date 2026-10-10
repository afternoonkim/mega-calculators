from pathlib import Path


def replace(path_str: str, pairs: list[tuple[str, str]]) -> None:
    path = Path(path_str)
    text = path.read_text()
    for old, new in pairs:
        if old not in text:
            raise SystemExit(f"missing target in {path}: {old}")
        text = text.replace(old, new)
    path.write_text(text)


replace(
    "app/[locale]/page.tsx",
    [
        (
            '"대출, 복리, BMI, 나이, 퍼센트, 단위 변환까지 한국어로 바로 계산하실 수 있는 무료 온라인 계산기 모음입니다."',
            '"대출, 복리, BMI, 나이, 퍼센트, 단위 변환까지 바로 계산할 수 있는 무료 온라인 계산기 모음입니다."',
        ),
        (
            '`${category.name} 관련 계산기를 한 곳에서 빠르게 찾아보시고, 한국어 설명과 함께 바로 계산을 시작해보실 수 있어요.`',
            '`${category.name} 관련 계산기를 빠르게 찾고, 결과를 이해하는 데 필요한 설명도 함께 확인해보세요.`',
        ),
    ],
)

replace(
    "app/[locale]/calculators/page.tsx",
    [
        ('{isKo ? "카테고리 페이지 →" : "Category page →"}', '{isKo ? "계산기 보기 →" : "Category page →"}'),
    ],
)

replace(
    "app/[locale]/calculators/[category]/page.tsx",
    [
        (
            '`${items.length}개 도구를 한 페이지에 모았어요. 자주 찾으시는 항목부터 시작하시거나, 아래 키워드로 원하시는 계산기를 빠르게 찾아보세요.`',
            '"필요한 계산기를 한곳에서 찾아보세요. 자주 쓰는 계산부터 살펴보거나, 관심 있는 항목을 골라 바로 시작할 수 있습니다."',
        ),
        (
            '"예시와 가이드 페이지까지 연결해 결과를 더 쉽게 이해하실 수 있어요."',
            '"계산 예시와 사용 방법을 함께 보면 결과를 더 쉽게 이해할 수 있어요."',
        ),
    ],
)

replace(
    "app/[locale]/calculators/[category]/[slug]/formula/page.tsx",
    [
        (
            '`${localizeCalculatorName(calculator.name, locale, calculator.slug)} 계산 공식과 변수 의미를 한국어로 정리한 페이지입니다.`',
            '`${localizeCalculatorName(calculator.name, locale, calculator.slug)} 계산 공식과 각 값이 결과에 어떤 영향을 주는지 확인해보세요.`',
        ),
        ('{isKo ? "공식 가이드" : "Formula guide"}', '{isKo ? "계산 원리" : "Formula guide"}'),
        ('{isKo ? "다음으로 할 수 있는 것" : "What you can do next"}', '{isKo ? "함께 확인하면 좋은 내용" : "What you can do next"}'),
    ],
)

replace(
    "app/[locale]/calculators/[category]/[slug]/guide/page.tsx",
    [
        (
            '`${localized.name} 페이지에서 어떤 값을 넣어야 하는지, 결과를 어떻게 읽으면 되는지 순서대로 확인해보세요.`',
            '`어떤 값을 입력해야 하는지와 ${localized.name} 결과를 읽는 방법을 순서대로 확인해보세요.`',
        ),
    ],
)

replace(
    "app/[locale]/faq/page.tsx",
    [
        (
            '"네, 별도의 가입 없이 모든 계산기를 자유롭게 사용하실 수 있어요. 원하시는 만큼 여러 시나리오를 비교해보셔도 됩니다."',
            '"네, 별도의 가입 없이 모든 계산기를 자유롭게 사용하실 수 있어요. 조건을 바꿔가며 여러 결과를 비교해보셔도 됩니다."',
        ),
    ],
)

replace(
    "lib/trustPages.ts",
    [
        (
            'intro: "이 페이지는 Mega Calculators의 계산 방식과 결과를 읽을 때 알아두면 좋은 기준을 정리한 안내 페이지입니다."',
            'intro: "Mega Calculators에서 계산할 때 적용되는 공식, 단위 변환, 반올림, 기본값과 가정 기준을 설명합니다."',
        ),
        (
            '"계산 공식, 입력값, 예시, 결과 설명이 서로 어긋나지 않도록 계산기 데이터와 설명을 함께 관리합니다."',
            '"계산 공식과 입력값, 예시, 결과 설명이 서로 맞는지 함께 확인합니다."',
        ),
    ],
)

replace(
    "app/[locale]/calculators/[category]/[slug]/use-cases/page.tsx",
    [
        (
            '"한국 기준(대한비만학회)으로 결과를 해석하실 수 있도록 안내해드립니다."',
            '"계산 결과와 함께 해석할 때 알아둘 점도 확인해보세요."',
        ),
        (
            '"실제 주문 전에 5~10% 손실분을 추가로 챙기시면 좋습니다."',
            '"실제 주문량은 자재 종류와 시공 방식에 따라 여유분이 달라질 수 있으니 제품 안내와 시공 기준을 함께 확인하세요."',
        ),
        (
            '"체중 감량·증량·유지 목표에 따라 시나리오를 비교해보실 수 있어요."',
            '"체중 감량·증량·유지 목표에 따라 조건을 바꿔 비교해보실 수 있어요."',
        ),
        (
            '"결과가 어떻게 달라지는지 시나리오별로 비교하실 수 있어요."',
            '"조건에 따라 결과가 어떻게 달라지는지 비교하실 수 있어요."',
        ),
        (
            '"여러 일정 시나리오를 비교하실 때 유용합니다."',
            '"여러 일정을 비교하실 때 유용합니다."',
        ),
        (
            '"두 시간표 시나리오를 비교하시면서 학습 부담을 가늠하실 수 있어요."',
            '"두 가지 시간표를 비교하면서 학습 부담을 가늠하실 수 있어요."',
        ),
        (
            '"내 상황에 맞는 값을 넣기 전에 참고용 시나리오를 빠르게 확인하실 수 있어요."',
            '"내 상황에 맞는 값을 넣기 전에 예시 조건으로 결과를 빠르게 확인하실 수 있어요."',
        ),
    ],
)

replace(
    "lib/calculators/seoContent.ts",
    [
        ('scenariosTitle: "직접 비교해보기 좋은 시나리오"', 'scenariosTitle: "이렇게 비교해보세요"'),
    ],
)

print("Korean naturalization A cleanup applied")
