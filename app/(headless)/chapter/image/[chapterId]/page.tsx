import { getSvChapterImageList } from "@/apis/client/getSvChapterImage";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import Image from "next/image";
import { Suspense } from "react";

export default async function ChapterImagePage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);

  return (
    <Suspense fallback={<LoadingSpiner />}>
      {chapterImageList.map((images, index) => {
        return (
          <div className="w-full" key={index}>
            <Image
              alt={images.id.toString()}
              src={images.toonImageUrl}
              width={500}
              height={2000}
              // layout="fill"
              // blurDataURL={BLUR_IMAGE_SRC}
              // placeholder="blur"
              // unoptimized={true}
            />
          </div>
        );
      })}
    </Suspense>
  );
}
