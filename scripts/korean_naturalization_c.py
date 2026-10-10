from pathlib import Path


def apply(path_str: str, pairs: list[tuple[str, str]]) -> None:
    path = Path(path_str)
    text = path.read_text()
    for old, new in pairs:
        if old not in text:
            raise SystemExit(f"missing target in {path}: {old}")
        text = text.replace(old, new)
    path.write_text(text)


apply("app/[locale]/calculators/[category]/[slug]/formula/page.tsx", [
    ('{isKo ? "활용 사례 보기" : "See use cases"}', '{isKo ? "언제 유용한지 보기" : "See use cases"}'),
])

apply("app/[locale]/calculators/[category]/[slug]/guide/page.tsx", [
    ('{isKo ? "언제 활용하면 좋은지 보기" : "See when this is useful"}', '{isKo ? "언제 유용한지 보기" : "See when this is useful"}'),
])

apply("app/[locale]/calculators/[category]/[slug]/use-cases/page.tsx", [
    ('`${localizeCalculatorName(calculator.name, locale, calculator.slug)} 활용 사례`', '`${localizeCalculatorName(calculator.name, locale, calculator.slug)} 사용 예시`'),
    ('{isKo ? "이런 상황에서 활용해보세요" : "Try it in situations like these"}', '{isKo ? "이럴 때 사용해보세요" : "Try it in situations like these"}'),
    ("건강 관련 수치를 빠르게 확인할 때 활용할 수 있어요.", "건강 관련 수치를 빠르게 확인할 수 있어요."),
    ("운동 전후 페이스·1RM·심박수 목표를 점검할 때 활용해보세요.", "운동 전후 페이스·1RM·심박수 목표를 점검할 때 사용해보세요."),
    ("설문·실험·업무 데이터를 간단히 점검할 때 활용해보세요.", "설문·실험·업무 데이터를 간단히 점검할 때 사용해보세요."),
    ("쇼핑·요리·여행·제품 비교가 필요할 때 바로 활용해보세요.", "쇼핑·요리·여행·제품 비교가 필요할 때 바로 사용해보세요."),
    ("식비·식사 준비·파티 예산을 미리 계산할 때 활용해보세요.", "식비·식사 준비·파티 예산을 미리 계산할 때 사용해보세요."),
    ("기술 사양·다운로드 용량·대역폭을 빠르게 확인할 때 활용해보세요.", "기술 사양·다운로드 용량·대역폭을 빠르게 확인할 때 사용해보세요."),
    ("스펙 시트를 보실 때 곁에 두고 참고하시기 좋습니다.", "제품 사양표를 볼 때 단위를 바로 확인하는 데 유용합니다."),
    ("교과서·기술 문서를 보시면서 빠른 참고용으로 활용하시기 좋습니다.", "교과서나 기술 문서를 볼 때 단위를 빠르게 확인하는 데 유용합니다."),
    ("참고용으로 가볍게 활용하시고, 중요한 결정 전에는 공식 자료에서 다시 확인하시는 것이 안전합니다.", "간단한 비교에 사용하고, 중요한 결정 전에는 공식 자료에서 다시 확인하는 것이 안전합니다."),
])

apply("components/calculators/CalculatorSeoContent.tsx", [
    ('{locale === "ko" ? "실전 활용" : "Practical use"}', '{locale === "ko" ? "이럴 때 유용해요" : "Practical use"}'),
    ('{locale === "ko" ? "활용 가이드" : "Planning guide"}', '{locale === "ko" ? "계산 전에 확인하세요" : "Planning guide"}'),
])

apply("components/calculators/CalculatorEngine.tsx", [
    ('{locale === "ko" ? "결과를 더 잘 활용하려면" : "Get more from your result"}', '{locale === "ko" ? "결과를 더 잘 이해하려면" : "Get more from your result"}'),
    ('{locale === "ko" ? "활용 상황 확인하기 →" : "See practical uses →"}', '{locale === "ko" ? "언제 유용한지 보기 →" : "See practical uses →"}'),
])

