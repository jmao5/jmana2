"use client";

import { ToonResponse } from "@/type/response";
import Image from "next/image";
import LikeButton from "./LikeButton";
import isUserInfoStore from "@/stores/isUserInfoStore";
import Button from "@/components/common/Button/Button";
import { useQueryClient } from "@tanstack/react-query";
import { useChapterSeqMutation } from "@/hooks/apis/useChapterSeqMutation";
import { QUERY_KEY } from "@/constants/queryKey";
import LoadingSpiner from "@/components/common/LoadingSpiner";

interface ChapterToonInfo {
  toonInfo: ToonResponse;
  toonId: number;
}

export default function ChapterToonInfo({ toonInfo, toonId }: ChapterToonInfo) {
  const queryClient = useQueryClient();
  const { userInfo } = isUserInfoStore();
  const { updateSuccess, isPending } = useChapterSeqMutation(toonId);

  const updateChapterSequence = () => {
    updateSuccess(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.CHAPTER_LIST, toonId],
        });
      },
    });
  };

  return (
    <div className="flex items-start justify-center bg-white p-2 sm:p-6">
      {isPending && <LoadingSpiner />}
      <div className="w-1/4 flex-shrink-0">
        <Image
          src={toonInfo.imagePath}
          alt={toonInfo.title}
          className="rounded-lg shadow-md h-44"
          referrerPolicy="no-referrer"
          width={200}
          height={100}
          unoptimized={true}
        />
      </div>
      <div className="w-3/4 ml-6 flex-grow overflow-hidden">
        <h1 className="text-3xl font-semibold mb-1 truncate flex justify-between items-center">
          <span>{toonInfo.title}</span>
          {userInfo?.userRole === "ADMIN" && (
            <Button
              background="white-100"
              border={true}
              size="sm"
              color="primary"
              onClick={updateChapterSequence}
            >
              챕터정렬
            </Button>
          )}
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
