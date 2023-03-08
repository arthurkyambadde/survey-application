import React from "react";
import { Question } from "../../../components/question/Question";
import { STEP_2_QUESTIONS } from "../../../data/Screens";

export function PlaceRating({ places }) {
  return (
    <>
      {places.map((place) => {
        return (
          <Question
            key={place.id}
            title={place.text}
            attachment={place.attachment}
            type={STEP_2_QUESTIONS.type}
            options={places}
            multipleChoices={STEP_2_QUESTIONS.choices}
          />
        );
      })}
    </>
  );
}
