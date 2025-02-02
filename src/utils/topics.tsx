import {
  
  Calculator,
 
  Layers,
  PieChart,
  Flame,
} from "lucide-react";
import { ReactNode } from "react";

export type Topic = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
};

export const topics: Topic[] = [
  {
    id: 1,
    title: "Sistema de Numeracion Decimal",
    description: "Master your times tables from 1 to 12",
    icon: <Calculator className="w-8 h-8 text-purple-500" />,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Multiplicacion",
    description: "Learn to add, subtract, and compare fractions",
    icon: <Layers className="w-8 h-8 text-blue-500" />,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Division",
    description: "Solve real-world math problems",
    icon: <PieChart className="w-8 h-8 text-yellow-500" />,
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Potencias",
    description: "Solve real-world math problems",
    icon: <Flame className="w-8 h-8 text-red-500" />,
    difficulty: "Hard",
  },
];
