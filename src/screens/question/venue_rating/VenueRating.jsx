import React, { useCallback } from "react";
import { useVenue } from "../../../hooks/useVenue";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";
import { data } from "../../../data/data";

export function VenueRating({ id }) {
  //
  const { selectedVenues, venueRating, setPlaceRating, layoutData } =
    useVenue();

  const handleSetPlaceRating = useCallback(
    (itemId, placeId, answer) => {
      setPlaceRating(itemId, placeId, answer);
    },
    [setPlaceRating]
  );

  console.log("rendering------------- venue");

  return (
    <div className="h-auto relative">
      {selectedVenues.map((item) => {
        //loops through layoutData
        const venue = layoutData.find((obj) => obj.id === id).questions;

        //loops through layoutData
        const questions = layoutData.find((obj) => obj.id === id).questions
          .choices;

        const venue_questions = questions.find(
          (obj) => obj.id === item
        ).question;

        const placesquestion = venue_questions.places;

        console.log("test", venue_questions.places);

        return (
          <section key={item} className="relative">
            <Instructions
              id={item}
              title={venue.title}
              subtitle={venue.subtitle}
              imageUrl={venue.imageUrl}
            />
            <PlaceRating
              venue={venue}
              places={placesquestion}
              onRatePlace={(placeId, answer) => {
                handleSetPlaceRating(item, placeId, answer);
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
