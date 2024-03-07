"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/contexts/ToastProvider";
interface Props {
  token: string | undefined;
  userId: string | undefined;
}

export default function LoginButton({ token, userId }: Props) {
  const router = useRouter();
  const { showToast } = useToast();

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
      showToast("로그아웃 성공!", "success");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      router.push("/");
    } catch (err) {
      console.error(err);
      showToast(
        "로그아웃 처리 중 에러가 발생했습니다. 다시 시도해주세요.",
        "error"
      );
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
