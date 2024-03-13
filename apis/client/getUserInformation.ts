import { UserResponse } from "@/type/response";
import { axiosInstanceClient } from "../axiosInstanceClient";

export const getUserInformation = async () => {
  return await axiosInstanceClient.get<UserResponse>("/user/me");
};
