import React from "react";
import tickIcon from "../../assets/icons/tick.svg";
import CheckBox from "../inputs/CheckBox";

function Choice({ type, ...props }) {
  if (type === "multi_select") {
    return <CheckBox {...props} />;
  }

  return null;
}

export default Choice;
