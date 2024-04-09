"use client";

import Icon from "@/components/common/Icon/Icon";
import { Menu } from "@/constants/menu";
import { useGetChapterList } from "@/hooks/apis/useGetChapterList";
import Link from "next/link";

interface ChapterListInfo {
  toonId: number;
}

export default function ChapterList({ toonId }: ChapterListInfo) {
  const { chapterList } = useGetChapterList(toonId);

  return (
    <ul className="px-2 sm:px-6 mb-16">
      {chapterList.map((chapter) => (
        <li key={chapter.id}>
          <Link
            href={
              chapter.menu === Menu.NOVEL
                ? `/chapter/text/${chapter.id}?toonId=${toonId}`
                : `/chapter/image/${chapter.id}?toonId=${toonId}`
            }
            className={`flex items-center justify-between px-6 py-2 transition-colors hover:bg-gray-200 ${
              chapter.updatedAt && "bg-zinc-100"
            } rounded-lg border border-gray-300`}
            scroll={false}
          >
            <div className="flex-grow">
              <h2 className="text-lg font-semibold text-black">
                {chapter.cateTitle}
              </h2>
              <p className="text-stone-400 text-sm">
                {chapter.uploadDate.toString()}
              </p>
            </div>
            <Icon
              name="ARROW_RIGHT"
              size="lg"
              classNameList={["text-sky-500"]}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
