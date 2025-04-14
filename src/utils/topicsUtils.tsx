export type Topic = {
  path: string;
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  difficulty: "Fácil" | "Medio" | "Fuerte";
};

export const topics: Topic[] = [
  {
    id: 1,
    title: "Sistema de Numeración Decimal",
    description: "Descubre el poder de los números",
    imageSrc: "/decimal.png",
    difficulty: "Fácil",
    path: "decimal/image",
  },
  {
    id: 2,
    title: "Multiplicación",
    description: "¡Multiplica tus conocimientos!",
    imageSrc: "/multiplicacion.png",
    difficulty: "Medio",
    path: "multiply/image",
  },
  {
    id: 3,
    title: "División",
    description: "¡Divide y conquista!",
    imageSrc: "/divisi.png",
    difficulty: "Fuerte",
    path: "division/image",
  },
  {
    id: 4,
    title: "Potencias",
    description: "¡Eleva tu aprendizaje al máximo!",
    imageSrc: "/pot.png",
    difficulty: "Fuerte",
    path: "potencia/image",
  },
];
