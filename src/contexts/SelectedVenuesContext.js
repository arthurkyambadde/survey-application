import React, { createContext, useState } from "react";

export const VenuesContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [hasError, setHasError] = useState(false);

  return (
    <VenuesContext.Provider
      value={{ selectedVenues, setSelectedVenues, hasError, setHasError }}
    >
      {children}
    </VenuesContext.Provider>
  );
};
