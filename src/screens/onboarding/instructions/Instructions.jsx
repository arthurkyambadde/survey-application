import React, { useEffect } from "react";
import { Submit } from "../../../components/buttons/Submit";
import { useInView } from "react-intersection-observer";
import { useVenue } from "../../../hooks/useVenue";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";

export function Instructions(props) {
  const { title, subtitle, text, imageUrl, id } = props.item.layout;

  const { ref, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
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
      className="h-screen sm:h-screen w-screen flex items-center justify-center sm:flex-col-reverse "
    >
      <div className="w-1/2 sm:w-full  p-16 h-1/2 flex flex-col justify-between">
        <h2 className="text-5xl sm:text-4xl mb-5 font-normal ">{title}</h2>
        <p className="text-lg sm:text-base  font-sans mb-4">{subtitle}</p>
        <p className="text-lg  sm:text-base  font-sans mb-8 ">{text}</p>

        <Submit />
      </div>
      <div className="w-1/2 flex align-middle justify-center ">
        <MediaViewer imageUrl={imageUrl} />
      </div>
    </section>
  );
}
