import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

interface TopicCardProps {
  title: string;
  description: string;
  imageSrc: string; // Nueva prop para la URL de la imagen
  difficulty: "Fácil" | "Medio" | "Fuerte";
  onClick: () => void;
  size?: "small" | "medium" | "large"; // Prop para el tamaño
}

export function TopicCard({
  title,
  description,
  imageSrc,
  difficulty,
  onClick,
  size = "small",
}: TopicCardProps) {
  const difficultyColors = {
    Fácil: "bg-green-100 text-green-800",
    Medio: "bg-yellow-100 text-yellow-800",
    Fuerte: "bg-red-100 text-red-800",
  };

  return (
    <Card onClick={onClick} size={size}>
      <div>
        {/* Imagen */}
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-xs h-xs object-cover object-center rounded-lg"
          />
        </div>

        {/* Dificultad */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>

        {/* Título y descripción */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>

        {/* Botón de acción */}
        <div className="mt-4 flex items-center text-purple-600 hover:text-purple-700 cursor-pointer">
          Empieza a aprender
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Card>
  );
}
