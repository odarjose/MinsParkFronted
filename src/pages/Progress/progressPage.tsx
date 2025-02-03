import { MathAreaCard } from "@/components/specific/Progreso/MathAreaCard";

import { TotalProgress } from "@/components/specific/Progreso/TotalProgress";

import { MathAreaProps } from "@/interfaces/mathAreainterface";

import { Crown, Trophy } from "lucide-react";

export function ProgressPage() {
  const mathAreas: MathAreaProps[] = [
    {
      id: "decimal",
      name: "Sistema de numeración decimal",
      progress: 80,
      totalChallenges: 10,
      completedChallenges: 8,
      achievement: {
        title: "Maestro del número",
        description: "¡Has dominado el sistema decimal!",
        icon: <Crown className="w-8 h-8 text-yellow-500" />,
      },
    },
    {
      id: "multiplication",
      name: "Multiplicación",
      progress: 60,
      totalChallenges: 15,
      completedChallenges: 9,
      achievement: {
        title: "Experto en multiplicación",
        description: "¡Completados los retos avanzados de multiplicación!",
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      },
    },
    {
      id: "division",
      name: "División",
      progress: 40,
      totalChallenges: 10,
      completedChallenges: 4,
    },
    {
      id: "potentiation",
      name: "Potenciación",
      progress: 30,
      totalChallenges: 8,
      completedChallenges: 2,
    },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Viaje en el aprendizaje de las matemáticas
        </h1>
      </div>
      <div>
        <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathAreas.map((area) => (
            <MathAreaCard key={area.id} area={area} />
          ))}
        </div>

        <TotalProgress />
      </div>
    </>
  );
}
