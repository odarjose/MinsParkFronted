import LearningScreen from "@/components/common/LearningScreen";

const OneseptPowers = () => {
  return (
    <LearningScreen
      imageSrc="/potencia.png" // Ruta de la imagen
      backPath="/" // Ruta para el botón "Volver a Inicio"
      nextPath="/levels/powers" // Ruta para el botón "Siguiente"
    />
  );
};

export default OneseptPowers;
