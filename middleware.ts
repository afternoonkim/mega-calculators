import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/android-chrome") ||
    pathname.startsWith("/apple-touch-icon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/ads.txt"
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (!firstSegment || !isLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", firstSegment);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!.*\..*).*)", "/", "/(ko|en)/:path*"],
};
