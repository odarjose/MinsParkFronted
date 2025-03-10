export interface QuestionMultiplyLevel1 {
  type: "multiple-choice";
  question: string; // Texto de la pregunta
  options: number[]; // Opciones de respuesta
  correctAnswer: number; // Respuesta correcta
}

export interface QuestionMultiplyLevel2 {
  type: "input";
  question: string; // Texto de la pregunta
  correctAnswer: number; // Respuesta correcta
}

export interface QuestionMultiplyLevel3 {
  type: "multiple-choice";
  question: string; // Texto de la pregunta
  options: number[]; // Opciones de respuesta
  correctAnswer: number; // Respuesta correcta
}
