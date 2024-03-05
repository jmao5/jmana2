import { safeGetUserFetch } from "@/services/users";
import { getServerToken } from "@/utils/auth";
import { redirect } from "next/navigation";
import ErrorPage from "../error";

export default async function Mark() {
  const token = getServerToken();

  if (!token) redirect("/login?redirect=");

  const { isError, response } = await safeGetUserFetch(token ?? "");
  console.log("response : ", response);
  if (isError || !response) return <ErrorPage />;

  return <h1>즐찾</h1>;
}
