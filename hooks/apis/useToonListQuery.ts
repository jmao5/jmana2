"use client";

import { getToonClList } from "@/apis/client/getToonList";
import { QUERY_KEY } from "@/constants/queryKey";
import { ToonRequest } from "@/type/axios/toon";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useAllPlansQuery = (query: ToonRequest) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSuspenseInfiniteQuery({
      queryKey: [QUERY_KEY.ALL_TOONS],
      queryFn: async ({ pageParam = {} }) => {
        let params = {
          ...query,
        };

        if (pageParam) {
          params = { ...params, ...pageParam };
        }
        const result = await getToonClList(params);
        return result?.data;
      },
      initialPageParam: {},
      getNextPageParam: (lastPage) => {
        // console.log('lastPage:', lastPage);
        const lastItem = lastPage[lastPage.length - 1];
        // if (lastItem) console.log(query.sort, lastItem.id, lastItem.ajajas);
        return lastItem;
      },
      staleTime: 10000,
    });
  // console.log('Data:', data?.pages);
  return {
    loadedPlans: data?.pages || [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  };
};
