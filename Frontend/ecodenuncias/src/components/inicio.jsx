import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inicio.css";
import logo from "../assets/logo.png";
import consultaIcon from "../assets/icons/consulta.png";
import solicitudIcon from "../assets/icons/solicitud.png";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="fondo-container">

      {/* 🔹 Barra superior */}
      <div className="d-flex justify-content-between align-items-center p-3 barra-superior">
        <a
          href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=167988"
          target="_blank"
          rel="noopener noreferrer"
          className="ley-text text-decoration-none fw-bold"
        >
          Ley 2111 de 2021
        </a>
      </div>

      {/* 🔹 Contenido principal */}
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center contenido">

        {/* ✅ Lado izquierdo */}
        <div className="text-center text-md-start mb-4 mb-md-0">
          <img
            src={logo}
            alt="EcoDenuncias"
            className="logo logo-animado"
            onClick={(e) => e.target.classList.toggle("activo")}
          />
          <p className="eslogan">“Cuidar el medio ambiente es valorar la vida”</p>
        </div>

        {/* ✅ Tarjetas lado derecho */}
        <div className="cards-container d-flex gap-4">
          <Link to="/consulta" className="boton-card text-center text-decoration-none">
            <img src={consultaIcon} alt="Consultas" className="icono-card" />
            <h5>Consultas</h5>
          </Link>

          <Link to="/menuSolicitud" className="boton-card text-center text-decoration-none">
            <img src={solicitudIcon} alt="Solicitudes" className="icono-card" />
            <h5>Solicitudes</h5>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Inicio;
