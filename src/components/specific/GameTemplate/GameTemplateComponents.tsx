import React, { useState, useEffect } from "react";
import { Sparkles, Star, Trophy } from "lucide-react";

interface Option {
  value: string | number;
  isCorrect: boolean;
}

interface GameProps {
  level: number;
  score: number;
  question: string;
  options: Option[];
  onNextLevel: () => void;
  onScoreUpdate: (points: number) => void;
}

const GameTemplate: React.FC<GameProps> = ({
  level,
  score,
  question,
  options,
  onNextLevel,
  onScoreUpdate,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [message, setMessage] = useState("");

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);

    if (options[index].isCorrect) {
      setShowCelebration(true);
      setMessage("¡Respuesta correcta! 🌟");
      onScoreUpdate(100);

      setTimeout(() => {
        setShowCelebration(false);
        onNextLevel();
      }, 2000);
    } else {
      setMessage("¡Incorrecto! Inténtalo de nuevo. 🤔");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            <span className="text-2xl font-bold">Puntuación: {score}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-purple-500" />
            <span className="text-xl">Nivel: {level}</span>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Resuelve el desafío!
          </h1>
          <p className="text-xl text-gray-600 mb-2">{question}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`
                p-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105
                ${
                  selectedOption === index
                    ? option.isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                }
              `}
            >
              {option.value}
            </button>
          ))}
        </div>

        {/* Feedback Message */}
        {message && (
          <div className="text-center text-xl font-bold text-indigo-600">
            {message}
          </div>
        )}

        {/* Celebration Animation */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-yellow-400 animate-spin" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameTemplate;
