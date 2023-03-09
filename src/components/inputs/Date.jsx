import React from "react";

export function Date({ value, holder, id, handleInputChange, labelTag }) {
  return (
    <div className="flex flex-col w-14 align-middle justify-center">
      <label htmlFor="month">{labelTag}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={holder}
        className="border-b-2 border-primarybtn-500 p-2 w-full outline-none focus:primarybtn-red-500"
      />
    </div>
  );
}
