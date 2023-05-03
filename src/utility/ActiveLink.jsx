/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './ActiveLink.css'
import { NavLink } from "react-router-dom";
const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>isActive ? "actives" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;