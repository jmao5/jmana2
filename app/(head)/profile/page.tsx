import { getUserSvInformation } from "@/apis/client/getSvUser";

const ProfilePage = async () => {
  const { userInfo } = await getUserSvInformation();

  return <div className="flex w-full">{userInfo?.nickname}</div>;
};

export default ProfilePage;
