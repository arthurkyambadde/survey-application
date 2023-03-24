import React from "react";
import { useVenue } from "../../../hooks/useVenue";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";
import { data } from "../../../data/data";

export function VenueRating() {
  //
  const { selectedVenues, venueRating, setPlaceRating } = useVenue();

  return (
    <div className="h-auto relative">
      {selectedVenues.map((item) => {
        const venue = data.STEP_2_QUESTIONS[item].instructions;

        const venue_questions = data.formQuestion.STEP_2_QUESTIONS_OPTIONS;
        const placesquestion = venue_questions[item].places;

        return (
          <section key={item} className="relative">
            <Instructions
              id={item}
              title={venue.title}
              subtitle={venue.subtitle}
              imageUrl={venue.imageUrl}
            />
            <PlaceRating
              places={placesquestion}
              onRatePlace={(placeId, answer) => {
                setPlaceRating(item, placeId, answer);
              }}
              placeRatings={venueRating[item]}
              venueTitle={venue.title}
              item_id={item}
            />
            <Instructions
              id={item}
              title={data.controls_instructions.text}
              imageUrl={data.controls_instructions.link}
            />
          </section>
        );
      })}
    </div>
  );
}
