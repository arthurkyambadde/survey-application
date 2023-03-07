import React, { useContext } from "react";
import { ScrollContext } from "../../App";

function PrimaryButton(props) {
  const { scrollDown } = useContext(ScrollContext);

  const { buttonText } = props;

  return (
    <button
      className="bg-primarybtn px-3.5 py-1.5 w-auto text-white font-bold rounded"
      onClick={scrollDown}
    >
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
