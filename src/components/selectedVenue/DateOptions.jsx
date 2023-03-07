import React, { useState, useContext } from "react";
import tickIcon from "../../assets/icons/tick.svg";
import { ScrollContext } from "../../App";

function DateOptions() {
  const [selectedOption, setSelectedOption] = useState("");
  const { scrollDown } = useContext(ScrollContext);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      value: "A",
      label:
        "Our date is SUPER important to us. If our top pick doesn’t have it available, move on to the next venue on our list.",
    },
    {
      value: "B",
      label:
        " We are willing to look at another date in the same month as long as it’s a Friday, Saturday, or Sunday.",
    },
    {
      value: "C",
      label:
        "We are willing to look at booking a week day date as long as it’s in the same month.",
    },
    {
      value: "D",
      label:
        "We are flexible on the month and the day if it lets us book our favorite venue.",
    },
    {
      value: "E",
      label: "We haven't settled on a date and we're open to suggestions.",
    },
  ];

  return (
    <div className="w-full" onClick={scrollDown}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 mb-2 cursor-pointer w-[700px] bg-checkboxBg hover:bg-checkboxHoverBg p-2 rounded text-primarybtn font-normal text-xl"
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

export default DateOptions;
