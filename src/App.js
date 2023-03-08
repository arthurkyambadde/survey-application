/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import Controls from "./components/controls/Controls";
import { VenuesProvider } from "./contexts/SelectedVenuesContext";
import { ONBOARDING_DATA } from "./data/Screens";
import { Instructions, VideoIntroduction } from "./screens/onboarding";
import { VenueRating, VenueSelection } from "./screens/question";

export const ScrollContext = createContext(null);

const App = () => {
  return (
    <VenuesProvider>
      <div>
        <Controls />
        <div className="w-screen h-auto flex flex-col bg-primary ">
          <VideoIntroduction {...ONBOARDING_DATA.introduction} />
          <Instructions {...ONBOARDING_DATA.instructions} />
          <VenueSelection />
          <VenueRating />
        </div>
      </div>
    </VenuesProvider>
  );
};

export default App;
