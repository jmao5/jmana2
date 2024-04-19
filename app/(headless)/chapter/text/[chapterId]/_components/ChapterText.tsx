"use client";

import { useSaveChapterLogMutation } from "@/hooks/apis/useSaveChapterLogMutation";
import useScrollDoubleChk from "@/hooks/useScrollDoubleChk";
import useScrollInterval from "@/hooks/useScrollInterval";
import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterPrevNextResponse, ChapterTextResponse } from "@/type/response";
import React, { useEffect } from "react";
import ChapterTextNavBar from "./ChapterTextNavBar";
import { RIDIBatang } from "@/style/font/RIDIBatang";

const ChapterText = ({
  chapterText,
  prevNextInfo,
  chapterId,
  toonId,
}: {
  chapterText: ChapterTextResponse;
  prevNextInfo: ChapterPrevNextResponse;
  chapterId: number;
  toonId: number;
}) => {
  const saveChapterLogMutation = useSaveChapterLogMutation(chapterId, toonId);

  useEffect(() => {
    saveChapterLogMutation.mutate();
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
  const formattedChapterText = [];
  const regex = /[^\.\?\!\”]+[\."\?"\!"\”"\'"]+/g;

  let match;
  while ((match = regex.exec(chapterText.chapterText)) !== null) {
    formattedChapterText.push(
      <React.Fragment key={formattedChapterText.length}>
        {match[0].trim()}
        <br />
      </React.Fragment>
    );
  }

  return (
    <div className="w-full" onClick={toggleNav}>
      <ChapterTextNavBar
        prevNextInfo={prevNextInfo}
        chapterText={chapterText.chapterText}
        scrollToBottom={scrollToBottom}
      />

      <div className={`${RIDIBatang.className} px-6 text-xl leading-loose`}>
        {formattedChapterText}
      </div>
    </div>
  );
};

export default ChapterText;
