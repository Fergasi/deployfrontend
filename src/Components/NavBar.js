import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <h3>NavBar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post-user">Create New User</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
