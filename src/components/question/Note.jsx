import React from "react";
import Text from "../inputs/Text";
import Confirm from "../buttons/Confirm";
import { useVenue } from "../../hooks/useVenue";

export default function Note({ title, subtitle, id, placeholder, image }) {
  const { handleNoteChange, note } = useVenue();

  return (
    <section
      className="h-screen w-screen flex  items-center justify-center"
      id={id}
    >
      <form className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-5xl mb-2 font-medium">{title}</p>
        <p className="text-3xl mb-6 ">{subtitle}</p>
        <Text
          placeholder={placeholder}
          name={title}
          handleInputChange={handleNoteChange}
          value={note}
        />
        <Confirm />
      </form>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}
