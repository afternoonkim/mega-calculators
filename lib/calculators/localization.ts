import type { CalculatorDefinition } from "@/lib/calculators/data";
import type { Locale } from "@/lib/i18n";

const categoryNames = {
  en: { finance: "Finance Calculators", business: "Business Calculators", health: "Health Calculators", fitness: "Fitness Calculators", math: "Math Calculators", statistics: "Statistics Calculators", "unit-converters": "Unit Converters", "time-date": "Time & Date Calculators", construction: "Construction Calculators", "food-cooking": "Food & Cooking Calculators", "computer-tech": "Computer & Tech Calculators", "physics-science": "Physics & Science Calculators", education: "Education Calculators", "everyday-life": "Everyday Life Calculators", other: "Other Calculators" },
  ko: { finance: "금융 계산기", business: "비즈니스 계산기", health: "건강 계산기", fitness: "피트니스 계산기", math: "수학 계산기", statistics: "통계 계산기", "unit-converters": "단위 변환기", "time-date": "시간·날짜 계산기", construction: "건축·인테리어 계산기", "food-cooking": "요리·음식 계산기", "computer-tech": "컴퓨터·기술 계산기", "physics-science": "물리·과학 계산기", education: "교육 계산기", "everyday-life": "생활 계산기", other: "기타 계산기" },
} as const;

const slugKoNameMap: Record<string, string> = {
  "compound-interest-calculator": "복리 계산기",
  "loan-calculator": "대출 계산기",
  "mortgage-calculator": "주택담보대출 계산기",
  "investment-calculator": "투자 수익 계산기",
  "dividend-yield-calculator": "배당수익률 계산기",
  "retirement-calculator": "은퇴 자금 계산기",
  "savings-calculator": "저축 계산기",
  "interest-rate-calculator": "이자율 계산기",
  "credit-card-payoff-calculator": "신용카드 상환 계산기",
  "inflation-calculator": "물가상승률 계산기",
  "roi-calculator": "투자수익률 계산기",
  "stock-average-calculator": "주식 평단가 계산기",
  "net-worth-calculator": "순자산 계산기",
  "debt-payoff-calculator": "부채 상환 계산기",
  "amortization-calculator": "원리금 상환 계산기",
  "budget-calculator": "예산 계산기",
  "rent-vs-buy-calculator": "전세·월세 vs 매수 비교 계산기",
  "apr-calculator": "연이율 계산기",
  "future-value-calculator": "미래가치 계산기",
  "present-value-calculator": "현재가치 계산기",
  "bmi-calculator": "BMI 계산기",
  "bmr-calculator": "기초대사량 계산기",
  "body-fat-calculator": "체지방률 계산기",
  "calorie-calculator": "칼로리 계산기",
  "ideal-weight-calculator": "표준체중 계산기",
  "water-intake-calculator": "하루 물 섭취량 계산기",
  "tdee-calculator": "하루 총소모칼로리 계산기",
  "pregnancy-due-date-calculator": "출산 예정일 계산기",
  "ovulation-calculator": "배란일 계산기",
  "heart-rate-calculator": "심박수 계산기",
  "pace-calculator": "페이스 계산기",
  "protein-intake-calculator": "단백질 섭취량 계산기",
  "body-surface-area-calculator": "체표면적 계산기",
  "waist-to-hip-ratio-calculator": "허리-엉덩이 비율 계산기",
  "lean-body-mass-calculator": "제지방량 계산기",
  "age-calculator": "나이 계산기",
  "date-difference-calculator": "날짜 차이 계산기",
  "time-duration-calculator": "시간 차이 계산기",
  "work-hours-calculator": "근무시간 계산기",
  "days-between-dates-calculator": "두 날짜 사이 계산기",
  "business-days-calculator": "영업일 계산기",
  "countdown-calculator": "카운트다운 계산기",
  "week-number-calculator": "주차 계산기",
  "date-calculator": "날짜 계산기",
  "hours-between-times-calculator": "시간 간격 계산기",
  "percentage-calculator": "퍼센트 계산기",
  "percent-change-calculator": "증감률 계산기",
  "percentage-of-total-calculator": "전체 대비 비율 계산기",
  "fraction-calculator": "분수 계산기",
  "ratio-calculator": "비율 계산기",
  "average-calculator": "평균 계산기",
  "weighted-average-calculator": "가중평균 계산기",
  "probability-calculator": "확률 계산기",
  "standard-deviation-calculator": "표준편차 계산기",
  "log-calculator": "로그 계산기",
  "square-root-calculator": "제곱근 계산기",
  "exponent-calculator": "지수 계산기",
  "factorial-calculator": "팩토리얼 계산기",
  "lcm-calculator": "최소공배수 계산기",
  "gcd-calculator": "최대공약수 계산기",
  "length-converter": "길이 변환기",
  "weight-converter": "무게 변환기",
  "temperature-converter": "온도 변환기",
  "speed-converter": "속도 변환기",
  "area-converter": "면적 변환기",
  "volume-converter": "부피 변환기",
  "energy-converter": "에너지 변환기",
  "pressure-converter": "압력 변환기",
  "power-converter": "전력 변환기",
  "data-storage-converter": "데이터 용량 변환기",
  "angle-converter": "각도 변환기",
  "density-converter": "밀도 변환기",
  "fuel-economy-converter": "연비 변환기",
  "time-unit-converter": "시간 단위 변환기",
  "frequency-converter": "주파수 변환기",
  "force-converter": "힘 변환기",
  "torque-converter": "토크 변환기",
  "flow-rate-converter": "유량 변환기",
  "electric-charge-converter": "전하량 변환기",
  "magnetic-field-converter": "자기장 변환기",
  "tip-calculator": "팁 계산기",
  "discount-calculator": "할인 계산기",
  "gpa-calculator": "학점 계산기",
  "split-bill-calculator": "더치페이 계산기",
  "sales-tax-calculator": "판매세 계산기",
  "commission-calculator": "수수료 계산기",
  "markup-calculator": "마크업 계산기",
  "markdown-calculator": "할인가 계산기",
  "fuel-cost-calculator": "연료비 계산기",
  "rent-split-calculator": "월세 분담 계산기",
  "break-even-calculator": "손익분기점 계산기",
  "rule-of-72-calculator": "72의 법칙 계산기",
  "unit-price-calculator": "단가 계산기",
  "sleep-calculator": "수면 계산기",
  "dog-age-calculator": "강아지 나이 계산기",
  "cat-age-calculator": "고양이 나이 계산기",
  "overtime-pay-calculator": "초과근무 수당 계산기",
  "hourly-to-salary-calculator": "시급 → 연봉 계산기",
  "salary-to-hourly-calculator": "연봉 → 시급 계산기",
  "travel-budget-calculator": "여행 예산 계산기",
  "auto-loan-calculator": "자동차 대출 계산기",
  "student-loan-calculator": "학자금 대출 계산기",
  "personal-loan-calculator": "개인 대출 계산기",
  "business-loan-calculator": "사업자 대출 계산기",
  "savings-goal-calculator": "저축 목표 계산기",
  "down-payment-savings-calculator": "주택 계약금 저축 계산기",
  "ira-calculator": "개인 은퇴계좌 계산기",
  "college-savings-calculator": "교육비 저축 계산기",
  "emergency-fund-calculator": "비상자금 계산기",
  "debt-to-income-calculator": "총부채상환비율 계산기",
  "paycheck-calculator": "급여 계산기",
  "biweekly-paycheck-calculator": "격주 급여 계산기",
  "annual-income-calculator": "연소득 계산기",
  "hourly-wage-calculator": "시급 계산기",
  "simple-interest-calculator": "단리 계산기",
  "dividend-income-calculator": "배당금 수입 계산기",
  "house-down-payment-calculator": "주택 계약금 계산기",
  "car-affordability-calculator": "차량 구매 가능 금액 계산기",
  "refinance-savings-calculator": "대환대출 절감액 계산기",
  "savings-rate-calculator": "저축률 계산기",
  "real-return-calculator": "실질 수익률 계산기",
  "lease-vs-buy-calculator": "리스 vs 구매 비교 계산기",
  "capital-gains-tax-calculator": "양도소득세 계산기",
  "net-pay-raise-calculator": "실수령 인상액 계산기",
  "hydration-calculator": "수분 섭취량 계산기",
  "daily-protein-calculator": "하루 단백질 계산기",
  "dubois-body-surface-area-calculator": "DuBois 체표면적 계산기",
  "calorie-deficit-calculator": "칼로리 적자 계산기",
  "target-heart-rate-calculator": "목표 심박수 계산기",
  "one-rep-max-calculator": "1RM 계산기",
  "pace-per-km-calculator": "킬로미터당 페이스 계산기",
  "pace-per-mile-calculator": "마일당 페이스 계산기",
  "walking-calories-calculator": "걷기 칼로리 계산기",
  "running-calories-calculator": "달리기 칼로리 계산기",
  "target-body-fat-calculator": "목표 체지방률 계산기",
  "bmi-prime-calculator": "BMI Prime 계산기",
  "waist-to-height-ratio-calculator": "허리-키 비율 계산기",
  "lean-bulk-calorie-calculator": "린 벌크 칼로리 계산기",
  "protein-per-meal-calculator": "끼니당 단백질 계산기",
  "hours-to-minutes-calculator": "시간 → 분 계산기",
  "minutes-to-seconds-calculator": "분 → 초 계산기",
  "days-to-hours-calculator": "일 → 시간 계산기",
  "weeks-to-days-calculator": "주 → 일 계산기",
  "months-to-days-calculator": "개월 → 일 계산기",
  "years-to-months-calculator": "년 → 개월 계산기",
  "pto-accrual-calculator": "유급휴가 적립 계산기",
  "meeting-duration-calculator": "회의 시간 계산기",
  "shift-break-calculator": "근무 휴게시간 계산기",
  "pay-period-hours-calculator": "급여기간 근무시간 계산기",
  "study-hours-calculator": "공부시간 계산기",
  "project-hours-calculator": "프로젝트 시간 계산기",
  "commute-time-calculator": "통근시간 계산기",
  "overtime-hours-calculator": "초과근무 시간 계산기",
  "deadline-days-left-calculator": "마감일까지 남은 일수 계산기",
  "percentage-increase-calculator": "증가율 계산기",
  "percentage-decrease-calculator": "감소율 계산기",
  "ratio-to-percentage-calculator": "비율 → 퍼센트 계산기",
  "decimal-to-percent-calculator": "소수 → 퍼센트 계산기",
  "percent-to-decimal-calculator": "퍼센트 → 소수 계산기",
  "circle-area-calculator": "원 넓이 계산기",
  "circle-circumference-calculator": "원둘레 계산기",
  "rectangle-area-calculator": "직사각형 넓이 계산기",
  "triangle-area-calculator": "삼각형 넓이 계산기",
  "pythagorean-theorem-calculator": "피타고라스 정리 계산기",
  "slope-calculator": "기울기 계산기",
  "distance-formula-calculator": "거리 공식 계산기",
  "power-function-calculator": "거듭제곱 계산기",
  "cube-root-calculator": "세제곱근 계산기",
  "density-calculator": "밀도 계산기",
  "land-area-converter": "토지 면적 변환기",
  "liquid-volume-converter": "액체 부피 변환기",
  "air-pressure-converter": "기압 변환기",
  "electricity-power-converter": "전기 전력 변환기",
  "digital-storage-converter": "디지털 저장 용량 변환기",
  "signal-frequency-converter": "신호 주파수 변환기",
  "load-force-converter": "하중 변환기",
  "rotational-torque-converter": "회전 토크 변환기",
  "heat-energy-converter": "열에너지 변환기",
  "geometry-angle-converter": "기하 각도 변환기",
  "material-density-converter": "재료 밀도 변환기",
  "duration-unit-converter": "시간 길이 단위 변환기",
  "cooking-volume-converter": "요리 부피 변환기",
  "fuel-volume-converter": "연료 부피 변환기",
  "battery-charge-converter": "배터리 전하량 변환기",
  "paint-calculator": "페인트 계산기",
  "flooring-calculator": "바닥재 계산기",
  "concrete-calculator": "콘크리트 계산기",
  "mulch-calculator": "멀치 계산기",
  "tile-calculator": "타일 계산기",
  "wallpaper-calculator": "벽지 계산기",
  "fence-calculator": "울타리 계산기",
  "pool-volume-calculator": "수영장 부피 계산기",
  "appliance-energy-cost-calculator": "가전 전기요금 계산기",
  "road-trip-cost-calculator": "자동차 여행 비용 계산기",
  "babysitting-cost-calculator": "베이비시팅 비용 계산기",
  "freelance-rate-calculator": "프리랜서 단가 계산기",
  "meal-prep-cost-calculator": "식단 준비 비용 계산기",
  "party-budget-calculator": "파티 예산 계산기",
  "moving-cost-calculator": "이사 비용 계산기",
  "utility-bill-split-calculator": "공과금 분담 계산기",
};


