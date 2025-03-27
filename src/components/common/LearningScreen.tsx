import { useNavigate } from "react-router-dom"; // Importa useNavigate para manejar la navegación

const LearningScreen = ({
  imageSrc,
  backPath,
  nextPath,
}: {
  imageSrc: string;
  backPath: string;
  nextPath: string;
}) => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {/* Contenedor principal con desplazamiento vertical */}
      <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-y-auto">
        {/* Imagen en su tamaño original */}
        <img
          src={imageSrc} // Usamos la imagen pasada como prop
          alt="Lección"
          className="w-full h-auto" // h-auto para mantener la proporción de la imagen
        />

        {/* Contenedor de botones */}
        <div className="sticky bottom-0 left-0 right-0 flex justify-between p-4 bg-white bg-opacity-75">
          {/* Botón "Volver a Inicio" */}
          <button
            onClick={() => navigate(backPath)} // Navega a la ruta pasada como prop
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Volver a Inicio
          </button>

          {/* Botón "Siguiente" */}
          <button
            onClick={() => navigate(nextPath)} // Navega a la ruta pasada como prop
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningScreen;
