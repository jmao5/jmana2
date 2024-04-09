"use client";

import { useSaveChapterLogMutation } from "@/hooks/apis/useSaveChapterLogMutation";
import useScrollDoubleChk from "@/hooks/useScrollDoubleChk";
import useScrollInterval from "@/hooks/useScrollInterval";
import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterImageResponse, ChapterPrevNextResponse } from "@/type/response";
import { useEffect } from "react";
import ChapterImageList from "./ChapterImageList";
import ChapterImageNavBar from "./ChapterImageNavBar";

const ChapterImage = ({
  chapterImageList,
  prevNextInfo,
  chapterId,
  toonId,
}: {
  chapterImageList: ChapterImageResponse[];
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
