import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import enterIcon from "../../assets/icons/enterIcon.svg";

function Instructions() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-1/2 flex flex-col justify-between">
        <h2 className="text-2xl mb-2">Pixie point:</h2>
        <p className="text-2xl">
          As you work through the ranker, please only select one as "my
          favorite."
        </p>
        <p className="text-2xl mb-8">
          Each venue has a "venue specifics" PDF for you to download and review.
          Be sure to look this over before deciding if a venue is the one for
          you.
        </p>

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

export default Instructions;
