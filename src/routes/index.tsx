/** RUTAS DE NAVEGACION INTERNA EN LA APLICACION */

import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/Layout/Layout";
import { Home } from "@/pages/Home/homePage";
import { ProgressPage } from "@/pages/Progress/progressPage";
import { ProfilePage } from "@/pages/Profile/profilePage";
import { LevelsPowers } from "@/pages/LevelsPowers/levelsPowers";
import { LevelsDivision } from "@/pages/LevelsDivision/levelsDivision";
import { LevelsMultiply } from "@/pages/LevelsMultiply/levelsMultiply";
import { LevelsDecimalSystem } from "@/pages/LevelSystemDecimal/levelSystemDecimal";
import GamesPage from "@/pages/LevelsPowers/GamesPowers/gamesPage";



  

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="levels/powers" element={<LevelsPowers />} />
        <Route path="levels/division" element={<LevelsDivision />} />
        <Route path="levels/multiplication" element={<LevelsMultiply />} />
        <Route path="levels/decimal-system" element={<LevelsDecimalSystem />} />
        <Route path="games" element={<GamesPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
