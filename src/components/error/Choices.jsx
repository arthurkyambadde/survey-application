import React from "react";
import errorIcon from "../../assets/icons/error.svg";

export default function ChoicesError() {
  return (
    <p className="mt-3 p-2 bg-erroBg text-errorColor text-sm w-[250px] rounded flex align-middle justify-center gap-2">
      <img src={errorIcon} alt="error" className="h-5 w-5" />{" "}
      <span>Please select more choices</span>
    </p>
  );
}
