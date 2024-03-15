/* eslint-disable @next/next/no-img-element */
"use client";

import LinkButton from "@/components/common/LinkButton";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20">
        {/* <h1 className={`${gugi.className} text-[3.4rem] font-black`}>manaJ</h1> */}
        <img src="/images/logo.png" alt="로고" width={300} height={300} />
        <button
          // href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.AUTH_URL}&response_type=code`}
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}`);
          }}
        >
          <img
            src="/images/kakaoLogin 1.png"
            alt="카카오 로그인"
            width={300}
            height={60}
          />
        </button>

        {/* <Link href="/" className="mt-28 text-lg text-dark-gray underline">
          시작 페이지로 돌아가기
        </Link> */}
        <LinkButton href={"/"}>시작 페이지로 돌아가기</LinkButton>
      </div>
    </div>
  );
};

export default LoginPage;
