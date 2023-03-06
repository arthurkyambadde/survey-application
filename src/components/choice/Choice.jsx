import React, { useState, useEffect } from "react";
import tickIcon from "../../assets/icons/tick.svg";

function Choice(props) {
  const { choice, choiceName, isChecked, onChange } = props;

  const checkboxId = `checkbox-${choice}`;
  const borderStyle = isChecked ? "border-4" : "border-2";

  return (
    <div
      className={`bg-checkboxBg hover:bg-checkboxHoverBg cursor-pointer flex py-0.25 px-2 py-2 rounded w-full border-primarybtn  ${borderStyle}`}
    >
      <input
        type="checkbox"
        id={checkboxId}
        className="hidden w-full"
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={checkboxId}
        className="inline-flex items-center cursor-pointer justify-between w-full"
      >
        <div className="flex gap-1">
          <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
            {choice}
          </span>
          <span className="mr-2 flex justify-center items-center">
            {choiceName}
          </span>
        </div>
        {isChecked && (
          <img
            src={tickIcon}
            alt="tick"
            id="checkboxTick"
            className="w-6 h-6"
          />
        )}
      </label>
    </div>
  );
}

export default Choice;
