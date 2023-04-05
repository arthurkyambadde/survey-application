import React from "react";
import { useVenue } from "../../../hooks/useVenue";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";

export function VenueRating({ questions }) {
  //
  const { selectedVenues, venueRating, setPlaceRating } = useVenue();

  return (
    <div className="h-auto relative">
      {selectedVenues.map((item) => {
        const choices = questions.choices;
        const venue = choices[item].layout.instructions;

        const placeslayout = questions.choices[item].layout.places;
        const placeQuestions = questions.choices[item].question.places;
        const controlInstructions =
          questions.choices[item].layout.controls_instructions;

        console.log("controls", controlInstructions);
        return (
          <section key={item} className="relative">
            <Instructions item={venue} />
            <PlaceRating
              places={placeslayout}
              onRatePlace={(placeId, answer) => {
                setPlaceRating(item, placeId, answer);
              }}
              placeRatings={venueRating[item]}
              placeQuestions={placeQuestions}
              venueTitle={venue.layout.title}
              item_id={item}
            />
            <Instructions item={controlInstructions} />
          </section>
        );
      })}
    </div>
  );
}
