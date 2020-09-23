import React, { useState } from "react";
import "./Layout.css";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} />
      <Header open={open} setOpen={setOpen} />
      <div className={open ? "contenedor-main-mini" : "contenedor-main"}>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
