import React, { createContext, useState } from "react";
import { INITIAL_PLACES_RANKING } from "../data/Screens";

export const VenuesContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [venueRating, setVenueRating] = useState(INITIAL_PLACES_RANKING);

  return (
    <VenuesContext.Provider
      value={{
        selectedVenues,
        setSelectedVenues,
        hasError,
        setHasError,
        venueRating,
        setVenueRating,
      }}
    >
      {children}
    </VenuesContext.Provider>
  );
};
