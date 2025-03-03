"use client"

import { levelsDecimalSystem } from "@/utils/levelsUtils"
import LevelsComponents from "@/components/specific/Levels/LevelsComponents"

export function LevelsDecimalSystem() {
    return (
      <LevelsComponents
        title="Cada número es como un rompecabezas: cada dígito tiene su lugar y su valor. ¡Aprende a descomponerlos y verás lo fácil que es entenderlos!"
        levels={levelsDecimalSystem}
      />
    );
}