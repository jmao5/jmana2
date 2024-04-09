import { updateChapterSequence } from "@/apis/client/getClChapter";
import { useMutation } from "@tanstack/react-query";

export const useChapterSeqMutation = (toonId: number) => {
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateChapterSequence(toonId),
    throwOnError: true,
  });

  return { updateSuccess: mutate, isPending };
};
