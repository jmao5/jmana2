import React from "react";

import Navigation from "@/components/domain/home/Navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
