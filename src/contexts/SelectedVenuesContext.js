import React, { createContext, useEffect, useState } from "react";
import { INITIAL_PLACES_RANKING } from "../data/data";
import jsonDataa from "../data/form.json";

export const VenuesContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [venueRating, setVenueRating] = useState(INITIAL_PLACES_RANKING);
  const [section, setSection] = useState("onboarding");
  const [question, setQuestion] = useState("");
  const [venueAvailability, setVenueAvailability] = useState(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [note, setNote] = useState("");
  const [inputText, setInputText] = useState("");
  const [lastClickTime, setLastClickTime] = useState(0);
  const [layoutData, setLayoutData] = useState([]);

  useEffect(() => {
    setLayoutData(jsonDataa.data.form);
  }, []);

  // handle text input events input
  function handleTextInputChange(event) {
    setInputText(event.target.value);
  }

  // handle day input events input
  function handleDayChange(event) {
    setDay(event.target.value);
  }

  // handle month input events input
  function handleMonthChange(event) {
    setMonth(event.target.value);
  }

  // handle note input events input
  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  // handle year input events input
  function handleYearChange(event) {
    setYear(event.target.value);
  }

  // handle option input events input
  const handleOptionChange = (event) => {
    setVenueAvailability(event.target.value);
  };

  //scroll down function for buttons {comfirm, submit, downward pointing control button}
  const scrollDown = () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime > 1000) {
      if (question === "__select_venue__") {
        // check that venue has been selected before going forward
        if (selectedVenues.length < 2) {
          setHasError(true);
          return;
        }
      } else if (question) {
        if (!venueRating[section][question]) {
          setHasError(true);
          return;
        }
      }
      window.scrollBy(0, window.innerHeight); // scroll down by 100vh

      setLastClickTime(currentTime);
    }
  };

  //scroll function called onclicking radio buttons
  const scrolldownForRadio = () => {
    window.scrollBy(0, window.innerHeight); // scroll down by 100vh
  };

  const radioScrollDown = () => {
    setTimeout(scrolldownForRadio, 400);
  };

  //scroll up function for control button pointing up
  const scrollUp = () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime > 1000) {
      window.scrollBy(0, -window.innerHeight); // scroll up by 100vh
      setLastClickTime(currentTime);
    }
  };

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
        scrollDown,
        scrollUp,
        venueAvailability,
        handleOptionChange,
        handleDayChange,
        handleMonthChange,
        handleYearChange,
        handleNoteChange,
        day,
        month,
        year,
        note,
        handleTextInputChange,
        inputText,
        radioScrollDown,
        layoutData,
      }}
    >
      {children}
    </VenuesContext.Provider>
  );
};
