export interface QuestionGameDecimalLevel1 {
  type: "multiple-choice";
  question: string; // Texto de la pregunta
  options: string[]; // Opciones de respuesta
  correctAnswer: string; // Respuesta correcta
}

export interface QuestionGameDecimalLevel2 {
  type: "multiple-choice";
  question: string; // Texto de la pregunta
  options: string[]; // Opciones de respuesta
  correctAnswer: string; // Respuesta correcta
}

export interface QuestionGameDecimalLevel3 {
  type: "table-positioning";
  question: string; // Texto de la pregunta
  positions: string[]; // Nombres de las posiciones (Millones, Centenas de mil, etc.)
  options: string[]; // Dígitos disponibles para seleccionar
  correctAnswer: string[]; // Respuesta correcta para cada posició
}
