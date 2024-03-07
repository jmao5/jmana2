import { safeGetUserFetch } from "@/services/users";
import { getServerToken } from "@/utils/auth";
import ErrorPage from "../error";

export default async function Mark() {
  const token = getServerToken();

  const { isError, response } = await safeGetUserFetch(token ?? "");

  console.log("response : ", response);
  if (isError || !response) return <ErrorPage />;

  return <h1>즐찾</h1>;
}
