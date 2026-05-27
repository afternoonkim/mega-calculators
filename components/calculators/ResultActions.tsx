"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  // The textual representation of the primary result. Copied to clipboard on click.
  resultText: string;
  // Optional secondary lines, joined with newlines into the copied snippet.
  secondaryLines?: string[];
  // Calculator title — used to compose a shareable message and Web Share API title.
  title: string;
};

export default function ResultActions({ locale, resultText, secondaryLines = [], title }: Props) {
  const isKo = locale === "ko";
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState<"idle" | "copied-url" | "shared">("idle");
  const canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  // Auto-clear "copied" state after 2 seconds.
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    if (shared === "idle") return;
    const t = setTimeout(() => setShared("idle"), 2000);
    return () => clearTimeout(t);
  }, [shared]);

  const buildShareText = () => {
    const lines = [`${title}: ${resultText}`, ...secondaryLines.filter(Boolean)];
    return lines.join("\n");
  };

  const handleCopyResult = async () => {
    try {
      await navigator.clipboard.writeText(buildShareText());
      setCopied(true);
    } catch {
      // Fallback: use a temporary textarea for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = buildShareText();
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch {
        // ignore
      }
      document.body.removeChild(textarea);
    }
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = buildShareText();

    if (canShare) {
      try {
        await navigator.share({ title, text, url });
        setShared("shared");
        return;
      } catch {
        // User cancelled — silent fail
        return;
      }
    }

    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setShared("copied-url");
    } catch {
      // ignore
    }
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={handleCopyResult}
        className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        aria-label={isKo ? "결과를 클립보드에 복사" : "Copy result to clipboard"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? (isKo ? "복사 완료" : "Copied") : isKo ? "결과 복사" : "Copy result"}
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        aria-label={isKo ? "공유하기" : "Share"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        {shared === "shared"
          ? isKo
            ? "공유 완료"
            : "Shared"
          : shared === "copied-url"
            ? isKo
              ? "링크 복사됨"
              : "Link copied"
            : isKo
              ? "공유하기"
              : "Share"}
      </button>
    </div>
  );
}
