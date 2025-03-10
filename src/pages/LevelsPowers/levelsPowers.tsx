"use client";

import { levelsPowers } from "@/utils/levelsUtils";
import LevelsComponents from "@/components/specific/Levels/LevelsComponents";
import VideoGate from "@/components/common/VideoGate";

export function LevelsPowers() {
  return (
    <VideoGate videoId="-K0ZSm9lPeY">
      <LevelsComponents
        title="¡Es hora de elevar tu mente al máximo! Resuelve con energía, potencia tu conocimiento y ¡llega a la cima de cada desafío! ¡Vamos! "
        levels={levelsPowers}
      />
    </VideoGate>
  );
}

export default LevelsPowers;
