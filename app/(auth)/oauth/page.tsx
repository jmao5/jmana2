"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import LoadingSpiner from "@/components/common/LoadingSpiner";
import useAuthStore from "@/stores/isAuth";
import useUserIdStore from "@/stores/isUserId";
import { Toast } from "@/components/common/Toaster/customToast";

const KakaoCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const router = useRouter();

  const { setUserId } = useUserIdStore();
  const { setIsAuth } = useAuthStore();

  useEffect(() => {
    if (!code) return;

    const postCode = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_FE_URL}/api/login`,
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

        Toast.success("로그인 성공!");
        const reUrl = localStorage.getItem("reUrl");
        localStorage.removeItem("reUrl");
        router.push(reUrl || "/");
      } catch (err) {
        console.error(err);

        Toast.error("로그인 처리 중 에러가 발생했습니다. 다시 시도해주세요.");
        router.push("/login");
      }
    };

    postCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoadingSpiner />;
};

export default KakaoCallbackPage;
