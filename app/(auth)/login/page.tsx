import { Gugi } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "/public/images/logo.png";
const gugi = Gugi({
  weight: ["400"],
  subsets: ["latin"],
});

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-40">
        {/* <h1 className={`${gugi.className} text-[3.4rem] font-black`}>manaJ</h1> */}
        <Image src={LogoImage} alt="로고" width={300} />
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.AUTH_URL}&response_type=code`}
        >
          <Image
            src="/images/kakaoLogin 1.png"
            alt="카카오 로그인"
            width={300}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
