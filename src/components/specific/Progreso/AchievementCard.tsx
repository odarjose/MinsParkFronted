// src/components/AchievementCard.tsx
import React from "react";

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="mt-4 bg-yellow-50 rounded-lg p-4 flex items-center gap-4">
      {icon}
      <div>
        <h3 className="font-semibold text-yellow-800">{title}</h3>
        <p className="text-sm text-yellow-700">{description}</p>
      </div>
    </div>
  );
};
