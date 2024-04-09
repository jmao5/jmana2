import { getSvToonInfo } from "@/apis/client/getSvToon";
import ChapterList from "../_components/ChapterList";
import ChapterToonInfo from "../_components/ChapterToonInfo";

export default async function ChapterPage({
  params,
}: {
  params: { toonId: number };
}) {
  const { data: toonInfo } = await getSvToonInfo(params.toonId);
  // const { data: chapterList } = await getSvChapterList(params.toonId);

  return (
    <div className="w-full">
      <ChapterToonInfo toonInfo={toonInfo} toonId={params.toonId} />
      <ChapterList toonId={params.toonId} />
    </div>
  );
}
