import React from "react";
import Auth from "../features/authentication/Auth";

function Authentication() {
  return (
    <div className="w-screen h-screen bg-otp-background overflow-y-auto">
      <div className="container ">
        <Auth />
      </div>
    </div>
  );
}

export default Authentication;
