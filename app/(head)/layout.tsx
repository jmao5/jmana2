import React from "react";

import Footer from "@/components/common/Footer";
import Navigation from "@/components/domain/home/Navigation";
import { getUserSvInformation } from "@/apis/client/getSvUser";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userInfo } = await getUserSvInformation();
  console.log("userInfo : ", userInfo);

  return (
    <>
      <Navigation userInfo={userInfo} />
      {children}
      <Footer userInfo={userInfo} />
    </>
  );
};

export default layout;
