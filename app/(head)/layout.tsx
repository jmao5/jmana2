import React from "react";

import Navigation from "@/components/domain/home/Navigation";
import Footer from "@/components/common/Footer";
import { getServerToken } from "@/utils/auth";

const layout = ({ children }: { children: React.ReactNode }) => {
  const token = getServerToken();
  return (
    <>
      <Navigation />
      {children}
      {token && <Footer />}
    </>
  );
};

export default layout;
