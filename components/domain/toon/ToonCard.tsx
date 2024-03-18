"use client";

import { ToonResponseList } from "@/type/response";
import Image from "next/image";

interface ToonCardProps {
  toonList: ToonResponseList;
  token?: string;
}

const ToonCard: React.FC<ToonCardProps> = ({ toonList, token }) => {
  console.log("화면단에서 토큰 : ", token);

  return (
    <>
      {token
        ? toonList.map((item) => (
            <li key={item.id}>
              <a className="link block bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-32 relative">
                  <Image src={item.imagePath} alt={item.title} layout="fill" />
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
          ))
        : ""}
    </>
  );
};

export default ToonCard;
