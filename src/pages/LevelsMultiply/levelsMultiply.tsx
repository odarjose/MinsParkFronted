"use client";

import { levelsMultiplication } from "@/utils/levelsUtils";
import LevelsComponents from "@/components/specific/Levels/LevelsComponents";

import VideoGate from "@/components/common/VideoGate";

export function LevelsMultiply() {
  return (
    <VideoGate videoId="wVJRhd2xypY">
      <LevelsComponents
        title="Cada problema resuelto es un paso más hacia el éxito. ¡Confía en ti, piensa con lógica y verás que las matemáticas son más fáciles de lo que parecen!"
        levels={levelsMultiplication}
        backPath="/multiply/image" // Ruta para "Volver a Inicio"
        nextPath="/"
      />
    </VideoGate>
  );
}
