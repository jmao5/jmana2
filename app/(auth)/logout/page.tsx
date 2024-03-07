"use client";

import LoadingSpiner from "@/components/LoadingSpiner";
import { useToast } from "@/contexts/ToastProvider";
import useAuthStore from "@/stores/isAuth";
import useUserIdStore from "@/stores/isUserId";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

const Logout = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const { setIsAuth } = useAuthStore();
  const { userId, setUserId } = useUserIdStore();
  const token = getCookie("token");
  const refreshToken = getCookie("refreshToken");

  useEffect(() => {
    if (!userId) return;

    const postCode = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_FE_URL}/api/logout`,
          {
            method: "POST",
            body: JSON.stringify({
              userId,
              token,
              refreshToken,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        setIsAuth(false);
        setUserId(0);

        showToast("로그아웃 성공!", "success");
        router.replace("/");
      } catch (err) {
        console.error(err);

        showToast(
          "로그아웃 처리 중 에러가 발생했습니다. 다시 시도해주세요.",
          "error"
        );
      }
    };

    postCode();
  }, []);

  return <LoadingSpiner />;
};

export default Logout;
