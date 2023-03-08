import React from "react";
import { useVenue } from "../../../hooks/useVenue";
import { STEP_2_QUESTIONS } from "../../../data/Screens";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";

export function VenueRating() {
  //
  const { selectedVenues, venueRating, setPlaceRating } = useVenue();

  return (
    <div>
      {selectedVenues.map((item) => {
        const venue = STEP_2_QUESTIONS[item].instructions;

        return (
          <React.Fragment key={item}>
            <Instructions
              id={item}
              title={venue.title}
              subtitle={venue.subtitle}
              image={venue.image}
            />
            <PlaceRating
              places={STEP_2_QUESTIONS[item].places}
              onRatePlace={(placeId, answer) => {
                setPlaceRating(item, placeId, answer);
              }}
              placeRatings={venueRating[item]}
              venueTitle={venue.title}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
