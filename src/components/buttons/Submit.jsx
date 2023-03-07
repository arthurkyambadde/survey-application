import React from "react";
import PrimaryButton from "./PrimaryButton";

export function Submit() {
  return (
    <div className="flex gap-4 items-center min-h-40">
      <PrimaryButton buttonText="Continue" />
      <p className="text-base flex gap-2">
        press <span className="font-bold">Enter</span>
        <img src={enterIcon} alt="" className="h-6 w-6" />
      </p>
    </div>
  );
}