const nameKoOverrides: Record<string, string> = {
  "ROI Calculator": "투자수익률 계산기",
  "APR Calculator": "연이율 계산기",
  "GPA Calculator": "학점 계산기",
  "BMI Calculator": "BMI 계산기",
  "BMR Calculator": "기초대사량 계산기",
  "TDEE Calculator": "하루 총소모칼로리 계산기",
  "LCM Calculator": "최소공배수 계산기",
  "GCD Calculator": "최대공약수 계산기",
  "Mega Calculators": "Mega Calculators",
};

const uiDirectMap: Record<string, string> = {
  "Instant result": "즉시 계산 결과",
  "Estimated result": "예상 결과",
  "More tools for this calculator": "이 계산기와 함께 보면 좋은 페이지",
  "Formula": "공식",
  "Guide": "가이드",
  "Use cases": "사용 예시",
  "Examples": "예시",
  "Open example →": "예시 보기 →",
  "View formula →": "공식 보기 →",
  "Read guide →": "가이드 보기 →",
  "See use cases →": "사용 예시 보기 →",
  "About this calculator": "계산기 안내",
  "How this calculator works": "계산 방식 안내",
  "How to use it": "사용 방법",
  "Example": "예시",
  "Related calculators": "관련 계산기",
  "Open calculator →": "계산기 열기 →",
  "Calculator results are provided for planning and educational purposes. For taxes, legal decisions, lending, or medical advice, verify the numbers with an official source or qualified professional.": "계산 결과는 계획을 세우거나 학습할 때 참고하는 자료입니다. 세금, 법률, 대출, 의료처럼 중요한 판단이 필요한 경우에는 공식 자료나 전문가와 함께 다시 확인하세요.",
  "No matching calculators found. Try words like mortgage, calorie, GPA, discount, or converter.": "검색 결과가 없습니다. 대출, 칼로리, 학점, 할인, 변환기 같은 단어로 다시 검색해보세요.",
  "Calculators": "계산기",
  "Home": "홈",
  "Category": "카테고리",
  "Search calculators": "계산기 검색",
  "Clear search": "검색 지우기",
  "Formula guide": "공식 가이드",
  "How to read the formula": "공식을 이해하는 방법",
  "Jump back to tools": "바로 이동",
  "Example pages": "예시 페이지",
  "Inputs used in this example": "이 예시에 사용된 입력값",
  "Example calculation": "예시 계산",
  "Why this example matters": "이 예시가 도움이 되는 이유",
  "Continue exploring": "계속 살펴보기",
  "Open calculator": "계산기 열기",

  "Hours per day": "하루당 시간",
  "Number of days": "일수",
  "Length": "길이",
  "Width": "너비",
  "Depth": "깊이",
  "Room length (ft)": "방 길이 (ft)",
  "Room width (ft)": "방 너비 (ft)",
  "Length (ft)": "길이 (ft)",
  "Width (ft)": "너비 (ft)",
  "Depth (in)": "깊이 (in)",
  "Rectangle area": "직사각형 넓이",
  "Total study time": "총 공부 시간",
  "Concrete needed": "필요한 콘크리트 양",
  "Approx. 80 lb bags": "80lb 포대 기준 수량",
  "Approx. weight": "예상 무게",
  "Volume": "부피",
  "Surface area": "면적",
  "Estimated tiles needed": "예상 타일 수량",
  "Tiles before waste": "여유분 제외 타일 수량",
  "Waste included": "여유분 포함",
  "Converted value": "변환값",
  "Invalid input": "잘못된 입력값",
  "Enter a value that matches the base you selected.": "선택한 진법에 맞는 값을 입력하세요.",
  "Binary": "2진수",
  "Octal": "8진수",
  "Decimal": "10진수",
  "Hexadecimal": "16진수",
  "Age difference": "나이 차이",
  "Total days": "총 일수",
  "Earlier date": "이른 날짜",
  "Later date": "늦은 날짜",
  "Invalid date": "잘못된 날짜",
  "Business days": "영업일 수",
  "Days remaining": "남은 일수",
  "ISO week number": "ISO 주차",
  "Calculated date": "계산된 날짜",
  "Days between dates": "두 날짜 사이 일수",
  "Time duration": "시간 차이",
  "Total work hours": "총 근무 시간",
  "Time": "시간",
  "Average": "평균",
  "Weighted average": "가중평균",
  "Standard deviation": "표준편차",
  "Least common multiple": "최소공배수",
  "Greatest common divisor": "최대공약수",
  "Converted temperature": "변환된 온도",
  "Converted fuel economy": "변환된 연비",
  "Tip amount": "팁 금액",
  "Total bill": "총 금액",
  "Per person": "1인당 금액",
  "Final price": "최종 금액",
  "You save": "절약 금액",
  "Sales tax": "판매세",
  "Commission": "수수료",
  "Selling price": "판매 가격",
  "Sale price": "할인 가격",
  "Monthly payment": "월 상환액",
  "Total paid": "총 납입액",
  "Total interest": "총 이자",
  "Loan amount": "대출 금액",
  "Total repayment": "총 상환액",
  "Principal": "원금",
  "Down payment": "계약금",
  "Discount rate": "할인율",
  "Future value": "미래 가치",
  "Present value": "현재 가치",
  "Average pace": "평균 페이스",
  "Average speed": "평균 속도",
  "Lean body mass": "제지방량",
  "Age": "나이",
  "Percentage": "퍼센트",
  "Percent change": "증감률",
  "Ratio": "비율",
  "Factorial": "팩토리얼",
  "Read the guide": "가이드 보기",
  "Read guide": "가이드 보기",
  "See use cases": "사용 예시 보기",
  "View formula": "공식 보기",
  "Mega Calculators": "Mega Calculators",
};

