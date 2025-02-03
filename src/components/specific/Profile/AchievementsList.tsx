"use client";
import { Trophy, Star, Clock } from "lucide-react";
import { Card } from "@/components/common/Card";

const achievements = [
  {
    id: 1,
    title: "Aprendizaje rápido",
    description: "Completadas 5 lecciones en un día",
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    earned: true,
  },
  {
    id: 2,
    title: "Puntuación perfecta",
    description: "100% de aciertos en los ejercicios prácticos",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    earned: true,
  },
  {
    id: 3,
    title: "Campeón de matemáticas",
    description: "Completar todas las lecciones de multiplicación",
    icon: <Trophy className="w-6 h-6 text-blue-500" />,
    earned: false,
  },
];

export function AchievementsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4  sm:px-0">
      {achievements.map((achievement) => (
        <Card
          key={achievement.id}
          className={`bg-white shadow-sm ${
            achievement.earned
              ? "border-2 border-purple-500"
              : "opacity-50 border border-gray-200"
          }`}
        >
          <div className="flex items-center space-x-4 p-4">
            <div className="p-2 bg-gray-50 rounded-lg">{achievement.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
