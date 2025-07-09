import React from "react";
import HomeMenu from "../pages/HomeMenu";
import { Outlet } from "react-router-dom";
import HiddenDashboard from "./HiddenDashboard";

function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden ">
      <div className="h-14 md:h-20 bg-menu-top flex-shrink-0 ">
        <HomeMenu />
      </div>
      <div className="sm:flex-1 sm:flex overflow-auto sm:overflow-hidden">
        <HiddenDashboard>{children}</HiddenDashboard>

        <div className="p-5 bg-sidebar hidden sm:block sm:w-[210px] md:w-[230px] lg:w-[300px] overflow-y-auto">
          {children}
        </div>

        <div className="bg-new-bg flex-1 overflow-y-auto">
          <div className="h-full container lg:max-w-screen-lg flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