const exactLabelMap: Record<string, string> = {
  "APR (%)": "연이율 (%)",
  "Acres": "에이커",
  "Activity level": "활동 수준",
  "Age": "나이",
  "Amount today (USD)": "현재 금액 (원)",
  "Ampere-hour": "암페어시",
  "Annual dividend per share (USD)": "주당 연간 배당금 (원)",
  "Annual growth rate (%)": "연간 성장률 (%)",
  "Annual inflation rate (%)": "연간 물가상승률 (%)",
  "Annual interest rate (%)": "연 이자율 (%)",
  "Annual return (%)": "연 수익률 (%)",
  "Annual return rate (%)": "연 수익률 (%)",
  "Annual salary (USD)": "연봉 (원)",
  "Annual 401(k) contribution (USD)": "연간 401(k) 납입액 (원)",
  "Annual HSA/FSA payroll deductions (USD)": "연간 HSA/FSA 급여 공제액 (원)",
  "Annual homeowners insurance (USD)": "연간 주택 보험료 (원)",
  "Annual post-tax deductions (USD)": "연간 세후 공제액 (원)",
  "Annual property tax rate (%)": "연간 재산세율 (%)",
  "Estimated annual PMI rate (%)": "예상 연간 PMI 비율 (%)",
  "Extra monthly principal (USD)": "월 추가 원금 상환액 (원)",
  "Filing status": "세금 신고 유형",
  "Gross annual salary (USD)": "연간 총급여 (원)",
  "Head of household": "세대주",
  "Married filing jointly": "부부 공동 신고",
  "Married filing separately": "부부 개별 신고",
  "Monthly HOA dues (USD)": "월 HOA 관리비 (원)",
  "Other annual pre-tax deductions (USD)": "기타 연간 세전 공제액 (원)",
  "Pay frequency": "급여 지급 주기",
  "Single": "미혼",
  "State/local effective tax rate (%)": "주·지방세 예상 실효세율 (%)",
  "Weekly": "매주",
  "Biweekly (26/year)": "격주 (연 26회)",
  "Semimonthly (24/year)": "월 2회 (연 24회)",
  "Monthly": "매월",
  "Atmosphere": "기압",
  "Average cycle length (days)": "평균 생리 주기 (일)",
  "BTU/hour": "BTU/시간",
  "Bar": "바",
  "Base": "진법",
  "Bill amount (USD)": "총 금액 (원)",
  "Birth date": "생년월일",
  "Body fat (%)": "체지방률 (%)",
  "Body weight (lb)": "체중 (lb)",
  "Bytes": "바이트",
  "Calories": "칼로리",
  "Cat age (years)": "고양이 나이 (년)",
  "Celsius": "섭씨",
  "Centimeters": "센티미터",
  "Commission rate (%)": "수수료율 (%)",
  "Comparison horizon (years)": "비교 기간 (년)",
  "Cost (USD)": "비용 (원)",
  "Cost of investment (USD)": "투자 원금 (원)",
  "Coulombs": "쿨롱",
  "Course 1 credits": "과목 1 학점",
  "Course 1 grade points": "과목 1 평점",
  "Course 2 credits": "과목 2 학점",
  "Course 2 grade points": "과목 2 평점",
  "Course 3 credits": "과목 3 학점",
  "Course 3 grade points": "과목 3 평점",
  "Cubic meters": "세제곱미터",
  "Cubic meters/hour": "세제곱미터/시간",
  "Current age": "현재 나이",
  "Current balance (USD)": "현재 잔액 (원)",
  "Current savings (USD)": "현재 저축액 (원)",
  "Daily budget (USD)": "하루 예산 (원)",
  "Date": "날짜",
  "Days": "일",
  "Days to add or subtract": "더하거나 뺄 일수",
  "Days worked per week": "주당 근무일수",
  "Debt balance (USD)": "부채 잔액 (원)",
  "Degrees": "도",
  "Discount (%)": "할인율 (%)",
  "Discount rate (%)": "할인율 (%)",
  "Distance (miles)": "거리 (마일)",
  "Dog age (years)": "강아지 나이 (년)",
  "Down payment (USD)": "계약금 (원)",
  "End date": "종료 날짜",
  "End time": "종료 시간",
  "Exponent": "지수",
  "Fahrenheit": "화씨",
  "Feet": "피트",
  "Feet/second": "피트/초",
  "Female": "여성",
  "First day of last period": "마지막 생리 시작일",
  "First purchase price": "첫 번째 매수 가격",
  "First purchase shares": "첫 번째 매수 주식 수",
  "Fixed costs (USD)": "고정비 (원)",
  "Fraction 1 denominator": "분수 1 분모",
  "Fraction 1 numerator": "분수 1 분자",
  "Fraction 2 denominator": "분수 2 분모",
  "Fraction 2 numerator": "분수 2 분자",
  "From unit": "변환 전 단위",
  "Fuel economy value": "연비 값",
  "Future value (USD)": "미래 가치 (원)",
  "GB": "GB",
  "GHz": "GHz",
  "Gas price per gallon (USD)": "갤런당 연료 가격 (원)",
  "Gauss": "가우스",
  "Gradians": "그라드",
  "Grams": "그램",
  "Hectares": "헥타르",
  "Height (cm)": "키 (cm)",
  "Hip (cm)": "엉덩이 둘레 (cm)",
  "Hip circumference (cm, female only)": "엉덩이 둘레 (cm, 여성만)",
  "Home price (USD)": "주택 가격 (원)",
  "Horsepower": "마력",
  "Hourly rate (USD)": "시간당 단가 (원)",
  "Hours": "시간",
  "Hours per week": "주당 근무 시간",
  "Hours worked per day": "하루 근무 시간",
  "Hz": "Hz",
  "Inches": "인치",
  "Initial deposit": "초기 금액",
  "Integer": "정수",
  "Integers (comma separated)": "정수 목록 (쉼표로 구분)",
  "Interest over 1 year (USD)": "1년 이자 (원)",
  "Interest paid (USD)": "이자 금액 (원)",
  "Interest rate (%)": "이자율 (%)",
  "Joules": "줄",
  "KB": "KB",
  "Kelvin": "켈빈",
  "Kilocalories": "킬로칼로리",
  "Kilogram-force meter": "킬로그램힘미터",
  "Kilograms": "킬로그램",
  "Kilojoules": "킬로줄",
  "Kilometers": "킬로미터",
  "Kilometers/hour": "킬로미터/시간",
  "Kilonewtons": "킬로뉴턴",
  "Kilopascal": "킬로파스칼",
  "Kilowatt": "킬로와트",
  "Kilowatt-hours": "킬로와트시",
  "Knots": "노트",
  "Lightly active": "가벼운 활동",
  "Liters": "리터",
  "Liters per 100 km": "100km당 리터",
  "Liters/second": "리터/초",
  "Loan amount (USD)": "대출 금액 (원)",
  "Loan fees (USD)": "대출 수수료 (원)",
  "Loan term (years)": "대출 기간 (년)",
  "Lodging total (USD)": "숙박 총액 (원)",
  "MB": "MB",
  "MHz": "MHz",
  "Male": "남성",
  "Markdown (%)": "할인가 비율 (%)",
  "Markup (%)": "마크업 비율 (%)",
  "Meters": "미터",
  "Meters/second": "미터/초",
  "Miles": "마일",
  "Miles per gallon": "갤런당 마일",
  "Miles/hour": "마일/시간",
  "Milliampere-hour": "밀리암페어시",
  "Milliliters": "밀리리터",
  "Millimeters": "밀리미터",
  "Millitesla": "밀리테슬라",
  "Minutes": "분",
  "Moderately active": "보통 활동",
  "Monthly contribution": "월 납입액",
  "Monthly contribution (USD)": "월 납입액 (원)",
  "Monthly expenses (USD)": "월 지출 (원)",
  "Monthly income (USD)": "월 소득 (원)",
  "Monthly payment (USD)": "월 상환액 (원)",
  "Monthly rent (USD)": "월세 (원)",
  "Mortgage rate (%)": "주택담보대출 금리 (%)",
  "Mortgage term (years)": "주택담보대출 기간 (년)",
  "Neck circumference (cm)": "목둘레 (cm)",
  "Net gain (USD)": "순이익 (원)",
  "New value": "새 값",
  "Newton-meters": "뉴턴미터",
  "Newtons": "뉴턴",
  "Number of people": "인원 수",
  "Number of roommates": "룸메이트 수",
  "Number of weeks": "주 수",
  "Numbers (comma separated)": "숫자 목록 (쉼표로 구분)",
  "Original price (USD)": "원래 가격 (원)",
  "Original value": "기존 값",
  "Ounces": "온스",
  "Overtime hours": "초과근무 시간",
  "Overtime multiplier": "초과근무 배수",
  "PSI": "PSI",
  "Part": "부분",
  "Pascal": "파스칼",
  "Percentage (%)": "백분율 (%)",
  "Pound-feet": "파운드피트",
  "Pound-force": "파운드힘",
  "Pounds": "파운드",
  "Price before tax (USD)": "세전 가격 (원)",
  "Price per unit (USD)": "단가 (원)",
  "Principal (USD)": "원금 (원)",
  "Protein per lb (g)": "체중 1lb당 단백질 (g)",
  "Quantity": "수량",
  "Radians": "라디안",
  "Resting heart rate (optional)": "안정 시 심박수 (선택)",
  "Retirement age": "은퇴 나이",
  "Sales tax rate (%)": "판매세율 (%)",
  "Second purchase price": "두 번째 매수 가격",
  "Second purchase shares": "두 번째 매수 주식 수",
  "Seconds": "초",
  "Sedentary": "비활동적",
  "Sex": "성별",
  "Share price (USD)": "주가 (원)",
  "Short tons": "쇼트톤",
  "Sleep cycles": "수면 사이클 수",
  "Square feet": "제곱피트",
  "Square kilometers": "제곱킬로미터",
  "Square meters": "제곱미터",
  "Start date": "시작 날짜",
  "Start time": "시작 시간",
  "Starting amount (USD)": "시작 금액 (원)",
  "Successful outcomes": "성공 결과 수",
  "TB": "TB",
  "Target date": "목표 날짜",
  "Temperature": "온도",
  "Tesla": "테슬라",
  "Time (years)": "기간 (년)",
  "Tip percentage (%)": "팁 비율 (%)",
  "To unit": "변환 후 단위",
  "Total": "합계",
  "Total assets (USD)": "총자산 (원)",
  "Total liabilities (USD)": "총부채 (원)",
  "Total outcomes": "전체 결과 수",
  "Total price (USD)": "총가격 (원)",
  "Total sales (USD)": "총매출 (원)",
  "Transportation (USD)": "교통비 (원)",
  "Trip days": "여행 일수",
  "Trip distance (miles)": "여행 거리 (마일)",
  "US cups": "미국 컵",
  "US gallons": "미국 갤런",
  "US gallons/minute": "미국 갤런/분",
  "US quarts": "미국 쿼트",
  "Value": "값",
  "Value 1": "값 1",
  "Value 2": "값 2",
  "Values (comma separated)": "값 목록 (쉼표로 구분)",
  "Variable cost per unit (USD)": "단위당 변동비 (원)",
  "Vehicle MPG": "차량 연비(MPG)",
  "Very active": "매우 활동적",
  "Waist (cm)": "허리둘레 (cm)",
  "Waist circumference (cm)": "허리둘레 (cm)",
  "Wake-up time": "기상 시간",
  "Watt": "와트",
  "Watt-hours": "와트시",
  "Weeks": "주",
  "Weeks per year": "연간 주 수",
  "Weight (kg)": "체중 (kg)",
  "Weights (comma separated)": "가중치 목록 (쉼표로 구분)",
  "Whole": "정수 부분",
  "Yards": "야드",
  "Years": "년",
  "g/cm³": "g/cm³",
  "kHz": "kHz",
  "kg/m³": "kg/m³",
  "lb/ft³": "lb/ft³",
  "Acceleration": "가속도",
  "Age difference": "나이 차이",
  "Annual income per 100 shares": "100주 기준 연간 배당금",
  "Approx. 80 lb bags": "약 80lb 포대 수",
  "Approx. weight": "대략적인 무게",
  "Approximate days lived": "대략 살아온 일수",
  "Assets": "자산",
  "Average": "평균",
  "Average cost basis": "평균 매입단가",
  "Average monthly addition": "월 평균 추가 납입액",
  "Average pace": "평균 페이스",
  "Average speed": "평균 속도",
  "BMI": "BMI",
  "BMR": "기초대사량",
  "Binary": "2진수",
  "Blood pressure": "혈압",
  "Break-even share price": "손익분기 주가",
  "Break-even units": "손익분기 수량",
  "Business days": "영업일 수",
  "Calculated date": "계산된 날짜",
  "Category": "분류",
  "Change in velocity": "속도 변화량",
  "Classification": "분류",
  "Commission": "수수료",
  "Concrete needed": "필요한 콘크리트 양",
  "Converted fuel economy": "변환된 연비",
  "Converted temperature": "변환된 온도",
  "Converted value": "변환값",
  "Days between dates": "두 날짜 사이 일수",
  "Days remaining": "남은 일수",
  "Decimal": "10진수",
  "Discount rate": "할인율",
  "Dividend per month equivalent": "월 환산 배당금",
  "Dividend yield": "배당수익률",
  "Down payment": "계약금",
  "Earlier date": "이른 날짜",
  "Elapsed half-lives": "경과 반감기 수",
  "Ending value": "최종 값",
  "Estimated APR": "예상 연이율",
  "Estimated GPA": "예상 학점",
  "Estimated annual rate": "예상 연간 비율",
  "Estimated annual salary": "예상 연봉",
  "Estimated body fat": "예상 체지방률",
  "Estimated due date": "출산 예정일",
  "Estimated fuel cost": "예상 연료비",
  "Estimated growth": "예상 수익",
  "Estimated hourly rate": "예상 시급",
  "Estimated ideal weight": "예상 표준체중",
  "Estimated investment growth": "예상 투자 수익",
  "Estimated max heart rate": "예상 최대 심박수",
  "Estimated monthly mortgage": "예상 월 주택담보대출 상환액",
  "Estimated monthly housing outflow": "예상 월 주거비 지출",
  "Scheduled principal & interest": "기본 원리금 상환액",
  "Extra principal payment": "추가 원금 상환액",
  "Property tax": "재산세",
  "Homeowners insurance": "주택 보험료",
  "PMI": "PMI",
  "HOA dues": "HOA 관리비",
  "Estimated interest with extra payments": "추가 상환 반영 예상 이자",
  "Estimated interest savings": "예상 이자 절감액",
  "Estimated take-home pay per paycheck": "회당 예상 실수령액",
  "Gross pay per paycheck": "회당 세전 급여",
  "Federal income tax per paycheck": "회당 연방소득세",
  "State/local tax per paycheck": "회당 주·지방세",
  "Social Security per paycheck": "회당 사회보장세",
  "Medicare per paycheck": "회당 메디케어세",
  "Pre-tax deductions per paycheck": "회당 세전 공제액",
  "Post-tax deductions per paycheck": "회당 세후 공제액",
  "Estimated annual take-home pay": "예상 연간 실수령액",
  "Estimated total deduction rate": "예상 총 공제 비율",
  "Estimated ovulation date": "예상 배란일",
  "Estimated payoff time": "예상 상환 기간",
  "Estimated retirement savings": "예상 은퇴 자금",
  "Estimated tiles needed": "예상 필요 타일 수",
  "Estimated total paid": "예상 총 지출액",
  "Estimated trip budget": "예상 여행 예산",
  "Factorial": "팩토리얼",
  "Fertile window ends": "가임기 종료일",
  "Fertile window starts": "가임기 시작일",
  "Final price": "최종 가격",
  "Fraction 1 decimal": "분수 1의 소수값",
  "Fraction 2 decimal": "분수 2의 소수값",
  "Fraction sum": "분수 합계",
  "Future cost": "미래 비용",
  "Future value": "미래 가치",
  "Future value target": "미래 가치 목표",
  "Gravel needed": "필요한 자갈 양",
  "Greatest common divisor": "최대공약수",
  "Hexadecimal": "16진수",
  "Highest": "최대값",
  "Highest frequency": "최빈값 빈도",
  "Human years equivalent": "사람 나이 환산",
  "Hydrogen ion concentration": "수소 이온 농도",
  "ISO week number": "ISO 주차 번호",
  "Initial amount": "초기 금액",
  "Interest paid": "이자 금액",
  "Kinetic energy": "운동 에너지",
  "Later date": "늦은 날짜",
  "Lean body mass": "제지방량",
  "Least common multiple": "최소공배수",
  "Liabilities": "부채",
  "Loan amount": "대출 금액",
  "Lowest": "최소값",
  "Mass": "질량",
  "Mean arterial pressure": "평균 동맥압",
  "Median": "중앙값",
  "Mode": "최빈값",
  "Moderate zone (50-70%)": "중간 강도 구간 (50~70%)",
  "Molar mass": "몰 질량",
  "Moles": "몰수",
  "Monthly budget balance": "월 예산 잔액",
  "Monthly expenses": "월 지출",
  "Monthly income": "월 소득",
  "Monthly payment": "월 상환액",
  "Monthly payment too low": "월 상환액이 너무 적음",
  "Net profit": "순이익",
  "Net worth": "순자산",
  "Next anniversary": "다음 기념일",
  "Octal": "8진수",
  "Overtime pay": "초과근무 수당",
  "Payment too low": "상환액이 너무 적음",
  "Per person": "1인당 금액",
  "Percent change": "증감률",
  "Percentage": "백분율",
  "Present value": "현재 가치",
  "Principal": "원금",
  "Pulse pressure": "맥압",
  "Purchasing power loss": "구매력 감소",
  "Ratio": "비율",
  "Remaining amount": "남은 금액",
  "Rent per person": "1인당 월세",
  "Result": "결과",
  "Return on investment": "투자수익률",
  "Sale price": "판매 가격",
  "Sales tax": "판매세",
  "Selling price": "판매 가격",
  "Simple comparison": "간단 비교",
  "Standard deviation": "표준편차",
  "Suggested bedtime": "추천 취침 시간",
  "Surface area": "표면적",
  "Tiles before waste": "여유분 제외 타일 수",
  "Time": "시간",
  "Time duration": "시간 차이",
  "Time horizon": "기간",
  "Tip amount": "팁 금액",
  "Total bill": "총 금액",
  "Total contributed": "총 납입액",
  "Total days": "총 일수",
  "Total interest": "총 이자",
  "Total interest and fees": "총 이자 및 수수료",
  "Total invested": "총 투자액",
  "Total paid": "총 상환액",
  "Total shares": "총 주식 수",
  "Total with tip": "팁 포함 총액",
  "Total work hours": "총 근무 시간",
  "Unique values": "고유 값 개수",
  "Unit price": "단가",
  "Upcoming anniversary": "다가오는 기념일",
  "Value of today": "현재 가치",
  "Values": "값",
  "Velocity": "속도",
  "Vigorous zone (70-85%)": "고강도 구간 (70~85%)",
  "Volume": "부피",
  "Waste included": "여유분 포함",
  "Weighted average": "가중평균",
  "Years to double": "2배가 되는 데 걸리는 기간",
  "Years until retirement": "은퇴까지 남은 기간",
  "You save": "절약 금액",
  "pH": "pH",

  "Total lease cost (USD)": "총 리스 비용 (원)",
  "Total buy cost (USD)": "총 구매 비용 (원)",
  "Lease cost (USD)": "리스 비용 (원)",
  "Buy cost (USD)": "구매 비용 (원)",
  "Length (ft)": "길이 (ft)",
  "Width (ft)": "너비 (ft)",
  "Depth (ft)": "깊이 (ft)",
  "Depth (in)": "깊이 (in)",
  "Lease minus buy cost": "리스 대비 구매 비용 차이",
  "Buy minus lease cost": "구매 대비 리스 비용 차이",
  "Total lease cost": "총 리스 비용",
  "Total buy cost": "총 구매 비용",
  "Cubic yards": "입방야드",
  "Cubic feet": "입방피트",
  "cubic yards": "입방야드",
  "cubic feet": "입방피트",
  "yd³": "입방야드",
  "ft³": "입방피트",
  "sq ft": "제곱피트",
  "calories/day": "kcal/일",
};

