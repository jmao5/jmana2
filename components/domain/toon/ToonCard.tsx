"use client";

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
        href={`${item.toonNum}`}
        className="link block bg-white rounded-lg shadow-md overflow-hidden"
        // prefetch={false}
      >
        <div className="w-full h-32 relative">
          <Image
            // src={"/images/blur.jpg"}
            // src={item.imagePath}
            src={!isImgError ? item.imagePath : "/images/blur.jpg"}
            alt={item.title}
            layout="fill"
            onError={() => setIsImgError(true)}
          />
        </div>
        <div className="p-2">
          <strong className="block text-md text-gray-900 truncate">
            {item.title}
          </strong>
          <span className="block text-gray-600 mt-1 text-sm truncate">
            {item.genre}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ToonCard;
