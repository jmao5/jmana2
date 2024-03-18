"use client";

import { ToonResponse, ToonResponseList } from "@/type/response";
import Image from "next/image";
import { useState } from "react";

interface ToonCardProps {
  toonList: ToonResponseList;
  token?: string;
}
const ToonCard: React.FC<ToonCardProps> = ({ toonList, token }) => {
  console.log("화면단에서 토큰 : ", token);

  return (
    <>
      {token
        ? toonList.map((item) => <ToonItem key={item.id} item={item} />)
        : ""}
    </>
  );
};

const ToonItem: React.FC<{ item: ToonResponse }> = ({ item }) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);

  return (
    <li>
      <a className="link block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-32 relative">
          <Image
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
      </a>
    </li>
  );
};

export default ToonCard;
