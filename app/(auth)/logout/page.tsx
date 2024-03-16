"use client";

import LoadingSpiner from "@/components/common/LoadingSpiner";
import { Toast } from "@/components/common/Toaster/customToast";
import useAuthStore from "@/stores/isAuth";
import useUserIdStore from "@/stores/isUserId";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const Logout = () => {
  // const router = useRouter();
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

        Toast.success("로그아웃 성공!");
        window.location.replace("/");
      } catch (err) {
        console.error(err);

        Toast.error(
          "로그아웃 처리 중 에러가 발생했습니다. \n다시 시도해주세요."
        );
      }
    };

    postCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoadingSpiner />;
};

export default Logout;
