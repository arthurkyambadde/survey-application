import React from "react";
import Label from "./Label";
import { ulid } from "ulid";

export default function Text(name, placeholder) {
  const id = ulid();
  return (
    <Label id={id}>
      <input type="text" id={id} name={name} placeholder={placeholder} />
    </Label>
  );
}
