import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";

interface Question {
  type: "input" | "multiple-choice" | "ordering" | "image-multiple-choice"; // Tipo de pregunta
  question?: string; // Texto de la pregunta (opcional)
  image?: string; // URL de la imagen (opcional)
  options?: (string | number)[]; // Opciones de respuesta
  correctAnswer?: string | number | (string | number)[]; // Respuesta correcta
}

const PowerGameHard: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [userInput, setUserInput] = useState<string>(""); // Para preguntas de tipo input
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    []
  ); // Para selección múltiple
  const [orderedOptions, setOrderedOptions] = useState<(string | number)[]>([]); // Para ordenar potencias
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null
  ); // Para selección única
  const [showConfetti, setShowConfetti] = useState(false);

  const questions: Question[] = [
    // Pregunta 1: Completar el resultado de la potencia
    {
      type: "input",
      question: "Completa el resultado de la potencia: 7² = 7 × 7 = _____",
      correctAnswer: "49",
    },
    // Pregunta 2: Completar el resultado de la potencia
    {
      type: "input",
      question: "Completa el resultado de la potencia: 9² = 9 × 9 = _____",
      correctAnswer: "81",
    },
    // Pregunta 3: Seleccionar potencias correctas
    {
      type: "multiple-choice",
      question: "¿Cuáles de estas son potencias correctas?",
      options: ["2³ = 6", "3⁴ = 81", "6³ = 216", "10² = 101"],
      correctAnswer: ["3⁴ = 81", "6³ = 216"],
    },
    // Pregunta 4: Ordenar potencias de mayor a menor
    {
      type: "ordering",
      question: "Ordena las potencias de mayor a menor:",
      options: ["3⁴", "2⁵", "5³", "4³"],
      correctAnswer: ["5³", "3⁴", "4³", "2⁵"],
    },
    // Pregunta 5: Seleccionar potencias incorrectas
    {
      type: "multiple-choice",
      question: "¿Cuáles de estas son potencias incorrectas?",
      options: ["3³ = 12", "5⁴ = 625", "2³ = 16", "3² = 6"],
      correctAnswer: ["3³ = 12", "2³ = 16", "3² = 6"],
    },
    // Pregunta 6: Ordenar potencias de mayor a menor
    {
      type: "ordering",
      question: "Ordena las potencias de mayor a menor:",
      options: ["6²", "2⁷", "3⁴", "5³", "4⁴"],
      correctAnswer: ["4⁴", "2⁷", "5³", "3⁴", "6²"],
    },

    // Pregunta 7: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENPN3.png", // Reemplaza con la ruta real de la imagen
      options: [132, 142, 244, 144],
      correctAnswer: 144,
    },
    // Pregunta 8: Imagen + selección múltiple
    {
      type: "image-multiple-choice",
      question: "¿Cuál es el resultado de la potencia?",
      image: "/ENPN5.png", // Reemplaza con la ruta real de la imagen
      options: [0, 30, 1, 32],
      correctAnswer: 1,
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput("");
      setSelectedOptions([]);
      setOrderedOptions([]);
      setSelectedOption(null);
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "input") {
      if (userInput.trim() === currentQuestion.correctAnswer) {
        setScore(score + 100);
        setCorrectAnswers(correctAnswers + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
    } else if (currentQuestion.type === "multiple-choice") {
      const correctAnswerArray = currentQuestion.correctAnswer as (
        | string
        | number
      )[];
      const allCorrect = selectedOptions.every((option) =>
        correctAnswerArray.includes(option)
      );
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
        JSON.stringify(orderedOptions) ===
        JSON.stringify(currentQuestion.correctAnswer);
      if (isCorrectOrder) {
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
    setUserInput("");
    setSelectedOptions([]);
    setOrderedOptions([]);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Potencia Fun!
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
            ) : currentQuestion.type === "multiple-choice" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setSelectedOptions((prev) =>
                          prev.includes(option)
                            ? prev.filter((item) => item !== option)
                            : [...prev, option]
                        )
                      }
                      className={`
                        p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
                        ${
                          selectedOptions.includes(option)
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
            ) : currentQuestion.type === "ordering" ? (
              <>
                <p className="text-xl text-gray-600 mb-2">
                  {currentQuestion.question}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setOrderedOptions((prev) =>
                          prev.includes(option)
                            ? prev.filter((item) => item !== option)
                            : [...prev, option]
                        )
                      }
                      className={`
                        p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
                        ${
                          orderedOptions.includes(option)
                            ? "bg-yellow-500 text-white"
                            : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                        }
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Orden seleccionado: {orderedOptions.join(", ") || "Ninguno"}
                </p>
              </>
            ) : currentQuestion.type === "image-multiple-choice" ? (
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
            ) : null}
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              (currentQuestion.type === "input" && !userInput.trim()) ||
              (currentQuestion.type === "multiple-choice" &&
                selectedOptions.length === 0) ||
              (currentQuestion.type === "ordering" &&
                orderedOptions.length !== currentQuestion.options?.length) ||
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

export default PowerGameHard;
