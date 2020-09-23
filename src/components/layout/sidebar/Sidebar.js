import React from "react";
import "./Sidebar.css";
import userlogo from "../../../resources/images/SAPTalent/icon-new-user.svg";
import iconHome from "../../../resources/images/SPAimages/icon-menu-home.svg";
import iconOfertas from "../../../resources/images/SPAimages/icon-menu-ofertaslaborales.svg";
import iconEstudios from "../../../resources/images/SPAimages/icon-menu-misestudios.svg";
import iconCertificados from "../../../resources/images/SPAimages/icon-menu-miscertificaciones.svg";
import iconSapAdn from "../../../resources/images/SPAimages/icon-menu-miadnsap.svg";
import iconTrabajos from "../../../resources/images/SPAimages/icon-menu-mistrabajos.svg";

const Sidebar = (props) => {
  const { open } = props;
  return (
    <div className={open ? "cont-sidebar-mini" : "cont-sidebar"}>
      <div className={open ? "header-sidebar-mini" : "header-sidebar"}>
        <img
          src={userlogo}
          className={open ? "foto-perfil-mini" : "foto-perfil"}
          alt="perfil"
        />
        {!open ? (
          <>
            <p>Abraham Vidal Carrasco</p>
            <p>Ingeniero en Informatica</p>
          </>
        ) : null}
      </div>
      <div className="sidebar-body">
        <ul>
          <li>
            <img src={iconHome} alt="home" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar"}>Home</p>
          </li>
          <li>
            <img src={iconOfertas} alt="ofertas" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar2"}>Ofertas Laborales</p>
          </li>
          <li>
            <img src={iconEstudios} alt="estudios" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar3"}>Mis Estudios</p>
          </li>
          <li>
            <img src={iconCertificados} alt="certificados" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar4"}>Mis Certificaciones</p>
          </li>
          <li>
            <img src={iconSapAdn} alt="sap adn" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar5"}>Mi SAP ADN</p>
          </li>
          <li>
            <img src={iconTrabajos} alt="trabajos" />
            <p className={open? "txt-sidebar-mini" : "txt-sidebar6"}>Mis Trabajos</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
