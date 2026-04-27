// Per-category SEO keyword sets.
// - KO list is tuned for Naver 통합검색: short, high-intent longtail Korean phrases
//   that mirror how people actually type queries on Naver.
// - EN list is tuned for Google: descriptive longtail in natural English.

import type { Locale } from "@/lib/i18n";

type CategoryKeywords = {
  ko: string[];
  en: string[];
  // Korean intro snippet to weave into category description / og:description
  // — aim for natural sentences, not keyword stuffing.
  koIntro: string;
  enIntro: string;
};

export const categoryKeywords: Record<string, CategoryKeywords> = {
  finance: {
    ko: [
      "대출 이자 계산기",
      "복리 계산기",
      "주택담보대출 계산기",
      "전세자금대출 계산기",
      "월급 실수령액 계산기",
      "신용카드 할부 계산기",
      "예금 이자 계산기",
      "적금 계산기",
      "투자 수익률 계산기",
      "환율 계산기",
    ],
    en: [
      "loan calculator",
      "mortgage calculator",
      "compound interest calculator",
      "savings calculator",
      "investment calculator",
      "credit card interest",
      "amortization schedule",
      "tip calculator",
    ],
    koIntro:
      "대출 이자, 복리, 주택담보대출, 월급 실수령액처럼 돈과 관련된 계산을 한국어로 빠르게 처리하실 수 있습니다.",
    enIntro:
      "Compare loans, plan savings, work out compound interest, and check the real cost of borrowing — all in seconds.",
  },
  health: {
    ko: [
      "BMI 계산기",
      "표준체중 계산기",
      "기초대사량 계산기",
      "체지방률 계산기",
      "칼로리 계산기",
      "임신 주수 계산기",
      "배란일 계산기",
      "혈압 정상 수치",
      "심박수 계산기",
    ],
    en: [
      "BMI calculator",
      "calorie calculator",
      "BMR calculator",
      "body fat percentage",
      "ideal weight calculator",
      "pregnancy due date calculator",
      "ovulation calculator",
      "heart rate calculator",
    ],
    koIntro:
      "BMI, 표준체중, 기초대사량, 임신 주수처럼 건강과 몸 상태를 점검하실 때 자주 쓰시는 계산기를 한 곳에 모았습니다.",
    enIntro:
      "Check your BMI, work out daily calorie needs, track pregnancy weeks, and monitor health metrics with simple, reliable tools.",
  },
  time: {
    ko: [
      "나이 계산기",
      "만 나이 계산기",
      "디데이 계산기",
      "날짜 계산기",
      "근무일수 계산기",
      "시간 계산기",
      "타임존 변환기",
      "임신 출산 예정일 계산기",
    ],
    en: [
      "age calculator",
      "date calculator",
      "days between dates",
      "time duration calculator",
      "countdown calculator",
      "timezone converter",
      "business days calculator",
    ],
    koIntro:
      "만 나이, 디데이, 두 날짜 차이, 근무일수처럼 시간과 날짜를 다루는 계산을 한 번에 해결하실 수 있습니다.",
    enIntro:
      "Find your age in days, count down to a deadline, calculate working days between two dates, and convert across time zones.",
  },
  math: {
    ko: [
      "퍼센트 계산기",
      "할인율 계산기",
      "분수 계산기",
      "제곱근 계산기",
      "삼각함수 계산기",
      "이차방정식 계산기",
      "확률 계산기",
      "수학 계산기",
    ],
    en: [
      "percentage calculator",
      "fraction calculator",
      "square root calculator",
      "quadratic equation",
      "probability calculator",
      "scientific calculator",
      "trigonometry calculator",
    ],
    koIntro:
      "퍼센트, 분수, 제곱근, 이차방정식처럼 학교와 실생활에서 자주 쓰이는 수학 계산을 한국어로 풀어드립니다.",
    enIntro:
      "Solve percentages, fractions, square roots, equations, and trigonometry — explained alongside the answer so you can learn while you work.",
  },
  "unit-converters": {
    ko: [
      "단위 변환기",
      "킬로그램 파운드 변환",
      "센티미터 인치 변환",
      "섭씨 화씨 변환",
      "리터 갤런 변환",
      "평수 제곱미터 변환",
      "마일 킬로미터 변환",
      "온스 그램 변환",
    ],
    en: [
      "unit converter",
      "kg to lbs converter",
      "cm to inches converter",
      "celsius to fahrenheit",
      "liters to gallons",
      "miles to km",
      "ounces to grams",
      "metric to imperial",
    ],
    koIntro:
      "킬로그램·파운드, 센티미터·인치, 섭씨·화씨, 리터·갤런처럼 자주 쓰시는 단위 변환을 빠르게 도와드립니다.",
    enIntro:
      "Convert between metric and imperial units instantly — weight, length, temperature, volume, area, and more.",
  },
  life: {
    ko: [
      "콘크리트 계산기",
      "페인트 양 계산기",
      "타일 면적 계산기",
      "팁 계산기",
      "연비 계산기",
      "GPA 계산기",
      "레시피 변환 계산기",
      "방 면적 계산기",
    ],
    en: [
      "concrete calculator",
      "paint calculator",
      "tile calculator",
      "tip calculator",
      "fuel cost calculator",
      "GPA calculator",
      "recipe converter",
    ],
    koIntro:
      "공사, 인테리어, 자동차, 학점, 레시피처럼 일상에서 자주 마주치시는 계산을 모아 빠르게 해결하실 수 있도록 했습니다.",
    enIntro:
      "Practical calculators for home projects, cooking, school, driving, and the everyday math life keeps throwing at you.",
  },
};

export function getCategoryKeywords(category: string, locale: Locale): string[] {
  const item = categoryKeywords[category];
  if (!item) return [];
  return locale === "ko" ? item.ko : item.en;
}

export function getCategoryIntro(category: string, locale: Locale): string {
  const item = categoryKeywords[category];
  if (!item) return "";
  return locale === "ko" ? item.koIntro : item.enIntro;
}
