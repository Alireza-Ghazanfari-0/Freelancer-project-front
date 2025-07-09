import React, { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { IoMdArrowDropdown } from "react-icons/io";
import useLogout from "../features/authentication/useLogout";

function LoginButton({ properties }) {
  const { user } = useUser();
  const { logoutFunc } = useLogout();
  const [openLoginMenu, setOpenLoginMenu] = useState(false);

  return (
    <div className={properties}>
      {user ? (
        <Logout user={user} setOpenLoginMenu={setOpenLoginMenu} />
      ) : (
        <Login />
      )}
      {openLoginMenu && (
        <div className="absolute top-14 w-[130px] card rounded-lg flex flex-col">
          <NavLink
            className="py-2"
            to={`/${user.role.toLowerCase()}`}
            onClick={() => setOpenLoginMenu((prev) => !prev)}
          >
            پنل کاربر
          </NavLink>
          <hr />
          <NavLink
            className=" py-2"
            to={`/${user.role.toLowerCase()}/identification`}
            onClick={() => setOpenLoginMenu((prev) => !prev)}
          >
            مشخصات کاربر
          </NavLink>
          <hr />
          <NavLink
            className=" py-2"
            onClick={() => {
              setOpenLoginMenu((prev) => !prev);
              logoutFunc();
            }}
            // to={} در uselogout امده
          >
            خروج
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default LoginButton;

function Login() {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn--secondary flex items-center space-x-1 bg-white border border-pink-200"
      onClick={() => navigate("/auth")}
    >
      <HiOutlineLogin className=" size-6" />
      <span> ورود | ثبت نام </span>
    </button>
  );
}

function Logout({ user, setOpenLoginMenu }) {
  return (
    <button
      className="btn btn--secondary flex items-center space-x-1 bg-white border border-pink-200"
      onClick={() => setOpenLoginMenu((prev) => !prev)}
    >
      <IoMdArrowDropdown className=" size-6" />
      <span>{user.name}</span>
    </button>
  );
}
