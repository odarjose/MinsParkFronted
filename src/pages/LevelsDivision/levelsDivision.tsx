"use client"

import { levelsDivision } from "@/utils/levelsUtils"
import LevelsComponents from "@/components/specific/Levels/LevelsComponents"

export function LevelsDivision() {
    return (
        <LevelsComponents
        title="¡Que comience la diversión con los números! Demuestra tu ingenio, resuelve con precisión y ¡a conquistar cada división! ¡Vamos!"
        levels={levelsDivision}
        />
    )
}
export default LevelsDivision