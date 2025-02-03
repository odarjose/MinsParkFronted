import React from "react";

import { MathAreaProps } from "@/interfaces/mathAreainterface";

import { renderStars } from "@/utils/startCardUtils";
import { ProgressBar } from "./progressBar";

import { AchievementCard } from "./AchievementCard";

import { EncouragementCard } from "./EncouragementCard";

interface MathAreaCardProps {
  area: MathAreaProps;
}

export const MathAreaCard: React.FC<MathAreaCardProps> = ({ area }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{area.name}</h2>
        <div className="flex gap-1">{renderStars(area.progress)}</div>
      </div>

      <ProgressBar
        progress={area.progress}
        completedChallenges={area.completedChallenges}
        totalChallenges={area.totalChallenges}
      />

      {area.achievement && (
        <AchievementCard
          icon={area.achievement.icon}
          title={area.achievement.title}
          description={area.achievement.description}
        />
      )}

      {!area.achievement && area.progress > 0 && <EncouragementCard />}
    </div>
  );
};
