"use client";

import { levelsDivision } from "@/utils/levelsUtils";
import LevelsComponents from "@/components/specific/Levels/LevelsComponents";

import VideoGate from "@/components/common/VideoGate";

export function LevelsDivision() {
  return (
    <VideoGate videoId="NucooQbRE1U">
      <LevelsComponents
        title="¡Que comience la diversión con los números! Demuestra tu ingenio, resuelve con precisión y ¡a conquistar cada división! ¡Vamos!"
        levels={levelsDivision}
      />
    </VideoGate>
  );
}
export default LevelsDivision;
