"use client";

import useUserIdStore from "@/stores/isUserId";

export default function Webtoon() {
  const { userId } = useUserIdStore();
  console.log("userId : ", userId);

  return <h1>웹툰</h1>;
}
