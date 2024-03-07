import { safeFetch } from "./base";

type AuthResponse = {
  status: number;
  data: {
    userId: number;
    accessToken: string;
    refreshToken: string;
  };
  serverDateTime: string;
};

export const safePostAuthCodeFetch = (code: string) => {
  return safeFetch<AuthResponse>("backend", "/auth/kakao/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });
};

export const safePostAuthLogout = (userId: number, token: string) => {
  return safeFetch<void>("backend", "/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId }),
  });
};
