export interface QuestionLevel1 {
  type: "multiple-choice"; // Todas las preguntas son de tipo selección múltiple
  question: string; // Texto de la pregunta
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}

export interface QuestionLevel2 {
  type: "image-multiple-choice"; // Todas las preguntas son de tipo "imagen + selección múltiple"
  question: string; // Texto de la pregunta
  image: string; // URL de la imagen (obligatoria)
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}

interface Position {
  name: string; // Nombre de la posición (ej. "Millones", "Centenas de mil", etc.)

}

export interface QuestionLevel3 {
  type: "image-selection"; // Todas las preguntas son de tipo "imagen + selección"
  question: string; // Texto de la pregunta
  image: string; // URL de la imagen (obligatoria)
  positions: Position[]; // Posiciones a completar
  options: (string | number)[]; // Opciones disponibles para cada posición
  correctAnswers: Record<string, string | number>; // Respuestas correctas
}
