"use client";

import { ProfileHeader } from "@/components/specific/Profile/profileHeader";
import { UserInfo } from "@/components/specific/Profile/userInfo";
import { LearningGoals } from "@/components/specific/Profile/LearningGoals";
import { AchievementsList } from "@/components/specific/Profile/AchievementsList";

export function ProfilePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <ProfileHeader />

      {/* Sección de UserInfo y LearningGoals */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">
        <div>
          <UserInfo />
        </div>
        <div className="">
          <LearningGoals />
        </div>
      </div>

      {/* Sección de Logros */}
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 lg:translate-x-10">
          Logros
        </h3>
        <AchievementsList />
      </div>
    </div>
  );
}
