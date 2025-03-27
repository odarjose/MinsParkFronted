
export interface QuestionMultiplyLevel1 {
  type: "multiple-choice"; // Todas las preguntas son de tipo selección múltiple
  question: string; // Texto de la pregunta
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}
export interface QuestionMultiplyLevel2 {
  type: "input"; // Todas las preguntas son de tipo completar
  question: string; // Texto de la pregunta
  correctAnswer: string | number; // Respuesta correcta
}



export interface QuestionMultiplyLevel3 {
  type: "multiple-choice"; // Todas las preguntas son de tipo selección múltiple
  question: string; // Texto de la pregunta
  options: (string | number)[]; // Opciones de respuesta
  correctAnswer: string | number; // Respuesta correcta
}
