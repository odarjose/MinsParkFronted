"use client";
import { Card } from "@/components/common/Card";

export function LearningGoals() {
  return (
    <Card className="bg-pink-50 w-full md:w-3/4 lg:w-16 xl:w-xl mx-auto translate-x-0 md:translate-x-10 h-auto md:h-72">
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
        Objetivos de aprendizaje
      </h3>
      <div className="space-y-4">
        <Card size="small" className="bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900 text-sm md:text-base">
              Tabla de multiplicar
            </span>
            <span className="text-xs md:text-sm text-gray-600">
              8/12 completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: "66.67%" }}
            ></div>
          </div>
        </Card>
        <Card size="small" className="bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900 text-sm md:text-base">
              Resolución de problemas
            </span>
            <span className="text-xs md:text-sm text-gray-600">
              15/20 completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </Card>
      </div>
    </Card>
  );
}
