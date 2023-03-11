import React from "react";
import { Submit } from "../../../components/buttons/Submit";

export function VideoIntroduction({ title, videoUrl }) {
  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="w-1/2">
        <h1 className="text-7xl font-normal mb-8 ">{title}</h1>

        <iframe
          src={`https://www.youtube.com/embed/E0fPPRiY-5w?autoplay=`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-96 mb-5"
          allowFullScreen
          controls
          loop={true}
        ></iframe>

        <Submit />
      </div>
    </section>
  );
}