const longSentenceMap: Record<string, string> = {
  "This comparison is intentionally simplified. It does not include home appreciation, maintenance, taxes, insurance, or investment returns on cash.": "이 비교는 이해를 돕기 위한 단순 비교입니다. 주택 가격 상승, 유지보수비, 세금, 보험료, 현금 투자 수익 등은 포함하지 않습니다.",
  "Compare multiple scenarios before making a borrowing, saving, or investing decision.": "대출, 저축, 투자 결정을 내리기 전에 여러 조건을 비교해볼 수 있습니다.",
  "Build a quick monthly budget around the result shown by this calculator.": "계산 결과를 기준으로 월간 예산을 빠르게 정리할 수 있습니다.",
  "Use the output as a planning estimate before reviewing a lender, broker, or financial institution quote.": "금융기관 조건을 검토하기 전에 예상 금액을 미리 확인할 수 있습니다.",
  "Test how changes in rate, term, contribution, or starting balance affect the long-term result.": "금리, 기간, 납입액, 시작 금액이 달라질 때 결과가 어떻게 바뀌는지 비교할 수 있습니다.",
  "Use the result as a practical starting point before talking to a physician, dietitian, or coach.": "의사, 영양사, 코치와 상담하기 전에 현재 수치를 정리해볼 수 있습니다.",
  "Test different assumptions to understand how small changes can affect the final estimate.": "가정을 바꿔보면서 작은 변화가 최종 결과에 어떤 영향을 주는지 확인할 수 있습니다.",
  "Estimate time gaps quickly when planning birthdays, schedules, deadlines, or work blocks.": "생일, 일정, 마감일, 근무 시간을 계획할 때 시간 차이를 빠르게 확인할 수 있습니다.",
  "Double-check a date or time calculation without opening a spreadsheet.": "스프레드시트를 열지 않아도 날짜와 시간 계산을 빠르게 다시 확인할 수 있습니다.",
  "Use the result to compare multiple calendar or schedule scenarios side by side.": "여러 일정을 나란히 비교할 때 유용합니다.",
  "Turn a manual time calculation into a reusable workflow for everyday planning.": "반복적인 시간 계산을 일상 계획에 바로 쓸 수 있는 방식으로 바꿔줍니다.",
  "Run quick what-if scenarios before using a more advanced analytics tool.": "더 복잡한 분석 도구를 쓰기 전에 간단한 가정 비교를 해볼 수 있습니다.",
  "Translate a written problem into a clear numeric answer with less manual work.": "서술형 문제를 숫자 결과로 빠르게 바꿔 확인할 수 있습니다.",
  "Check a formula step by step before applying it in school, work, or personal projects.": "학교, 업무, 개인 프로젝트에 적용하기 전에 공식을 단계별로 확인할 수 있습니다.",
  "Convert between common US and metric units without memorizing conversion factors.": "환산 공식을 외우지 않아도 미국식 단위와 미터법 단위를 빠르게 바꿀 수 있습니다.",
  "Use the converter while shopping, cooking, traveling, or comparing product specifications.": "쇼핑, 요리, 여행, 제품 사양 비교 상황에서 바로 사용할 수 있습니다.",
  "Quickly verify measurements copied from another website, document, or spreadsheet.": "다른 사이트나 문서에서 가져온 수치를 빠르게 다시 확인할 수 있습니다.",
  "Reduce manual conversion mistakes when moving between systems or standards.": "단위 체계가 바뀔 때 생기기 쉬운 실수를 줄여줍니다.",
  "Use the output as a fast reference while making a practical real-world decision.": "실생활에서 결정을 내릴 때 대략적인 수치를 빠르게 확인할 수 있습니다.",
  "Save time on repetitive calculations that would otherwise be done by hand.": "손으로 반복 계산하던 시간을 줄일 수 있습니다.",
  "This estimate includes principal and interest only. Property taxes, homeowners insurance, HOA fees, and PMI can increase the real payment.": "이 계산은 원금과 이자만 반영한 참고값입니다. 재산세, 주택 보험료, 관리비, PMI가 포함되면 실제 상환액은 더 커질 수 있습니다.",
  "The payment is not large enough to reduce the balance after interest.": "현재 상환액으로는 이자를 제외한 원금이 줄지 않습니다.",
  "Your payment does not cover the monthly interest, so the balance will not go down.": "현재 상환액이 월 이자보다 적어서 대출 잔액이 줄어들지 않습니다.",
  "Taxes, insurance, HOA dues, and PMI can change over time. Extra principal is modeled as a monthly payment from the start of the loan; actual lender application rules and payoff timing can differ.": "재산세, 보험료, HOA 관리비, PMI는 달라질 수 있습니다. 추가 원금은 대출 시작부터 매달 납부하는 것으로 계산하며, 실제 금융기관의 처리 방식과 상환 시점은 다를 수 있습니다.",
  "This is a 2026 planning estimate using federal tax brackets, the standard deduction, Social Security, Medicare, and the state/local rate you enter. It is not an exact W-4 withholding calculation and does not model tax credits, itemized deductions, bonuses, every payroll benefit, or every state/local rule.": "2026년 연방세 구간과 표준공제, 사회보장세, 메디케어세, 입력한 주·지방세율을 이용한 예상값입니다. 실제 W-4 원천징수액과는 다를 수 있으며 세액공제, 항목별 공제, 보너스, 모든 복리후생과 지역별 규정을 모두 반영하지는 않습니다.",
  "Enter a value that matches the base you selected.": "선택한 진법에 맞는 값을 입력하세요.",
  "Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own needs.": "예시 페이지를 보면 어떤 값을 넣어야 할지 감을 빠르게 잡을 수 있습니다. 먼저 실제 예시를 확인한 뒤 내 상황에 맞게 숫자만 바꿔보면 됩니다.",
  "This is especially useful for users who searched for a very specific long-tail question and want a quick answer before opening the full interactive tool.": "특정 조건으로 검색해 들어온 사용자도 계산기를 열기 전에 결과 흐름을 빠르게 파악할 수 있도록 구성했습니다.",
  "The formula section explains the math logic behind the calculator result. It is useful when you want to understand what each variable means or double-check the result with your own manual work or spreadsheet.": "공식 페이지는 계산 결과가 어떤 원리로 나오는지 이해하기 쉽게 정리한 공간입니다. 변수의 의미를 확인하거나 직접 계산한 값과 비교할 때 도움이 됩니다.",
  "You do not need to solve the formula manually to use the calculator. The purpose of this page is to give context, improve trust, and answer search queries from users who specifically want the formula.": "직접 공식을 계산하지 않아도 계산기는 바로 사용할 수 있습니다. 결과가 왜 그렇게 나오는지 궁금할 때 핵심 개념과 해석 기준을 확인해보세요.",
};

function replaceCurrencySymbols(text: string) {
  return text
    .replace(/\$\s?([\d,]+(?:\.\d+)?)/g, "₩$1")
    .replace(/([\d,]+(?:\.\d+)?)\s?USD/gi, "₩$1")
    .replace(/USD\s?([\d,]+(?:\.\d+)?)/gi, "₩$1");
}

