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
import GamesPage from "@/pages/LevelsPowers/GamesPowers/gamesPageLevel1";
import PowerGameLevel2 from "@/pages/LevelsPowers/GamesPowers/gamesPageLevel2";
import PowerGameLevel3 from "@/pages/LevelsPowers/GamesPowers/gamesPageLevel3";
import DivisionGame from "@/pages/LevelsDivision/GamesDivision/gamesDivisionLevel1";
import DivisionGameLevel2 from "@/pages/LevelsDivision/GamesDivision/gamesDivisionLevel2";
import DivisionGameLevel3 from "@/pages/LevelsDivision/GamesDivision/gamesDivsionLevel3";

import MultiplicationGameLevel1 from "@/pages/LevelsMultiply/GamesMultiply/gamesMultiplyLevel1";
import MultiplicationGameLevel2 from "@/pages/LevelsMultiply/GamesMultiply/gamesMultiplyLevel2";
import MultiplicationGameLevel3 from "@/pages/LevelsMultiply/GamesMultiply/gamesMultiplyLevel3";

import DecimalSystemGameLevel1 from "@/pages/LevelSystemDecimal/GameSystemDecimal/gameSystemDecimalLevel1";
import DecimalSystemGameLevel2 from "@/pages/LevelSystemDecimal/GameSystemDecimal/gameSystemDecimalLevel2";
import DecimalSystemGameLevel3 from "@/pages/LevelSystemDecimal/GameSystemDecimal/gameSystemDecimalLevel3";

import LoginPage from "@/pages/Login/LoginPage";

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
        <Route path="games/1" element={<GamesPage />} />
        <Route path="games/2" element={<PowerGameLevel2 />} />
        <Route path="games/3" element={<PowerGameLevel3 />} />
        <Route path="games/division/1" element={<DivisionGame />} />
        <Route path="games/division/2" element={<DivisionGameLevel2 />} />
        <Route path="games/division/3" element={<DivisionGameLevel3 />} />
        <Route
          path="games/multiplication/1"
          element={<MultiplicationGameLevel1 />}
        />
        <Route
          path="games/multiplication/2"
          element={<MultiplicationGameLevel2 />}
        />
        <Route
          path="games/multiplication/3"
          element={<MultiplicationGameLevel3 />}
        />
        <Route
          path="games/decimal-system/1"
          element={<DecimalSystemGameLevel1 />}
        />
        <Route
          path="games/decimal-system/2"
          element={<DecimalSystemGameLevel2 />}
        />
        <Route
          path="games/decimal-system/3"
          element={<DecimalSystemGameLevel3 />}
        />

        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
