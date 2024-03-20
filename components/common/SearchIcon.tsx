"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

export default function SearchIcon() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchDo = () => {
    router.push(`/?search=${search}`);
    setSearch("");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchDo();
    }
  };

  return (
    <div className="flex items-center pr-1 md:pr-3">
      <div className="relative w-40">
        <div
          className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
          onClick={searchDo}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 20L15.5 15.5M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full py-3 pl-10 text-sm border-b border-black focus:outline-none placeholder-gray-400"
          placeholder="제목을 검색해보세요"
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}
