"use client";

import { NETWORK } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

export const axiosInstanceClient = axios.create({
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

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
