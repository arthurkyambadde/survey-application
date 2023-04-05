import React from "react";
import { Question } from "../../../components/question/Question";
import { useVenue } from "../../../hooks/useVenue";
import { VenueRating } from "../venue_rating/VenueRating";

export function VenueSelection(props) {
  const { selectedVenues, toggleSelectedVenue, hasError } = useVenue();
  const layout = props.item.layout;
  const questions = props.item.questions;

  return (
    <>
      <Question
        id="__select_venue__"
        selectedValues={selectedVenues}
        onMakeSelection={toggleSelectedVenue}
        title={layout.title}
        subtitle={layout.instruction}
        showError={hasError}
        type={layout.type}
        options={layout.options}
        imageUrl={layout.imageUrl}
      />
      <VenueRating questions={questions} />
    </>
  );
}
