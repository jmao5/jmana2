import { saveChapterLog } from "@/apis/client/getClChapter";
import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveChapterLogMutation = (chapterId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveChapterLog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [{ chapterId }, QUERY_KEY.CHAPTER],
      });
    },
    throwOnError: true,
  });
};
