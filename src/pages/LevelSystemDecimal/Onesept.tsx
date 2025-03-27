import LearningScreen from "@/components/common/LearningScreen";

const Onesept = () => {
  return (
    <LearningScreen
      imageSrc="/sistema.png" // Ruta de la imagen
      backPath="/" // Ruta para el botón "Volver a Inicio"
      nextPath="/levels/decimal-system" // Ruta para el botón "Siguiente"
    />
  );
};

export default Onesept;
