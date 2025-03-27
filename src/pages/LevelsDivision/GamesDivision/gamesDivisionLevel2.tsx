import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionLevel2 } from "@/interfaces/gamesDivisionInterface";

const DivisionGameLevel2: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null
  ); // Selección del usuario
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: QuestionLevel2[] = [
    {
      type: "multiple-choice",
      question:
        "Observa la siguiente división y selecciona si es exacta o inexacta: 47 ÷ 5 =",
      options: ["Exacta", "Inexacta"],
      correctAnswer: "Inexacta",
    },
    {
      type: "multiple-choice",
      question:
        "Observa la siguiente división y selecciona si es exacta o inexacta: 528 ÷ 12 =",
      options: ["Exacta", "Inexacta"],
      correctAnswer: "Exacta",
    },
    {
      type: "multiple-choice",
      question:
        "Observa la siguiente división y selecciona si es exacta o inexacta: 215 ÷ 12 =",
      options: ["Exacta", "Inexacta"],
      correctAnswer: "Inexacta",
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 125 ÷ 5 =",
      options: [5, 15, 25, 35],
      correctAnswer: 25,
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 168 ÷ 42 =",
      options: [44, 14, 4, 15],
      correctAnswer: 4,
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 529 ÷ 23 =",
      options: [23, 43, 53, 73],
      correctAnswer: 23,
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 125 ÷ 25 =",
      options: [5, 15, 25, 35],
      correctAnswer: 5,
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 288 ÷ 9 =",
      options: [42, 38, 32, 48],
      correctAnswer: 32,
    },
    {
      type: "multiple-choice",
      question: "Halla el resultado de la división: 288 ÷ 9 =",
      options: [42, 38, 32, 48],
      correctAnswer: 32,
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

export default DivisionGameLevel2;
