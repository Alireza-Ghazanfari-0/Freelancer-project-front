import React, { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import DarkToggle from "../ui/DarkToggle";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import LoginButton from "../ui/LoginButton";
import Logo from "../ui/Logo";

function HomeMenu() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className=" h-full flex items-center">
      {/* bg-gray-200 */}
      <div className="  flex justify-between container w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ">
        {/* bg-green-400 */}
        <div className="hidden md:inline w-[70%] ">
          <IconsMenu />
        </div>
        {/* bg-purple-500 */}
        <div className="hidden md:inline  w-[30%]">
          <LeftMenu />
        </div>
        <div
          // bg-green-400
          className="md:hidden flex flex-start items-center cursor-pointer  "
          onClick={toggleMenu}
        >
          {showMenu ? (
            <IoClose className="size-6 " />
          ) : (
            <TfiMenu className="size-5 " />
          )}
        </div>
        {showMenu && (
          <div className=" md:hidden fixed top-14 left-0 w-full h-full backdrop-blur-[2px] z-20">
            <div className="flex justify-start items-center h-full">
              <div className="bg-surface opacity-100 w-[300px] h-full p-4 overflow-y-auto z-30">
                <LoginButton properties="flex justify-end" />
                <IconsMenu
                  properties="flex flex-col mt-6 items-start space-y-5"
                  toggleMenu={toggleMenu}
                />
                {/* آیتم‌های اضافی که داخل مدال نمایش داده می‌شوند */}
                {/* <ul className="flex flex-col items-start space-y-3 mt-4">
                  <li>آیتم اضافی 1</li>
                  <li>آیتم اضافی 2</li>
                </ul> */}
              </div>
            </div>
          </div>
        )}
        {/* bg-purple-500 */}
        <div className="md:hidden flex flex-end items-center space-x-3">
          <Logo />
          <DarkToggle properties="rounded-full p-1 border-none bg-white" />
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;

function IconsMenu({ properties, toggleMenu }) {
  const navigate = useNavigate();
  return (
    <div>
      <ul
        className={`flex justify-between items-center text-text ${properties}`}
      >
        <li
          className="hidden md:inline cursor-pointer "
          onClick={() => navigate("/")}
        >
          <Logo />
        </li>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li
          className="cursor-pointer"
          onClick={() => {
            navigate("/about"), toggleMenu();
          }}
        >
          درباره ما
        </li>
      </ul>
    </div>
  );
}

function LeftMenu() {
  return (
    <div className="flex justify-end items-center space-x-2">
      <LoginButton />
      <DarkToggle properties="rounded-full p-2 border-none bg-white" />
    </div>
  );
}
