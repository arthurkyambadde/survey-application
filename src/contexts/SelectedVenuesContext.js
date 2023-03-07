import React, { createContext, useState } from "react";

export const VenuesContext = createContext();

export const VenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);

  return (
    <VenuesContext.Provider value={{ selectedVenues, setSelectedVenues }}>
      {children}
    </VenuesContext.Provider>
  );
};
