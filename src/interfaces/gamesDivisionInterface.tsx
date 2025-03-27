export interface Question {
  type: "image-multiple-choice"; // Todas las preguntas son de tipo "imagen + selección múltiple"
  question?: string; // Texto de la pregunta (opcional)
  image: string; // URL de la imagen (obligatoria)
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}
export interface QuestionLevel2 {
  type: "multiple-choice"; // Todas las preguntas son de tipo selección múltiple
  question: string; // Texto de la pregunta
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}

export interface QuestionLevel3 {
  type: "multiple-choice"; // Todas las preguntas son de tipo selección múltiple
  question: string; // Texto de la pregunta
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}
