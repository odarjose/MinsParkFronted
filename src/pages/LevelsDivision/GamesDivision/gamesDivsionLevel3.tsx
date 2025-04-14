import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionLevel3 } from "@/interfaces/gamesDivisionInterface";
import { useNavigate } from "react-router-dom";

const DivisionGameLevel3: React.FC = () => {
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

  const questions: QuestionLevel3[] = [
    {
      type: "multiple-choice",
      question:
        "Sofía tiene 84 caramelos y quiere repartirlos entre 12 amigos por igual. ¿Cuántos caramelos recibe cada amigo?",
      options: [4, 5, 7, 12],
      correctAnswer: 7,
    },
    {
      type: "multiple-choice",
      question:
        "Un agricultor tiene 240 manzanas y las quiere colocar en 8 canastas con la misma cantidad en cada una. ¿Cuántas manzanas habrá en cada canasta?",
      options: [40, 30, 15, 20],
      correctAnswer: 30,
    },
    {
      type: "multiple-choice",
      question:
        "Ana tiene 144 globos y quiere repartirlos en 12 bolsas, poniendo la misma cantidad en cada una. ¿Cuántos globos hay en cada bolsa?",
      options: [10, 12, 14, 16],
      correctAnswer: 12,
    },
    {
      type: "multiple-choice",
      question:
        "Una fábrica de chocolates empaqueta 225 chocolates en 15 cajas con la misma cantidad. ¿Cuántos chocolates hay en cada caja?",
      options: [10, 35, 25, 15],
      correctAnswer: 15,
    },
    {
      type: "multiple-choice",
      question:
        "Una maestra tiene 312 lápices y los distribuye entre 24 estudiantes en partes iguales. ¿Cuántos lápices recibe cada estudiante?",
      options: [30, 35, 23, 13],
      correctAnswer: 13,
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
      <div className="min-h-screen  flex items-center justify-center p-4">
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
              onClick={() => navigate("levels/division")} // Usa navigate en lugar de <a>
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
    <div className="min-h-screen  flex items-center justify-center p-4 relative">
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

export default DivisionGameLevel3;
