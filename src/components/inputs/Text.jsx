import React from "react";

export default function Text({
  name,
  id,
  value,
  handleInputChange,
  placeholder,
  type,
}) {
  return (
    <div className="flex flex-col w-full align-middle justify-center">
      <input
        name={name}
        type={type}
        id={id}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="border-b-2 border-primarybtn placeholder-primarybtn placeholder:text-4xl p-4 w-full outline-none  focus:primarybtn"
      />
    </div>
  );
}
