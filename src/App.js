/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import Controls from "./components/controls/Controls";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { VenuesProvider } from "./contexts/SelectedVenuesContext";

export const ScrollContext = createContext(null);

const App = () => {
  return (
    <VenuesProvider>
      <div>
        <Controls />
        <MainLayout />
      </div>
    </VenuesProvider>
  );
};

export default App;
