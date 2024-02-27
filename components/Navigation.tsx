"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const buttonLabels = [
    { label: "웹툰", key: 0, url: "/webtoon" },
    { label: "만화", key: 1, url: "/manhua" },
    { label: "툰찾", key: 2, url: "/mark" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 border-gray-300">
      <nav className="flex justify-between items-center h-12 md:h-20">
        <div className="flex items-center">
          <Link href={"/"}>로고</Link>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
