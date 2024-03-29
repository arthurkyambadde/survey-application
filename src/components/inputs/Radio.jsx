import React from "react";
import Label from "./Label";
import tickIcon from "../../assets/icons/tick.svg";
import { useVenue } from "../../hooks/useVenue";

export default function Radio({
  id,
  onChange,
  label,
  name,
  listId,
  isChecked,
}) {
  const borderStyle = isChecked ? "border-4" : "border-2";
  const { radioScrollDown } = useVenue();

  return (
    <button
      className={`bg-checkboxBg hover:bg-checkboxHoverBg cursor-pointer flex py-0.25 px-2 py-2 rounded w-full border-primarybtn  ${borderStyle}`}
      onClick={radioScrollDown}
    >
      <input
        type="radio"
        id={id}
        className="hidden w-full h-full"
        checked={isChecked}
        onChange={onChange}
        name={name}
        value={id}
      />
      <Label id={id}>
        <div className="flex gap-1 align-middle justify-center">
          <span className="w-6 h-6 bg-primarybtn sm:text-sm flex justify-center items-center rounded text-white text-lg font-sans ">
            {listId}
          </span>
          <span className="mr-2 flex text-lg sm:text-sm font-sans justify-center items-center sm:w-[95%]">
            {label}
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
      </Label>
    </button>
  );
}
