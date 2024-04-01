import { postUsersRefresh } from "@/apis/client/getClUser";
import { useMutation } from "@tanstack/react-query";

export const usePostUsersRefreshMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: postUsersRefresh,
    throwOnError: true,
  });

  return { refreshNickname: mutate, isPending };
};
