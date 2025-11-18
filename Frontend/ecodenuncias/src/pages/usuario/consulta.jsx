import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/consulta.css";
import BarraSuperior from "../../components/barraSuperior";

const Consulta = () => {
  const [identificacion, setIdentificacion] = useState("");
  const [denuncia, setDenuncia] = useState("");
  const [telefono, setTelefono] = useState("");
  const [codigo, setCodigo] = useState("");

  // --- Enviar código ---
  const enviarCodigo = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/enviar-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telefono }),
      });

      const data = await response.json();
      alert(data.mensaje);
    } catch (error) {
      alert("Error enviando código");
      console.error(error);
    }
  };

  // --- Validar código y pasar ---
  const validarCodigo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/validar-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identificacion, denuncia, telefono, codigo }),
      });

      const data = await response.json();
      if (data.ok) {
        alert("Código válido, avanzando...");
        // aquí haces redirección
        // navigate("/resultado");
      } else {
        alert("Código incorrecto");
      }
    } catch (error) {
      alert("Hubo un error");
      console.error(error);
    }
  };

  return (
    <>
      <BarraSuperior />
      <div className="consulta-fondo">
        <h1 className="text-center titulo-consulta">CONSULTAS</h1>

        <div className="container formulario-box">
          <h3 className="fw-bold">Registrados en la base de datos</h3>
          <p>
            Los campos marcados con <span className="text-danger">*</span> son obligatorios
          </p>

          <form onSubmit={validarCodigo}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">
                Número de identificación<span className="text-danger">*</span>
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={identificacion}
                  onChange={(e) => setIdentificacion(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">
                Número de denuncia<span className="text-danger">*</span>
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={denuncia}
                  onChange={(e) => setDenuncia(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">
                Número de teléfono<span className="text-danger">*</span>
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-4"></div>
              <div className="col-sm-6 d-flex align-items-center gap-3">
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={enviarCodigo}
                >
                  Enviar Código
                </button>
                <a href="#" className="link-primary">
                  Enviar nuevo código
                </a>
              </div>
            </div>

            {/* Código */}
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label small">
                Ingrese el código que le fue enviado por mensaje de texto
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              <span className="text-danger">*</span>
            </div>

            <a href="#" className="text-primary fw-bold d-block mb-3 ms-2">
              ¿Necesitas ayuda?
            </a>

            <div className="text-center">
              <button className="btn btn-success px-4">Siguiente</button>
            </div>
          </form>
        </div>

        <p className="frase-eco">“Cuidar el medio ambiente es valorar la vida”</p>
      </div>
    </>
  );
};

export default Consulta;
