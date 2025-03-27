"use client";

import React from "react";
import { useState } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";

export default function VideoGate({
  videoId,
  children,
}: {
  videoId: string;
  children: React.ReactNode;
}) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [setPlayer] = useState<YouTubePlayer | null>(null);

  const onVideoEnd = () => {
    setVideoEnded(true);
  };

  const onVideoError = (error: Error) => {
    console.error("Error al reproducir el video:", error);
    alert("Ocurrió un error al reproducir el video. Inténtalo más tarde.");
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  const handleSkipVideo = () => {
    setVideoEnded(true); // Saltar el video y mostrar el contenido
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      {!videoEnded ? (
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            ¡Mira este video antes de continuar!
          </h2>
          <div className="w-full aspect-video relative overflow-hidden rounded-lg">
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={(event: { target: YouTubePlayer }) =>
                setPlayer(event.target)
              }
              onEnd={onVideoEnd}
              onError={onVideoError}
              className="w-full px-10 h-full"
            />
          </div>
          {/* Botón para saltar el video */}
          <button
            onClick={handleSkipVideo}
            className="mt-6 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
          >
            Saltar video
          </button>
        </div>
      ) : (
        // Mostrar el contenido después de que el video termine o se salte
        React.cloneElement(children as React.ReactElement, { videoEnded })
      )}
    </div>
  );
}
