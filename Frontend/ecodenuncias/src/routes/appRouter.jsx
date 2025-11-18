import { Routes, Route } from "react-router-dom";

// IMPORTS DE USUARIO
import InicioBienvenida from "../components/inicioBienvenida.jsx";
import Inicio from "../components/inicio.jsx";
import Solicitudes from "../pages/usuario/solicitudes.jsx";
import MenuSolicitudes from "../components/menu.jsx";
import SolicitudRadicada from "../components/RadicadoSolicitud.jsx";
import Consulta from "../pages/usuario/consulta.jsx";
import ConsultaDenuncia from "../components/consultaDenuncia.jsx";
import ConsultaSolicitud from "../pages/usuario/consultaSolicitud.jsx";

// IMPORTS DE ADMINISTRADOR
import ListadoDenuncia from "../components/listadoDenuncia.jsx";
import DenunciaDetalle from "../pages/administrador/denunciaDetalle.jsx";
import Busqueda from "../pages/administrador/busqueda.jsx";
import Denuncia from "../pages/administrador/denuncia.jsx";
import ConsultasA from "../pages/administrador/consultas.jsx";
import Sidebar from "../components/sidebar.jsx";

function AppRouter() {
  return (
    <Routes>
      {/* 🔹 RUTAS DE USUARIO */}
      <Route path="/" element={<Sidebar />} />
      <Route path="/inicioBienvenida" element={<InicioBienvenida />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/menu-solicitud" element={<MenuSolicitudes />} />
      <Route path="/solicitud" element={<Solicitudes />} />
      <Route path="/radicado-solicitud" element={<SolicitudRadicada />} />
      <Route path="/consulta" element={<Consulta />} />
      <Route path="/consultadenuncias" element={<ConsultaDenuncia />} />
      <Route path="/consulta-solicitud" element={<ConsultaSolicitud />} />

      {/* 🔹 RUTAS DE ADMINISTRADOR */}
      <Route path="/denuncia" element={<Denuncia />} />
      <Route path="/listado-denuncia" element={<ListadoDenuncia />} />
      <Route path="/denuncia-detalle" element={<DenunciaDetalle />} />
      <Route path="/busqueda" element={<Busqueda />} />
      <Route path="/consulta-admin" element={<ConsultasA />} />

    </Routes>
  );
}

export default AppRouter;