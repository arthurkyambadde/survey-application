import React from "react";
import { Question } from "../../../components/question/Question";
import { useVenue } from "../../../hooks/useVenue";
import { STEP_1_QUESTION } from "../../../data/Screens";

export function VenueSelection() {
  const { selectedVenues, toggleSelectedVenue, hasError } = useVenue();

  return (
    <Question
      id="__select_venue__"
      selectedValues={selectedVenues}
      onMakeSelection={toggleSelectedVenue}
      title={STEP_1_QUESTION.title}
      subtitle={STEP_1_QUESTION.instruction}
      showError={hasError}
      type={STEP_1_QUESTION.answers.type}
      options={STEP_1_QUESTION.answers.choices}
      imageUrl={STEP_1_QUESTION.imageUrl}
    />
  );
}
