"use client";

import useNavVisibleStore from "@/stores/isNavVisible";
import { ChapterImageResponse, ChapterPrevNextResponse } from "@/type/response";
import { useEffect } from "react";
import ChapterImageNavBar from "./ChapterImageNavBar";
import ChapterImageList from "./ChapterImageList";

const ChapterImage = ({
  chapterImageList,
  prevNextInfo,
}: {
  chapterImageList: ChapterImageResponse[];
  prevNextInfo: ChapterPrevNextResponse;
}) => {
  const { isNavVisible, setIsNavVisible } = useNavVisibleStore();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
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
      <ChapterImageNavBar prevNextInfo={prevNextInfo} />
      {chapterImageList.map((chapterImage, index) => (
        <ChapterImageList chapterImage={chapterImage} key={index} />
      ))}
    </div>
  );
};

export default ChapterImage;
