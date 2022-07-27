import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navBar">
      <nav>
        <h3>NavBar</h3>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <br />
          <div>
            <Link to="/post-user">Create New User</Link>
          </div>
        </div>
      </nav>
      <br />
      <Outlet />
    </div>
  );
};

export default NavBar;
