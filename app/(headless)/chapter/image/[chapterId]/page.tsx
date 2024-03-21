import {
  getSvChapterImageList,
  getSvPrevNext,
} from "@/apis/client/getSvChapterImage";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import ChapterImage from "@/components/domain/chapterImage/ChapterImage";
import { Suspense } from "react";

export default async function ChapterImagePage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);
  const { data: prevNextInfo } = await getSvPrevNext(chapterId);

  return (
    <Suspense fallback={<LoadingSpiner />}>
      <ChapterImage
        chapterImageList={chapterImageList}
        prevNextInfo={prevNextInfo}
      />
    </Suspense>
  );
}
