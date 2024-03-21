"use client";

import { ChapterImageResponse } from "@/type/response";
import ChapterImageList from "./ChapterImageList";
import ChapterImageNavBar from "./ChapterImageNavBar";
import useNavVisibleStore from "@/stores/isNavVisible";
import { useEffect } from "react";

const ChapterImage = ({
  chapterImageList,
}: {
  chapterImageList: ChapterImageResponse[];
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
      <ChapterImageNavBar />
      {chapterImageList.map((chapterImage, index) => (
        <ChapterImageList chapterImage={chapterImage} key={index} />
      ))}
    </div>
  );
};

export default ChapterImage;
