import LearningScreen from "@/components/common/LearningScreen";

const OneStepDivision = () => {
  return (
    <LearningScreen
      imageSrc="/division.png" // Ruta de la imagen
      backPath="/" // Ruta para el botón "Volver a Inicio"
      nextPath="/levels/division" // Ruta para el botón "Siguiente"
    />
  );
};

export default OneStepDivision;
