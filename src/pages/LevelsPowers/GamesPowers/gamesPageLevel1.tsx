import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";

import { Question } from "@/interfaces/questionInterface";

const GamesPowers: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | string | null>(
    null
  ); // Para preguntas de selección múltiple
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: Question[] = [
    {
      type: "multiple-choice",
      question: "2 × 2 × 2 × 2 = ",
      options: ["2⁶", "2⁴", "2⁵", "2⁰"],
      correctAnswer: "2⁴",
    },
    {
      type: "multiple-choice",
      question: "3 × 3 × 3 × 3 × 3 × 3 = ",
      options: ["3¹", "3⁶", "3¹⁰", "3⁷"],
      correctAnswer: "3⁶",
    },
    { 
      type: "multiple-choice",
      question: "9 × 9 × 9 × 9 × 9 = ",
      options: ["9²", "9⁵", "9⁶", "9⁸"],
      correctAnswer: "9⁵",
    },
    {
      type: "multiple-choice",
      question: "¿Cuál es el resultado de 2^3?",
      options: [6, 4, 8, 16],
      correctAnswer: 8,
    },
    {
      type: "multiple-choice",
      question: "¿Cuál es el resultado de 4^3?",
      options: [64, 75, 4, 65],
      correctAnswer: 64,
    },
    {
      type: "multiple-choice",
      question: "¿Cuál es el resultado de 9^2?",
      options: [78, 49, 80, 81],
      correctAnswer: 81,
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Resetear la seleccion para la siguiente pregunta
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 100);
      setCorrectAnswers(correctAnswers + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Mostrar el confeti por 3 segundos
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setTimeout(handleNextQuestion, 1000);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setShowSummary(false);
    setSelectedOption(null);
  };

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full text-center relative">
          <Trophy className="text-yellow-500 mx-auto mb-4 w-16 h-16 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Juego Terminado!
          </h1>
          <p className="text-xl text-gray-600 mb-2">Puntaje Total: {score}</p>
          <p className="text-lg text-gray-600 mb-4">
            Respuestas Correctas: {correctAnswers} | Respuestas Incorrectas:{" "}
            {incorrectAnswers}
          </p>
          <button
            onClick={restartGame}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all"
          >
            Jugar de Nuevo
          </button>
          <Sparkles className="absolute top-0 right-0 w-16 h-16 text-yellow-400 animate-spin" />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br bg-pink-50 flex items-center justify-center p-4 relative">
      {/* Animación de Confeti */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full text-center relative overflow-hidden">
        {/* Animación de Entrada */}
        <div className="animate-fade-in-up">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              <span className="text-2xl font-bold">Puntaje: {score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-purple-500" />
              <span className="text-xl">
                Pregunta: {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Potencia == Diversión
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {currentQuestion.question}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`
                  p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
                  ${
                    selectedOption === option
                      ? "bg-yellow-300 text-white" // Color amarillo para cualquier selección
                      : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:bg-gray-400"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesPowers;
