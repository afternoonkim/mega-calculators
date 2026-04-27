import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") === "ko" ? "ko" : "en";
  const isKo = locale === "ko";

  const title = isKo ? "무료 온라인 계산기 모음" : "Free Online Calculators";
  const subtitle = isKo
    ? "대출 · 복리 · BMI · 나이 · 퍼센트 · 단위 변환"
    : "Finance · Health · Time · Math · Conversions";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "rgba(255,255,255,0.1)",
            color: "#bfdbfe",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          mega-calculators.com
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: "84px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginTop: "32px",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#cbd5e1",
            fontSize: "36px",
            fontWeight: 500,
            marginTop: "32px",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            right: "80px",
            color: "#60a5fa",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          {isKo ? "한국어 · 무료 사용" : "English · Free to use"}
        </div>
      </div>
    ),
    { ...size },
  );
}
