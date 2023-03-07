import React, { useState, useContext } from "react";
import tickIcon from "../../assets/icons/tick.svg";
import { ScrollContext } from "../../App";

function SubOptionChoice() {
  const [selectedOption, setSelectedOption] = useState("");
  const { scrollDown } = useContext(ScrollContext);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      value: "A",
      label: "My Favourites",
    },
    {
      value: "B",
      label: "This could work",
    },
    {
      value: "C",
      label: "Not for me",
    },
  ];

  return (
    <div className="w-[30px]" onClick={scrollDown}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 mb-2 cursor-pointer w-[200px] bg-checkboxBg hover:bg-checkboxHoverBg p-2 rounded text-primarybtn font-normal text-xl"
        >
          <input
            type="radio"
            name="options"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            className="hidden"
          />
          <span className="w-7 h-7 rounded border bg-white border-primarybtn flex items-center justify-center">
            {option.value}
          </span>
          <span>{option.label}</span>
          {selectedOption === option.value && (
            <img src={tickIcon} alt="tick" className="h-6 w-6" />
          )}
        </label>
      ))}
    </div>
  );
}

export default SubOptionChoice;
