import { AuthResponse } from "@/type/auth";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const postLogin = async (code: string) => {
  return await axiosInstanceServer.post<AuthResponse>(
    "/auth/kakao/login",
    { code },
    {
      headers: {
        "Content-Type": "application/json",
      },
      authorization: false,
    }
  );
};
