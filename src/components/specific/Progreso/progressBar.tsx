// src/components/ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  progress: number;
  completedChallenges: number;
  totalChallenges: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  completedChallenges,
  totalChallenges,
}) => {
  return (
    <div className="mb-4">
      <div className="h-3 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {completedChallenges} of {totalChallenges} retos superados
      </div>
    </div>
  );
};
