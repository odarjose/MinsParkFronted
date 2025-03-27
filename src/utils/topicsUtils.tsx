import { Calculator, Layers, PieChart, Flame } from "lucide-react";
import { ReactNode } from "react";

export type Topic = {
  path: string;
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: "Facil" | "Medio" | "Fuerte";
};

export const topics: Topic[] = [
  {
    id: 1,
    title: "Sistema de Numeracion Decimal",
    description: "Descubre el poder de los numeros",
    icon: <Calculator className="w-8 h-8 text-purple-500" />,
    difficulty: "Facil",
    path: "decimal/image",
  },
  {
    id: 2,
    title: "Multiplicacion",
    description: "¡Multiplica tus conocimientos!",
    icon: <Layers className="w-8 h-8 text-blue-500" />,
    difficulty: "Medio",
    path: "multiply/image",
  },
  {
    id: 3,
    title: "Division",
    description: "¡Divide y conquista!",
    icon: <PieChart className="w-8 h-8 text-yellow-500" />,
    difficulty: "Fuerte",
    path: "division/image",
  },
  {
    id: 4,
    title: "Potencias",
    description: "¡Eleva tu aprendizaje al máximo!",
    icon: <Flame className="w-8 h-8 text-red-500" />,
    difficulty: "Fuerte",
    path: "potencia/image",
  },
];
