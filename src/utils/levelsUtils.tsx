import { Calculator, Divide, FunctionSquare as Functions } from "lucide-react";

import { ReactNode } from "react";

export type LevelsUtilsProps = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  route: string;
};

export const levelsPowers: LevelsUtilsProps[] = [
  {
    id: 1,
    title: "Nivel 1: Domina las potencias",
    description:
      "En este nivel, convierte multiplicaciones en potencias y selecciona los resultados correctos.",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-green-400 to-green-500",
    route: "/games/1",
  },
  {
    id: 2,
    title: "Nivel 2: Desafío de Potencias",
    description:
      "Une potencias con sus resultados correctos y selecciona las potencias que representan las multiplicaciones dadas.",
    icon: <Divide className="h-8 w-8" />,
    color: "from-blue-400 to-blue-500",
    route: "/games/2",
  },
  {
    id: 3,
    title: "Nivel 3: Maestria de potencias",
    description:
      "Completa multiplicaciones basadas en potencias, identifica las potencias correctas y ordena potencias de mayor a menor.",
    icon: <Functions className="h-8 w-8" />,
    color: "from-purple-400 to-purple-500",
    route: "/games/3",
  },
];

export const levelsDivision: LevelsUtilsProps[] = [
  {
    id: 1,
    title: "Nivel 1: Domina las divisiones",
    description:
      "Completa las divisiones proporcionando los valores faltantes para el dividendo (D), divisor (d), cociente (q) y residuo (r).",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-green-400 to-green-500",
    route: "/games/division/1",
  },
  {
    id: 2,
    title: "Nivel 2: Desafío de divisiones",
    description:
      "Completa las divisiones proporcionando los valores faltantes para el dividendo (D), divisor (d), cociente (q) y residuo (r).¡Pon a prueba tus habilidades de división y mejora tu precisión!",
    icon: <Divide className="h-8 w-8" />,
    color: "from-blue-400 to-blue-500",
    route: "/games/division/2",
  },
  {
    id: 3,
    title: "Nivel 3: Maestria de divisiones",
    description:
      "Resuelve problemas de division en contextos reales y selecciona la respuesta correcta entre las opciones dadas. ¡Pon a prueba tus habilidades de division y mejora tu precisión!",
    icon: <Functions className="h-8 w-8" />,
    color: "from-purple-400 to-purple-500",
    route: "/games/division/3",
  },
];

export const levelsMultiplication: LevelsUtilsProps[] = [
  {
    id: 1,
    title: "Desafío Matemático 1: Multiplicaciones Veloces",
    description:
      "¿Eres rápido con las multiplicaciones? Pon a prueba tus habilidades matemáticas con este divertido desafío.",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-green-400 to-green-500",
    route: "/games/multiplication/1",
  },
  {
    id: 2,
    title: "Desafío Matemático 2: Completa las Multiplicaciones",
    description:
      "¿Te gustan los desafíos matemáticos? Completa estas multiplicaciones y demuestra que eres un genio de las matemáticas.",
    icon: <Divide className="h-8 w-8" />,
    color: "from-blue-400 to-blue-500",
    route: "/games/multiplication/2",
  },
  {
    id: 3,
    title: "Desafío Matemático 3: Problemas de Multiplicación",
    description:
      "¿Te gusta resolver problemas matemáticos? Aquí tienes dos desafíos que pondrán a prueba tus habilidades de multiplicación.",
    icon: <Functions className="h-8 w-8" />,
    color: "from-purple-400 to-purple-500",
    route: "/games/multiplication/3",
  },
];

export const levelsDecimalSystem: LevelsUtilsProps[] = [
  {
    id: 1,
    title: "Desafío Matemático 1:Descomposición de Números",
    description:
      "El sistema decimal es la base de las matemáticas. En este ejercicio, practicarás la descomposición de números en su forma extendida, identificando el valor posicional de cada dígito (unidades, decenas, centenas, etc.)",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-green-400 to-green-500",
    route: "/games/decimal-system/1",
  },
  {
    id: 2,
    title: "Desafío Matemático 2: Valor Posicional",
    description:
      "En el sistema decimal, cada dígito tiene un valor que depende de su posición en el número. En este ejercicio, identificarás el valor de un dígito específico en diferentes números.",
    icon: <Divide className="h-8 w-8" />,
    color: "from-blue-400 to-blue-500",
    route: "/games/decimal-system/2",
  },
  {
    id: 3,
    title: "Desafío Matemático 3: Descomposición y Tablas Posicionalesn",
    description:
      "En el sistema decimal, cada dígito tiene un valor que depende de su posición. En este ejercicio, completarás la descomposición de números y los ubicarás en tablas posicionales.",
    icon: <Functions className="h-8 w-8" />,
    color: "from-purple-400 to-purple-500",
    route: "/games/decimal-system/3",
  },
];
