import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/Layout.less";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
