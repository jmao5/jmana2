"use client";

import { BLUR_IMAGE_SRC } from "@/constants/blurImageSrc";
import { ToonResponse, ToonResponseList } from "@/type/response";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ToonCard: React.FC<{ toonResponseList: ToonResponseList }> = ({
  toonResponseList,
}) => {
  return (
    <>
      {toonResponseList.map((item, innerIndex) => (
        <ToonCardInner key={innerIndex} item={item} />
      ))}
    </>
  );
};

const ToonCardInner: React.FC<{ item: ToonResponse }> = ({ item }) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);

  return (
    <li>
      <Link
        href={`/chapter/${item.id}`}
        className="link block bg-white rounded-lg shadow-md overflow-hidden"
        // prefetch={false}
      >
        <div className="w-full h-32 relative">
          <Image
            alt={item.title}
            src={"/images/blur.jpg"}
            // src={item.imagePath}
            // src={!isImgError ? item.imagePath : "/images/blur.jpg"}
            priority={true}
            className="w-full h-full"
            width={100}
            height={100}
            // layout="fill"
            onError={() => setIsImgError(true)}
            blurDataURL={BLUR_IMAGE_SRC}
            placeholder="blur"
          />
        </div>
        <div className="p-2 min-h-20">
          <span className="block font-medium truncate">{item.title}</span>
          <span className="block text-blue-600 text-sm truncate">
            {item.genre}
          </span>
          <span className="block text-gray-400 text-sm truncate">
            {item.updateDate.toString()}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ToonCard;
