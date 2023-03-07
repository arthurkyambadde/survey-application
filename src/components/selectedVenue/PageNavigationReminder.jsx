import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import enterIcon from "../../assets/icons/enterIcon.svg";

function PageNavigationReminder() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6 font-normal">
          You can always use the little blue navigation arrows at the bottom of
          the screen to go back and review the venues again.
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

export default PageNavigationReminder;
