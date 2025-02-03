import { Star } from "lucide-react";

export const renderStars = (progress: number) => {
  const totalStars = 5;
  const filledStars = Math.floor((progress / 100) * totalStars);

  return Array(totalStars)
    .fill(null)
    .map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < filledStars
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
};
