import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { Question } from "@/interfaces/questionInterface";

const GamesPowers: React.FC = () => {
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
  const questions: Question[] = [
    // Ejercicio 1: Imagen + opciones de descomposición
    {
      type: "image-multiple-choice",
      question:
        "Selecciona la descomposición correcta de la siguiente potencia:",
      image: "/EP1.png", // Reemplaza con la URL real de la imagen
      options: ["2 + 2 + 2", "2 x 3", "2 x 2 x 2", "3 x 3 x 3"],
      correctAnswer: "2 x 2 x 2",
    },
    // Ejercicio 2: Imagen + opciones de descomposición
    {
      type: "image-multiple-choice",
      question:
        "Selecciona la descomposición correcta de la siguiente potencia:",
      image: "/EP2.png", // Reemplaza con la URL real de la imagen
      options: ["9 + 9 + 9 + 9 + 9", "9 x 9 x 9 x 9 x 9", "5 x 9", "3 x 3 x 3"],
      correctAnswer: "9 x 9 x 9 x 9 x 9",
    },
    // Ejercicio 3: Imagen + opciones de descomposición
    {
      type: "image-multiple-choice",
      question: "Descompón la siguiente potencia:",
      image: "/EP3.png", // Reemplaza con la URL real de la imagen
      options: [
        "1 + 1 + 1 + 1 + 1 + 1 + 1 + 1",
        "1 x 1 x 1 x 1 x 1 x 1 x 1 x 1",
        "1 x 8",
        "8 x 1",
      ],
      correctAnswer: "1 x 1 x 1 x 1 x 1 x 1 x 1 x 1",
    },
    // Ejercicio 4: Imagen + opciones de descomposición
    {
      type: "image-multiple-choice",
      question: "Descompón la siguiente potencia:",
      image: "/EP4.png", // Reemplaza con la URL real de la imagen
      options: ["5 x 5", "5 x 2", "5 + 5", "2 x 5"],
      correctAnswer: "5 x 5",
    },
    // Ejercicio 5: Sin imagen
    {
      type: "multiple-choice",
      question:
        "¿Cuál es la potencia que representa la multiplicación? 🔹 2 × 2 × 2 × 2 × 2 =",
      options: ["2⁴", "2⁵", "2⁶"],
      correctAnswer: "2⁵",
    },
    {
      type: "multiple-choice",
      question:
        "¿Cuál es la potencia que representa la multiplicación? 🔹 9 × 9 × 9 × 9 × 9 × 9 =",
      options: ["9⁸", "9⁶", "9⁹"],
      correctAnswer: "9⁶",
    },
    {
      type: "multiple-choice",
      question:
        "¿Cuál es la potencia que representa la multiplicación? 🔹 7 × 7 × 7 =",
      options: ["7²", "7³", "7⁵"],
      correctAnswer: "7³",
    },
    {
      type: "multiple-choice",
      question:
        "¿Cuál es la potencia que representa la multiplicación? 🔹 10 × 10 × 10 × 10 × 10 =",
      options: ["10²", "10³", "10⁵"],
      correctAnswer: "10⁵",
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
      <div className="min-h-screen  to-purple-50 flex items-center justify-center p-4">
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
              onClick={() => navigate("/levels/powers")} // Usa navigate en lugar de <a>
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
            {currentQuestion.type === "image-multiple-choice" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <img
                  src={currentQuestion.image}
                  alt="Potencia"
                  className="mx-auto mb-4 rounded-lg border-2 border-indigo-300"
                  style={{ width: "150px", height: "150px" }}
                />
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
              </>
            ) : (
              <>
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
              </>
            )}
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
