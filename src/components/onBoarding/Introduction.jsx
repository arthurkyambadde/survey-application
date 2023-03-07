import React from "react";
import enterIcon from "../../assets/icons/enterIcon.svg";
import PrimaryButton from "../buttons/PrimaryButton";

function Introduction() {
  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="">
        <h3 className="text-2xl font-bold mb-8 ">The Venue Ranker</h3>

        <video width={"800"} controls className="mb-8">
          <source src="mov_bbb.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div className="flex gap-4 items-center min-h-40">
          <PrimaryButton buttonText="Continue" />
          <p className="text-base flex gap-2">
            press <span className="font-bold">Enter</span>
            <img src={enterIcon} alt="" className="h-6 w-6" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
