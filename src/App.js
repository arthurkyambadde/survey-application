/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import AboutYourDream from "./components/AboutYourDream";
import Controls from "./components/controls/Controls";
import Exercise from "./components/exercise/Excercise";
import SelectedVenue from "./components/selectedVenue/SelectedVenue";
import { VenuesProvider } from "./contexts/SelectedVenuesContext";
import { ONBOARDING_DATA, EXERCISE_DATA } from "./data/Screens";
import { Instructions, VideoIntroduction } from "./screens/onboarding";

export const ScrollContext = createContext(null);

const App = () => {
  //

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

  window.addEventListener("wheel", handleWheel, { passive: false });

  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight); // scroll down by 100vh
  };

  const scrollUp = () => {
    window.scrollBy(0, -window.innerHeight); // scroll up by 100vh
  };

  const exerciseData = EXERCISE_DATA.questions;

  return (
    <ScrollContext.Provider value={{ scrollDown, scrollUp }}>
      <VenuesProvider>
        <div>
          <Controls />
          <div className="w-screen h-auto flex flex-col bg-primary ">
            <VideoIntroduction {...ONBOARDING_DATA.introduction} />
            <Instructions {...ONBOARDING_DATA.instructions} />
            {exerciseData.map((item) => {
              return (
                <Exercise
                  id={item.id}
                  title={item.title}
                  key={item.id}
                  instruction={item.instruction}
                  answers={item.answers}
                  image={item.image}
                />
              );
            })}
            <SelectedVenue />
          </div>
        </div>
      </VenuesProvider>
    </ScrollContext.Provider>
  );
};

export default App;
