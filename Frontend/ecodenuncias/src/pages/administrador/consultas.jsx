import React, { useState } from "react";
import "../../styles/consultasAdmin.css";
import consIcon from "../../assets/icons/cons_icon.png";
import logo from "../../assets/logo_texto.png";

import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function ConsultasA() {
  const [tipo, setTipo] = useState("denuncias");

  const dataPorTipo = {
    denuncias: {
      total: 1125,
      activas: 640,
      archivadas: 304,
      promedio: 8,
      flujo: [45, 68, 80, 92, 150, 120, 130, 140, 160, 170, 150, 120],
      distribucion: [65, 25, 10],
    },
    solicitudes: {
      total: 320,
      activas: 210,
      archivadas: 100,
      promedio: 5,
      flujo: [20, 40, 55, 60, 100, 80, 95, 110, 120, 130, 110, 90],
      distribucion: [20, 70, 10],
    },
  };

  const current = dataPorTipo[tipo];

  const optionsFlujo = {
    responsive: true,
    maintainAspectRatio: false /*se adapta al contenedor css */,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#2e5b27",
          font: { size: 11, family: "Poppins, sans-serif" },
        },
      },
      tooltip: {
        backgroundColor: "rgba(50, 90, 50, 0.9)",
        titleColor: "#fff",
        bodyColor: "#f6fff2",
        borderColor: "#a3d18d",
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        ticks: { color: "#2e5b27", font: { size: 10 } },
      },
      y: {
        ticks: { color: "#2e5b27", font: { size: 10 } },
        grid: { color: "rgba(46,91,39,0.1)" },
      },
    },
  };

  const dataFlujo = {
    labels: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep",
      "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: tipo === "denuncias" ? "Denuncias" : "Solicitudes",
        data: current.flujo,
        backgroundColor:
          tipo === "denuncias"
            ? "rgba(76, 175, 80, 0.7)"
            : "rgba(139, 195, 74, 0.7)",
        borderRadius: 8,
      },
    ],
  };

  const optionsDistribucion = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#2e5b27",
          font: { size: 11, family: "Poppins, sans-serif" },
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: "rgba(50, 90, 50, 0.9)",
        titleColor: "#fff",
        bodyColor: "#f6fff2",
        borderColor: "#a3d18d",
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
  };

  const dataDistribucion = {
    labels: ["Denuncias", "Solicitudes", "Otros"],
    datasets: [
      {
        data: current.distribucion,
        backgroundColor: [
          "rgba(76, 175, 80, 0.8)",
          "rgba(139, 195, 74, 0.8)",
          "rgba(200, 230, 201, 0.8)",
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <>
      {/* Enlace fuera del contenedor principal */}
      <div className="consultas-ley">
        <a
          href="/docs/ley-2111-2021.pdf"
          className="ley-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ley 2111 de 2021
        </a>
      </div>

      {/* === Logo fuera del contenedor, esquina superior derecha === */}
      <img src={logo} alt="Logo" className="logo-superior" />

      {/* Título fuera del contenedor */}
      <div className="consultas-titulo">
        <img src={consIcon} alt="icono consultas" className="consultas-icono" />
        <h1>CONSULTAS</h1>
      </div>

      <div className="consultas-container">
        <section className="consultas-filtros">
          <h3>Consulta y Análisis de Requerimientos</h3>
          <div className="filtros-grid">
            <div>
                <label>Tipo</label>
                <div className="btn-group">
                  <button
                    className={`btn btn-light btn-sm ${
                      tipo === "denuncias" ? "active" : ""
                    }`}
                    onClick={() => setTipo("denuncias")}
                  >
                    Denuncias
                  </button>
                  <button
                    className={`btn btn-light btn-sm ${
                      tipo === "solicitudes" ? "active" : ""
                    }`}
                    onClick={() => setTipo("solicitudes")}
                  >
                    Solicitudes
                  </button>
              </div>
            </div>
            <div>
              <label>Fecha</label>
              <div className="d-flex gap-2">
                <input type="date" className="form-control form-control-sm" />
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>
            <div>
              <label>Territorial</label>
              <select className="form-select form-select-sm">
                <option>Seleccione...</option>
                <option>Centro</option>
                <option>Pacífico</option>
                <option>Macizo</option>
              </select>
            </div>
            <div>
              <label>Municipio</label>
              <select className="form-select form-select-sm">
                <option>Seleccione...</option>
                <option>Popayán</option>
                <option>Suárez</option>
                <option>Piendamó</option>
              </select>
            </div>
            <div>
              <label>Estado</label>
              <select className="form-select form-select-sm">
                <option>Seleccione...</option>
                <option>Resuelta</option>
                <option>Vencida</option>
                <option>Archivada</option>
              </select>
            </div>
          </div>
        </section>

        <section className="consultas-stats">
          <div className="stat-card">
            <h5>Total Requerimientos</h5>
            <h2>{current.total}</h2>
          </div>
          <div className="stat-card">
            <h5>
              {tipo === "denuncias"
                ? "Denuncias Activas"
                : "Solicitudes Activas"}
            </h5>
            <h2>{current.activas}</h2>
          </div>
          <div className="stat-card">
            <h5>Archivados</h5>
            <h2>{current.archivadas}</h2>
          </div>
          <div className="stat-card">
            <h5>Tiempo Promedio</h5>
            <h2>{current.promedio} días</h2>
          </div>
        </section>

        <section className="consultas-graficos">
          <div className="grafico-card">
            <h6>Flujo mensual de Requerimientos</h6>
            <div className="chart-container">
              <Bar data={dataFlujo} options={optionsFlujo} />
            </div>
          </div>

          <div className="grafico-card">
            <h6>Distribución por tipo de requerimiento</h6>
            <div className="chart-container">
              <Doughnut data={dataDistribucion} options={optionsDistribucion} />
            </div>
          </div>

          <div className="tabla-card">
            <h6>Requerimiento por Territorial</h6>
            <table className="tabla-mini">
              <thead>
                <tr>
                  <th>TERRITORIAL</th>
                  <th>DENUNCIAS</th>
                  <th>SOLICITUDES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Centro</td>
                  <td>120</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Norte</td>
                  <td>84</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Tierradentro</td>
                  <td>35</td>
                  <td>136</td>
                </tr>
                <tr>
                  <td>Pacífico</td>
                  <td>25</td>
                  <td>62</td>
                </tr>
                <tr>
                  <td>Macizo</td>
                  <td>36</td>
                  <td>84</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tabla-card">
            <h6>Requerimiento por Municipio</h6>
            <table className="tabla-mini">
              <thead>
                <tr>
                  <th>MUNICIPIO</th>
                  <th>DENUNCIAS</th>
                  <th>SOLICITUDES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Popayán</td>
                  <td>200</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>Suárez</td>
                  <td>96</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td>Piendamó</td>
                  <td>110</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>Timbío</td>
                  <td>25</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Rosas</td>
                  <td>104</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="consultas-tabla">
          <h6>Resultados</h6>

          <div className="tabla-scroll">
            <table className="tabla-resultados">
              <thead>
                <tr>
                  <th>RADICADO</th>
                  <th>TIPO</th>
                  <th>CATEGORÍA</th>
                  <th>MUNICIPIO</th>
                  <th>FECHA RECEPCIÓN</th>
                  <th>ESTADO</th>
                  <th>RESPONSABLE</th>
                </tr>
              </thead>
              <tbody>
                {/* 🔹 Ejemplos repetidos para probar scroll */}
                {[
                  [
                    "A-00000001",
                    "Denuncia",
                    "Trafico de especies",
                    "Piendamó",
                    "05/03/2024",
                    "En Trámite",
                    "Carlos M. Rodríguez",
                  ],
                  [
                    "S-00000001",
                    "Solicitud",
                    "Permiso de Vertimientos",
                    "Piendamó",
                    "09/03/2024",
                    "Archivada",
                    "Carlos M. Rodríguez",
                  ],
                  [
                    "A-00000003",
                    "Denuncia",
                    "Deforestacion",
                    "Popayán",
                    "09/01/2023",
                    "Vencida",
                    "María F. Rodríguez",
                  ],
                  [
                    "A-00000004",
                    "Denuncia",
                    "Contaminación",
                    "Suárez",
                    "15/02/2023",
                    "En Trámite",
                    "Luis A. Gómez",
                  ],
                  [
                    "S-00000005",
                    "Solicitud",
                    "Licencia Ambiental",
                    "Rosas",
                    "20/02/2023",
                    "Resuelta",
                    "Ana M. Díaz",
                  ],
                  [
                    "A-00000006",
                    "Denuncia",
                    "Ruido Ambiental",
                    "Timbío",
                    "22/02/2023",
                    "Archivada",
                    "David M. Castro",
                  ],
                  [
                    "S-00000007",
                    "Solicitud",
                    "Uso de Suelos",
                    "Popayán",
                    "05/03/2023",
                    "En Trámite",
                    "Camila H. Soto",
                  ],
                  [
                    "A-00000008",
                    "Denuncia",
                    "Basuras",
                    "Piendamó",
                    "07/03/2023",
                    "Resuelta",
                    "José L. Gutiérrez",
                  ],
                  [
                    "S-00000009",
                    "Solicitud",
                    "Visita Tecnica",
                    "Suárez",
                    "12/03/2023",
                    "En Trámite",
                    "Sofía M. Ortiz",
                  ],
                  [
                    "A-00000010",
                    "Denuncia",
                    "Vertimientos Ilegales",
                    "Rosas",
                    "15/03/2023",
                    "Resuelta",
                    "Daniel T. Rojas",
                  ],
                  [
                    "A-00000011",
                    "Denuncia",
                    "Ruido Industrial",
                    "Timbío",
                    "17/03/2023",
                    "Archivada",
                    "Carla G. Pérez",
                  ],
                  [
                    "S-00000012",
                    "Solicitud",
                    "Uso de suelos",
                    "Popayán",
                    "18/03/2023",
                    "En Trámite",
                    "Juan M. Hernández",
                  ],
                  [
                    "A-00000013",
                    "Denuncia",
                    "Deforestación",
                    "Piendamó",
                    "20/03/2023",
                    "Resuelta",
                    "Laura C. Núñez",
                  ],
                  [
                    "S-00000014",
                    "Solicitud",
                    "Control de Fauna",
                    "Suárez",
                    "21/03/2023",
                    "Archivada",
                    "María L. Gómez",
                  ],
                  [
                    "A-00000015",
                    "Denuncia",
                    "Contaminación Sonora",
                    "Timbío",
                    "22/03/2023",
                    "En Trámite",
                    "Carlos J. Mejía",
                  ],
                ]
                  .filter((row) =>
                    tipo === "denuncias"
                      ? row[1] === "Denuncia"
                      : row[1] === "Solicitud"
                  )
                  .map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
