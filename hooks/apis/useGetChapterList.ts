import { getClChapterList } from "@/apis/client/getClChapter";
import { QUERY_KEY } from "@/constants/queryKey";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetChapterList = (toonId: number) => {
  const { data, isError, isFetching, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.CHAPTER_LIST],
    queryFn: () => getClChapterList(toonId),
    staleTime: Infinity,
  });

  return { chapterList: data.data, isError, error, isFetching };
};
