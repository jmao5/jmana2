/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useGetUserInformationQuery } from "@/hooks/apis/useGetUserInformationQuery";
import { getCookie } from "cookies-next";
export default function Mark() {
  const token = getCookie("token");

  return (
    <h1>
      {token ? (
        <>
          내 닉네임 :{" "}
          {useGetUserInformationQuery().userInformation.basicInfo.nickname}
        </>
      ) : (
        ""
      )}
    </h1>
  );
}
