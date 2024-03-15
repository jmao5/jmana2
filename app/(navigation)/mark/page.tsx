// const userInformation = async () => {
//   const { data: userInformation } = await getUserServerInformation();
//   return userInformation;

import ErrorPage from "@/app/error";
import { safeGetUserFetch } from "@/services/users";
import { getServerToken } from "@/utils/auth";
import { redirect } from "next/navigation";

// };
export default async function Mark() {
  const token = getServerToken();
  if (!token) redirect("/login?redirect=");

  const { isError, response } = await safeGetUserFetch(token ?? "");
  if (isError || !response) return <ErrorPage />;

  // const {
  //   data: { basicInfo },
  // } = await userInformation();
  // console.log(basicInfo);
  return <>유저정보 : {response?.data.basicInfo.nickname}</>;
}
