import { Card } from "./Card";

interface DailyChallengeProps {
  challengeText: string;
  buttonText: string;
  onClick: () => void;
  size?: "small" | "medium" | "large"; 
}

export function DailyChallenge({
  challengeText,
  buttonText,
  onClick,
  size = "medium",
}: DailyChallengeProps) {
  return (
    <Card className="mt-12" size={size}>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Daily Challenge
        </h3>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-gray-800">{challengeText}</p>
          <button
            onClick={onClick}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Card>
  );
}
