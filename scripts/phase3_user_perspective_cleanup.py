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
        ('  const totalCalculators = calculators.length;\n', ''),
        (
            '''        <div className="mt-10 grid gap-4 md:grid-cols-3">\n          <StatCard label={isKo ? "전체 계산기" : "Total calculators"} value={`${totalCalculators}`} />\n          <StatCard label={isKo ? "주요 카테고리" : "Main categories"} value={`${categoryCards.length}`} />\n          <StatCard label={isKo ? "자주 쓰는 분야" : "Popular uses"} value={isKo ? "금융, 건강, 생활" : "Finance, health, projects"} />\n        </div>''',
            '''        <div className="mt-10 grid gap-4 md:grid-cols-3">\n          <StatCard label={isKo ? "가입 없이" : "No sign-up"} value={isKo ? "바로 계산" : "Start right away"} />\n          <StatCard label={isKo ? "무료로" : "Free to use"} value={isKo ? "원하는 만큼" : "Run any calculator"} />\n          <StatCard label={isKo ? "결과와 설명" : "Results + context"} value={isKo ? "한 화면에서" : "In one place"} />\n        </div>''',
        ),
        (
            '''              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{category.items.length} {isKo ? "개 도구" : "tools"}</div>\n              <h3 className="mt-3 text-2xl font-bold text-slate-950">{category.name}</h3>''',
            '''              <h3 className="text-2xl font-bold text-slate-950">{category.name}</h3>''',
        ),
    ],
)

replace(
    "app/[locale]/about/page.tsx",
    [
        (
            '{isKo ? "함께 만들어가요" : "Help shape what comes next"}',
            '{isKo ? "사용하면서 불편한 점이 있다면" : "If something gets in your way"}',
        ),
        (
            '"이미 있는 계산기 옆에 더 읽을 만한 글과 가이드를 꾸준히 더해, 화면에서 보신 결과가 자연스럽게 실제 결정으로 이어지도록 보강하고 있어요. 사용 중에 오류나 헷갈리는 표현이 보이면 언제든지 알려주세요. 의견을 받아 조금씩 더 나아지고 있습니다."',
            '"계산 결과가 이상하거나 설명이 헷갈리거나 사용하기 불편한 부분이 보이면 언제든지 알려주세요. 어떤 계산기에서 무엇이 불편했는지 남겨주시면 확인하고 개선하는 데 큰 도움이 됩니다."',
        ),
        (
            '"More articles and guides are added regularly so the result on your screen leads naturally into a real decision. If you spot an error, an unclear sentence, or something that could work better for you, let us know any time — your feedback shapes what gets improved next."',
            '"If a result looks wrong, an explanation is unclear, or something makes the calculator harder to use, let us know. Telling us which calculator you were using and what felt confusing helps us improve it."',
        ),
        (
            '"앞으로 광고나 분석 도구가 함께 쓰일 수 있지만, 페이지를 여셨을 때 가장 먼저 보이는 것은 언제나 깨끗한 화면과 명확한 결과입니다."',
            '"광고가 표시되는 경우에도 계산 입력과 결과 확인을 방해하지 않는 화면을 우선합니다."',
        ),
        (
            '"Analytics and advertising may support the site, but the first thing you will see on any page is always a clean layout and a clear answer."',
            '"When ads are shown, the calculator inputs and results are kept as the priority so you can get your answer without unnecessary distraction."',
        ),
    ],
)

replace(
    "app/[locale]/faq/page.tsx",
    [
        (
            '"Ads help cover hosting, maintenance, and the steady expansion of the calculator library. The layout is kept clean so ads don\'t get in the way of finding your answer."',
            '"Some pages may show ads, but ads do not change calculator results. The layout keeps the inputs and results as the priority so you can use the calculator without unnecessary distraction."',
        ),
        (
            '"서버 운영과 유지보수, 그리고 계산기를 꾸준히 늘려가기 위한 비용을 광고가 함께 지원하고 있어요. 답을 찾으시는 데 방해되지 않도록 화면은 최대한 깔끔하게 유지하려고 합니다."',
            '"일부 페이지에는 광고가 표시될 수 있지만 계산 결과에는 영향을 주지 않습니다. 입력과 결과 확인을 방해하지 않도록 계산기 화면을 우선해서 구성하고 있어요."',
        ),
    ],
)

replace(
    "components/layout/SiteFooter.tsx",
    [
        ('        popular: "인기 계산기",\n', '        popular: "인기 계산기",\n        trust: "신뢰 및 정책",\n'),
        ('        popular: "Popular calculators",\n', '        popular: "Popular calculators",\n        trust: "Trust & policies",\n'),
        (
            '''          <div className="grid gap-6 sm:grid-cols-2">''',
            '''          <div className="grid gap-6 sm:grid-cols-3">''',
        ),
        (
            '''                <Link href={withLocale(locale, "/contact")}>{t.contact}</Link>\n                <Link href={withLocale(locale, "/privacy")}>{t.privacy}</Link>\n                <Link href={withLocale(locale, "/terms")}>{t.terms}</Link>\n                <Link href={withLocale(locale, "/editorial-standards")}>{t.editorial}</Link>\n                <Link href={withLocale(locale, "/methodology")}>{t.methodology}</Link>\n                <Link href={withLocale(locale, "/corrections")}>{t.corrections}</Link>\n              </div>\n            </div>\n            <div>\n              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.popular}</div>''',
            '''                <Link href={withLocale(locale, "/contact")}>{t.contact}</Link>\n              </div>\n            </div>\n            <div>\n              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.popular}</div>''',
        ),
        (
            '''              </div>\n            </div>\n          </div>\n        </div>''',
            '''              </div>\n            </div>\n            <div>\n              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.trust}</div>\n              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-600">\n                <Link href={withLocale(locale, "/privacy")}>{t.privacy}</Link>\n                <Link href={withLocale(locale, "/terms")}>{t.terms}</Link>\n                <Link href={withLocale(locale, "/editorial-standards")}>{t.editorial}</Link>\n                <Link href={withLocale(locale, "/methodology")}>{t.methodology}</Link>\n                <Link href={withLocale(locale, "/corrections")}>{t.corrections}</Link>\n              </div>\n            </div>\n          </div>\n        </div>''',
        ),
    ],
)

print("phase 3 user-perspective cleanup applied")
