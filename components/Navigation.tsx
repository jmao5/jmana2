"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useUserId } from "@/contexts/UserIdProvider";
import Image from "next/image";
import LogoImage from "/public/images/logo.png";

export default function Navigation() {
  const { userId } = useUserId();
  console.log("userId2 : ", userId);

  const logOut = () => {};

  const buttonLabels = [
    { label: "웹툰", key: 0, url: "/webtoon" },
    { label: "만화", key: 1, url: "/manhua" },
    { label: "툰찾", key: 2, url: "/mark" },
  ];

  const [search, setSearch] = useState("");

  return (
    <header className="bg-zinc-50 flex w-full max-w-screen-sm flex-col px-4">
      <nav className="flex justify-between items-center h-12 md:h-20">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={LogoImage} alt="에러 이미지" width={80} />
          </Link>
          <div className="pl-10 mt-2 md:mt-0 space-x-2 hidden md:flex">
            {buttonLabels.map((button, index) => (
              <Link key={index} href={button.url ?? "#"}>
                <button className="text-black hover:bg-slate-100 border-none py-1 px-2 rounded-sm">
                  {button.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mt-2 md:mt-0 pr-3">
            <Search />
            <input
              type="text"
              placeholder="제목을 검색해보세요"
              className="placeholder-black placeholder-opacity-75 py-2 pl-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* {userId === 0 ? (
            <Link href={"/login"}>
              <Button variant="secondary">로그인</Button>
            </Link>
          ) : (
            <Button variant="secondary" onClick={() => logOut()}>
              로그아웃
            </Button>
          )} */}
          <Link href={"/login"}>
            <Button variant="secondary">로그인</Button>
          </Link>
        </div>
      </nav>
      {/* Mobile navigation */}
      <nav className="md:hidden">
        <div className="flex mt-2">
          {buttonLabels.map((button, index) => (
            <Link key={index} href={button.url ?? "#"}>
              <button className="text-black hover:bg-slate-100 border-none py-1 px-2 rounded-sm">
                {button.label}
              </button>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
