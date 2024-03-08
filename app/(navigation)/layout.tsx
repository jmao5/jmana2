import React from "react";

import Navigation from "@/components/domain/home/Navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <div className="fixed bottom-0 h-0 w-full max-w-screen-sm">
        <MissionCreateButton />
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
