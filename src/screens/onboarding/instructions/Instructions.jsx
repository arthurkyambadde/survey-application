import React from "react";
import { Submit } from "../../../components/buttons/Submit";

export function Instructions({ title, subtitle, text, image }) {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
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
