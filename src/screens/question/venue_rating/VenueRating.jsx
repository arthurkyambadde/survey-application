import React from "react";
import { useVenue } from "../../../hooks/useVenue";
import { STEP_2_QUESTIONS } from "../../../data/Screens";
import { Instructions } from "../../onboarding";
import { PlaceRating } from "./PlaceRating";

export function VenueRating() {
  //
  const { selectedVenues } = useVenue();

  const venueIntroductionsList = selectedVenues.map((item) => {
    const venue = STEP_2_QUESTIONS[item].instructions;

    return (
      <React.Fragment key={item.id}>
        <Instructions
          title={venue.title}
          subtitle={venue.subtitle}
          image={venue.image}
        />
        <PlaceRating places={STEP_2_QUESTIONS[item].places} />
      </React.Fragment>
    );
  });

  return <div>{venueIntroductionsList}</div>;
}
