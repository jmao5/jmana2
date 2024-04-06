"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineStar } from "react-icons/ai";
import { BiHome, BiUser } from "react-icons/bi";
import { SiRenpy, SiWebtoon } from "react-icons/si";
import { HiOutlineBookOpen } from "react-icons/hi2";

import IconGroup from "./IconGroup";
import { UserResponse } from "@/type/response";

const Footer = ({
  userInfo,
}: {
  userInfo?: UserResponse["data"]["basicInfo"];
}) => {
  const pathname = usePathname();

  const active = "text-primary";

  return (
    <nav className="bg-background shadow-upper flex h-14 max-w-screen-sm lg:max-w-screen-lg w-full items-center justify-around fixed bottom-0 z-10">
      <Link href="/" className={`${pathname === "/" && `${active}`}`}>
        <IconGroup title="홈">
          <BiHome />
        </IconGroup>
      </Link>
      <Link
        href="/webtoon"
        className={`${pathname === "/webtoon" && `${active}`} relative`}
      >
        <IconGroup title="웹툰">
          <SiWebtoon />
        </IconGroup>
      </Link>
      <Link
        href="/manhua"
        className={`${pathname === "/manhua" && `${active}`}`}
      >
        <IconGroup title="만화">
          <SiRenpy />
        </IconGroup>
      </Link>

      {userInfo?.userRole === "ADMIN" && (
        <Link href="/text" className={`${pathname === "/text" && `${active}`}`}>
          <IconGroup title="소설">
            <HiOutlineBookOpen />
          </IconGroup>
        </Link>
      )}

      <Link href="/mark" className={`${pathname === "/mark" && `${active}`}`}>
        <IconGroup title="즐겨찾기">
          <AiOutlineStar />
        </IconGroup>
      </Link>
      <Link
        href="/profile"
        className={`${pathname === "/profile" && `${active}`}`}
      >
        <IconGroup title="프로필">
          <BiUser />
        </IconGroup>
      </Link>
    </nav>
  );
};

export default Footer;
