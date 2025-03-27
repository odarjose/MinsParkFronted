import React, { useState } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { QuestionLevel3 } from "@/interfaces/gamesDecimal";
import { useNavigate } from "react-router-dom";

const DecompositionGameLevel3: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedValues, setSelectedValues] = useState<
    Record<string, string | number>
  >({}); // Selecciones del usuario
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const questions: QuestionLevel3[] = [
    {
      type: "image-selection",
      question:
        "Selecciona el valor correcto para cada posición del siguiente número:",
      image: "/EDN31.png", // Reemplaza con la ruta real de la imagen
      positions: [
        { name: "Millones" },
        { name: "Centenas de mil" },
        { name: "Decenas de mil" },
        { name: "Unidades de mil" },
        { name: "Centenas" },
        { name: "Decenas" },
        { name: "Unidades" },
      ],
      options: [2, 5, 8, 4, 7, 3, 0, 6],
      correctAnswers: {
        Millones: 2,
        "Centenas de mil": 5,
        "Decenas de mil": 4,
        "Unidades de mil": 7,
        Centenas: 3,
        Decenas: 0,
        Unidades: 6,
      },
    },
    {
      type: "image-selection",
      question:
        "Selecciona el valor correcto para cada posición del siguiente número:",
      image: "/EDN32.png", // Reemplaza con la ruta real de la imagen
      positions: [
        { name: "Unidad de Millón" },
        { name: "Centenas de mil" },
        { name: "Decenas de mil" },
        { name: "Unidades de mil" },
        { name: "Centenas" },
        { name: "Decenas" },
        { name: "Unidades" },
      ],
      options: [5, 6, 7, 8, 3, 0, 2],
      correctAnswers: {
        "Unidad de Millón": 5,
        "Centenas de mil": 6,
        "Decenas de mil": 7,
        "Unidades de mil": 8,
        Centenas: 3,
        Decenas: 0,
        Unidades: 2,
      },
    },
    {
      type: "image-selection",
      question:
        "Selecciona el valor correcto para cada posición del siguiente número:",
      image: "/EDN33.png", // Reemplaza con la ruta real de la imagen
      positions: [
        { name: "Unidad de Millón" },
        { name: "Centenas de mil" },
        { name: "Decenas de mil" },
        { name: "Unidades de mil" },
        { name: "Centenas" },
        { name: "Decenas" },
        { name: "Unidades" },
      ],
      options: [8, 0, 1, 5, 2, 4, 6],
      correctAnswers: {
        "Unidad de Millón": 8,
        "Centenas de mil": 0,
        "Decenas de mil": 1,
        "Unidades de mil": 5,
        Centenas: 2,
        Decenas: 4,
        Unidades: 6,
      },
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedValues({}); // Resetear las selecciones para la siguiente pregunta
    } else {
      setShowSummary(true);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = true;

    for (const position of currentQuestion.positions) {
      if (
        selectedValues[position.name] !==
        currentQuestion.correctAnswers[position.name]
      ) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
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
    setSelectedValues({});
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
          <div className="flex gap-4 justify-center">
            <button
              onClick={restartGame}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all"
            >
              Jugar de Nuevo
            </button>
            <button
              onClick={() => navigate("levels/decimal-system")} // Usa navigate en lugar de <a>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQuestion.positions.map((position, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label className="text-lg font-bold text-indigo-800">
                    {position.name}: {"___"}
                  </label>
                  <select
                    value={selectedValues[position.name] || ""}
                    onChange={(e) =>
                      setSelectedValues({
                        ...selectedValues,
                        [position.name]: e.target.value,
                      })
                    }
                    className="p-4 rounded-lg text-lg font-bold border-2 border-indigo-300 focus:border-indigo-500 transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    {currentQuestion.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
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
            disabled={
              Object.keys(selectedValues).length !==
              currentQuestion.positions.length
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
export default DecompositionGameLevel3;
