import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionLevel1 } from "@/interfaces/gamesDecimal";

const DecompositionGameLevel1: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null
  ); // Selección del usuario
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: QuestionLevel1[] = [
    {
      type: "multiple-choice",
      question: "Descompón el número 47,306 en su forma extendida.",
      options: [
        "40,000 + 7,000 + 300 + 0 + 6",
        "4,000 + 70,000 + 30 + 6",
        "400 + 7,000 + 30 + 6",
      ],
      correctAnswer: "40,000 + 7,000 + 300 + 0 + 6",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 62,154 en su forma extendida.",
      options: [
        "60,000 + 2,000 + 100 + 50 + 4",
        "6,000 + 20,000 + 154",
        "600,000 + 2,000 + 154",
      ],
      correctAnswer: "60,000 + 2,000 + 100 + 50 + 4",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 306 en su forma extendida.",
      options: ["3,000 + 6000 + 0 + 6", "300 + 0 + 6", "300 + 10 + 6"],
      correctAnswer: "300 + 0 + 6",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 25,253,024 en su forma extendida.",
      options: [
        "20,000,000 + 5,000,000 + 200,000 + 50,000 + 3,000 + 0 + 20 + 4",
        "200,000,000 + 50,000,000 + 200,000 + 500 + 30 + 0",
        "20,000,000 + 3,000,000 + 500,000 + 30,000 + 2,000 + 0 + 30 + 4",
        "20,000,000 + 5,000,000 + 200,000 + 50,000 + 3,000 + 0 + 20 + 4",
      ],
      correctAnswer:
        "20,000,000 + 5,000,000 + 200,000 + 50,000 + 3,000 + 0 + 20 + 4",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 2,356 en su forma extendida.",
      options: [
        "200 + 300 + 50 + 6",
        "20,000 + 3,000 + 500 + 60 + 6",
        "20,000,000 + 3,000 + 50 + 6",
        "2,000 + 300 + 50 + 6",
      ],
      correctAnswer: "2,000 + 300 + 50 + 6",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 52 en su forma extendida.",
      options: ["500 + 0 + 2", "50 + 2", "3"],
      correctAnswer: "50 + 2",
    },
    {
      type: "multiple-choice",
      question: "Descompón el número 89,250,360 en su forma extendida.",
      options: [
        "80,000,000 + 9,000,000 + 200,000 + 50,000 + 0 + 300 + 60 + 0",
        "800,000,000 + 90,000,000 + 2,000,000 + 500 + 30 + 0 + 6",
        "80,000,000 + 3,000,000 + 500,000 + 30,000 + 2,000 + 0 + 30 + 4",
        "80,000,000 + 9,000,000 + 200,000 + 50,000 + 300 + 60 + 0",
      ],
      correctAnswer:
        "80,000,000 + 9,000,000 + 200,000 + 50,000 + 0 + 300 + 60 + 0",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Resetear la selección para la siguiente pregunta
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
      setTimeout(() => setShowConfetti(false), 3000);
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
      <div className="min-h-screen bg-gradient-to-br bg-pink-50 flex items-center justify-center p-4">
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
              Descomposición Numérica Fun!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {currentQuestion.question}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`
                    p-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105
                    ${
                      selectedOption === option
                        ? "bg-yellow-500 text-white"
                        : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
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

export default DecompositionGameLevel1;
