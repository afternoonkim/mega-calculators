import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "ko" ? "ko" : "en";
  const isKo = locale === "ko";
  const calculatorsHref = `/${locale}/calculators`;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">
          {isKo ? "찾으시는 페이지가 없어요" : "Page not found"}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          {isKo
            ? "주소가 바뀌었거나 페이지가 사라졌을 수 있어요. 전체 계산기 목록에서 원하시는 도구를 찾아보세요."
            : "The page you are looking for might have moved or no longer exists. You can find what you need in the full list of calculators."}
        </p>
        <Link
          href={calculatorsHref}
          className="mt-6 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          {isKo ? "전체 계산기 보러 가기" : "Browse all calculators"}
        </Link>
      </div>
    </div>
  );
}
