"use client";

import { levelsDecimalSystem } from "@/utils/levelsUtils";
import LevelsComponents from "@/components/specific/Levels/LevelsComponents";

import VideoGate from "@/components/common/VideoGate";

export function LevelsDecimalSystem() {
  return (
    <VideoGate videoId="eNodAB9v6YM">
      <LevelsComponents
        title="Cada número es como un rompecabezas: cada dígito tiene su lugar y su valor. ¡Aprende a descomponerlos y verás lo fácil que es entenderlos!"
        levels={levelsDecimalSystem}
      />
    </VideoGate>
  );
}
