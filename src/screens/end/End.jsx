import React from "react";
import { MediaViewer } from "../../components/MediaViewer/MediaViewer";
import { data } from "../../data/data";

export default function End() {
  console.log(data.end_page);
  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="h-[349.14px] w-[349.14px] object-cover">
        <MediaViewer imageUrl={data.end_page.link} />
      </div>
      <div className="w-1/3 text-center text-4xl">
        <p>{data.end_page.text}</p>
      </div>
    </section>
  );
}
