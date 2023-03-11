import React, { useEffect } from "react";
import { Submit } from "../../../components/buttons/Submit";
import { useInView } from "react-intersection-observer";
import { useVenue } from "../../../hooks/useVenue";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";

export function Instructions({ title, subtitle, text, imageUrl, id }) {
  const { ref, inView: myElementIsVisible } = useInView({
    threshold: 0.2,
  });

  const { setSection } = useVenue();

  useEffect(() => {
    if (myElementIsVisible) {
      setSection(id);
    }
  }, [myElementIsVisible, id, setSection]);

  return (
    <section
      id={id}
      ref={ref}
      className="h-screen w-screen flex items-center justify-center "
    >
      <div className="w-1/2 p-16 h-1/2 flex flex-col justify-between">
        <h2 className="text-5xl mb-5 font-normal ">{title}</h2>
        <p className="text-lg font-sans mb-4">{subtitle}</p>
        <p className="text-lg font-sans mb-8 ">{text}</p>

        <Submit />
      </div>
      <div className="w-1/2 flex align-middle justify-center">
        <MediaViewer imageUrl={imageUrl} />
      </div>
    </section>
  );
}
