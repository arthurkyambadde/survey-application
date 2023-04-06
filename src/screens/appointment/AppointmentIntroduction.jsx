import React from "react";
import { Inquiry } from "../../components/question/Inquiry";

function AppointmentIntroduction(props) {
  const layout = props.item.layout;
  const questions = props.item.questions;

  return (
    <Inquiry
      id={layout.id}
      type={layout.type}
      title={layout.title}
      subtitle={layout.subtitle}
      options={questions.question}
    />
  );
}

export default AppointmentIntroduction;
