import React, { useEffect, useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

interface Question {
  type: "multi-potencia" | "image-multiple-choice"; // Tipo de pregunta
  question?: string; // Texto de la pregunta (opcional)
  image?: string; // URL de la imagen (opcional)
  options?: (string | number)[]; // Opciones de respuesta
  correctAnswer?: string | number; // Respuesta correcta
  potencias?: { power: string; result: number }[]; // Para preguntas con múltiples potencias
}

const PowerGameMedium: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  ); // Selección del usuario
  const [matchedPairs, setMatchedPairs] = useState<
    { power: string; result: number | null }[]
  >([]); // Para la primera pregunta
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: Question[] = [
    // Pregunta 1: Selecciona la respuesta correcta de cada potencia
    {
      type: "multi-potencia",
      question: "Selecciona la respuesta correcta de cada potencia:",
      potencias: [
        { power: "3³", result: 27 },
        { power: "2⁴", result: 16 },
        { power: "5³", result: 125 },
        { power: "4³", result: 64 },
        { power: "9²", result: 81 },
      ],
    },
    // Pregunta 2: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP2.png", // Reemplaza con la ruta real de la imagen
      options: [6, 4, 9, 8],
      correctAnswer: 8,
    },
    // Pregunta 3: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP3.png", // Reemplaza con la ruta real de la imagen
      options: [64, 75, 12, 65],
      correctAnswer: 64,
    },
    // Pregunta 4: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP4.png", // Reemplaza con la ruta real de la imagen
      options: [78, 80, 91, 81],
      correctAnswer: 81,
    },
    // Pregunta 5: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP5.png", // Reemplaza con la ruta real de la imagen
      options: [125, 25, 725, 625],
      correctAnswer: 625,
    },
    // Pregunta 6: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP6.png", // Reemplaza con la ruta real de la imagen
      options: [1, 0, 2, 9],
      correctAnswer: 1,
    },
    // Pregunta 7: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP7.png", // Reemplaza con la ruta real de la imagen
      options: [10, 0, 2, 100],
      correctAnswer: 10,
    },
    // Pregunta 8: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENP8.png", // Reemplaza con la ruta real de la imagen
      options: [1, 0, 22, 2],
      correctAnswer: 1,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "multi-potencia") {
      // Inicializar matchedPairs con todas las potencias y resultados en null
      setMatchedPairs(
        currentQuestion.potencias?.map((pair) => ({
          power: pair.power,
          result: null, // Resultado inicialmente nulo
        })) || [],
      );
    }
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setMatchedPairs([]); // Resetear pares emparejados para la siguiente pregunta
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "multi-potencia") {
      const allCorrect = matchedPairs.every(
        (pair) =>
          currentQuestion.potencias?.find((p) => p.power === pair.power)
            ?.result === pair.result,
      );
      if (allCorrect) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
    } else if (currentQuestion.type === "image-multiple-choice") {
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
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
    setMatchedPairs([]);
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
              onClick={() => navigate("levels/powers")} // Usa navigate en lugar de <a>
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
            {currentQuestion.type === "multi-potencia" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {currentQuestion.potencias?.map((pair, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <p className="text-lg font-bold">{pair.power}</p>
                      <select
                        value={
                          matchedPairs.find((mp) => mp.power === pair.power)
                            ?.result || ""
                        }
                        onChange={(e) =>
                          setMatchedPairs((prev) =>
                            prev.map((mp) =>
                              mp.power === pair.power
                                ? { ...mp, result: Number(e.target.value) }
                                : mp,
                            ),
                          )
                        }
                        className="p-2 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                      >
                        <option value="">Selecciona un resultado</option>
                        {currentQuestion.potencias?.map((p, idx) => (
                          <option key={idx} value={p.result}>
                            {p.result}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                {currentQuestion.image && (
                  <img
                    src={currentQuestion.image}
                    alt="Potencia"
                    className="mx-auto mb-4 rounded-lg border-2 border-indigo-300"
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options?.map((option, index) => (
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
            disabled={
              (currentQuestion.type === "multi-potencia" &&
                matchedPairs.some((mp) => mp.result === null)) ||
              (currentQuestion.type === "image-multiple-choice" &&
                selectedOption === null)
            }
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:bg-gray-400"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PowerGameMedium;
