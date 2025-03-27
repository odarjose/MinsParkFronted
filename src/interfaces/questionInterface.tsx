export interface Question {
  type: "image-multiple-choice" | "multiple-choice"; // Tipo de pregunta
  question?: string; // Texto de la pregunta (opcional)
  image?: string; // URL de la imagen (opcional)
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}
