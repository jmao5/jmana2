import { NextRequest, NextResponse } from "next/server";

import { safePostAuthLogout } from "@/services/auth";

export async function POST(request: NextRequest) {
  const { userId, token, refreshToken } = await request.json();

  const { isError } = await safePostAuthLogout(userId, token, refreshToken);

  if (isError) {
    return NextResponse.json({
      status: 400,
    });
  }

  const response = new NextResponse("Ok", {
    status: 200,
  });

  response.cookies.delete("token");
  response.cookies.delete("refreshToken");
  response.cookies.delete("userId");

  return response;
}
