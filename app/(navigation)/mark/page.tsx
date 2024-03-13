"use client";
import User from "@/components/domain/user/User";
import { getCookie } from "cookies-next";

// const userInformation = async () => {
//   const { data: userInformation } = await getUserServerInformation();
//   return userInformation;
// };
export default function Mark() {
  const token = getCookie("token");
  // const {
  //   data: { basicInfo },
  // } = await userInformation();
  // console.log(basicInfo);
  return <>{token ? <User /> : ""}</>;
}
