import { UserResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";
import { getServerToken } from "@/utils/auth";

export const getUserSvInformation = async () => {
  const token = getServerToken();
  const userInfo = token
    ? (await axiosInstanceServer.get<UserResponse>("/user/me")).data.data
        .basicInfo
    : undefined;

  return { userInfo };
};
