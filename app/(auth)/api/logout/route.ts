import { NextRequest, NextResponse } from "next/server";

import { safePostAuthLogout } from "@/services/auth";

export async function POST(request: NextRequest) {
  const { userId, token } = await request.json();
  console.log("userId, token : ", userId, token);

  const { isError, response: tokenResponse } = await safePostAuthLogout(
    userId,
    token
  );

  if (isError || !tokenResponse) {
    return NextResponse.json(tokenResponse ?? {}, {
      status: 400,
    });
  }

  const response = new NextResponse("Error", {
    status: 400,
  });

  response.cookies.delete("token");
  response.cookies.delete("userId");

  return response;
}