function translateKnownLabel(text: string): string | null {
  if (uiDirectMap[text]) return uiDirectMap[text];
  if (exactLabelMap[text]) return exactLabelMap[text];
  if (longSentenceMap[text]) return longSentenceMap[text];

  let m = text.match(/^Compound Interest Calculator With ₩?([\d,]+) Monthly Contributions?$/i);
  if (m) return `월 ${m[1]}원 납입 복리 계산 예시`;
  m = text.match(/^Compound Interest Calculator for ₩?([\d,]+)$/i);
  if (m) return `복리 계산기 ${m[1]}원 예시`;
  m = text.match(/^(\d+) Year Compound Interest Example$/i);
  if (m) return `${m[1]}년 복리 계산 예시`;
  m = text.match(/^Compound Interest Calculator at ([\d.]+) Percent$/i);
  if (m) return `연 ${m[1]}% 복리 계산 예시`;
  m = text.match(/^Loan Calculator for ₩?([\d,]+)$/i);
  if (m) return `대출 ${m[1]}원 계산 예시`;
  m = text.match(/^Mortgage Calculator for a ₩?([\d,]+) Home$/i);
  if (m) return `주택 가격 ${m[1]}원 주택담보대출 예시`;
  m = text.match(/^(\d+) Year Mortgage Example$/i);
  if (m) return `${m[1]}년 주택담보대출 예시`;
  m = text.match(/^Mortgage Calculator With ([\d.]+) Percent Down$/i);
  if (m) return `계약금 ${m[1]}% 주택담보대출 예시`;
  m = text.match(/^(.+?) basic example$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 기본 예시`;
  m = text.match(/^(.+?) example calculation$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 예시 계산`;
  m = text.match(/^(.+?) example$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 예시`;
  m = text.match(/^(.+?) examples$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 예시`;
  m = text.match(/^(.+?) Formula$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 공식`;
  m = text.match(/^How to Use the (.+)$/i);
  if (m) return `${localizeCalculatorName(m[1], "ko")} 사용 가이드`;

  return null;
}




function getLocalizedText(value: string | Partial<Record<Locale, string>> | undefined, locale: Locale): string {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[locale] ?? value.en ?? value.ko ?? "";
}

type ProgrammaticExampleLike = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  overrides: Record<string, string>;
};

function formatKrwFromText(value: string) {
  const num = Number(String(value).replace(/,/g, ""));
  if (!Number.isFinite(num)) return value;
  return `${Math.round(num).toLocaleString("ko-KR")}원`;
}

function localizeExampleTitleByPattern(title: string, calculatorName: string) {
  const cleaned = replaceCurrencySymbols(title).trim();
  let m = cleaned.match(/^Loan Calculator for ₩?([\d,]+)$/i);
  if (m) return `대출금 ${formatKrwFromText(m[1])} 계산 예시`;
  m = cleaned.match(/^Mortgage Calculator for a ₩?([\d,]+) Home$/i);
  if (m) return `주택 가격 ${formatKrwFromText(m[1])} 기준 주택담보대출 예시`;
  m = cleaned.match(/^Compound Interest Calculator for ₩?([\d,]+)$/i);
  if (m) return `초기 금액 ${formatKrwFromText(m[1])} 복리 계산 예시`;
  m = cleaned.match(/^Compound Interest Calculator With ₩?([\d,]+) Monthly Contributions?$/i);
  if (m) return `월 ${formatKrwFromText(m[1])} 적립 복리 계산 예시`;
  m = cleaned.match(/^(\d+) Year Compound Interest Example$/i);
  if (m) return `${m[1]}년 복리 계산 예시`;
  m = cleaned.match(/^Compound Interest Calculator at ([\d.]+) Percent$/i);
  if (m) return `연 ${m[1]}% 수익률 복리 계산 예시`;
  m = cleaned.match(/^(\d+) Year Mortgage Example$/i);
  if (m) return `${m[1]}년 만기 주택담보대출 예시`;
  m = cleaned.match(/^Mortgage Calculator With ([\d.]+) Percent Down$/i);
  if (m) return `계약금 ${m[1]}% 기준 주택담보대출 예시`;
  m = cleaned.match(/^(.+?) basic example$/i);
  if (m) return `${calculatorName} 기본 예시`;
  m = cleaned.match(/^(.+?) example calculation$/i);
  if (m) return `${calculatorName} 예시 계산`;
  m = cleaned.match(/^(.+?) example$/i);
  if (m) return `${calculatorName} 예시`;
  return `${calculatorName} 예시`;
}

export function localizeProgrammaticExample(example: ProgrammaticExampleLike, definition: CalculatorDefinition, locale: Locale): ProgrammaticExampleLike {
  if (locale === "en") return example;
  const calculatorName = localizeCalculatorName(getLocalizedText(definition.name, "en"), locale, definition.slug);
  // Pre-translated KO copy from the programmatic generator wins —
  // it gives natural, search-friendly phrasing per scenario, which the
  // pattern matcher can't produce for 100+ unique grid combinations.
  const withKo = example as ProgrammaticExampleLike & {
    koTitle?: string;
    koDescription?: string;
    koIntro?: string;
  };
  const title = withKo.koTitle ?? localizeExampleTitleByPattern(example.title, calculatorName);
  const description =
    withKo.koDescription ??
    `${calculatorName}의 대표 입력값과 결과를 한국어로 확인할 수 있는 예시 페이지입니다.`;
  const intro =
    withKo.koIntro ??
    `${calculatorName}를 처음 사용하는 분도 바로 이해할 수 있도록 대표 입력값을 넣은 예시입니다. 예시 결과를 먼저 확인한 뒤 내 상황에 맞게 숫자만 바꿔보세요.`;
  return { ...example, title, description, intro };
}

export function localizeCategoryName(category: string, locale: Locale) {
  return categoryNames[locale][category as keyof typeof categoryNames.en] ?? category;
}

export function localizeCalculatorName(name: string | Partial<Record<Locale, string>>, locale: Locale, slug?: string) {
  const englishName = getLocalizedText(name, "en");
  if (locale === "en") return englishName;
  if (slug && slugKoNameMap[slug]) return slugKoNameMap[slug];
  if (nameKoOverrides[englishName]) return nameKoOverrides[englishName];

  const cleaned = replaceCurrencySymbols(englishName).trim();
  const translated = translateKnownLabel(cleaned);
  if (translated) return translated;

  return cleaned
    .replace(/ Calculator$/i, " 계산기")
    .replace(/ Converter$/i, " 변환기");
}

function isMoneyCalculator(definition: CalculatorDefinition) {
  return definition.category === "finance" || definition.category === "business" || /(loan|mortgage|rent|budget|salary|income|tax|commission|cost|price|payment|savings|investment|dividend|worth|debt|payoff|apr|roi|inflation)/i.test(definition.slug);
}

function isConverter(definition: CalculatorDefinition) {
  return definition.category === "unit-converters" || /converter/i.test(definition.slug) || /convert/i.test(definition.kind);
}

function localizedInputLabels(definition: CalculatorDefinition) {
  return definition.inputs.map((input) => localizeInputLabel(input.label, "ko"));
}

function buildKoDescription(definition: CalculatorDefinition, localizedName: string) {
  if (isConverter(definition)) {
    return `${localizedName}는 자주 사용하는 단위를 빠르게 바꿔볼 수 있는 무료 온라인 변환 계산기입니다. 값과 단위를 입력하면 결과를 바로 확인할 수 있어 실생활, 학습, 업무에서 편리하게 사용할 수 있습니다.`;
  }
  if (definition.category === "finance" || definition.category === "business") {
    return `${localizedName}는 금액, 이자율, 기간 같은 값을 입력해 결과를 바로 확인하는 금융 계산기입니다. 대출, 저축, 투자, 예산을 비교할 때 필요한 숫자를 빠르게 확인할 수 있습니다.`;
  }
  if (definition.category === "health") {
    return `${localizedName}는 몸무게, 키, 나이, 활동량 등 건강 관련 값을 입력해 결과를 빠르게 확인하는 계산기입니다. 식단이나 운동 계획을 세울 때 현재 수치를 확인하는 데 활용할 수 있습니다.`;
  }
  if (definition.category === "time-date") {
    return `${localizedName}는 날짜, 시간, 기간 차이를 빠르게 계산하는 계산기입니다. 일정 관리, 근무 시간 계산, 마감일 확인이 필요할 때 바로 사용할 수 있습니다.`;
  }
  if (definition.category === "math") {
    return `${localizedName}는 수식과 숫자 계산을 빠르게 처리할 수 있는 계산기입니다. 학습, 검산, 업무용 기초 계산이 필요할 때 유용합니다.`;
  }
  return `${localizedName}는 필요한 값만 입력하면 결과를 바로 확인할 수 있는 한국어 온라인 계산기입니다. 모바일과 PC 모두에서 쉽고 빠르게 사용할 수 있습니다.`;
}

function buildKoIntro(definition: CalculatorDefinition, localizedName: string) {
  const labels = localizedInputLabels(definition).slice(0, 4);
  const joined = labels.length ? labels.join(", ") : "필요한 값";
  if (isConverter(definition)) {
    return `${localizedName}는 ${joined}을 기준으로 단위를 변환하는 계산기입니다. 미국식 단위와 미터법 단위를 함께 다뤄야 할 때 빠르게 값을 비교할 수 있도록 구성했습니다.`;
  }
  if (definition.category === "finance" || definition.category === "business") {
    return `${localizedName}는 ${joined}을 입력해 결과를 바로 확인할 수 있는 금융 계산기입니다. 월 상환액, 총이자, 예상 수익, 예산 규모처럼 실제 돈 관리에 필요한 수치를 빠르게 점검할 수 있습니다.`;
  }
  if (definition.category === "health") {
    return `${localizedName}는 ${joined}을 바탕으로 건강 관련 수치를 확인하는 계산기입니다. 운동 계획이나 식단 관리 전에 현재 수치를 확인하는 데 활용할 수 있습니다.`;
  }
  if (definition.category === "time-date") {
    return `${localizedName}는 ${joined}을 입력해 날짜와 시간 차이를 계산합니다. 일정 간격, 남은 기간, 근무 시간처럼 반복되는 계산을 빠르게 처리할 수 있습니다.`;
  }
  if (definition.category === "math") {
    return `${localizedName}는 ${joined}을 바탕으로 수학 결과를 빠르게 계산합니다. 직접 계산한 값을 검산하거나 여러 조건을 비교할 때 유용합니다.`;
  }
  return `${localizedName}는 ${joined}을 기준으로 결과를 계산해주는 온라인 계산기입니다. 빈칸에 값을 넣고 바로 결과를 확인할 수 있도록 간단하게 구성했습니다.`;
}

function buildKoFormulaText(definition: CalculatorDefinition, localizedName: string) {
  if (isConverter(definition)) {
    return `${localizedName}는 입력한 수치에 표준 단위 환산 비율을 적용해 결과를 계산합니다. 즉, 기준 단위로 한 번 변환한 뒤 원하는 단위로 다시 바꾸는 방식이라 입력값만 정확하면 결과를 빠르게 비교할 수 있습니다.`;
  }
  if (definition.category === "finance" || definition.category === "business") {
    return `${localizedName} 결과는 입력한 금액, 이자율, 기간, 수익률 등의 값을 바탕으로 일반적으로 널리 쓰이는 금융 계산 공식을 적용해 산출됩니다. 실제 상품 조건에는 수수료, 세금, 우대금리, 상환 방식 차이가 반영될 수 있으므로 최종 판단 전에는 실제 조건을 함께 확인하는 것이 좋습니다.`;
  }
  if (definition.category === "health") {
    return `${localizedName}는 키, 몸무게, 나이, 활동량 등 입력값을 이용해 일반적으로 알려진 건강 계산 공식이나 추정식을 적용합니다. 결과는 참고용 수치이며 개인 건강 상태를 완전히 대신하지는 않습니다.`;
  }
  if (definition.category === "time-date") {
    return `${localizedName}는 입력한 날짜와 시간을 기준으로 차이, 합산, 변환 결과를 계산합니다. 달력 규칙과 시간 단위 환산을 반영해 결과를 보여주며, 반복 계산을 손으로 할 때보다 빠르게 확인할 수 있습니다.`;
  }
  if (definition.category === "math") {
    return `${localizedName}는 입력한 숫자와 연산 조건을 바탕으로 해당 수학 공식이나 계산 규칙을 적용해 결과를 구합니다. 여러 값을 바꿔보면서 결과 변화를 비교하거나 직접 계산한 값과 대조할 때 유용합니다.`;
  }
  return `${localizedName} 결과는 입력한 값과 일반적으로 사용되는 계산 규칙을 바탕으로 산출됩니다. 입력값을 바꾸면 결과도 즉시 다시 계산됩니다.`;
}

function buildKoHowToUse(definition: CalculatorDefinition) {
  const labels = localizedInputLabels(definition);
  const first = labels[0] ?? "필요한 값";
  const second = labels[1];
  const third = labels[2];
  const steps = [
    `${first}${second ? `, ${second}` : ""}${third ? `, ${third}` : ""} 등 필요한 입력값을 넣습니다.`,
    isMoneyCalculator(definition) ? "금액 관련 계산기라면 한국어 화면에서 원화 기준으로 값을 확인해보세요." : "입력값을 조금씩 바꿔보면서 결과가 어떻게 달라지는지 비교해보세요.",
    "결과 영역에서 핵심 수치와 함께 보조 결과도 같이 확인합니다.",
  ];
  if (definition.category === "finance" || definition.category === "business") {
    steps.push("대출, 투자, 세금 관련 결과는 실제 상품 조건이나 공식 자료와 함께 다시 확인하세요.");
  } else if (definition.category === "health") {
    steps.push("건강 관련 수치는 참고용으로 보고, 중요한 판단은 전문가 상담과 함께 확인하세요.");
  } else {
    steps.push("필요하면 예시 페이지와 가이드 페이지를 함께 보면서 내 상황에 맞는 값을 적용해보세요.");
  }
  return steps;
}

// Original Korean examples for common search intents. These describe input scenarios,
// not guaranteed outputs or product-specific rates.
const koScenarioContent: Record<string, { situation: string; steps: string; caution: string }> = {
  "compound-interest-calculator": { situation: "매달 20만 원을 10년 동안 적립한다면", steps: "초기금액, 월 납입액, 연 수익률과 기간을 입력하고 수익률을 달리해 최종 금액의 차이를 비교해보세요.", caution: "수익률은 확정되지 않으며 세금과 수수료를 별도로 고려해야 합니다." },
  "loan-calculator": { situation: "대출금 3,000만 원을 5년 동안 갚는다면", steps: "대출원금과 연이율, 상환기간을 입력해 월 납입액과 총이자를 함께 확인해보세요.", caution: "실제 상환방식과 중도상환수수료 등 계약 조건에 따라 부담이 달라집니다." },
  "mortgage-calculator": { situation: "3억 원의 주택을 구입하면서 일부 금액을 빌린다면", steps: "주택가격과 계약금, 대출금리와 만기를 바꿔 월 원리금과 총이자를 비교해보세요.", caution: "취득세, 보험료와 부대비용은 계산기 입력 범위에 따라 별도로 확인해야 합니다." },
  "dividend-yield-calculator": { situation: "주당 5만 원인 종목이 연간 주당 2,000원을 배당한다면", steps: "주가와 주당 연간 배당금을 입력해 배당수익률을 확인하고 다른 종목과 비교해보세요.", caution: "배당금은 변동되거나 지급되지 않을 수 있으며 세후 수익률과는 다릅니다." },
  "retirement-calculator": { situation: "은퇴까지 20년이 남았고 매달 저축할 수 있다면", steps: "현재 보유자금과 저축액, 은퇴까지의 기간을 넣고 예상 수익률에 따른 차이를 확인해보세요.", caution: "물가상승과 은퇴 후 지출, 수익률 변동을 따로 검토해야 합니다." },
  "savings-calculator": { situation: "매달 30만 원씩 3년 동안 모으려면", steps: "저축액과 기간, 이율을 입력해 예상 만기금액을 비교해보세요.", caution: "상품별 이자 계산 방식과 이자소득세에 따라 실제 수령액은 달라질 수 있습니다." },
  "discount-calculator": { situation: "8만 원짜리 상품을 25% 할인한다면", steps: "정가와 할인율을 입력해 할인금액과 최종 결제금액을 나누어 확인해보세요.", caution: "중복 할인, 배송비, 쿠폰 조건은 별도로 계산해야 할 수 있습니다." },
  "percentage-calculator": { situation: "전체 240개 가운데 36개가 차지하는 비율을 알고 싶다면", steps: "전체값과 부분값을 입력해 퍼센트를 확인하고 분모가 바뀌는 경우도 비교해보세요.", caution: "전체값이 0이거나 기준값이 달라지면 해석할 수 없는 경우가 있습니다." },
  "bmi-calculator": { situation: "키 170cm, 몸무게 65kg인 성인의 BMI를 확인한다면", steps: "키와 몸무게를 입력해 체질량지수를 구하고 체중 변화에 따른 수치 차이를 확인해보세요.", caution: "BMI는 근육량·체지방 분포와 개인의 건강 상태를 직접 진단하지 않습니다." },
  "bmr-calculator": { situation: "나이와 체격에 따라 하루 기초대사량을 가늠하려면", steps: "성별, 나이, 키, 몸무게 등 화면에 제시된 조건을 입력해 추정치를 확인해보세요.", caution: "기초대사량은 활동량을 포함한 하루 총소모열량과 다릅니다." },
  "calorie-calculator": { situation: "운동량이 달라질 때 하루 필요 열량을 비교하려면", steps: "나이와 신체 정보, 활동 수준을 입력하고 활동량을 바꿔 추정치 변화를 살펴보세요.", caution: "열량 추정치는 개인별 건강상태와 실제 활동량을 모두 반영하지 못합니다." },
  "water-intake-calculator": { situation: "평소 물을 얼마나 마셔야 할지 가늠하려면", steps: "몸무게 등 입력 조건을 넣어 권장량 추정치를 확인하고 활동이나 날씨에 따른 차이를 생각해보세요.", caution: "질환이나 임신 등 개인 조건에 따라 필요한 수분량이 다를 수 있습니다." },
  "pregnancy-due-date-calculator": { situation: "마지막 생리 시작일로 출산 예정일을 추정하려면", steps: "계산기가 요청하는 날짜나 주기 정보를 입력해 예상 날짜를 확인해보세요.", caution: "예정일은 추정값이며 초음파 검사 등 의료진의 판단에 따라 달라질 수 있습니다." },
  "age-calculator": { situation: "생년월일 기준으로 현재 만 나이를 확인하려면", steps: "생년월일과 기준일을 입력하고 생일이 지났는지에 따른 차이를 확인해보세요.", caution: "행정·계약용 나이 판단은 해당 제도에서 요구하는 기준일을 확인해야 합니다." },
  "date-difference-calculator": { situation: "계약일과 만료일 사이의 날짜를 확인하려면", steps: "시작일과 종료일을 입력하고 시작일 포함 여부 등 계산 기준을 확인해보세요.", caution: "영업일과 달력일은 다르며 공휴일 제외 여부는 별도로 확인해야 합니다." },
  "business-days-calculator": { situation: "접수일로부터 실제 근무일 수를 세려면", steps: "시작일과 종료일을 지정해 주말을 제외한 일수를 확인해보세요.", caution: "국가별 법정공휴일이나 회사별 휴무일이 자동 반영되는지는 별도로 확인해야 합니다." },
  "gpa-calculator": { situation: "한 학기 과목별 성적과 학점이 정리됐다면", steps: "과목별 학점과 성적을 입력해 가중평균 학점을 계산해보세요.", caution: "대학마다 4.3·4.5 등 만점 기준과 재수강 처리 규정이 다릅니다." },
  "fuel-cost-calculator": { situation: "왕복 150km를 자동차로 이동할 예정이라면", steps: "주행거리와 연비, 연료 단가를 입력해 예상 연료비를 비교해보세요.", caution: "실제 연비는 정체와 주행환경에 따라 달라지고 주차·통행료는 별도입니다." },
  "unit-price-calculator": { situation: "900g에 9,900원인 상품과 1.2kg에 12,000원인 상품을 비교한다면", steps: "가격과 용량을 각각 입력해 같은 단위당 가격으로 비교해보세요.", caution: "표기 중량과 실사용량, 배송비가 다르면 체감 가격도 달라질 수 있습니다." },
  "temperature-converter": { situation: "미국 레시피의 화씨 온도를 섭씨로 읽으려면", steps: "화씨 값을 입력하고 섭씨 단위를 선택해 환산값을 확인해보세요.", caution: "조리기구의 실제 온도 편차는 단위 변환에 포함되지 않습니다." },
  "length-converter": { situation: "해외 제품의 인치 표기를 센티미터로 비교하려면", steps: "제품 길이와 원래 단위, 변환할 단위를 선택해 수치를 확인해보세요.", caution: "제품 치수는 측정 부위와 제조사 표기 기준에 따라 다를 수 있습니다." },
};
const remainingKoIntents: Record<string, string> = {
  "investment-calculator": "목돈 투자에 예상 수익률을 적용해 기간별 자산 변화를 비교하려면",
  "interest-rate-calculator": "원금과 이자, 기간으로 적용된 이율을 거꾸로 확인하려면",
  "credit-card-payoff-calculator": "카드 결제 잔액을 매달 나누어 갚을 때 상환 기간을 가늠하려면",
  "inflation-calculator": "물가 상승에 따라 같은 금액의 구매력이 얼마나 달라지는지 보려면",
  "roi-calculator": "사업이나 투자에 투입한 비용 대비 회수 수익을 비교하려면",
  "stock-average-calculator": "같은 주식을 여러 가격에 매수했을 때 평균 매입단가를 확인하려면",
  "net-worth-calculator": "보유 자산에서 대출과 부채를 제외한 순자산을 점검하려면",
  "debt-payoff-calculator": "부채 상환액을 늘렸을 때 완료 시점을 비교하려면",
  "amortization-calculator": "원리금 상환 과정에서 원금과 이자의 비중을 살펴보려면",
  "budget-calculator": "월 소득에서 주거비·생활비·저축을 배분하려면",
  "rent-vs-buy-calculator": "임차 유지와 주택 매수의 장기 현금흐름을 비교하려면",
  "apr-calculator": "표시 이율과 수수료를 포함한 실제 연간 금융 부담을 살펴보려면",
  "future-value-calculator": "현재 금액을 일정 수익률로 운용할 때 미래 금액을 추정하려면",
  "present-value-calculator": "미래에 받을 돈을 현재 가치로 환산해 비교하려면",
  "body-fat-calculator": "몸무게만이 아니라 체지방률 변화를 참고하려면",
  "ideal-weight-calculator": "키를 기준으로 참고용 체중 범위를 살펴보려면",
  "tdee-calculator": "기초대사량에 일상 활동을 포함한 하루 에너지 소모량을 추정하려면",
  "ovulation-calculator": "월경 주기 정보를 바탕으로 배란 예상 시기를 참고하려면",
  "heart-rate-calculator": "심박수 관련 수치를 계산해 운동 중 상태를 참고하려면",
  "pace-calculator": "달리기 거리와 기록으로 킬로미터당 페이스를 계산하려면",
  "protein-intake-calculator": "몸무게와 활동 목적에 맞춰 단백질 섭취 목표를 가늠하려면",
  "body-surface-area-calculator": "키와 체중으로 신체 표면적 추정치를 구하려면",
  "waist-to-hip-ratio-calculator": "허리둘레와 엉덩이둘레의 비율을 확인하려면",
  "lean-body-mass-calculator": "전체 체중에서 체지방을 제외한 제지방량을 추정하려면",
  "time-duration-calculator": "시작 시각과 종료 시각 사이의 경과 시간을 계산하려면",
  "work-hours-calculator": "출퇴근 시각과 휴게시간을 반영한 근무시간을 확인하려면",
  "days-between-dates-calculator": "두 날짜 사이의 달력상 일수를 비교하려면",
  "countdown-calculator": "시험이나 행사일까지 남은 시간을 확인하려면",
  "week-number-calculator": "특정 날짜가 한 해의 몇 번째 주인지 확인하려면",
  "date-calculator": "기준일에 일정 일수를 더하거나 빼서 날짜를 구하려면",
  "hours-between-times-calculator": "두 시각 사이의 총 시간을 확인하려면",
  "percent-change-calculator": "가격이나 수치가 이전보다 몇 퍼센트 변했는지 계산하려면",
  "percentage-of-total-calculator": "전체 수량 가운데 특정 항목이 차지하는 비중을 구하려면",
  "fraction-calculator": "분수 덧셈이나 나눗셈 결과를 확인하려면",
  "ratio-calculator": "두 값의 비율을 비교해 같은 비례를 유지하려면",
  "average-calculator": "여러 시험 점수의 산술평균을 확인하려면",
  "weighted-average-calculator": "학점이나 비중이 다른 항목의 가중평균을 구하려면",
  "probability-calculator": "가능한 경우 가운데 특정 결과가 나올 확률을 계산하려면",
  "standard-deviation-calculator": "자료 값이 평균에서 얼마나 흩어졌는지 확인하려면",
  "log-calculator": "지수식과 로그식의 관계를 이용해 값을 구하려면",
  "square-root-calculator": "어떤 수를 제곱해야 주어진 값이 되는지 구하려면",
  "exponent-calculator": "같은 수를 여러 번 곱하는 거듭제곱을 계산하려면",
  "factorial-calculator": "순열 문제에 쓰이는 팩토리얼 값을 확인하려면",
  "lcm-calculator": "서로 다른 주기나 분모에 적용할 최소공배수를 구하려면",
  "gcd-calculator": "두 정수를 같은 크기로 나눌 최대공약수를 구하려면",
  "weight-converter": "해외 제품의 파운드 무게를 킬로그램으로 확인하려면",
  "speed-converter": "차량 속도나 이동 속도를 다른 단위로 바꾸려면",
  "area-converter": "부동산 면적 표기를 제곱미터 등으로 비교하려면",
  "volume-converter": "용기 부피를 리터와 다른 단위로 환산하려면",
  "energy-converter": "에너지 단위가 다른 자료의 수치를 비교하려면",
  "pressure-converter": "타이어나 기기 압력의 단위를 바꿔 확인하려면",
  "power-converter": "기기의 출력 전력을 서로 다른 단위로 비교하려면",
  "data-storage-converter": "파일 크기를 바이트·킬로바이트 등으로 환산하려면",
  "angle-converter": "각도를 도와 라디안 사이에서 변환하려면",
  "density-converter": "물질의 밀도 수치를 다른 단위 기준으로 읽으려면",
  "fuel-economy-converter": "해외 차량의 연비 표기를 국내 단위와 비교하려면",
  "time-unit-converter": "초·분·시간 단위를 서로 바꾸려면",
  "frequency-converter": "주파수 수치를 헤르츠와 상위 단위로 비교하려면",
  "force-converter": "하중이나 힘의 단위 표기를 맞추려면",
  "torque-converter": "자동차나 공구의 토크 단위를 비교하려면",
  "flow-rate-converter": "배관이나 장비의 시간당 유량을 환산하려면",
  "electric-charge-converter": "전하량 수치를 서로 다른 단위로 바꾸려면",
  "magnetic-field-converter": "자기장 수치를 가우스와 테슬라 등으로 비교하려면",
  "tip-calculator": "해외 식당에서 팁과 총 결제액을 나누어 확인하려면",
  "split-bill-calculator": "여러 사람이 식사비를 균등하게 나누려면",
  "sales-tax-calculator": "해외 판매가격에 판매세를 더한 결제액을 예상하려면",
  "commission-calculator": "판매금액에 따른 수수료와 실수령액을 계산하려면",
  "markup-calculator": "매입원가에 목표 가산율을 적용해 판매가를 정하려면",
  "markdown-calculator": "정가에서 할인율을 적용한 판매가격을 확인하려면",
  "rent-split-calculator": "동거인의 월세 분담액을 나누어 계산하려면",
  "break-even-calculator": "고정비와 단위당 이익으로 손익분기 판매량을 가늠하려면",
  "rule-of-72-calculator": "예상 수익률에 따른 자산 두 배 기간을 간단히 추정하려면",
  "sleep-calculator": "기상 시간에 맞춰 취침 시간을 계획하려면",
  "dog-age-calculator": "반려견의 나이를 사람 나이와 대략 비교하려면",
  "cat-age-calculator": "반려묘의 나이를 사람 나이와 대략 비교하려면",
  "overtime-pay-calculator": "기본 시급과 초과근무시간으로 추가 수당을 계산하려면",
  "hourly-to-salary-calculator": "시급과 주간 근무시간으로 연간 소득을 추정하려면",
  "salary-to-hourly-calculator": "연봉을 실제 근무시간 기준 시급으로 환산하려면",
  "travel-budget-calculator": "여행 교통·숙박·식비 예산을 합산하려면",
  "auto-loan-calculator": "차량 구매 대출의 월 원리금 부담을 계산하려면",
  "student-loan-calculator": "학자금 대출 상환액과 이자 부담을 가늠하려면",
  "personal-loan-calculator": "신용대출 규모와 상환기간에 따른 월 부담을 비교하려면",
  "business-loan-calculator": "사업 운영자금 대출의 월 상환 부담을 살펴보려면",
  "savings-goal-calculator": "정해진 목표금액에 도달하기 위한 적립 계획을 세우려면",
  "down-payment-savings-calculator": "주택 계약금을 마련하기 위한 저축기간을 계산하려면",
  "ira-calculator": "미국 개인 은퇴계좌의 장기 적립 추정치를 확인하려면",
  "college-savings-calculator": "자녀 교육비 목표를 위한 장기 저축액을 가늠하려면",
  "emergency-fund-calculator": "월 필수지출 기준으로 비상자금 목표액을 정하려면",
  "debt-to-income-calculator": "월 소득 대비 부채상환액 비율을 점검하려면",
  "paycheck-calculator": "급여 공제 전후 금액을 비교하려면",
  "biweekly-paycheck-calculator": "격주 지급 급여를 월·연 기준으로 비교하려면",
  "annual-income-calculator": "월급이나 시급을 연간 소득으로 환산하려면",
  "hourly-wage-calculator": "근무시간과 지급액을 기준으로 실질 시급을 확인하려면",
  "simple-interest-calculator": "복리 없이 원금에만 적용되는 단리 이자를 구하려면",
  "dividend-income-calculator": "보유 주식 수와 주당 배당금으로 예상 배당액을 계산하려면",
  "house-down-payment-calculator": "집값 대비 필요한 계약금 비율과 금액을 계산하려면",
  "car-affordability-calculator": "월 예산 범위에서 가능한 차량 구매 규모를 추정하려면",
  "refinance-savings-calculator": "기존 대출과 대환대출의 이자 부담 차이를 비교하려면",
  "savings-rate-calculator": "소득 가운데 실제 저축하는 비율을 점검하려면",
  "real-return-calculator": "명목수익률에서 물가상승 영향을 고려한 실질수익률을 구하려면",
  "lease-vs-buy-calculator": "장비나 차량의 리스와 직접 구매 부담을 비교하려면",
  "capital-gains-tax-calculator": "자산 매도 이익에 대한 세금 추정치를 점검하려면",
  "net-pay-raise-calculator": "급여 인상 전후 실수령 변화액을 가늠하려면",
  "hydration-calculator": "체중과 활동 조건을 기준으로 수분 섭취량을 참고하려면",
  "daily-protein-calculator": "하루 목표 단백질 섭취량을 계산하려면",
  "dubois-body-surface-area-calculator": "DuBois 공식으로 신체표면적 추정값을 구하려면",
  "calorie-deficit-calculator": "섭취열량과 소비열량의 차이를 계산하려면",
  "target-heart-rate-calculator": "운동 강도를 조절할 목표 심박수 범위를 참고하려면",
  "one-rep-max-calculator": "중량 운동 반복 횟수로 최대 1회 중량을 추정하려면",
  "pace-per-km-calculator": "달린 거리와 시간으로 킬로미터당 페이스를 구하려면",
  "pace-per-mile-calculator": "마일 기준 달리기 페이스를 계산하려면",
  "walking-calories-calculator": "걷기 시간과 신체조건으로 소모열량을 추정하려면",
  "running-calories-calculator": "달리기 거리와 시간에 따른 소모열량을 추정하려면",
  "target-body-fat-calculator": "목표 체지방률에 따른 체중 변화를 가늠하려면",
  "bmi-prime-calculator": "BMI를 기준 BMI와 비교하는 비율을 구하려면",
  "waist-to-height-ratio-calculator": "허리둘레가 키에서 차지하는 비율을 확인하려면",
  "lean-bulk-calorie-calculator": "근육 증가 목표에 맞춘 열량 섭취를 참고하려면",
  "protein-per-meal-calculator": "하루 단백질 목표량을 끼니별로 배분하려면",
  "hours-to-minutes-calculator": "몇 시간인지 주어진 시간을 분으로 환산하려면",
  "minutes-to-seconds-calculator": "분으로 표시된 시간을 초 단위로 바꾸려면",
  "days-to-hours-calculator": "일 단위 기간을 시간 단위로 바꾸려면",
  "weeks-to-days-calculator": "주 단위 기간을 일수로 환산하려면",
  "months-to-days-calculator": "개월 수를 일수로 환산해 비교하려면",
  "years-to-months-calculator": "연 단위 기간을 개월 수로 계산하려면",
  "pto-accrual-calculator": "근무기간별 유급휴가 누적 시간을 계산하려면",
  "meeting-duration-calculator": "회의 시작과 종료 시각으로 소요시간을 구하려면",
  "shift-break-calculator": "교대근무 시간에서 휴게시간을 제외하려면",
  "pay-period-hours-calculator": "급여 산정기간의 총 근무시간을 계산하려면",
  "study-hours-calculator": "하루 학습시간과 공부한 날로 총 학습량을 구하려면",
  "project-hours-calculator": "프로젝트 인력과 기간별 작업시간을 합산하려면",
  "commute-time-calculator": "편도 통근 시간을 월간 이동시간으로 환산하려면",
  "overtime-hours-calculator": "정규 근무시간을 넘긴 시간을 계산하려면",
  "deadline-days-left-calculator": "서류 접수나 마감일까지 남은 일수를 확인하려면",
  "percentage-increase-calculator": "이전 값보다 늘어난 비율을 계산하려면",
  "percentage-decrease-calculator": "이전 값보다 줄어든 비율을 확인하려면",
  "ratio-to-percentage-calculator": "두 수의 비율을 백분율로 바꾸려면",
  "decimal-to-percent-calculator": "소수 형태의 비율을 퍼센트로 표현하려면",
  "percent-to-decimal-calculator": "퍼센트 값을 소수 형태로 환산하려면",
  "circle-area-calculator": "반지름으로 원의 넓이를 계산하려면",
  "circle-circumference-calculator": "반지름이나 지름으로 원둘레를 구하려면",
  "rectangle-area-calculator": "가로와 세로 길이로 직사각형의 넓이를 구하려면",
  "triangle-area-calculator": "밑변과 높이로 삼각형의 넓이를 계산하려면",
  "pythagorean-theorem-calculator": "직각삼각형의 두 변으로 나머지 한 변을 구하려면",
  "slope-calculator": "좌표 두 점 사이의 기울기를 계산하려면",
  "distance-formula-calculator": "좌표평면의 두 점 사이 거리를 구하려면",
  "power-function-calculator": "밑과 지수를 입력해 거듭제곱을 구하려면",
  "cube-root-calculator": "입력한 수의 세제곱근을 계산하려면",
  "density-calculator": "질량과 부피로 물질의 밀도를 구하려면",
  "land-area-converter": "토지 면적을 제곱미터와 다른 단위로 비교하려면",
  "liquid-volume-converter": "음료나 액체 용량을 리터와 다른 단위로 바꾸려면",
  "air-pressure-converter": "기압 단위를 서로 다른 기준으로 환산하려면",
  "electricity-power-converter": "전기 출력 수치를 다른 단위로 변환하려면",
  "digital-storage-converter": "파일 저장용량 표기를 서로 다른 단위로 바꾸려면",
  "signal-frequency-converter": "통신 신호의 주파수 단위를 비교하려면",
  "load-force-converter": "장비 하중을 서로 다른 힘 단위로 환산하려면",
  "rotational-torque-converter": "회전 토크 수치를 다른 단위 기준으로 비교하려면",
  "heat-energy-converter": "열에너지 단위를 서로 바꾸어 비교하려면",
  "geometry-angle-converter": "기하 문제의 도와 라디안을 서로 변환하려면",
  "material-density-converter": "재료의 밀도 표기를 다른 단위로 환산하려면",
  "duration-unit-converter": "기간 값을 시간과 분 등으로 나누어 비교하려면",
  "cooking-volume-converter": "해외 레시피의 컵·스푼 용량을 환산하려면",
  "fuel-volume-converter": "연료 용량 표기를 리터나 갤런으로 비교하려면",
  "battery-charge-converter": "배터리 전하량 단위를 환산하려면",
  "paint-calculator": "벽면 크기에 맞는 예상 페인트 필요량을 계산하려면",
  "flooring-calculator": "방 바닥 면적을 기준으로 마감재 필요량을 구하려면",
  "concrete-calculator": "타설할 공간의 크기로 콘크리트 부피를 추정하려면",
  "mulch-calculator": "화단 면적과 덮는 두께로 멀치 필요량을 계산하려면",
  "tile-calculator": "바닥이나 벽에 필요한 타일 수를 추정하려면",
  "wallpaper-calculator": "벽면 크기에 맞는 벽지 필요량을 계산하려면",
  "fence-calculator": "부지 경계 길이에 따라 울타리 자재량을 가늠하려면",
  "pool-volume-calculator": "수영장 크기에 따른 물의 부피를 추정하려면",
  "appliance-energy-cost-calculator": "가전제품 소비전력으로 사용 전기요금을 추정하려면",
  "road-trip-cost-calculator": "장거리 자동차 여행에 필요한 연료비를 계산하려면",
  "babysitting-cost-calculator": "돌봄 시간과 시간당 요금으로 비용을 가늠하려면",
  "freelance-rate-calculator": "목표 매출과 작업시간을 기준으로 프리랜서 단가를 정하려면",
  "meal-prep-cost-calculator": "식재료비와 식사 횟수로 한 끼 준비 비용을 구하려면",
  "party-budget-calculator": "모임 인원과 항목별 지출로 행사 예산을 잡으려면",
  "moving-cost-calculator": "이사 거리와 서비스 항목으로 예상 비용을 계산하려면",
  "utility-bill-split-calculator": "공동 생활자의 공과금을 분담하려면",
};

function getKoScenario(definition: CalculatorDefinition) {
  const original = koScenarioContent[definition.slug];
  if (original) return original;
  const situation = remainingKoIntents[definition.slug];
  if (!situation) return undefined;
  const labels = localizedInputLabels(definition);
  const inputs = labels.length ? labels.slice(0, 3).join(", ") : "필요한 입력 항목";
  const caution = definition.category === "finance" || definition.category === "business"
    ? "실제 계약 조건과 세금, 수수료는 입력 항목에 포함된 경우에만 계산에 반영됩니다."
    : definition.category === "health" || definition.category === "fitness"
      ? "건강 관련 수치는 추정치이며 개인별 건강 상태를 진단하는 용도로 사용할 수 없습니다."
      : definition.category === "time-date"
        ? "날짜 포함 방식과 공휴일 적용 여부는 화면에 표시된 계산 기준을 확인하세요."
        : definition.category === "unit-converters"
          ? "변환 전후의 단위 종류와 자릿수 반올림을 확인하세요."
          : "결과는 입력 조건을 기준으로 계산되므로 단위와 적용 범위를 확인하세요.";
  return {
    situation,
    steps: `${inputs}을 확인하고 실제 상황의 값을 입력해 결과를 구하세요. 비교가 필요하면 한 항목씩 바꿔 차이를 살펴보세요.`,
    caution,
  };
}

export function getKoScenarioCopy(slug: string) {
  return koScenarioContent[slug] ?? null;
}
function buildKoExample(definition: CalculatorDefinition, localizedName: string) {
  const scenario = getKoScenario(definition);
  if (scenario) return `${scenario.situation}? ${scenario.steps} ${scenario.caution}`;
  const labels = localizedInputLabels(definition).slice(0, 3);
  const inputs = labels.length ? labels.join(", ") : "화면의 입력 항목";
  return `${localizedName}에서 ${inputs}을 확인한 다음, 실제 비교하려는 상황에 맞게 값을 입력해보세요. 먼저 한 번 계산하고 한 항목만 변경해 결과 차이를 살펴보면 각 입력값이 어떤 역할을 하는지 이해하기 쉽습니다. 계산 결과에 포함되지 않은 비용이나 조건은 별도로 확인해야 합니다.`;
}
function buildKoFaq(definition: CalculatorDefinition, localizedName: string) {
  const scenario = getKoScenario(definition);
  const firstLabel = localizedInputLabels(definition)[0] ?? "입력값";
  if (scenario) return [
    { q: `${localizedName}는 언제 사용하면 좋나요?`, a: `${scenario.situation}? ${scenario.steps}` },
    { q: "결과를 해석할 때 무엇을 주의해야 하나요?", a: scenario.caution },
    { q: "다른 조건도 비교할 수 있나요?", a: `${firstLabel} 등 입력값을 한 번에 하나씩 바꾸면 조건에 따른 결과 차이를 확인하기 쉽습니다. 최종 의사결정 전에는 실제 적용 규칙과 별도 비용을 점검하세요.` },
  ];
  return [
    { q: `${localizedName}에서는 무엇을 입력하나요?`, a: `${firstLabel}을 비롯한 화면의 입력 항목을 사용합니다. 항목의 단위와 선택지를 확인한 뒤 계산해보세요.` },
    { q: "결과를 그대로 적용해도 되나요?", a: "입력한 조건에 따른 계산 결과이므로 실제 상품, 기관 또는 개인별 기준과 차이가 날 수 있습니다. 중요한 결정 전에는 공식 자료를 함께 확인하세요." },
    { q: "여러 경우를 어떻게 비교하나요?", a: "기준이 되는 입력값을 먼저 저장하거나 기록하고 한 항목씩 바꾸어 계산하세요. 단위나 기간을 동시에 바꾸면 어떤 요인 때문에 결과가 변했는지 알기 어려울 수 있습니다." },
  ];
}

export function localizeResultText(text: string, locale: Locale) {
  if (locale === "en") return text;
  let out = replaceCurrencySymbols(String(text ?? "").trim());
  const direct = translateKnownLabel(out);
  if (direct) return direct;

  const replacements: Array<[RegExp, string]> = [
    [/(-?[\d.,]+)\s*yd³/gi, '$1 입방야드'],
    [/(-?[\d.,]+)\s*ft³/gi, '$1 입방피트'],
    [/(-?[\d.,]+)\s*sq ft/gi, '$1 제곱피트'],
    [/(-?[\d.,]+)\s*cubic yards?/gi, '$1 입방야드'],
    [/(-?[\d.,]+)\s*cubic feet/gi, '$1 입방피트'],
    [/(-?[\d.,]+)\s*tons?/gi, '$1 톤'],
    [/(-?[\d.,]+)\s*years?/gi, '$1년'],
    [/(-?[\d.,]+)\s*months?/gi, '$1개월'],
    [/(-?[\d.,]+)\s*days?/gi, '$1일'],
    [/(-?[\d.,]+)\s*hours?/gi, '$1시간'],
    [/(-?[\d.,]+)\s*minutes?/gi, '$1분'],
    [/(-?[\d.,]+)\s*seconds?/gi, '$1초'],
    [/per mile/gi, '마일당'],
    [/per kilometer/gi, '킬로미터당'],
    [/calories\/day/gi, 'kcal/일'],
    [/(-?[\d.,]+)\s*weeks?/gi, '$1주'],
    [/(-?[\d.,]+)\s*millimeters?/gi, '$1밀리미터'],
    [/(-?[\d.,]+)\s*centimeters?/gi, '$1센티미터'],
    [/(-?[\d.,]+)\s*kilometers?/gi, '$1킬로미터'],
    [/(-?[\d.,]+)\s*meters?/gi, '$1미터'],
    [/(-?[\d.,]+)\s*miles?/gi, '$1마일'],
    [/(-?[\d.,]+)\s*feet/gi, '$1피트'],
    [/(-?[\d.,]+)\s*inches?/gi, '$1인치'],
    [/(-?[\d.,]+)\s*kilograms?/gi, '$1킬로그램'],
    [/(-?[\d.,]+)\s*grams?/gi, '$1그램'],
    [/(-?[\d.,]+)\s*pounds?/gi, '$1파운드'],
    [/(-?[\d.,]+)\s*liters?/gi, '$1리터'],
    [/(-?[\d.,]+)\s*calories/gi, '$1칼로리'],
    [/\bper day\b/gi, '하루당'],
    [/\bper week\b/gi, '주당'],
    [/\bper month\b/gi, '월당'],
    [/\bper year\b/gi, '연간'],
  ];
  for (const [pattern, replacement] of replacements) out = out.replace(pattern, replacement);

  if (/^(Invalid input|Invalid date|No data|No mode)$/i.test(out)) {
    const invalidMap: Record<string, string> = { 'Invalid input':'잘못된 입력값', 'Invalid date':'잘못된 날짜', 'No data':'데이터 없음', 'No mode':'최빈값 없음' };
    return invalidMap[out] || out;
  }

  return localizeInputLabel(out, locale);
}

export function localizeDescription(definition: CalculatorDefinition, locale: Locale) {
  if (locale === "en") return getLocalizedText(definition.description, locale);
  const localizedName = localizeCalculatorName(getLocalizedText(definition.name, "en"), locale, definition.slug);
  return buildKoDescription(definition, localizedName);
}

export function localizeDisplayValue(label: string, value: string, locale: Locale) {
  if (locale === "en") return value;
  const raw = String(value ?? "").trim();
  if (!raw || raw === "—") return raw || "—";
  const labelKo = localizeInputLabel(getLocalizedText(label, locale), locale);
  const num = Number(raw.replace(/,/g, ""));
  const isMoney = /(원|금액|가격|비용|소득|연봉|지출|월세|자산|부채|수수료|계약금|주가|원금|잔액|예산|매출|대출)/.test(labelKo);
  if (Number.isFinite(num) && isMoney) {
    return `${Math.round(num).toLocaleString("ko-KR")}원`;
  }
  return localizeInputLabel(raw, locale);
}

export function localizeInputLabel(label: string | Partial<Record<Locale, string>>, locale: Locale) {
  const rawLabel = getLocalizedText(label, locale);
  if (locale === "en") return rawLabel;
  const cleaned = replaceCurrencySymbols(String(rawLabel)).trim();
  const translated = translateKnownLabel(cleaned);
  if (translated) return translated;
  if (/^\d+(?:,\d+)*(?:\.\d+)?$/.test(cleaned)) return cleaned;
  return localizeCalculatorName(cleaned, locale);
}

export function localizeCalculatorDefinition(definition: CalculatorDefinition, locale: Locale): CalculatorDefinition {
  if (locale === "en") return {
    ...definition,
    categoryName: getLocalizedText(definition.categoryName, locale),
    name: getLocalizedText(definition.name, locale),
    description: getLocalizedText(definition.description, locale),
    intro: getLocalizedText(definition.intro, locale),
    formulaText: getLocalizedText(definition.formulaText, locale),
    example: getLocalizedText(definition.example, locale),
    howToUse: definition.howToUse.map((item) => getLocalizedText(item, locale)),
    faq: definition.faq.map((item) => ({ q: getLocalizedText(item.q, locale), a: getLocalizedText(item.a, locale) })),
    inputs: definition.inputs.map((input) => ({ ...input, label: getLocalizedText(input.label, locale), options: input.options?.map((option) => ({ ...option, label: getLocalizedText(option.label, locale) })) })),
  };
  const localizedName = localizeCalculatorName(getLocalizedText(definition.name, "en"), locale, definition.slug);
  return {
    ...definition,
    categoryName: localizeCategoryName(definition.category, locale),
    name: localizedName,
    description: getKoScenario(definition)
      ? `${localizedName}: ${getKoScenario(definition)!.situation}? ${getKoScenario(definition)!.caution}`
      : buildKoDescription(definition, localizedName),
    intro: getKoScenario(definition)
      ? `${getKoScenario(definition)!.situation}? ${getKoScenario(definition)!.steps} ${getKoScenario(definition)!.caution}`
      : buildKoIntro(definition, localizedName),
    formulaText: buildKoFormulaText(definition, localizedName),
    howToUse: getKoScenario(definition)
      ? [getKoScenario(definition)!.steps, ...buildKoHowToUse(definition).slice(1)]
      : buildKoHowToUse(definition),
    example: buildKoExample(definition, localizedName),
    faq: buildKoFaq(definition, localizedName),
    inputs: definition.inputs.map((input) => ({
      ...input,
      label: localizeInputLabel(input.label, locale),
      options: input.options?.map((option) => ({ ...option, label: localizeInputLabel(option.label, locale) })),
    })),
  };
}

export function localizeUiText(text: string, locale: Locale) {
  if (locale === "en") return text;
  const cleaned = replaceCurrencySymbols(String(text)).trim();
  const translated = translateKnownLabel(cleaned);
  if (translated) return translated;
  return localizeCalculatorName(cleaned, locale);
}

export function calculatorKeywordLine(definition: CalculatorDefinition, locale: Locale) {
  if (locale === "en") return getLocalizedText(definition.name, locale);
  return `${localizeCalculatorName(getLocalizedText(definition.name, "en"), locale, definition.slug)} | ${localizeCategoryName(definition.category, locale)} | 온라인 계산기`;
}
