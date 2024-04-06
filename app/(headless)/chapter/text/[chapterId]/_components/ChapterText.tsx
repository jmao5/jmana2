"use client";

import { useSaveChapterLogMutation } from "@/hooks/apis/useSaveChapterLogMutation";
import useScrollDoubleChk from "@/hooks/useScrollDoubleChk";
import useScrollInterval from "@/hooks/useScrollInterval";
import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterPrevNextResponse, ChapterTextResponse } from "@/type/response";
import React, { useEffect } from "react";
import ChapterTextNavBar from "./ChapterTextNavBar";

const ChapterText = ({
  chapterText,
  prevNextInfo,
  chapterId,
}: {
  chapterText: ChapterTextResponse;
  prevNextInfo: ChapterPrevNextResponse;
  chapterId: number;
}) => {
  const { mutate: saveChapterLog } = useSaveChapterLogMutation(chapterId);

  useEffect(() => {
    saveChapterLog(chapterId);
  }, []);

  const { isNavVisible, setIsNavVisible } = useNavVisibleStore();
  const { handleScrollInterval, scrollToBottom } = useScrollInterval();
  useScrollDoubleChk(prevNextInfo);

  const toggleNav = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setIsNavVisible(!isNavVisible);
    handleScrollInterval();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsNavVisible]);

  // 챕터 텍스트를 문단으로 나누고 줄 바꿈
  const formattedChapterText = chapterText.chapterText
    .split(".")
    .map((paragraph, index, array) => (
      <React.Fragment key={index}>
        {paragraph.trim()}
        {index !== array.length - 1 && "."}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="w-full" onClick={toggleNav}>
      <ChapterTextNavBar
        prevNextInfo={prevNextInfo}
        scrollToBottom={scrollToBottom}
      />
      <div className="px-6 text-2xl leading-relaxed">
        {formattedChapterText}
      </div>
    </div>
  );
};

export default ChapterText;
