/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import AboutYourDream from "./components/AboutYourDream";
import Controls from "./components/controls/Controls";
import Hero from "./components/Hero";
import PixiePoint from "./components/PixiePoint";

const App = () => {
  window.addEventListener("wheel", handleWheel, { passive: false });

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

    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Controls />
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Hero />
        <PixiePoint />
        <AboutYourDream />
      </div>
    </div>
  );
};

export default App;
