import React from "react";
import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="bg-otp-background w-screen h-screen overflow-y-auto ">
      <div className="container xl:max-w-screen-2xl">
        <CompleteProfileForm />
      </div>
    </div>
  );
}

export default CompleteProfile;