apply("app/[locale]/contact/page.tsx", [
    ("계산기 오류, 콘텐츠 수정, 개인정보, 제휴 문의를 한 페이지에서 보내실 수 있습니다.", "계산기 오류, 내용 수정, 개인정보, 광고·제휴 관련 문의 방법을 안내합니다."),
    ("계산기 오류를 발견하셨거나, 콘텐츠 수정을 제안하고 싶으시거나, 개인정보 관련 궁금증이 있으시거나, 제휴·미디어 문의가 있으시다면 이 페이지에서 바로 보내실 수 있어요.", "계산기 오류나 내용 수정 제안, 개인정보 관련 질문, 제휴·미디어 문의가 있다면 아래 연락 방법을 이용해주세요."),
    ("광고 집행, 파트너십 제안, 콘텐츠 활용, 데이터 라이선스에 대한 이야기를 나누고 싶으시다면 같은 주소로 보내주세요.", "광고 집행, 파트너십 제안, 자료 사용, 데이터 라이선스 관련 문의도 같은 주소로 보내주세요."),
    ("계산 결과를 일반 참고로만 활용하시고, 공식 자료나 자격을 갖춘 전문가에게 한 번 더 확인하시는 것이 안전해요.", "계산 결과는 참고용으로만 보고, 공식 자료나 자격을 갖춘 전문가에게 한 번 더 확인하는 것이 안전해요."),
])

apply("app/[locale]/faq/page.tsx", [
    ("결과는 일반적인 참고와 계획 수립을 돕기 위한 것입니다.", "결과는 비교하거나 계획을 세울 때 참고하는 용도입니다."),
])

apply("app/[locale]/privacy/page.tsx", [
    ("Mega Calculators는 무료 온라인 계산기 및 정보 콘텐츠 사이트입니다. 이 문서는 사이트 이용 중 수집될 수 있는 정보, 활용 방식, 이용자의 선택권을 설명합니다.", "Mega Calculators는 무료 온라인 계산기와 관련 안내를 제공하는 사이트입니다. 이 문서는 사이트 이용 중 수집될 수 있는 정보, 사용 방식, 이용자의 선택권을 설명합니다."),
    ('{isKo ? "정보 활용 목적" : "How information may be used"}', '{isKo ? "정보를 사용하는 목적" : "How information may be used"}'),
    ("운영, 문의 대응, 계산기와 콘텐츠 개선, 성과 분석, 악용 방지, 광고 지원을 위해 정보가 활용될 수 있습니다.", "사이트 운영, 문의 대응, 계산기와 설명 개선, 이용 현황 분석, 악용 방지, 광고 제공을 위해 정보가 사용될 수 있습니다."),
])

apply("app/[locale]/terms/page.tsx", [
    ("Mega Calculators는 일반 정보, 교육, 계획 수립을 위한 사이트입니다.", "Mega Calculators는 일반 정보 확인, 학습, 계획을 돕기 위한 사이트입니다."),
    ("계산기 결과와 텍스트 콘텐츠는 법률, 세금, 금융, 회계, 대출, 보험, 의료 자문이 아닙니다.", "계산 결과와 사이트의 설명·글은 법률, 세금, 금융, 회계, 대출, 보험, 의료 자문이 아닙니다."),
])

apply("app/[locale]/about/page.tsx", [
    ("Mega Calculators에서 어떤 계산기를 이용할 수 있는지, 누구에게 도움이 되는지, 결과를 어떻게 활용하면 좋은지 소개합니다.", "Mega Calculators에서 어떤 계산기를 이용할 수 있는지, 누구에게 도움이 되는지, 결과를 어떻게 이해하면 좋은지 소개합니다."),
    ('{isKo ? "페이지를 이렇게 활용해보세요" : "How to get the most out of each page"}', '{isKo ? "계산 결과를 더 잘 이해하려면" : "How to get the most out of each page"}'),
    ("결과는 교육과 일반 참고용입니다.", "결과는 학습이나 간단한 비교에 참고하는 용도입니다."),
])

apply("lib/trustPages.ts", [
    ("Mega Calculators에서 공식, 단위 변환, 반올림, 기본값, 가정값을 처리하는 방식을 설명합니다.", "Mega Calculators에서 공식, 단위 변환, 반올림, 기본값, 계산 조건을 처리하는 방식을 설명합니다."),
    ("보조 결과값은 전체 흐름을 이해하기 위한 정보이며, 공식 견적서나 전문 판단을 대신하지 않습니다.", "추가로 표시되는 결과는 전체 흐름을 이해하기 위한 정보이며, 공식 견적서나 전문 판단을 대신하지 않습니다."),
    ('{ heading: "기본값과 가정값 처리",', '{ heading: "기본값과 계산 조건",'),
    ("금리, 기간, 빈도, 단위, 측정 방식 같은 가정이 달라지면 결과도 달라질 수 있으므로 여러 시나리오를 비교해보시는 것이 좋습니다.", "금리, 기간, 빈도, 단위, 측정 방식 같은 조건이 달라지면 결과도 달라질 수 있으므로 여러 경우를 비교해보는 것이 좋습니다."),
    ("오류가 아니라 가정값이나 제한 사항 때문에 생긴 차이라면, 사용자가 더 쉽게 이해할 수 있도록 설명을 보완할 수 있습니다.", "오류가 아니라 계산 조건이나 제한 사항 때문에 생긴 차이라면, 사용자가 더 쉽게 이해할 수 있도록 설명을 보완할 수 있습니다."),
    ("중요한 결정에는 계산기를 참고 자료로 활용하시고, 최종 숫자는 관련 기관이나 전문가와 다시 확인해주세요.", "중요한 결정에서는 계산 결과를 참고만 하고, 최종 숫자는 관련 기관이나 전문가와 다시 확인해주세요."),
])

