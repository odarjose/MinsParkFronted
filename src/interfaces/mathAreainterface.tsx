import { ReactNode } from "react";

export interface MathAreaProps {
  id: string;
  name: string;
  progress: number;
  totalChallenges: number;
  completedChallenges: number;
  achievement?: {
    title: string;
    description: string;
    icon: ReactNode;
  };
}


