import React from "react";
import { Question } from "../../../components/question/Question";
import { useVenue } from "../../../hooks/useVenue";
import { VenueRating } from "../venue_rating/VenueRating";

export function VenueSelection(props) {
  const { selectedVenues, toggleSelectedVenue, hasError } = useVenue();

  return (
    <>
      <Question
        id="__select_venue__"
        selectedValues={selectedVenues}
        onMakeSelection={toggleSelectedVenue}
        title={props.title}
        subtitle={props.instruction}
        showError={hasError}
        type={props.answers.type}
        options={props.answers.choices}
        imageUrl={props.imageUrl}
      />
      <VenueRating />
    </>
  );
}
