import React from "react";
import Label from "./Label";
import tickIcon from "../../assets/icons/tick.svg";

export default function Radio({
  id,
  onChange,
  label,
  selectedValue,
  name,
  listId,
}) {
  //
  const isChecked = selectedValue === id;
  const borderStyle = isChecked ? "border-4" : "border-2";

  return (
    <div
      className={`bg-checkboxBg hover:bg-checkboxHoverBg cursor-pointer flex py-0.25 px-2 py-2 rounded w-full border-primarybtn  ${borderStyle}`}
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
        <div className="flex gap-1">
          <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
            {listId}
          </span>
          <span className="mr-2 flex justify-center items-center">{label}</span>
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
    </div>
  );
}
