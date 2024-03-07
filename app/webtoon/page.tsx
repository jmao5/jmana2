"use client";

import { useUserId } from "@/stores/isUserId";

export default function Webtoon() {
  const { userId } = useUserId();
  console.log("userId : ", userId);

  return <h1>웹툰</h1>;
}
