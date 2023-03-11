import React from "react";

export function MediaViewer({ videoUrl, imageUrl }) {
  return (
    <div className="right w-full">
      {imageUrl && <img src={imageUrl} alt="image" />}
      {videoUrl && (
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-96 mb-5"
          allowFullScreen
          controls
          loop={true}
        ></iframe>
      )}
    </div>
  );
}
