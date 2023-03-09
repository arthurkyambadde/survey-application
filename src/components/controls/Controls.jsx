import React from "react";

import { useVenue } from "../../hooks/useVenue";

function Controls() {
  const { scrollDown, scrollUp } = useVenue();

  return (
    <div className="fixed flex bottom-8 right-8 gap-0.5 z-10">
      <button
        className="w-6 h-6 bg-primarybtn text-white rounded cursor-pointer"
        onClick={scrollUp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="w-6 h-6 bg-primarybtn text-white rounded cursor-pointer"
        onClick={scrollDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Controls;
