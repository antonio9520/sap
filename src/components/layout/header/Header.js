import React from "react";
import "./Header.css";
import logo from "../../../resources/images/SAPTalent/SAPTalent-Logo-White.svg";
import userlogo from "../../../resources/images/SAPTalent/icon-new-user.svg";

const Header = (props) => {
  const { open, setOpen } = props;

  return (
    <div className="container-header">
      <div className="header-left">
        <div className="cont-logo-principal">
          <img src={logo} alt="logo" className="logo-principal" />
        </div>
        <button className="btn-open-sidebar" onClick={() => setOpen(!open)}>
          <div className="icon-bars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div className="header-right">
        <div className="cont-logo-user">
          <img src={userlogo} alt="logo" className="logo-user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
