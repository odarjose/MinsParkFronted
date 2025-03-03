"use client";

import { levelsPowers } from "@/utils/levelsUtils";
import LevelsComponents from "@/components/specific/Levels/LevelsComponents";

export function LevelsPowers() {
  return (
    <LevelsComponents
      title="¡Es hora de elevar tu mente al máximo! Resuelve con energía, potencia tu conocimiento y ¡llega a la cima de cada desafío! ¡Vamos! "
      levels={levelsPowers}
    />
  );
}

export default LevelsPowers;
