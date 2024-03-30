"use client";

import { ToonResponse } from "@/type/response";
import Image from "next/image";
import LikeButton from "./LikeButton";

interface ChapterToonInfo {
  toonInfo: ToonResponse;
  toonId: number;
}

export default function ChapterToonInfo({ toonInfo, toonId }: ChapterToonInfo) {
  return (
    <div className="flex items-start justify-center bg-white p-2 md:p-6">
      <div className="w-1/4 flex-shrink-0">
        <Image
          src={toonInfo.imagePath}
          alt={toonInfo.title}
          className="rounded-lg shadow-md h-44"
          width={200}
          height={100}
          unoptimized={true}
        />
      </div>
      <div className="w-3/4 ml-6 flex-grow overflow-hidden">
        <h1 className="text-3xl font-semibold mb-1 truncate">
          {toonInfo.title}
        </h1>
        <p className="text-gray-600 text-sm mb-2 flex items-center">
          {toonInfo.genre}
          <LikeButton toonId={toonId} />
        </p>
        <p className="text-base leading-relaxed line-clamp-4">
          {toonInfo.toonSummary}
        </p>
      </div>
    </div>
  );
}
