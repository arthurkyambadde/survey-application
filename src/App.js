/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import AboutYourDream from "./components/AboutYourDream";
import Controls from "./components/controls/Controls";
import SelectedVenue from "./components/selectedVenue/SelectedVenue";
import { SelectedVenuesProvider } from "./contexts/SelectedVenuesContext";
import OnBoarding from "./components/onBoarding/OnBoarding";

const App = () => {
  function handleWheel(event) {
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

      const scrollTarget =
        scrollPosition + (scrollAmount > 0 ? windowHeight : -windowHeight);
      const scrollOptions = {
        top: scrollTarget,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  }

  window.addEventListener("wheel", handleWheel, { passive: false });

  return (
    <SelectedVenuesProvider>
      <div>
        <Controls />
        <div className="w-screen h-auto flex flex-col bg-primary ">
          <OnBoarding />
          <AboutYourDream />
          <SelectedVenue />
        </div>
      </div>
    </SelectedVenuesProvider>
  );
};

export default App;
