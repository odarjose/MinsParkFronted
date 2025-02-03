"use client";

import { Target } from "lucide-react";
import { Card } from "@/components/common/Card";

const stats = [
  { label: "Lecciones completadas", value: "8" },
  { label: "Preguntas de práctica", value: "45" },
  { label: "Puntuación media", value: "85%" },
  { label: "Tiempo empleado", value: "4.5 hrs" },
];

export function UserInfo() {
  return (
    <Card className="bg-pink-50 w-full md:w-xl  p-6">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          <Target className="w-10 h-10 text-purple-600" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
          <p className="text-gray-600">Grade 5 Student</p>
        </div>
      </div>

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} size="small" className="bg-gray-50 p-4">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
}
