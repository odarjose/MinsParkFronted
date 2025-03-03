"use client"

import { levelsMultiplication } from "@/utils/levelsUtils"
import LevelsComponents from "@/components/specific/Levels/LevelsComponents"

export function LevelsMultiply() {
    return (
      <LevelsComponents
        title="Cada problema resuelto es un paso más hacia el éxito. ¡Confía en ti, piensa con lógica y verás que las matemáticas son más fáciles de lo que parecen!"
        levels={levelsMultiplication}
      />
    );
}