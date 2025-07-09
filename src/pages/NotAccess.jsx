import React from "react";
import DarkToggle from "../ui/DarkToggle";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

function NotAccess() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-otp-background ">
      <div className="container">
        <DarkToggle />
        <div className="text-4xl text-error pt-30">
          {" "}
          ***به این بخش دسترسی ندارید***
        </div>

        <button className="btn mt-8" onClick={() => navigate(-1)}>
          <div className="flex items-center gap-2 ">
            <HiArrowRight />
            <span>بازگشت</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NotAccess;
