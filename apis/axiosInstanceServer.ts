import { NETWORK } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export const axiosInstanceServer = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  authorization: true,
});

axiosInstanceServer.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (
      !config.authorization ||
      !config.headers ||
      config.headers.Authorization
    )
      return config;

    const token = cookies().get("token");

    if (!token) {
      throw new Error("Server Component: 토큰이 존재하지 않습니다");
    }
    config.headers.Authorization = `Bearer ${token.value}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
