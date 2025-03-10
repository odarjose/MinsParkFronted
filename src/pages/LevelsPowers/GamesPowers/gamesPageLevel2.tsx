import React, { useState, useEffect } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";

interface MatchingPair {
  power: string; // Ejemplo: "3^3"
  result: number; // Ejemplo: 27
}

interface Question {
  type: "matching" | "multiple-choice";
  question?: string; // Solo para selección múltiple
  pairs?: MatchingPair[]; // Solo para preguntas de tipo "matching"
  options?: (number | string)[]; // Solo para selección múltiple
  correctAnswer?: number | string; // Respuesta correcta
}

const PowerGameLevel2: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | string | null>(
    null
  ); // Para selección múltiple
  const [matchedPairs, setMatchedPairs] = useState<
    { power: string; result: number | null }[]
  >([]); // Para "matching"
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: Question[] = [
    // Juego 1: Une las potencias con sus resultados
    {
      type: "matching",
      pairs: [
        { power: "3³", result: 27 },
        { power: "2⁴", result: 16 },
        { power: "5³", result: 125 },
        { power: "4³", result: 64 },
        { power: "9²", result: 81 },
      ],
    },
    // Juego 2: Selección múltiple
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
  ];

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "matching") {
      // Inicializar matchedPairs con todas las potencias y resultados en null
      setMatchedPairs(
        currentQuestion.pairs?.map((pair) => ({
          power: pair.power,
          result: null, // Resultado inicialmente nulo
        })) || []
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

    if (currentQuestion.type === "matching") {
      const allCorrect = matchedPairs.every(
        (pair) =>
          currentQuestion.pairs?.find((p) => p.power === pair.power)?.result ===
          pair.result
      );
      if (allCorrect) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
    } else if (currentQuestion.type === "multiple-choice") {
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
              Potencia Fun!
            </h1>
            {currentQuestion.type === "matching" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  Une cada potencia con su resultado:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {currentQuestion.pairs?.map((pair, index) => (
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
                                : mp
                            )
                          )
                        }
                        className="p-2 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                      >
                        <option value="">Selecciona un resultado</option>
                        {currentQuestion.pairs?.map((p, idx) => (
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
              (currentQuestion.type === "matching" &&
                matchedPairs.some((mp) => mp.result === null)) ||
              (currentQuestion.type === "multiple-choice" &&
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

export default PowerGameLevel2;
