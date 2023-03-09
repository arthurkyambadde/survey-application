import React from "react";
import { useVenue } from "../../hooks/useVenue";

function PrimaryButton(props) {
  const { scrollDown } = useVenue();

  const { buttonText } = props;

  return (
    <button
      className="bg-primarybtn px-3.5 py-1.5 w-auto text-white font-normal text-4xl rounded"
      onClick={scrollDown}
    >
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
