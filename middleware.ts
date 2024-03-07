import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookies = request.cookies;

  if (request.nextUrl.pathname === "/mark") {
    console.log("tokencookie : ", cookies.has("token"));

    if (!cookies.has("token")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/manhua", "/webtoon", "/mark", "/login"],
};
