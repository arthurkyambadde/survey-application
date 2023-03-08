import { useContext } from "react";
import { VenuesContext } from "../contexts/SelectedVenuesContext";

export function useVenue() {
  const {
    selectedVenues,
    setSelectedVenues,
    hasError,
    venueRating,
    setVenueRating,
  } = useContext(VenuesContext);

  const toggleSelectedVenue = (id) => {
    if (selectedVenues.includes(id)) {
      setSelectedVenues(selectedVenues.filter((el) => el !== id));
    } else {
      setSelectedVenues([...selectedVenues, id]);
    }
  };

  const setPlaceRating = (venueId, placeId, answerId) => {
    const clone = { ...venueRating };
    clone[venueId][placeId] = answerId;

    console.log(clone[venueId]);

    setVenueRating(clone);
  };

  return {
    selectedVenues,
    toggleSelectedVenue,
    hasError,
    setPlaceRating,
    venueRating,
  };
}
