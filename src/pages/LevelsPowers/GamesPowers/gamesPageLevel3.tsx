import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";

import { Question } from "@/interfaces/levelsIneterfaces";

const PowerGameLevel3: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [userInput, setUserInput] = useState<string>(""); // Para preguntas de tipo input
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // Para "multiple-select"
  const [orderedPowers, setOrderedPowers] = useState<string[]>([]); // Para "ordering"
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: Question[] = [
    // Juego 1: Completa la multiplicación
    {
      type: "input",
      question: "7³ = 7 x 7 x 7 = _____",
      correctAnswer: 343,
    },
    {
      type: "input",
      question: "6⁵ = 6 x 6 x 6 x 6 x 6 = _____",
      correctAnswer: 7776,
    },
    {
      type: "input",
      question: "8³ = 8 x 8 x 8 = _____",
      correctAnswer: 512,
    },
    // Juego 2: Selecciona las opciones correctas
    {
      type: "multiple-select",
      question: "¿Cuáles de estas son potencias correctas?",
      options: [
        { value: "2³ = 6", isCorrect: false },
        { value: "3⁴ = 81", isCorrect: true },
        { value: "6³= 216", isCorrect: true },
        { value: "10² = 101", isCorrect: false },
      ],
    },
    // Juego 3: Ordena las potencias de mayor a menor
    {
      type: "ordering",
      question: "Ordena las potencias de mayor a menor: 3⁴, 2², 5⁴, 4⁴",
      powers: ["3⁴", "2²", "5⁴", "4⁴"],
      correctOrder: ["5⁴", "3⁴", "4⁴", "2²"], // Orden correcto
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput("");
      setSelectedOptions([]);
      setOrderedPowers([]);
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "input") {
      if (Number(userInput) === currentQuestion.correctAnswer) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
    } else if (currentQuestion.type === "multiple-select") {
      const allCorrect =
        selectedOptions.every(
          (option) =>
            currentQuestion.options?.find((opt) => opt.value === option)
              ?.isCorrect,
        ) &&
        selectedOptions.length ===
          currentQuestion.options?.filter((opt) => opt.isCorrect).length;
      if (allCorrect) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
    } else if (currentQuestion.type === "ordering") {
      const isCorrectOrder =
        orderedPowers.join(",") === currentQuestion.correctOrder?.join(",");
      if (isCorrectOrder) {
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
    setUserInput("");
    setSelectedOptions([]);
    setOrderedPowers([]);
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
              Potencia Fun: Nivel Difícil
            </h1>
            {currentQuestion.type === "input" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Escribe tu respuesta aquí"
                  className="p-4 rounded-lg text-xl font-bold w-full border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                />
              </>
            ) : currentQuestion.type === "multiple-select" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (selectedOptions.includes(option.value)) {
                          setSelectedOptions(
                            selectedOptions.filter(
                              (opt) => opt !== option.value,
                            ),
                          );
                        } else {
                          setSelectedOptions([
                            ...selectedOptions,
                            option.value,
                          ]);
                        }
                      }}
                      className={`
                        p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
                        ${
                          selectedOptions.includes(option.value)
                            ? "bg-yellow-500 text-white"
                            : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                        }
                      `}
                    >
                      {option.value}
                    </button>
                  ))}
                </div>
              </>
            ) : currentQuestion.type === "ordering" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <div className="flex flex-col gap-4">
                  {currentQuestion.powers?.map((_power, index) => (
                    <select
                      key={index}
                      value={orderedPowers[index] || ""}
                      onChange={(e) => {
                        const newOrder = [...orderedPowers];
                        newOrder[index] = e.target.value;
                        setOrderedPowers(newOrder);
                      }}
                      className="p-4 rounded-lg text-xl font-bold w-full border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                    >
                      <option value="">Selecciona una potencia</option>
                      {currentQuestion.powers?.map((p, idx) => (
                        <option key={idx} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              (currentQuestion.type === "input" && !userInput.trim()) ||
              (currentQuestion.type === "multiple-select" &&
                selectedOptions.length === 0) ||
              (currentQuestion.type === "ordering" &&
                orderedPowers.some((p) => !p))
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

export default PowerGameLevel3;
