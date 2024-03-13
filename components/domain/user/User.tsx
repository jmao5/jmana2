"use client";

import { useGetUserInformationQuery } from "@/hooks/apis/useGetUserInformationQuery";

const User = () => {
  const { userInformation } = useGetUserInformationQuery();
  return <div>유저정보 : {userInformation.basicInfo.birth}</div>;
};

export default User;
