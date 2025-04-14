import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionLevel2 } from "@/interfaces/gamesDecimal";
import { useNavigate } from "react-router-dom";

const DecompositionGameLevel2: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  ); // Selección del usuario
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: QuestionLevel2[] = [
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 96,753 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 6?",
      image: "/ESD1.png", // Reemplaza con la ruta real de la imagen
      options: [6000, 60000, 600, 60],
      correctAnswer: 6000,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 23,847 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 3?",
      image: "/ESD2.png", // Reemplaza con la ruta real de la imagen
      options: [300, 3000, 30, 3],
      correctAnswer: 3000,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 8,512 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 1?",
      image: "/ESD3.png", // Reemplaza con la ruta real de la imagen
      options: [10, 1000, 100, 100000],
      correctAnswer: 10,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 968,753 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 9?",
      image: "/ESD4.png", // Reemplaza con la ruta real de la imagen
      options: [9000, 90000, 900, 900000],
      correctAnswer: 900000,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 23,847 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 3?",
      image: "/ESD5.png", // Reemplaza con la ruta real de la imagen
      options: [300, 3000, 30, 30000],
      correctAnswer: 3000,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 75 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 7?",
      image: "/ESD6.png", // Reemplaza con la ruta real de la imagen
      options: [700, 70, 7, 7000],
      correctAnswer: 70,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 34,548 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 3?",
      image: "/ESD7.png", // Reemplaza con la ruta real de la imagen
      options: [30000, 3000, 300, 30000000],
      correctAnswer: 30000,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 562 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 5?",
      image: "/ESD8.png", // Reemplaza con la ruta real de la imagen
      options: [50, 500, 5, 5000],
      correctAnswer: 500,
    },
    {
      type: "image-multiple-choice",
      question:
        "Si descomponemos el número 465,235 según el valor posicional de sus dígitos, ¿cuál es el valor del dígito 4?",
      image: "/ESD9.png", // Reemplaza con la ruta real de la imagen
      options: [40000, 400000, 400, 4000],
      correctAnswer: 400000,
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
  const navigate = useNavigate();

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
              onClick={() => navigate("/levels/decimal-system")} // Usa navigate en lugar de <a>
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
    <div className="min-h-screen   flex items-center justify-center p-4 relative">
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
            <img
              src={currentQuestion.image}
              alt="Tabla de Valor Posicional"
              className="mx-auto mb-4 rounded-lg border-2 border-indigo-300"
              style={{ width: "350px", height: "150px" }}
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

export default DecompositionGameLevel2;
