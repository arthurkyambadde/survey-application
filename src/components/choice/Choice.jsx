import React from "react";
import tickIcon from "../../assets/icons/tick.svg";
import CheckBox from "../inputs/CheckBox";
import Radio from "../inputs/Radio";

function Choice({ type, ...props }) {
  if (type === "multi_select") {
    return <CheckBox {...props} />;
  }

  if (type === "single_select") {
    return <Radio {...props} />;
  }

  return null;
}

export default Choice;
