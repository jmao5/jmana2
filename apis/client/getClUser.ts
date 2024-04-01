import { PostUsersRefreshResponse, UserResponse } from "@/type/response";
import { axiosInstanceClient } from "../axiosInstanceClient";

export const getUserClientInformation = async () => {
  return await axiosInstanceClient.get<UserResponse>("/api/user/me");
};

export const postUsersRefresh = () => {
  return axiosInstanceClient.post<PostUsersRefreshResponse>(
    "/api/user/refresh"
  );
};
