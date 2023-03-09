import React from "react";
import Text from "../inputs/Text";
import Confirm from "../buttons/Confirm";

export default function Note(title, subtitle, id) {
  return (
    <form className="h-screen w-screen flex flex-col items-center justify-center">
      <p>{title}</p>
      <p>{subtitle}</p>
      <Text />
      <Confirm />
    </form>
  );
}
