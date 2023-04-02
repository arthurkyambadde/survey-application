import React from "react";
import Choice from "../choice/Choice";
import { useVenue } from "../../hooks/useVenue";

export function Inquiry({ id, title, subtitle, type, options }) {
  const { venueAvailability, handleOptionChange } = useVenue();
  console.log(venueAvailability, "venue availability");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[70%] sm:w-full sm:p-2">
        <div>
          <p className="text-5xl mb-6 font-normal sm:text-3xl sm:mb-1">
            {title}
          </p>
          <p className="text-4xl text-gray-500 mb-2 sm:text-2xl mb-1">
            {subtitle}
          </p>
        </div>
        <div className="w-full p-4 flex flex-col gap-5">
          {options.map((option) => {
            return (
              <Choice
                key={option.id}
                id={option.id}
                onChange={handleOptionChange}
                type={type}
                label={option.choice}
                listId={option.label}
                name={id}
                isChecked={venueAvailability === option.id}
              />
            );
          })}

          <span className="text-lg sm:text-sm cursor-pointer w-auto font-sans text-primarybtn underline">
            Add choice
          </span>
        </div>
      </div>
    </div>
  );
}
