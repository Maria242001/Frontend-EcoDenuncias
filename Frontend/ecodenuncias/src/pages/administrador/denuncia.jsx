import React from 'react';
import { useNavigate } from "react-router-dom"; // 🔹 Importa useNavigate
import '../../styles/denuncia.css'; 

// Imágenes

import logo from "../../assets/logo.png";
import alarma from "../../assets/icons/alarma.png";
import denuncia from "../../assets/icons/denuncia.png"; 
import resueltas from '../../assets/icons/resuelta.png'; 
import tramite from '../../assets/icons/tramite.png'; 
import vencida from '../../assets/icons/vencida.png'; 

const Denuncia = () => {
    const navigate = useNavigate(); // 🔹 Inicializa navegación

    // 🔹 Funciones de navegación
    const irAInicio = () => navigate("/");
    const irAListado = () => navigate("/listado-denuncia");
     const irAlDetalle = () => navigate("/denuncia-detalle");
    const irABusqueda = () => navigate("/busqueda");
    const salir = () => {
        alert("Sesión cerrada correctamente");
        navigate("/");
    };

    return (
        <div className="detalle-container">
            <header className="detalle-header d-flex justify-content-between align-items-center w-100 px-5">
                <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=167988"
                    target="_blank"
                    className="link-ley">
                    Ley 2111 de 2021
                </a>
                <img src={logo} alt="Eco Denuncias Logo" className="logo" />
            </header>

            <div className="titulo d-flex align-items-center mb-4 ps-5 w-100">
                <img src={alarma} alt="Icono Alarma" className="icono-alarma" />
                <h1 className="h1 display-4 fw-light mb-0">DENUNCIAS</h1>
            </div>

            <div className="row g-3">
                {/* Menú lateral funcional */}
                <div className="col-2">
                    <div className="d-grid gap-2">
                        <button onClick={irAInicio} className="btn btn-light text-start fw-bold active-menu-btn" type="button">Inicio</button>
                        <button onClick={irAListado} className="btn btn-light text-start" type="button">Listado</button>
                        <button onClick={irAlDetalle} className="btn btn-light text-start" type="button">Detalle</button>
                        <button onClick={irABusqueda} className="btn btn-light text-start" type="button">Búsqueda</button>
                        <button onClick={salir} className="btn btn-light text-start" type="button">Salir</button>
                    </div>
                </div>

                {/* Contenido del Dashboard */}
                <div className="col-10">
                    <div className="row mb-4 g-3">
                        <div className="col-3">
                            <div className="card p-3 shadow-sm d-flex flex-row align-items-center custom-card-total">
                                <img src={denuncia} alt="Total" className="me-3" style={{ width: '40px', height: '40px' }} />
                                <div className="text-start">
                                    <p className="mb-0 fw-bold">DENUNCIAS</p>
                                    <h4 className="mb-0"></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card p-3 shadow-sm d-flex flex-row align-items-center custom-card-resueltas">
                                <img src={resueltas} alt="Resueltas" className="me-3" style={{ width: '40px', height: '40px' }} />
                                <div className="text-start">
                                    <p className="mb-0 fw-bold">RESUELTAS</p>
                                    <h4 className="mb-0"></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card p-3 shadow-sm d-flex flex-row align-items-center custom-card-tramite">
                                <img src={tramite} alt="En Trámite" className="me-3" style={{ width: '40px', height: '40px' }} />
                                <div className="text-start">
                                    <p className="mb-0 fw-bold">EN TRÁMITE</p>
                                    <h4 className="mb-0"></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card p-3 shadow-sm d-flex flex-row align-items-center custom-card-vencidas">
                                <img src={vencida} alt="Vencidas" className="me-3" style={{ width: '40px', height: '40px' }} />
                                <div className="text-start">
                                    <p className="mb-0 fw-bold">VENCIDAS</p>
                                    <h4 className="mb-0"></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa y gráfico (simulación) */}
                    <div className="row g-3">
                        <div className="col-6">
                            <div className="card p-3 shadow-sm d-flex justify-content-center align-items-center" style={{ height: '350px' }}>
                                <h5 className="card-title text-center text-secondary">Mapa del Cauca (Pendiente)</h5>
                                <p>Aquí irá el componente de Mapa real (ej: Leaflet o Google Maps).</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card p-3 shadow-sm d-flex justify-content-center align-items-center" style={{ height: '350px' }}>
                                <h5 className="card-title text-center">Delitos Ambientales Departamento del Cauca (Pendiente)</h5>
                                <p>Aquí irá el componente de Gráfico real (ej: Chart.js).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="detalle-footer w-100 text-center">
                "Cuidar el medio ambiente es valorar la vida"
            </footer>
        </div>
    );
};

export default Denuncia;
