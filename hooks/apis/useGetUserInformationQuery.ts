import { getUserClientInformation } from "@/apis/client/getClUser";
import { QUERY_KEY } from "@/constants/queryKey";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetUserInformationQuery = () => {
  const { data, isError, isFetching, error } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER_INFORMATION],
    queryFn: getUserClientInformation,
    staleTime: Infinity,
  });

  return { userInformation: data!.data.data, isError, error, isFetching };
};
