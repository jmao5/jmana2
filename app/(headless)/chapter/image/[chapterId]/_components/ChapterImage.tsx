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
  const { handleScrollInterval, scrollToBottom } = useScrollInterval();
  const { isBottom } = useScrollDoubleChk(prevNextInfo);

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
