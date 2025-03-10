import { ReactNode } from "react";

// Definir la interfaz para los niveles
export interface Level {
  id: number; // identificador único
  route: string; // Ruta a la que navegar
  title: string; // Titulo del nivel
  description: string; // Descripcion del nivel
  icon: ReactNode; // Icono del nivel
  color: string; // CLase de color del gradiante
}

// Definir los tipos de los props del componente
export interface LevelsComponentsProps {
  title: string;
  levels: Level[];
}

// Definir los tipos de las questions

export interface Question {
  type: "input" | "multiple-select" | "ordering";
  question?: string; // Texto de la pregunta
  options?: { value: string; isCorrect: boolean }[]; // Opciones para "multiple-select"
  powers?: string[]; // Potencias para "ordering"
  correctOrder?: string[]; // Orden correcto para "ordering"
  correctAnswer?: number; // Respuesta correcta para "input"
}
