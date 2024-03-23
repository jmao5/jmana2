import { toggleIsToonMark } from "@/apis/client/getClChapter";
import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useToggleIsToonMarkMutation = (toonId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleIsToonMark,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [{ toonId }, QUERY_KEY.TOON_MARK],
      });
    },
    throwOnError: true,
  });
};
