import { getServerToken, getServerUserId } from "@/utils/auth";

export default function Home() {
  const token = getServerToken();
  const userId = getServerUserId();
  console.log("token : ", token);
  console.log("userId : ", userId);

  return <div>Home</div>;
}
