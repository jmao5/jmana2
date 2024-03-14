/* eslint-disable @next/next/no-img-element */
"use client";

import LinkButton from "@/components/common/LinkButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-20">
        {/* <h1 className={`${gugi.className} text-[3.4rem] font-black`}>manaJ</h1> */}
        <img src="/images/logo.png" alt="로고" width={300} height={300} />
        <Link href={`${process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}`}>
          <img
            src="/images/kakaoLogin 1.png"
            alt="카카오 로그인"
            width={300}
            height={60}
          />
        </Link>

        {/* <Link href="/" className="mt-28 text-lg text-dark-gray underline">
          시작 페이지로 돌아가기
        </Link> */}
        <LinkButton href={"/"}>시작 페이지로 돌아가기</LinkButton>
      </div>
    </div>
  );
};

export default LoginPage;
