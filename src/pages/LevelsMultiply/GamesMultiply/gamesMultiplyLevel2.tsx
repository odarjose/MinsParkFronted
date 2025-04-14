import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { QuestionMultiplyLevel2 } from "@/interfaces/gamesMultiplyInterface";

const MultiplicationGameLevel2: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [userInput, setUserInput] = useState<string>(""); // Respuesta del usuario
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const questions: QuestionMultiplyLevel2[] = [
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 24 × ____ = 72",
      correctAnswer: "3",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: ____ × 5 = 75",
      correctAnswer: "15",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 32 × 2 = ____",
      correctAnswer: "64",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: ____ × 4 = 164",
      correctAnswer: "41",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 12 × ____ = 72",
      correctAnswer: "6",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 11 × 2 = ____",
      correctAnswer: "22",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: ___ × 9 = 72",
      correctAnswer: "8",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 12 × ____ = 84",
      correctAnswer: "7",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: _____ × 4 = 44",
      correctAnswer: "11",
    },
    {
      type: "input",
      question: "Completa la siguiente multiplicación: 125 × ____ = 375",
      correctAnswer: "3",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput(""); // Resetear la entrada para la siguiente pregunta
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userInput.trim() === String(currentQuestion.correctAnswer)) {
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
    setUserInput("");
  };

  if (showSummary) {
    return (
      <div className="min-h-screen   flex items-center justify-center p-4">
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
              onClick={() => navigate("/levels/multiplication")}
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
    <div className="min-h-screen flex items-center justify-center p-4 relative">
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
              Multiplicación Fun!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {currentQuestion.question}
            </p>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Escribe tu respuesta aquí"
              className="p-4 rounded-lg text-xl font-bold w-full border-2 border-indigo-300 focus:border-indigo-500 transition-all mb-4"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!userInput.trim()}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:bg-gray-400"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationGameLevel2;
