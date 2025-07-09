import React from "react";
import { NavLink } from "react-router-dom";

function RightPanelNavLink({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 text-sidebar-text ${
          isActive && "bg-sidebar-hover rounded p-2"
        }`
      }
    >
      <span>{label}</span> {icon}
    </NavLink>
  );
}

export default RightPanelNavLink;
