/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../../utility/ActiveLink";
import { AuthContext } from "../../../../Providers/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  console.log(user);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{}).catch(err=>{console.log(err)})
  }

  return (
    <div className="navbar py-6 bg-base-100 px-2 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/register">Register</ActiveLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Damn <span className="text-purple-700">Delicious</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          <li>
            { user ? <></> : <ActiveLink to="/register">Register</ActiveLink>}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <><div className="tooltip" data-tip={user && user.displayName}><img className="w-8 h-8 cursor-pointer rounded-full" src={user && user.photoURL} alt="" /></div> <button onClick={handleLogOut} className="btn btn-sm ms-2">Log Out</button></> : <Link to="/login"><button className="btn btn-sm">Login</button></Link>}
        
      </div>
    </div>
  );
};

export default NavBar;
