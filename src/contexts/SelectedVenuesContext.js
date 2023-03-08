import React, { createContext, useEffect, useState } from "react";
import { INITIAL_PLACES_RANKING } from "../data/Screens";

export const VenuesContext = createContext();

let currentVenue = null;
let currentPlace = null;

export const VenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [venueRating, setVenueRating] = useState(INITIAL_PLACES_RANKING);
  const [section, setSection] = useState("onboarding");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    window.addEventListener("wheel", tryNavigation, { passive: false });
    return () => {
      window.removeEventListener("wheel", tryNavigation, { passive: false });
    };
  }, [tryNavigation]);

  function tryNavigation(event) {
    event.preventDefault();

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxScrollPosition = document.body.scrollHeight - windowHeight;
    const delta = event.deltaY;
    const scrollAmount =
      delta > 0
        ? Math.min(maxScrollPosition - scrollPosition, windowHeight)
        : Math.max(-scrollPosition, -windowHeight);

    if (scrollAmount !== 0) {
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (question === "__select_venue__" && scrollAmount > 0) {
        console.log("trying to scroll down on the select venue");
        // check that venue has been selected before going forward
        if (selectedVenues.length < 2) {
          setHasError(true);
          return false;
        }
      } else {
        console.log(`The current question is:: ${question}`);
      }

      const scrollTarget =
        scrollPosition + (scrollAmount > 0 ? windowHeight : -windowHeight);
      const scrollOptions = {
        top: scrollTarget,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
    return false;
  }

  return (
    <VenuesContext.Provider
      value={{
        selectedVenues,
        setSelectedVenues,
        hasError,
        setHasError,
        venueRating,
        setVenueRating,
        section,
        setSection,
        question,
        setQuestion,
      }}
    >
      {children}
    </VenuesContext.Provider>
  );
};
