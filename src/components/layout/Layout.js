import React from "react";
import "./Layout.css";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const Layout = (props) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="contenedor-main">
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
