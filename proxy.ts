import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { signToken, verifyToken } from "@/lib/auth/session";
import { refreshToken } from "./lib/api/fetcher";

const protectedRoutes = "/admin";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessTokenCk = request.cookies.get("access_token");
  const refreshTokenCk = request.cookies.get("refresh_token");
  const isProtectedRoute = pathname.startsWith(protectedRoutes);

  let res = NextResponse.next();

  // if (isProtectedRoute) {
  //   if (!accessTokenCk && !refreshTokenCk) {
  //     return NextResponse.redirect(new URL("/signin", request.url));
  //   }

  //   if (!accessTokenCk) {
  //     const cookies = await refreshToken(refreshTokenCk!.value);
  //     cookies.forEach((c) => res.headers.append("Set-Cookie", c));
  //   }
  // }

  // TODO: block login if cookies exist

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
