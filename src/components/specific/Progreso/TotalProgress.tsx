// src/components/TotalProgress.tsx
import React from "react";
import { Medal } from "lucide-react";

export const TotalProgress: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
        <Medal className="w-6 h-6 text-blue-500" />
        <span className="font-medium text-gray-700">
          Progreso total: 52% Completo
        </span>
      </div>
    </div>
  );
};
