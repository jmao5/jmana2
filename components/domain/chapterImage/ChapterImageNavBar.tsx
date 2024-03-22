"use client";

import Hamburger from "@/public/svg/hamburger.svg";
import LeftArrow from "@/public/svg/leftArrow.svg";
import Play from "@/public/svg/play.svg";
import RightArrow from "@/public/svg/rightArrow.svg";
import TightMan from "@/public/svg/tightman.svg";
import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterPrevNextResponse } from "@/type/response";
import Link from "next/link";

const ChapterImageNavBar = ({
  prevNextInfo,
}: {
  prevNextInfo: ChapterPrevNextResponse;
}) => {
  const { isNavVisible } = useNavVisibleStore();
  console.log("prevNextInfo : ", prevNextInfo);

  return (
    <div className={`${isNavVisible ? "block" : "hidden"}`}>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 w-full h-12 flex items-center justify-center text-white">
        {prevNextInfo.cateTitle}
      </div>

      <div className="fixed w-full bottom-16 flex justify-center z-navigationBar">
        <div className="flex justify-between w-[312px]">
          {prevNextInfo.titlePrev && (
            <button className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center">
              <Link href={`/chapter/image/${prevNextInfo.titlePrev}`} prefetch>
                <LeftArrow />
              </Link>
            </button>
          )}
          <button className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center">
            <Link href={`/chapter/${prevNextInfo.toonId}`} prefetch>
              <Hamburger />
            </Link>
          </button>
          <button className="relative h-12 overflow-hidden w-12 rounded-full bg-black light:bg-white border border-solid !border-opacity-10 border-white light:border-black relative !border-0">
            <div
              className="absolute inset-0 w-full h-full rounded-full animate-spin"
              style={{
                animationDuration: "3s",
                background:
                  "linear-gradient(45deg, rgb(4, 202, 252) 0%, rgb(19, 187, 252) 25%, rgb(76, 126, 252) 50%, rgb(127, 72, 252) 75%, rgb(148, 50, 252) 100%)",
              }}
            ></div>
            <div className="absolute inset-1 w-42 h-42 bg-black rounded-full light:bg-white"></div>
            <div className="w-12 h-12">
              <TightMan className="w-4 h-4" />
            </div>
          </button>
          <button className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center">
            <Play />
          </button>
          {prevNextInfo.titleNext && (
            <button className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center">
              <Link href={`/chapter/image/${prevNextInfo.titleNext}`} prefetch>
                <RightArrow />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterImageNavBar;
