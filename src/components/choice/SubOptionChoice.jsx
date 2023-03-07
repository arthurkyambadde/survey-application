import React, { useState } from "react";
import tickIcon from "../../assets/icons/tick.svg";

function SubOptionChoice() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      {["My Favourites", "This could work", "Not for me"].map((option) => (
        <div key={option} className="flex gap-2 items-center">
          <label
            className={`bg-checkboxBg hover:bg-checkboxHoverBg cursor-pointer flex py-0.25 px-2 py-2 rounded w-full border-primarybtn  mb-2 gap-2`}
          >
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="hidden"
            />
            {option === "My Favourites" && (
              <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
                A
              </span>
            )}
            {option === "This could work" && (
              <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
                B
              </span>
            )}
            {option === "Not for me" && (
              <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
                C
              </span>
            )}
            <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            {selectedOption === option && (
              <img src={tickIcon} alt="tick" className="h-6 w-6" />
            )}
          </label>
        </div>
      ))}
    </div>
  );
}

export default SubOptionChoice;
