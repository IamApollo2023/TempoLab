import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("auth-token"); // Replace with your auth check
  const isAdmin = request.cookies.has("admin-token"); // Replace with your admin check
  const isAuthPage = request.nextUrl.pathname.startsWith("/(auth)");
  const isProtectedPage = request.nextUrl.pathname.startsWith("/(protected)");
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

  if (!isAuthenticated && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAdmin && isAdminPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
