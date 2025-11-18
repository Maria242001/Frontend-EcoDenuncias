import React from "react";
import "../styles/barraSuperior.css";
import logo from "../assets/logo.png"; // 🔹 Asegúrate que la ruta sea correcta

function BarraSuperior() {
  return (
    <header className="barra-superior">
      <div className="logo-container">
        <img src={logo} alt="EcoDenuncias" className="logo-img" />
        <p className="lema-app">“Cuidar el medio ambiente es valorar la vida”</p>
      </div>

    </header>
  );
}

export default BarraSuperior;
