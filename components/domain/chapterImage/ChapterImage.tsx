"use client";

import { ChapterImageResponse } from "@/type/response";
import Image from "next/image";
import { useState } from "react";

const ChapterImage = ({
  chapterImage,
}: {
  chapterImage: ChapterImageResponse;
}) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  return (
    <div className="w-full">
      <Image
        alt={chapterImage.id.toString()}
        src={isImgError ? chapterImage.toonImageUrl : chapterImage.toonImageUrl}
        width={500}
        height={2000}
        onError={() => setIsImgError(true)}
        // layout="fill"
        // blurDataURL={BLUR_IMAGE_SRC}
        // placeholder="blur"
      />
    </div>
  );
};

export default ChapterImage;
