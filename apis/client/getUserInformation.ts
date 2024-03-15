import { UserResponse } from "@/type/response";
import { axiosInstanceClient } from "../axiosInstanceClient";

export const getUserClientInformation = async () => {
  return await axiosInstanceClient.get<UserResponse>("/api/user/me");
};

// export const getUserServerInformation = async () => {
//   return await axiosInstanceServer.get<UserResponse>("/user/me");
// };