apply("lib/calculators/enhancedContent.ts", [
    ('title: isKo ? "날짜와 시간 계산 활용법" :', 'title: isKo ? "날짜와 시간 계산 방법" :'),
    ('cta: isKo ? "활용 예시 보기 →" :', 'cta: isKo ? "사용 예시 보기 →" :'),
    ('{ title: isKo ? `${localizeCategoryName(category, locale)} 활용 가이드` :', '{ title: isKo ? `${localizeCategoryName(category, locale)} 함께 보기` :'),
])

apply("lib/calculators/localization.ts", [
    ('"Use cases": "활용 사례"', '"Use cases": "사용 예시"'),
    ('"See use cases →": "활용 사례 보기 →"', '"See use cases →": "사용 예시 보기 →"'),
    ('"See use cases": "활용 사례 보기"', '"See use cases": "사용 예시 보기"'),
    ("계산 결과는 계획 수립과 학습용 참고 자료입니다.", "계산 결과는 계획을 세우거나 학습할 때 참고하는 자료입니다."),
    ("금융기관 조건을 검토하기 전에 예상 금액을 미리 확인하는 데 활용할 수 있습니다.", "금융기관 조건을 검토하기 전에 예상 금액을 미리 확인할 수 있습니다."),
    ("의사, 영양사, 코치와 상담하기 전에 현재 수치를 정리하는 데 활용할 수 있습니다.", "의사, 영양사, 코치와 상담하기 전에 현재 수치를 정리해볼 수 있습니다."),
    ("여러 일정을 나란히 비교할 때 활용할 수 있습니다.", "여러 일정을 나란히 비교할 때 유용합니다."),
    ("실생활에서 결정을 내릴 때 빠른 참고 수치로 활용할 수 있습니다.", "실생활에서 결정을 내릴 때 대략적인 수치를 빠르게 확인할 수 있습니다."),
])

apply("lib/calculators/scenarioInterpretation.ts", [
    ("BMI는 빠른 참고용이라 근육량·체지방률·허리둘레까지 함께 보시는 게 더 정확합니다.", "BMI는 대략적인 확인용 지표라 근육량·체지방률·허리둘레까지 함께 보는 게 더 정확합니다."),
    ("실제 은행 한도와 우대금리는 DSR·신용등급에 따라 달라지니 참고용으로 활용하세요.", "실제 은행 한도와 우대금리는 DSR·신용등급에 따라 달라지니 대략적인 비교에만 참고하세요."),
])

apply("lib/calculators/seoContent.ts", [
    ("아래 콘텐츠를 같이 보면", "아래 글과 가이드를 같이 보면"),
    ("아래 콘텐츠와 함께 비교하면", "아래 글과 함께 비교하면"),
    ("아래 콘텐츠를 함께 보세요", "아래 글과 가이드를 함께 보세요"),
    ("아래 콘텐츠가 도움이 됩니다", "아래 글과 가이드가 도움이 됩니다"),
    ("아래 콘텐츠가 도움이 됩니다.", "아래 글과 가이드가 도움이 됩니다."),
    ('cta: isKo ? "콘텐츠 보기 →" :', 'cta: isKo ? "관련 글 보기 →" :'),
    ('relatedContentTitle: isKo ? "같이 보면 좋은 콘텐츠" :', 'relatedContentTitle: isKo ? "같이 보면 좋은 글과 가이드" :'),
    ("이 계산기를 더 실용적으로 활용하려면 아래 글과 가이드를 함께 확인해보세요.", "이 계산기를 더 유용하게 사용하려면 아래 글과 가이드를 함께 확인해보세요."),
])

print("Korean naturalization C cleanup applied")
