import React from "react";
import { Question } from "../../../components/question/Question";
import { STEP_2_QUESTIONS } from "../../../data/Screens";

export function PlaceRating({ places, onRatePlace, placeRatings, venueTitle }) {
  return (
    <>
      {places.map((place) => {
        return (
          <Question
            key={place.id}
            id={place.text}
            title={place.text}
            attachment={place.attachment}
            description={place.description}
            type={STEP_2_QUESTIONS.type}
            options={STEP_2_QUESTIONS.choices}
            onMakeSelection={(answerId) => onRatePlace(place.id, answerId)}
            selectedValue={placeRatings[place.id]}
            superId={place.id}
            venueTitle={venueTitle}
          />
        );
      })}
    </>
  );
}
