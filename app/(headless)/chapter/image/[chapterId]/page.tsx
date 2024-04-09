import {
  getSvChapterImageList,
  getSvPrevNext,
} from "@/apis/client/getSvChapterImage";
import ChapterImage from "@/app/(headless)/chapter/image/[chapterId]/_components/ChapterImage";
import { getServerToken } from "@/utils/auth";
import { redirect, useSearchParams } from "next/navigation";

export default async function ChapterImagePage({
  params,
  searchParams,
}: {
  params: { chapterId: number };
  searchParams: { toonId: number };
}) {
  const token = getServerToken();
  if (!token) redirect("/login");

  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);
  const { data: prevNextInfo } = await getSvPrevNext(chapterId);

  return (
    <ChapterImage
      chapterImageList={chapterImageList}
      prevNextInfo={prevNextInfo}
      chapterId={chapterId}
      toonId={searchParams.toonId}
    />
  );
}
