import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      //   setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      //   setDarkMode(true);
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}
