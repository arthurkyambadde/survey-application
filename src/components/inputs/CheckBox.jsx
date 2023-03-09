import React from "react";
import Label from "./Label";
import tickIcon from "../../assets/icons/tick.svg";

export default function CheckBox({ id, onChange, label, listId, isChecked }) {
  const borderStyle = isChecked ? "border-4" : "border-2";

  return (
    <div
      className={`bg-checkboxBg hover:bg-checkboxHoverBg cursor-pointer flex py-0.25 px-2 py-2 rounded w-full border-primarybtn  ${borderStyle}`}
    >
      <input
        type="checkbox"
        id={id}
        className="hidden w-full h-full"
        checked={isChecked}
        onChange={onChange}
      />
      <Label id={id}>
        <div className="flex gap-2">
          <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold text-lg font-sans">
            {listId}
          </span>
          <span className="mr-2 flex text-lg font-sans justify-center items-center">
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
    </div>
  );
}
