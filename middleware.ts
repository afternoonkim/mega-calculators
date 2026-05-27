import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";


const legacyPathRedirects: Record<string, string> = {
  "/cal": "/en/calculators",
  "/cal/calculator": "/en/calculators",
  "/cal/cal/calculator": "/en/calculators",
  "/cal/fire": "/en/calculators/finance/retirement-calculator",
  "/cal/cal/fire": "/en/calculators/finance/retirement-calculator",
  "/cal/capital-gains": "/en/calculators/finance/capital-gains-tax-calculator",
  "/cal/cal/capital-gains": "/en/calculators/finance/capital-gains-tax-calculator",
  "/cal/retirement-tax": "/en/calculators/finance/retirement-calculator",
  "/cal/cal/retirement-tax": "/en/calculators/finance/retirement-calculator",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const legacyDestination = legacyPathRedirects[pathname];
  if (legacyDestination) {
    const url = request.nextUrl.clone();
    url.pathname = legacyDestination;
    return NextResponse.redirect(url, 308);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/android-chrome") ||
    pathname.startsWith("/apple-touch-icon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/sitemap-static.xml" ||
    pathname === "/sitemap-calculators.xml" ||
    pathname === "/sitemap-examples.xml" ||
    pathname.endsWith(".xml") ||
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
