import { Routes, Route } from "react-router-dom";

// IMPORTS DE USUARIO
import InicioBienvenida from "../components/inicioBienvenida.jsx";
import Inicio from "../components/inicio.jsx";
import Solicitudes from "../pages/usuario/solicitudes.jsx";
import MenuSolicitudes from "../components/menu.jsx";
import SolicitudRadicada from "../components/RadicadoSolicitud.jsx";
import Consulta from "../pages/usuario/consulta.jsx";
import ConsultaDenuncia from "../pages/usuario/consultaDenuncia.jsx";
import ConsultaSolicitud from "../pages/usuario/consultaSolicitud.jsx";

// IMPORTS DE ADMINISTRADOR
import ListadoDenuncia from "../pages/administrador/listadoDenuncia.jsx";
import DenunciaDetalle from "../pages/administrador/denunciaDetalle.jsx";
import Busqueda from "../pages/administrador/busqueda.jsx";
import Denuncia from "../pages/administrador/denuncia.jsx";
import ConsultasA from "../pages/administrador/consultas.jsx";
import Sidebar from "../components/sidebar.jsx";
import Ayuda from "../pages/usuario/ayuda.jsx";
import HomeAdmin from "../pages/administrador/homeAdmin.jsx";

//IMPORTS DE FUNCIONARIO
import ListadoFuncionario from "../pages/funcionario/listadoFuncionario.jsx";
import RolesPermisosFuncionario from "../pages/funcionario/rolesPermisosFuncionario.jsx";



function AppRouter() {
  return (
    <Routes>
      {/* 🔹 RUTAS DE INICIO DE SESIÓN */}




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
      <Route path="/ayuda" element={<Ayuda />} />


      {/* 🔹 RUTAS DE ADMINISTRADOR */}
      <Route path="/admin/home " element={<HomeAdmin />} />
      <Route path="/admin/denuncia" element={<Denuncia />} />
      <Route path="/admin/listado-denuncia" element={<ListadoDenuncia />} />
      <Route path="/admin/denuncia-detalle" element={<DenunciaDetalle />} />
      <Route path="/admin/busqueda" element={<Busqueda />} />
      <Route path="/admin/consulta-admin" element={<ConsultasA />} />



      {/*RUTAS DE FUNCIONARIO*/ }
      <Route path="/funcionario/listaFuncionario" element={<ListadoFuncionario />} />
      <Route path="/funcionario/rolesPermisos" element={<RolesPermisosFuncionario />} />
    </Routes>
  );
}

export default AppRouter;