"use client";

import useNavVisibleStore from "@/stores/isNavVisible";
import Link from "next/link";

const ChapterImageNavBar = () => {
  const { isNavVisible } = useNavVisibleStore();
  console.log("isNavVisible : ", isNavVisible);

  return (
    <div className={`${isNavVisible ? "block" : "hidden"}`}>
      {/* <div> */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 w-full h-12 flex items-center justify-center text-white">
        {/* {chapterPrevNext.cateTitle} */}
        제목
      </div>

      <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
        {/* {chapterPrevNext.titlePrev && (
          <button className="h-12 w-12 rounded-full bg-black text-white hover:bg-black">
            <Link
              href={
                chapterPrevNext.titlePrev
                  ? `/list/image?id=${chapterPrevNext.titlePrev}&toonId=${searchParams.toonId}`
                  : "#"
              }
              prefetch
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
          </button>
        )} */}

        <button className="h-12 w-12 rounded-full bg-black text-white hover:bg-black">
          {/* <Link href={`/list?id=${searchParams.toonId}`} > */}
          {/* <HamburgerIcon className="h-6 w-6" /> */}
          {/* </Link> */}
        </button>

        <button
        // className={`h-12 w-12 rounded-full ${isRun ? "bg-white text-black" : "bg-black text-white"
        // } hover:bg-${isRun ? "white" : "black"}`}
        // onClick={fnRun}
        >
          {/* {isRun ? "Stop" : "Run"} */} Run
        </button>

        <button
          // onClick={scrollToBottom}
          className="h-12 w-12 rounded-full bg-black text-white hover:bg-black"
        >
          {/* <PlayIcon className="h-6 w-6" /> */}
        </button>

        {/* {chapterPrevNext.titleNext && (
          <button className="h-12 w-12 rounded-full bg-black text-white hover:bg-black">
            <Link
              href={
                chapterPrevNext.titleNext
                  ? `/list/image?id=${chapterPrevNext.titleNext}&toonId=${searchParams.toonId}`
                  : "#"
              }
              prefetch
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ChapterImageNavBar;
