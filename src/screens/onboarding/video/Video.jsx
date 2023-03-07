import React from "react";
import { Submit } from "../../../components/buttons/Submit";

function VideoIntroduction({ title, video }) {
  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="">
        <h3 className="text-2xl font-bold mb-8 ">{title}</h3>

        <video width={"800"} controls className="mb-8">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <Submit />
      </div>
    </section>
  );
}

export default VideoIntroduction;
