"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineStar } from "react-icons/ai";
import { BiHome, BiUser } from "react-icons/bi";
import { SiRenpy, SiWebtoon } from "react-icons/si";

import IconGroup from "./IconGroup";

const Footer = () => {
  const pathname = usePathname();

  const defaultStyle =
    "bg-background shadow-upper flex h-14 max-w-screen-md w-full items-center justify-around fixed bottom-0 z-10";

  const active = "text-primary";

  return (
    <nav className={`${defaultStyle}`}>
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
      <Link href="/" className={`${pathname === "/" && `${active}`}`}>
        <IconGroup title="홈">
          <BiHome />
        </IconGroup>
      </Link>
      <Link href="/mark" className={`${pathname === "/mark" && `${active}`}`}>
        <IconGroup title="즐겨찾기">
          <AiOutlineStar />
        </IconGroup>
      </Link>
      <Link
        href="/profile"
        className={`${pathname === "profile" && `${active}`}`}
      >
        <IconGroup title="프로필">
          <BiUser />
        </IconGroup>
      </Link>
    </nav>
  );
};

export default Footer;
