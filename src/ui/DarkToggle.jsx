import React, { useContext, useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkToggle({ properties }) {
  //   const [darkMode, setDarkMode] = useState(false);
  //   const handleDarkMode = () => {
  //     if (document.documentElement.classList.contains("dark")) {
  //       document.documentElement.classList.remove("dark");
  //       setDarkMode(false);
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       setDarkMode(true);
  //     }
  //   };
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className="flex justify-end">
      <button
        className={`btn btn--dark ${properties}`}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? (
          <HiSun className="w-6 h-6" />
        ) : (
          <HiMoon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default DarkToggle;
