import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import enterIcon from "../../assets/icons/enterIcon.svg";

function Option(props) {
  const { name, description } = props;

  return (
    <section
      key={name}
      className="h-screen w-screen flex items-center justify-center"
    >
      <div className="w-1/2 p-24 h-0.6 flex flex-col justify-between">
        <h2 className="text-2xl mb-2 font-semibold">{name}</h2>
        <p className="text-2xl mb-5">{description}</p>
        <div className="flex gap-4 items-center min-h-40">
          <PrimaryButton buttonText="Continue" />
          <p className="text-base flex gap-2">
            press <span className="font-bold">Enter</span>
            <img src={enterIcon} alt="" className="h-6 w-6" />
          </p>
        </div>
      </div>

      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}

export default Option;
