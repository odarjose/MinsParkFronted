import React, { useEffect, useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionGameDecimalLevel3 } from "@/interfaces/gamesDecimal";

const DecimalSystemGameLevel3: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]); // Para almacenar las selecciones
  const [showConfetti, setShowConfetti] = useState(false);

  const questions = React.useMemo<QuestionGameDecimalLevel3[]>(
    () => [
      {
        type: "table-positioning",
        question: "Completa la descomposición del número 47,306.",
        positions: [
          "Decenas de mil",
          "Unidades de mil",
          "Centenas",
          "Decenas",
          "Unidades",
        ],
        options: ["0", "3", "4", "6", "7"],
        correctAnswer: ["4", "7", "3", "0", "6"],
      },
      {
        type: "table-positioning",
        question: "Completa la descomposición del número 5,678,302.",
        positions: [
          "Millones",
          "Centenas de mil",
          "Decenas de mil",
          "Unidades de mil",
          "Centenas",
          "Decenas",
          "Unidades",
        ],
        options: ["0", "2", "3", "5", "6", "7", "8"],
        correctAnswer: ["5", "6", "7", "8", "3", "0", "2"],
      },
      {
        type: "table-positioning",
        question: "Ubica el número 8,015,246 en la tabla posicional.",
        positions: [
          "Millones",
          "Centenas de mil",
          "Decenas de mil",
          "Unidades de mil",
          "Centenas",
          "Decenas",
          "Unidades",
        ],
        options: ["0", "1", "2", "4", "5", "6", "8"],
        correctAnswer: ["8", "0", "1", "5", "2", "4", "6"],
      },
    ],
    [],
  );

  useEffect(() => {
    // Inicializar las selecciones vacías para cada pregunta
    setSelectedValues(
      Array(questions[currentQuestionIndex].positions.length).fill(""),
    );
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    const isCorrect = selectedValues.every(
      (value, index) => value === currentQuestion.correctAnswer[index],
    );

    if (isCorrect) {
      setScore(score + 100);
      setCorrectAnswers(correctAnswers + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Mostrar confeti durante 3 segundos
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
    setSelectedValues([]);
  };

  if (showSummary) {
    return (
      <div className="min-h-screen bg-pink-50 to-purple-600 flex items-center justify-center p-4">
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
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 relative">
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
              Sistema Decimal Fun: Nivel 3
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {currentQuestion.question}
            </p>

            {/* Tabla Posicional */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {currentQuestion.positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <p className="text-lg font-bold">{position}:</p>
                  <select
                    value={selectedValues[index] || ""}
                    onChange={(e) => {
                      const newValues = [...selectedValues];
                      newValues[index] = e.target.value;
                      setSelectedValues(newValues);
                    }}
                    className="p-2 px-8 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                  >
                    <option value="">Selecciona</option>
                    {currentQuestion.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedValues.some((value) => !value)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:bg-gray-400"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecimalSystemGameLevel3;
