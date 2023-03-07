import { useContext } from "react";
import { VenuesContext } from "../contexts/SelectedVenuesContext";

export function useVenue() {
  const { selectedVenues, setSelectedVenues, hasError } =
    useContext(VenuesContext);

  const toggleSelectedVenue = (id) => {
    if (selectedVenues.includes(id)) {
      setSelectedVenues(selectedVenues.filter((el) => el !== id));
    } else {
      setSelectedVenues([...selectedVenues, id]);
    }
  };

  return {
    selectedVenues,
    toggleSelectedVenue,
    hasError,
  };
}
