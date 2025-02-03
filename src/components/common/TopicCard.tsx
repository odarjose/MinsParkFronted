import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

interface TopicCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: "Facil" | "Medio" | "Fuerte";
  onClick: () => void;
  size?: "small" | "medium" | "large"; // Nueva prop para el tamaño
}

export function TopicCard({
  title,
  description,
  icon,
  difficulty,
  onClick,
  size = "medium",
}: TopicCardProps) {
  const difficultyColors = {
    Facil: "bg-green-100 text-green-800",
    Medio: "bg-yellow-100 text-yellow-800",
    Fuerte: "bg-red-100 text-red-800",
  };

  return (
    <Card onClick={onClick} size={size}>
      <div>
        <div className="flex items-center justify-between mb-4">
          {icon}
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center text-purple-600 hover:text-purple-700">
          Empieza a aprender
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Card>
  );
}
