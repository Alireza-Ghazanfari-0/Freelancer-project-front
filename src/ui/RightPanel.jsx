import React, { Children } from "react";
import { SiFreelancer } from "react-icons/si";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";

import useUser from "../features/authentication/useUser";

function RightPanel({ children }) {
  const { user } = useUser();
  const userArray = [
    {
      role: "OWNER",
      name: "کارفرما",
      icon: <BsBriefcaseFill size={25} />,
    },
    {
      role: "FREELANCER",
      name: "فریلنسر",
      icon: <SiFreelancer size={30} />,
    },
    {
      role: "ADMIN",
      name: "ادمین",
      icon: <RiAdminLine size={30} />,
    },
  ];
  const [current] = userArray.filter((item) => item.role === user.role);
  // console.log(current);

  return (
    <div className="">
      <div className="hidden sm:flex items-center space-x-2 justify-center rounded-lg py-2 bg-panel-highlight text-otp-note">
        <p className="font-semibold">{`پنل ${current.name}`}</p>
        {current.icon}
      </div>

      <ul className="sm:mt-10 ms-6 flex justify-between sm:flex-col gap-y-6 font-bold">
        {children}
      </ul>
    </div>
  );
}

export default RightPanel;
