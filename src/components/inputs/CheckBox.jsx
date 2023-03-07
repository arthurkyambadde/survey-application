import React from "react";
import Label from "./Label";

export default function CheckBox({ id, isChecked, onChange, label }) {
  //

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
        <div className="flex gap-1">
          <span className="w-6 h-6 bg-primarybtn flex justify-center items-center rounded text-white font-bold">
            {id}
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
