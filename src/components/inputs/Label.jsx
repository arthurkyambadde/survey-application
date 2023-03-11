import React from "react";

export default function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center cursor-pointer justify-between w-full h-full"
    >
      {children}
    </label>
  );
}
