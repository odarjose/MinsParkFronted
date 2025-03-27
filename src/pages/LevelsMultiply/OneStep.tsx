import LearningScreen from "@/components/common/LearningScreen";

const OneseptMultiply = () => {
  return (
    <LearningScreen
      imageSrc="/multi.png" // Ruta de la imagen
      backPath="/" // Ruta para el botón "Volver a Inicio"
      nextPath="/levels/multiplication" // Ruta para el botón "Siguiente"
    />
  );
};

export default OneseptMultiply;
