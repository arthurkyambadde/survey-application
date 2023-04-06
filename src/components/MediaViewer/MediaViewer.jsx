import React from "react";

export function MediaViewer({ videoUrl, imageUrl }) {
  return (
    <div className="right w-full  flex items-center justify-center  ">
      {imageUrl && (
        <img src={imageUrl} alt="" className="sm:h-full sm:w-[300px]" />
      )}
      {videoUrl && (
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-[400px] mb-5 sm:w-96 sm:h-40  sm:mb-0 z-10"
          allowFullScreen
          controls
          loop={true}
        ></iframe>
      )}
    </div>
  );
}
