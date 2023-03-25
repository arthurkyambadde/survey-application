import React from "react";
import { Inquiry } from "../../components/question/Inquiry";

function AppointmentIntroduction(props) {
  return (
    <Inquiry
      type={props.type}
      title={props.introduction}
      subtitle={props.subtitle}
      options={props.question}
    />
  );
}

export default AppointmentIntroduction;
