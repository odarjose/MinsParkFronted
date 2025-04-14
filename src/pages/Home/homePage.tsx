import { useNavigate } from "react-router-dom";
import { topics } from "@/utils/topicsUtils";
import { TopicCard } from "@/components/common/TopicCard";
import { DailyChallenge } from "@/components/common/DailyChallenge";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          ¡Hagamos que las matemáticas sean divertidas!
        </h2>
        <p className="mt-3 text-xl text-gray-500">
          Elija un tema y comience su aventura de aprendizaje{" "}
        </p>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            description={topic.description}
            imageSrc={topic.imageSrc}
            difficulty={topic.difficulty}
            onClick={() => navigate(topic.path)}
            size="medium" // Puedes cambiar a 'small' o 'large'
          />
        ))}
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 grid grid-cols-1 s gap-6">
        <DailyChallenge
          challengeText="Un agricultor cosecha 156 manzanas diarias. ¿Cuántas manzanas cosechará en 18 días?"
          buttonText="Comenzar"
          onClick={() => navigate("/gameDiary")}
          size="large"
        />
      </div>
    </>
  );
}
