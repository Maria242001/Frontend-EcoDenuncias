import { Routes, Route } from "react-router-dom";
import InicioBienvenida from "../components/inicioBienvenida.jsx";
import Inicio from "../components/inicio.jsx";
import Solicitudes from "../pages/solicitud.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InicioBienvenida />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/solicitud" element={<Solicitudes/>} />
    </Routes>
  );
}

export default AppRouter;
