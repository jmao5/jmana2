import { getToonClMarkAuthUser } from "@/apis/client/getClChapter";
import { QUERY_KEY } from "@/constants/queryKey";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useToonClMarkAuthUser = (toonId: number) => {
  const { data, isFetching, isError } = useSuspenseQuery({
    queryKey: [{ toonId }, QUERY_KEY.TOON_MARK],
    queryFn: () => getToonClMarkAuthUser(toonId),
    staleTime: Infinity,
  });
  return { data: data!.data, isFetching, isError };
};
