import React, { useEffect } from "react";
import { Submit } from "../../../components/buttons/Submit";
import { useInView } from "react-intersection-observer";

export function Instructions({ title, subtitle, text, image, id }) {
  const { ref, inView: myElementIsVisible } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (myElementIsVisible) {
      console.log(`now showing question with id:: ${id}`);
    }
  }, [myElementIsVisible]);

  return (
    <section
      id={id}
      ref={ref}
      className="h-screen w-screen flex items-center justify-center"
    >
      <div className="w-1/2 p-24 h-1/2 flex flex-col justify-between">
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-2xl">{subtitle}</p>
        <p className="text-2xl mb-8">{text}</p>

        <Submit />
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}
