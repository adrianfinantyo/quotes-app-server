import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = (props: any) => {
  return (
    <header className={props.onScroll ? "on-scroll" : ""}>
      <div id="header-child">
        <NavLink to="/" className="link">
          <h1>MY GALERRY</h1>
        </NavLink>
        <nav>
          <NavLink to="/" className="link">
            About Us
          </NavLink>
          <NavLink to="/" className="link">
            FAQ
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
