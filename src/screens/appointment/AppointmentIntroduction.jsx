import React from "react";
import { Inquiry } from "../../components/question/Inquiry";
import { STEP_3_QUESTIONS } from "../../data/Screens";

function AppointmentIntroduction() {
  return (
    <Inquiry
      type={STEP_3_QUESTIONS.type}
      title={STEP_3_QUESTIONS.introduction}
      subtitle={STEP_3_QUESTIONS.subtitle}
      options={STEP_3_QUESTIONS.answers}
    />
  );
}

export default AppointmentIntroduction;
