"use client";

import { ChapterImageResponse } from "@/type/response";
import Image from "next/image";
import { useEffect, useState } from "react";

const ChapterImageList = ({
  chapterImage,
}: {
  chapterImage: ChapterImageResponse;
}) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(640); // Default width for lg screens

  useEffect(() => {
    // Check screen size and set width accordingly
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWidth(640);
      } else if (window.innerWidth < 768) {
        setWidth(768);
      } else {
        setWidth(1024);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const height = width * 3;

  return (
    <Image
      alt={chapterImage.id.toString()}
      src={isImgError ? chapterImage.toonImageUrl : chapterImage.toonImageUrl}
      width={width}
      height={height}
      // priority
      onError={() => setIsImgError(true)}
      // layout="fill"
      // blurDataURL={BLUR_IMAGE_SRC}
      // placeholder="blur"
    />
  );
};

export default ChapterImageList;
