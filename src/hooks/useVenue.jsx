import { useContext } from "react";
import { VenuesContext } from "../contexts/SelectedVenuesContext";

export function useVenue() {
  const {
    selectedVenues,
    setSelectedVenues,
    hasError,
    venueRating,
    setVenueRating,
    setSection: _setSection,
    setQuestion,
    setHasError,
    scrollDown,
    scrollUp,
    venueAvailability,
    handleOptionChange,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    day,
    month,
    year,
  } = useContext(VenuesContext);

  const toggleSelectedVenue = (id) => {
    let newArr = [];
    if (selectedVenues.includes(id)) {
      newArr = selectedVenues.filter((el) => el !== id);
    } else {
      newArr = [...selectedVenues, id];
    }

    if (newArr.length > 1 && hasError) {
      setHasError(false);
    }

    setSelectedVenues(newArr);
  };

  const setSection = (id) => {
    setQuestion(null);
    _setSection(id);
  };

  const setPlaceRating = (venueId, placeId, answerId) => {
    const clone = { ...venueRating };
    clone[venueId][placeId] = answerId;

    setVenueRating(clone);
    if (hasError) {
      setHasError(false);
    }
  };

  return {
    selectedVenues,
    toggleSelectedVenue,
    hasError,
    setPlaceRating,
    venueRating,
    setSection,
    setQuestion,
    scrollDown,
    scrollUp,
    venueAvailability,
    handleOptionChange,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    day,
    month,
    year,
  };
}
