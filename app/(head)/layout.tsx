import React from "react";

import Navigation from "@/components/domain/home/Navigation";
import Link from "next/link";
import { LinkLabels } from "@/constants/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {/* 모바일 화면에서만 보이는 메뉴 */}
      <div className="sm:hidden flex flex-row items-center justify-center">
        {LinkLabels.map((button, index) => (
          <Link key={index} href={button.url ?? "#"}>
            <button className="text-black hover:bg-slate-100 border-none py-1 px-2 rounded-sm">
              {button.label}
            </button>
          </Link>
        ))}
      </div>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
