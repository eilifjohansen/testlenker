import React from "react";
import { Link } from "gatsby";
import "../assets/css/Layout.less";

const Navbar = () => {
  return (
    <header className="mynavbar">
      <Link class="header__logo" to="/">
        <span className="logo">Testlenker</span>
      </Link>
    </header>
  );
};

export default Navbar;
