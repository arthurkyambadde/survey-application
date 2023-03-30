import React from "react";
import PrimaryButton from "./PrimaryButton";
import enterIcon from "../../assets/icons/enterIcon.svg";

export function Submit() {
  return (
    <div className="flex gap-4 items-center min-h-40 sm:h-30">
      <PrimaryButton buttonText="Continue" />
      <p className="text-base flex gap-2 font-sans sm:text-sm md:hidden">
        press <span className="font-bold sm:font-semibold">Enter</span>
        <img src={enterIcon} alt="" className="h-6 w-6" />
      </p>
    </div>
  );
}
