"use client";

import User from "@/app/_components/User";
import { getCookie } from "cookies-next";

export default function Webtoon() {
  const token = getCookie("token");

  return <>{token ? <User /> : ""}</>;
}
