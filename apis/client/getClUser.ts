import { UserResponse } from "@/type/response";
import { axiosInstanceClient } from "../axiosInstanceClient";

export const getUserClientInformation = async () => {
  return await axiosInstanceClient.get<UserResponse>("/api/user/me");
};
