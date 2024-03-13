"use client";

import { NETWORK } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

export const axiosInstanceClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  authorization: true,
});

axiosInstanceClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (
      !config.authorization ||
      !config.headers ||
      config.headers.Authorization
    )
      return config;

    const token = getCookie("token");
    console.log("token :", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
