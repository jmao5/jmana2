"use client";

import Icon from "@/components/common/Icon/Icon";
import { Toast } from "@/components/common/Toaster/customToast";
import useNavVisibleStore from "@/stores/isNavVisible";
import useRunStore from "@/stores/isRun";
import { ChapterPrevNextResponse } from "@/type/response";
import Link from "next/link";
import { MouseEventHandler } from "react";

const ChapterTextNavBar = ({
  prevNextInfo,
  scrollToBottom,
}: {
  prevNextInfo: ChapterPrevNextResponse;
  scrollToBottom: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { isNavVisible } = useNavVisibleStore();
  const { isRun, setIsRun } = useRunStore();

  const handleButtonClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleRunClick = () => {
    setIsRun(!isRun);
    if (!isRun) {
      Toast.success("정주행 시작합니다.");
    }
  };

  return (
    <div
      className={`${isNavVisible ? "block" : "hidden"}`}
      onClick={handleButtonClick}
    >
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 w-full h-12 flex items-center justify-center text-white">
        {prevNextInfo.cateTitle}
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
        <div className="flex justify-between w-[312px]">
          {prevNextInfo.titlePrev && (
            <Link
              href={`/chapter/text/${prevNextInfo.titlePrev}`}
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
              scroll={false}
            >
              <Icon name="ARROW_LEFT" color="white" />
            </Link>
          )}
          <Link
            href={`/chapter/${prevNextInfo.toonId}`}
            className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
            scroll={false}
          >
            <Icon name="MORE_VERT" color="white" />
          </Link>
          <button
            className="relative h-12 w-12 rounded-full border-opacity-100"
            onClick={handleRunClick}
          >
            <div
              className="absolute inset-0 w-full h-full rounded-full animate-spin"
              style={{
                animationDuration: "3s",
                background:
                  "linear-gradient(45deg, rgb(4, 202, 252) 0%, rgb(19, 187, 252) 25%, rgb(76, 126, 252) 50%, rgb(127, 72, 252) 75%, rgb(148, 50, 252) 100%)",
              }}
            ></div>
            <div
              className={`absolute ${
                isRun ? "inset-10" : "inset-1"
              }  bg-black rounded-full`}
            ></div>
            <div className="relative w-12">
              {isRun ? (
                <Icon name="SPRINT" color="black" />
              ) : (
                <Icon name="DIRECTIONS_RUN" color="white" />
              )}
            </div>
          </button>
          <button
            className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
            onClick={scrollToBottom}
          >
            <Icon name="PLAY" color="white" isFilled={true} size="3xl" />
          </button>
          {prevNextInfo.titleNext && (
            <Link
              href={`/chapter/text/${prevNextInfo.titleNext}`}
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
              scroll={false}
            >
              <Icon name="ARROW_RIGHT" color="white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterTextNavBar;
