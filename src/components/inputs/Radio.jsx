import React, { useState, useContext } from "react";
import { ScrollContext } from "../../App";
import Label from "./Label";
import tickIcon from "../../assets/icons/tick.svg";

export default function Radio() {
  //
  const [selectedOption, setSelectedOption] = useState("");
  const { scrollDown } = useContext(ScrollContext);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      id: "A",
      label: "My Favourites",
    },
    {
      id: "B",
      label: "This could work",
    },
    {
      id: "C",
      label: "Not for me",
    },
  ];

  return (
    <div div className="w-[30px]" onClick={scrollDown}>
      {options.map((option) => (
        <Label key={option.id} id={option.id}>
          <input
            type="radio"
            name="options"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
            className="hidden"
          />
          <span className="w-7 h-7 rounded border bg-white border-primarybtn flex items-center justify-center">
            {option.id}
          </span>
          <span>{option.label}</span>
          {selectedOption === option.id && (
            <img src={tickIcon} alt="tick" className="h-6 w-6" />
          )}
        </Label>
      ))}
    </div>
  );
}
