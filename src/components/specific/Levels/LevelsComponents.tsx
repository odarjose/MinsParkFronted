import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

import { Level, LevelsComponentsProps } from "@/interfaces/levelsIneterfaces";

const LevelsComponents: React.FC<LevelsComponentsProps> = ({
  title,
  levels,
  backPath, // Ruta predeterminada para "Volver a Inicio"
  nextPath, // Ruta predeterminada para "Siguiente"
}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Título con animación */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        {title}
      </motion.h1>

      {/* Grid de niveles */}
      <div className="grid md:grid-cols-3 gap-8">
        {levels.map((level: Level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => navigate(level.route)}
          >
            <div
              className={`bg-gradient-to-r ${level.color} rounded-lg p-6 text-white shadow-lg`}
            >
              <div className="flex items-center justify-center mb-4">
                {level.icon}
              </div>
              <h2 className="text-xl font-bold text-center mb-2">
                {level.title}
              </h2>
              <p className="text-center text-white/90">{level.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botones de navegación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(backPath)} // Navegar a la ruta de "Volver a Inicio"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Atras
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(nextPath)} // Navegar a la ruta de "Siguiente"
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Volver al inicio
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LevelsComponents;
