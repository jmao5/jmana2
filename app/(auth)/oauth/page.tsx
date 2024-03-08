"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import LoadingSpiner from "@/components/LoadingSpiner";
import { useToast } from "@/contexts/ToastProvider";
import useAuthStore from "@/stores/isAuth";
import useUserIdStore from "@/stores/isUserId";

const KakaoCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const router = useRouter();

  const { setUserId } = useUserIdStore();
  const { setIsAuth } = useAuthStore();

  const { showToast } = useToast();

  useEffect(() => {
    if (!code) return;

    const postCode = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_FE_URL}/api/token`,
          {
            method: "POST",
            body: JSON.stringify({
              code,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { userId } = await response.json();

        setUserId(userId);
        setIsAuth(true);

        showToast("로그인 성공!", "success");
        router.push("/");
      } catch (err) {
        console.error(err);

        showToast(
          "로그인 처리 중 에러가 발생했습니다. 다시 시도해주세요.",
          "error"
        );
        router.push("/login");
      }
    };

    postCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoadingSpiner />;
};

export default KakaoCallbackPage;
