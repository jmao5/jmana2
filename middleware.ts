import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const protectedPaths = ["/manhua", "/webtoon", "/mark", "/profile"];

  // 해당 경로가 보호되는 경로인지 확인
  if (protectedPaths.includes(nextUrl.pathname) && !cookies.has("token")) {
    const redirectUrl = `/login?redirectUrl=${nextUrl.pathname}`;
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/manhua", "/webtoon", "/mark", "/login", "/profile"],
};
