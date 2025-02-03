/** RUTAS DE NAVEGACION INTERNA EN LA APLICACION */

import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/Layout/Layout";
import { Home } from "@/pages/Home/homePage";
import { ProgressPage } from "@/pages/Progress/progressPage";
import { ProfilePage } from "@/pages/Profile/profilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
