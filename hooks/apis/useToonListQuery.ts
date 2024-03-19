"use client";

import { getToonClList } from "@/apis/client/getToonClList";
import { QUERY_KEY } from "@/constants/queryKey";
import { ToonRequest } from "@/type/axios/toon";
import {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

export const useToonListQuery = (query: ToonRequest) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.ALL_TOONS],
      queryFn: async ({ pageParam = 1 }) => {
        let params = {
          ...query,
          page: pageParam,
        };

        return await getToonClList(params);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.isLast ? undefined : lastPage.currentPage + 1;
      },
      staleTime: 10000,
    });

  return {
    loadedToons: data?.pages || [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  };
};
