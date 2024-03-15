"use client";

import User from "@/components/domain/user/User";
import { getCookie } from "cookies-next";

export default function Webtoon() {
  const token = getCookie("token");

  return <>{token ? <User /> : ""}</>;
}
