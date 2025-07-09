import React, { useState } from "react";
import useUser from "../features/authentication/useUser";
import { SiFreelancer } from "react-icons/si";
import { BsBriefcaseFill } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

function HiddenDashboard({ children }) {
  const [open, setOpen] = useState(false);
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

  return (
    <div className="bg-new-bg ">
      <button
        className=" sm:hidden ms-auto cursor-pointer rounded-lg bg-toggle-button p-1 flex items-center space-x-2 justify-center "
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoMdArrowDropdown size={25} />
        <p className="font-semibold">{`پنل ${current.name}`}</p>
        {current.icon}
      </button>

      {open && (
        <div className="p-5 bg-sidebar sm:hidden overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  );
}

export default HiddenDashboard;
