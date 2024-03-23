"use client";

import { getClAuthToonList, getClToonList } from "@/apis/client/getClToon";
import { QUERY_KEY } from "@/constants/queryKey";
import { ToonRequest } from "@/type/axios/toon";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useToonListQuery = (query: ToonRequest) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSuspenseInfiniteQuery({
      queryKey: query.toonMark
        ? [QUERY_KEY.ALL_TOONS_MARK]
        : query.menu === "TOON"
        ? [QUERY_KEY.ALL_TOONS]
        : [QUERY_KEY.ALL_Mans],
      queryFn: async ({ pageParam = 1 }) => {
        let params = {
          ...query,
          page: pageParam,
        };

        return params.toonMark
          ? await getClAuthToonList(params)
          : await getClToonList(params);
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
