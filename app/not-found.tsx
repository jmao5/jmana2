import Image from "next/image";

import NotFoundImage from "/public/images/error2.jpg";
import LinkButton from "@/components/common/LinkButton";

export default function NotFound() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h2 className="mb-20 mt-6 text-xl font-semibold">
          요청하신 데이터를 찾을 수 없어요..
        </h2>
        <Image src={NotFoundImage} alt="404 이미지" height={250} />
        <LinkButton href={"/"}>시작 페이지로 돌아가기</LinkButton>
      </div>
    </>
  );
}
