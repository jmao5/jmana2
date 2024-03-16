"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Toast } from "../common/Toaster/customToast";
interface Props {
  token: string | undefined;
  userId: string | undefined;
}

export default function LoginButton({ token, userId }: Props) {
  const router = useRouter();

  const postUserId = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FE_URL}/api/logout`,
        {
          method: "POST",
          body: JSON.stringify({
            userId,
            token,
          }),
        }
      );
      Toast.success("로그아웃 성공!");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      router.push("/");
    } catch (err) {
      console.error(err);
      Toast.error("로그아웃 처리 중 에러가 발생했습니다. \n다시 시도해주세요.");
      // router.push("/login");
    }
  };

  return (
    <div>
      <Link href={"/login"}>
        <Button variant="secondary">로그인</Button>
      </Link>
      <Button variant="secondary" onClick={() => postUserId()}>
        로그아웃
      </Button>
    </div>
  );
}
// {userId === 0 ? (
//   <Link href={"/login"}>
//     <Button variant="secondary">로그인</Button>
//   </Link>
// ) : (
//   <Button variant="secondary" onClick={() => logOut()}>
//     로그아웃
//   </Button>
// )}
