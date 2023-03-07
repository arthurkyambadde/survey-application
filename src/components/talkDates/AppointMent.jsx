import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import enterIcon from "../../assets/icons/enterIcon.svg";

function AppointMent() {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-1/2 h-[70%] flex flex-col justify-between">
        <div>
          <p className="text-2xl mb-6 font-normal">Let’s talk dates :)</p>
          <p className="text-base mb-6 font-extralight">
            Description Optional :)
          </p>
        </div>
        <div>calendar image</div>
        <div className="flex gap-4 items-center min-h-40">
          <PrimaryButton buttonText="Continue" />
          <p className="text-base flex gap-2 text-primarybtn">
            press <span className="font-bold">Enter</span>
            <img src={enterIcon} alt="" className="h-6 w-6" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default AppointMent;
