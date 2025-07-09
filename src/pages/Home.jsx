import React from "react";
import HomeMenu from "./HomeMenu";
import HomeBody from "./HomeBody";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="h-14 md:h-20 bg-menu-top ">
        <HomeMenu />
      </div>
      <div className="flex-1 bg-bg text-text overflow-y-auto">
        <div className=" h-full ">
          <div className="container xl:max-w-screen-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
