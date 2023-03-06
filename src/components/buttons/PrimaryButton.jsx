import React from "react";

function PrimaryButton(props) {
  const { buttonText } = props;

  return (
    <button className="bg-primarybtn px-3.5 py-1.5 w-auto text-white font-bold rounded">
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
