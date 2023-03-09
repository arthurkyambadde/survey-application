import React from "react";
import Choice from "../choice/Choice";
import { useVenue } from "../../hooks/useVenue";

export function Inquiry({ id, title, subtitle, type, options }) {
  const { venueAvailability, handleOptionChange } = useVenue();

  return (
    <form className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[70%]">
        <div>
          <p className="text-2xl mb-6 font-normal">{title}</p>
          <p>{subtitle}</p>
        </div>
        <div className="w-2/3 p-3 flex flex-col gap-3">
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

          <p className="text-xl text-primarybtn underline">Add choice</p>
        </div>
      </div>
    </form>
  );
}
