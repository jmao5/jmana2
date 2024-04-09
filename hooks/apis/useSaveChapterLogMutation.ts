import { saveChapterLog } from "@/apis/client/getClChapter";
import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveChapterLogMutation = (
  chapterId: number,
  toonId: number
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => saveChapterLog(chapterId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.CHAPTER_LIST, toonId],
      });
    },
    throwOnError: true,
  });
};
