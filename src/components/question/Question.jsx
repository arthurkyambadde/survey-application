import React from "react";
import Confirm from "../buttons/Confirm";
import Choice from "../choice/Choice";
import Error from "../error/Error";

export function Question({
  title,
  errorText,
  showError,
  subtitle,
  options,
  type,
  onMakeSelection,
  selectedValues,
}) {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6">{title}</p>
        {subtitle && <p className="text-sm text-primarybtn">{subtitle}</p>}
        <div className="w-64 flex flex-col gap-2">
          {options.map((option) => (
            <Choice
              key={option.id}
              onChange={() => onMakeSelection(option.id)}
              type={type}
              label={option.text}
              isChecked={selectedValues.includes(option.id)}
            />
          ))}
        </div>
        <Confirm />
        <Error text={errorText} visible={showError} />
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}
