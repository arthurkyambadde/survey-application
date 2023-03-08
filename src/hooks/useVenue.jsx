import { useContext } from "react";
import { VenuesContext } from "../contexts/SelectedVenuesContext";

export function useVenue() {
  const {
    selectedVenues,
    setSelectedVenues,
    hasError,
    venueRating,
    setVenueRating,
    setSection,
    setQuestion,
  } = useContext(VenuesContext);

  const toggleSelectedVenue = (id) => {
    if (selectedVenues.includes(id)) {
      setSelectedVenues(selectedVenues.filter((el) => el !== id));
    } else {
      setSelectedVenues([...selectedVenues, id]);
    }
  };

  // const setSection = (id) => {
  //   setQuestion(null);
  //   _setSection(id);
  // };

  const setPlaceRating = (venueId, placeId, answerId) => {
    const clone = { ...venueRating };
    clone[venueId][placeId] = answerId;

    setVenueRating(clone);
  };

  return {
    selectedVenues,
    toggleSelectedVenue,
    hasError,
    setPlaceRating,
    venueRating,
    setSection,
    setQuestion,
  };
}
