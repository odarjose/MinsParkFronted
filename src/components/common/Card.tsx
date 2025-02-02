import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function Card({
  children,
  onClick,
  className = "",
  size = "medium",
}: CardProps) {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <div
      className={`bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
