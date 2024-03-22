"use client";

import { LinkLabels } from "@/constants/link";
import useDropdown from "@/hooks/useDropdown";
import { UserResponse } from "@/type/response";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface UserInfo {
  userInfo?: UserResponse["data"]["basicInfo"];
}

export default function UserDropDown({ userInfo }: UserInfo) {
  const { isOpen, dropdownRef, toggleDropdown } = useDropdown();

  return (
    <div className="relative" ref={dropdownRef}>
      <Image
        id="avatarButton"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        width={40}
        height={40}
        src="/images/man.png"
        alt="User dropdown"
        onClick={toggleDropdown}
      />

      <div
        className={`absolute right-0 mt-2 ${
          isOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{userInfo?.nickname} </div>
          <div className="font-medium truncate">{userInfo?.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          {LinkLabels.map((button, index) => (
            <li key={index}>
              <Link
                href={button.url ?? "#"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {button.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-1">
          <a
            href="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}
