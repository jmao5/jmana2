// const userInformation = async () => {
//   const { data: userInformation } = await getUserServerInformation();
//   return userInformation;

import ToonList from "@/app/_components/ToonList";
import { getServerToken } from "@/utils/auth";
import { redirect } from "next/navigation";

// };
export default function Mark() {
  const token = getServerToken();
  if (!token) redirect("/login?redirect=");

  // const { isError, response } = await safeGetUserFetch(token ?? "");
  // if (isError || !response) return <ErrorPage />;
  // 유저정보 : {response?.data.basicInfo.nickname}

  return <ToonList token={token} toonMark={true} search={""} />;
}
