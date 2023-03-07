import React from "react";
import Confirm from "../../../components/buttons/Confirm";
import { Question } from "../../../components/question/Question";
import { useVenue } from "../../../hooks/useVenue";
import { STEP_1_QUESTION } from "../../../data/Screens";

export function VenueSelection({ title, subtitle, options, image, type }) {
  const { selectedVenues, toggleSelectedVenue } = useVenue();
  return (
    <Question
      selectedValues={selectedVenues}
      onMakeSelection={toggleSelectedVenue}
      title={STEP_1_QUESTION.title}
    />
  );
}
