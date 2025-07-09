import React from "react";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <span className="cursor-pointer" onClick={() => navigate("/")}>
      <img src={logo} className="w-35 object-contain rounded-xl" alt="logo" />
    </span>
  );
}

export default Logo;
