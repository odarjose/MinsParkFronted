export interface Question{
    type:"multiple-choice"
    question: string
    options: number[] | string[] // Opciones de las respuestas
    correctAnswer: number | string // Respuesta correcta
}