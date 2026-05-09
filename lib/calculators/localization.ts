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
  "Use cases": "활용 사례",
  "Examples": "예시",
  "Open example →": "예시 보기 →",
  "View formula →": "공식 보기 →",
  "Read guide →": "가이드 보기 →",
  "See use cases →": "활용 사례 보기 →",
  "About this calculator": "계산기 안내",
  "How this calculator works": "계산 방식 안내",
  "How to use it": "사용 방법",
  "Example": "예시",
  "Related calculators": "관련 계산기",
  "Open calculator →": "계산기 열기 →",
  "Calculator results are provided for planning and educational purposes. For taxes, legal decisions, lending, or medical advice, verify the numbers with an official source or qualified professional.": "계산 결과는 계획 수립과 학습용 참고 자료입니다. 세금, 법률, 대출, 의료처럼 중요한 판단이 필요한 경우에는 공식 자료나 전문가와 함께 다시 확인하세요.",
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
  "See use cases": "활용 사례 보기",
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
  "Use the output as a planning estimate before reviewing a lender, broker, or financial institution quote.": "금융기관 조건을 검토하기 전에 참고용 계획 수치로 활용할 수 있습니다.",
  "Test how changes in rate, term, contribution, or starting balance affect the long-term result.": "금리, 기간, 납입액, 시작 금액이 달라질 때 결과가 어떻게 바뀌는지 비교할 수 있습니다.",
  "Use the result as a practical starting point before talking to a physician, dietitian, or coach.": "의사, 영양사, 코치와 상담하기 전에 참고용 시작점으로 활용할 수 있습니다.",
  "Test different assumptions to understand how small changes can affect the final estimate.": "가정을 바꿔보면서 작은 변화가 최종 결과에 어떤 영향을 주는지 확인할 수 있습니다.",
  "Estimate time gaps quickly when planning birthdays, schedules, deadlines, or work blocks.": "생일, 일정, 마감일, 근무 시간을 계획할 때 시간 차이를 빠르게 확인할 수 있습니다.",
  "Double-check a date or time calculation without opening a spreadsheet.": "스프레드시트를 열지 않아도 날짜와 시간 계산을 빠르게 다시 확인할 수 있습니다.",
  "Use the result to compare multiple calendar or schedule scenarios side by side.": "여러 일정 시나리오를 나란히 비교할 때 활용할 수 있습니다.",
  "Turn a manual time calculation into a reusable workflow for everyday planning.": "반복적인 시간 계산을 일상 계획에 바로 쓸 수 있는 방식으로 바꿔줍니다.",
  "Run quick what-if scenarios before using a more advanced analytics tool.": "더 복잡한 분석 도구를 쓰기 전에 간단한 가정 비교를 해볼 수 있습니다.",
  "Translate a written problem into a clear numeric answer with less manual work.": "서술형 문제를 숫자 결과로 빠르게 바꿔 확인할 수 있습니다.",
  "Check a formula step by step before applying it in school, work, or personal projects.": "학교, 업무, 개인 프로젝트에 적용하기 전에 공식을 단계별로 확인할 수 있습니다.",
  "Convert between common US and metric units without memorizing conversion factors.": "환산 공식을 외우지 않아도 미국식 단위와 미터법 단위를 빠르게 바꿀 수 있습니다.",
  "Use the converter while shopping, cooking, traveling, or comparing product specifications.": "쇼핑, 요리, 여행, 제품 사양 비교 상황에서 바로 사용할 수 있습니다.",
  "Quickly verify measurements copied from another website, document, or spreadsheet.": "다른 사이트나 문서에서 가져온 수치를 빠르게 다시 확인할 수 있습니다.",
  "Reduce manual conversion mistakes when moving between systems or standards.": "단위 체계가 바뀔 때 생기기 쉬운 실수를 줄여줍니다.",
  "Use the output as a fast reference while making a practical real-world decision.": "실생활에서 결정을 내릴 때 빠른 참고 수치로 활용할 수 있습니다.",
  "Save time on repetitive calculations that would otherwise be done by hand.": "손으로 반복 계산하던 시간을 줄일 수 있습니다.",
  "This estimate includes principal and interest only. Property taxes, homeowners insurance, HOA fees, and PMI can increase the real payment.": "이 계산은 원금과 이자만 반영한 참고값입니다. 재산세, 주택 보험료, 관리비, PMI가 포함되면 실제 상환액은 더 커질 수 있습니다.",
  "The payment is not large enough to reduce the balance after interest.": "현재 상환액으로는 이자를 제외한 원금이 줄지 않습니다.",
  "Your payment does not cover the monthly interest, so the balance will not go down.": "현재 상환액이 월 이자보다 적어서 대출 잔액이 줄어들지 않습니다.",
  "Enter a value that matches the base you selected.": "선택한 진법에 맞는 값을 입력하세요.",
  "Example pages help you understand a calculator faster because they remove the blank-screen problem. Instead of guessing which numbers to enter, you can review a practical scenario and then adjust the values to match your own needs.": "예시 페이지를 보면 어떤 값을 넣어야 할지 감을 빠르게 잡을 수 있습니다. 먼저 실제 예시를 확인한 뒤 내 상황에 맞게 숫자만 바꿔보면 됩니다.",
  "This is especially useful for users who searched for a very specific long-tail question and want a quick answer before opening the full interactive tool.": "특정 조건으로 검색해 들어온 사용자도 계산기를 열기 전에 결과 흐름을 빠르게 파악할 수 있도록 구성했습니다.",
  "The formula section explains the math logic behind the calculator result. It is useful when you want to understand what each variable means or double-check the result with your own manual work or spreadsheet.": "공식 페이지는 계산 결과가 어떤 원리로 나오는지 이해하기 쉽게 정리한 공간입니다. 변수의 의미를 확인하거나 직접 계산한 값과 비교할 때 도움이 됩니다.",
  "You do not need to solve the formula manually to use the calculator. The purpose of this page is to give context, improve trust, and answer search queries from users who specifically want the formula.": "직접 공식을 계산하지 않아도 계산기는 바로 사용할 수 있습니다. 이 페이지는 공식이 궁금한 사용자를 위해 개념과 해석 기준을 정리한 안내 페이지입니다.",
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
  const englishName = getLocalizedText(name as any, "en");
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
    return `${localizedName}는 자주 사용하는 단위를 한국어로 빠르게 변환해주는 무료 온라인 도구입니다. 변환 전 값과 단위를 입력하면 결과를 바로 확인할 수 있어 실생활, 학습, 업무에 모두 활용하기 좋습니다.`;
  }
  if (definition.category === "finance" || definition.category === "business") {
    return `${localizedName}는 금액, 이자율, 기간 같은 값을 바탕으로 결과를 바로 확인할 수 있는 한국어 금융 계산기입니다. 대출, 저축, 투자, 예산 점검처럼 돈과 관련된 판단을 할 때 참고용으로 활용할 수 있습니다.`;
  }
  if (definition.category === "health") {
    return `${localizedName}는 몸무게, 키, 나이, 활동량 등 건강 관련 값을 바탕으로 결과를 빠르게 확인할 수 있는 한국어 계산기입니다. 식단, 운동, 건강 관리 계획을 세울 때 참고용으로 활용하기 좋습니다.`;
  }
  if (definition.category === "time-date") {
    return `${localizedName}는 날짜, 시간, 기간 차이를 빠르게 계산할 수 있는 한국어 도구입니다. 일정 관리, 근무 시간 계산, 마감일 확인 같은 상황에서 바로 활용할 수 있습니다.`;
  }
  if (definition.category === "math") {
    return `${localizedName}는 수식과 숫자 계산을 빠르게 처리할 수 있는 한국어 수학 계산기입니다. 학습, 검산, 업무용 기초 계산에 활용하기 좋습니다.`;
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
    return `${localizedName}는 ${joined}을 바탕으로 건강 관련 수치를 확인하는 계산기입니다. 운동 계획, 식단 관리, 기본 건강 지표 확인 전에 참고용으로 쓰기 좋습니다.`;
  }
  if (definition.category === "time-date") {
    return `${localizedName}는 ${joined}을 입력해 날짜와 시간 차이를 계산하는 도구입니다. 일정 간격, 남은 기간, 근무 시간처럼 반복해서 계산해야 하는 상황에서 시간을 절약할 수 있습니다.`;
  }
  if (definition.category === "math") {
    return `${localizedName}는 ${joined}을 바탕으로 수학 결과를 빠르게 계산할 수 있는 도구입니다. 직접 계산한 값을 다시 확인하거나 여러 조건을 비교할 때 활용하기 좋습니다.`;
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

function buildKoExample(definition: CalculatorDefinition, localizedName: string) {
  const labels = localizedInputLabels(definition).slice(0, 3);
  if (definition.category === "finance" || definition.category === "business") {
    return `${localizedName}에서는 금액, 이자율, 기간을 넣어 결과가 어떻게 달라지는지 바로 확인할 수 있습니다. 먼저 기본값으로 계산해본 뒤 내 상황에 맞는 숫자로 바꿔보면 실제 비교가 훨씬 쉬워집니다.`;
  }
  if (definition.category === "health") {
    return `${localizedName} 기본값으로 먼저 결과를 확인한 뒤, 내 키·몸무게·나이·활동량에 맞게 값을 바꿔보세요. 작은 입력 차이가 결과에 어떤 영향을 주는지 직관적으로 이해할 수 있습니다.`;
  }
  if (isConverter(definition)) {
    return `${localizedName}는 자주 쓰는 기준값을 넣어보면 단위 차이를 빠르게 이해할 수 있습니다. 예를 들어 ${labels.join(", ")} 같은 입력을 바꿔보며 필요한 단위를 비교해보세요.`;
  }
  return `${localizedName}는 기본 입력값으로 먼저 흐름을 확인한 뒤 내 상황에 맞게 숫자를 바꿔보는 방식이 가장 이해하기 쉽습니다. 예시와 함께 보면 어떤 값을 넣어야 할지 감을 빠르게 잡을 수 있습니다.`;
}

function buildKoFaq(definition: CalculatorDefinition, localizedName: string) {
  const firstLabel = localizedInputLabels(definition)[0] ?? "입력값";
  const moneyNote = isMoneyCalculator(definition)
    ? "한국어 화면에서는 금액 관련 문구와 표시를 원화 기준으로 읽기 쉽게 보여줍니다."
    : "입력 단위와 조건을 정확히 맞춰 넣는 것이 중요합니다.";
  return [
    { q: `${localizedName}는 어떤 계산에 쓰나요?`, a: `${localizedName}는 ${firstLabel} 등 필요한 값을 입력하면 핵심 결과를 빠르게 보여주는 온라인 계산기입니다. 복잡한 표나 스프레드시트 없이 바로 결과를 확인하고 비교할 수 있습니다.` },
    { q: `결과를 그대로 믿어도 되나요?`, a: `${localizedName} 결과는 참고용 계산값입니다. 입력 조건, 반올림 방식, 실제 상품·기관 규정에 따라 차이가 생길 수 있으므로 중요한 결정 전에는 공식 자료를 함께 확인하세요.` },
    { q: `한국어 버전에서 확인할 때 주의할 점이 있나요?`, a: `${moneyNote} 예시 페이지와 가이드도 함께 보면 입력값과 결과 해석을 더 쉽게 이해할 수 있습니다.` },
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
  const labelKo = localizeInputLabel(getLocalizedText(label as any, locale), locale);
  const num = Number(raw.replace(/,/g, ""));
  const isMoney = /(원|금액|가격|비용|소득|연봉|지출|월세|자산|부채|수수료|계약금|주가|원금|잔액|예산|매출|대출)/.test(labelKo);
  if (Number.isFinite(num) && isMoney) {
    return `${Math.round(num).toLocaleString("ko-KR")}원`;
  }
  return localizeInputLabel(raw, locale);
}

export function localizeInputLabel(label: string | Partial<Record<Locale, string>>, locale: Locale) {
  const rawLabel = getLocalizedText(label as any, locale);
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
  const localizedName = localizeCalculatorName(getLocalizedText(definition.name as any, "en"), locale, definition.slug);
  return {
    ...definition,
    categoryName: localizeCategoryName(definition.category, locale),
    name: localizedName,
    description: buildKoDescription(definition, localizedName),
    intro: buildKoIntro(definition, localizedName),
    formulaText: buildKoFormulaText(definition, localizedName),
    howToUse: buildKoHowToUse(definition),
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
  return `${localizeCalculatorName(getLocalizedText(definition.name as any, "en"), locale, definition.slug)} | ${localizeCategoryName(definition.category, locale)} | 온라인 계산기`;
}
