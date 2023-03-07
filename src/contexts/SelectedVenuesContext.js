import React, { createContext, useState } from "react";

export const SelectedVenuesContext = createContext();

export const SelectedVenuesProvider = ({ children }) => {
  const [selectedVenues, setSelectedVenues] = useState([]);

  return (
    <SelectedVenuesContext.Provider
      value={{ selectedVenues, setSelectedVenues }}
    >
      {children}
    </SelectedVenuesContext.Provider>
  );
};
