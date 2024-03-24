"use client";

import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterImageResponse, ChapterPrevNextResponse } from "@/type/response";
import { useCallback, useEffect, useState } from "react";
import ChapterImageNavBar from "./ChapterImageNavBar";
import ChapterImageList from "./ChapterImageList";
import { useSaveChapterLogMutation } from "@/hooks/apis/useSaveChapterLogMutation";

const ChapterImage = ({
  chapterImageList,
  prevNextInfo,
  chapterId,
}: {
  chapterImageList: ChapterImageResponse[];
  prevNextInfo: ChapterPrevNextResponse;
  chapterId: number;
}) => {
  const { mutate: saveChapterLog } = useSaveChapterLogMutation(chapterId);

  useEffect(() => {
    saveChapterLog(chapterId);
  }, []);

  const { isNavVisible, setIsNavVisible } = useNavVisibleStore();
  const [scrollInterval, setScrollInterval] = useState<number | null>(null);

  const toggleNav = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsNavVisible(!isNavVisible);
    handleScrollInterval();
    event.stopPropagation(); // 클릭 이벤트 전파(stop propagation)
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsNavVisible]);

  // 자동스크롤 시작
  const scrollToBottom = () => {
    if (!scrollInterval) {
      setScrollInterval(window.setInterval(() => window.scrollBy(0, 2), 1));
    } else {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleScrollInterval = useCallback(() => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  }, [scrollInterval]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleScrollInterval);
    return () => {
      window.removeEventListener("beforeunload", handleScrollInterval);
      handleScrollInterval();
    };
  }, [handleScrollInterval]);

  return (
    <div className="w-full" onClick={toggleNav}>
      <ChapterImageNavBar
        prevNextInfo={prevNextInfo}
        scrollToBottom={scrollToBottom}
      />
      {chapterImageList.map((chapterImage, index) => (
        <ChapterImageList chapterImage={chapterImage} key={index} />
      ))}
    </div>
  );
};

export default ChapterImage;
