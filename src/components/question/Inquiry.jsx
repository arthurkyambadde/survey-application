import React from "react";
import Choice from "../choice/Choice";
import { useVenue } from "../../hooks/useVenue";

export function Inquiry({ id, title, subtitle, type, options }) {
  const { venueAvailability, handleOptionChange } = useVenue();
  console.log(venueAvailability, "venue availability");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[70%]">
        <div>
          <p className="text-5xl mb-6 font-normal">{title}</p>
          <p className="text-4xl text-gray-500 mb-2">{subtitle}</p>
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

          <span className="text-lg cursor-pointer w-auto font-sans text-primarybtn underline">
            Add choice
          </span>
        </div>
      </div>
    </div>
  );
}
