import React from "react";
import { Inquiry } from "../../components/question/Inquiry";
import { useVenue } from "../../hooks/useVenue";

function AppointmentIntroduction(props) {
  const { layoutData } = useVenue();

  const options = layoutData.find((obj) => obj.id === props.id).questions
    .question;

  return (
    <Inquiry
      id={props.id}
      type={props.type}
      title={props.introduction}
      subtitle={props.subtitle}
      options={options}
    />
  );
}

export default AppointmentIntroduction;
