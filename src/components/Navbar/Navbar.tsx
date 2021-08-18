import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);

  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 0) setOnScroll(true);
    else setOnScroll(false);
  });

  return (
    <header className={onScroll ? "on-scroll" : ""}>
      <div id="header-child">
        <h1>MY GALERRY</h1>
        <nav>
          <a>About Us</a>
          <a>FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
