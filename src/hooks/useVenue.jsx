import { useContext } from "react";
import { VenuesContext } from "../contexts/SelectedVenuesContext";

export function useVenue() {
  const { selectedVenues, setSelectedVenues } = useContext(VenuesContext);

  return {
    selectedVenues,
    setSelectedVenues,
  };
}
