import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionMultiplyLevel1 } from "@/interfaces/gamesMultiplyInterface";
import { useNavigate } from "react-router-dom";

const MultiplicationGameLevel1: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  ); // Selección del usuario
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const questions: QuestionMultiplyLevel1[] = [
    {
      type: "multiple-choice",
      question: "125 × 2 =",
      options: [150, 320, 250, 650],
      correctAnswer: 250,
    },
    {
      type: "multiple-choice",
      question: "236 × 5 = ____",
      options: [1180, 1280, 1380, 1956],
      correctAnswer: 1180,
    },
    {
      type: "multiple-choice",
      question: "____ × 3 = 1,026",
      options: [342, 352, 362, 256],
      correctAnswer: 342,
    },
    {
      type: "multiple-choice",
      question: "152 × 12 =",
      options: [1724, 1824, 1834, 1838],
      correctAnswer: 1824,
    },
    {
      type: "multiple-choice",
      question: "____ × 5 = 1125",
      options: [225, 125, 325, 235],
      correctAnswer: 225,
    },
    {
      type: "multiple-choice",
      question: "24 × ____ = 72",
      options: [3, 13, 4, 6],
      correctAnswer: 3,
    },
    {
      type: "multiple-choice",
      question: "5 × ____ = 75",
      options: [5, 15, 25, 35],
      correctAnswer: 15,
    },
    {
      type: "multiple-choice",
      question: "12 × 12 =",
      options: [142, 144, 132, 143],
      correctAnswer: 144,
    },
    {
      type: "multiple-choice",
      question: "8 × __ = 72",
      options: [4, 5, 9, 8],
      correctAnswer: 9,
    },
    {
      type: "multiple-choice",
      question: "9 × 7 =",
      options: [42, 73, 63, 83],
      correctAnswer: 63,
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
          <div className="flex gap-4 justify-center">
            <button
              onClick={restartGame}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all"
            >
              Jugar de Nuevo
            </button>
            <button
              onClick={() => navigate("levels/multiplication")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
            >
              Ir a otra sección
            </button>
          </div>
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
            <p className="text-xl text-gray-600 mb-2">
              {currentQuestion.question}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`
                    p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
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

export default MultiplicationGameLevel1;
