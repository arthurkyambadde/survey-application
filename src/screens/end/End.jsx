import React from "react";
import { MediaViewer } from "../../components/MediaViewer/MediaViewer";

export default function End(props) {
  const layout = props.item.layout;

  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="h-[349.14px] w-[349.14px] object-cover">
        <MediaViewer imageUrl={layout.link} />
      </div>
      <div className="w-1/3 text-center text-4xl sm:w-full sm:p-8">
        <p>{layout.text}</p>
      </div>
    </section>
  );
}
