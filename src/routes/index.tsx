/** RUTAS DE NAVEGACION INTERNA EN LA APLICACION */

import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};
export default AppRoutes;
