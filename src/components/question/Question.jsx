import React, { useEffect } from "react";
import Confirm from "../buttons/Confirm";
import Choice from "../choice/Choice";
import Error from "../error/Error";
import { useInView } from "react-intersection-observer";
import { useVenue } from "../../hooks/useVenue";

export function Question({
  id,
  title,
  errorText,
  showError,
  subtitle,
  description,
  options,
  type,
  onMakeSelection,
  selectedValues,
  selectedValue,
  attachment,
  superId,
  venueTitle,
}) {
  const { ref, inView: myElementIsVisible } = useInView({
    threshold: 0.2,
  });
  const { setQuestion } = useVenue();

  useEffect(() => {
    if (myElementIsVisible) {
      console.log("set the question to" + id);
      setQuestion(id);
    }
  }, [myElementIsVisible]);

  return (
    <section
      ref={ref}
      id={id}
      className="h-screen w-screen flex items-center justify-center relative"
    >
      {type === "single_select" && (
        <div className="absolute top-0 w-full h-14 text-2xl bg-headerbg flex items-center justify-center">
          {venueTitle}
        </div>
      )}
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6">{title}</p>
        {subtitle && <p className="text-sm text-primarybtn">{subtitle}</p>}

        {description && <p className="text-2xl mb-6">{description}</p>}
        {attachment && <a href={attachment.link}>{attachment.text}</a>}
        <div className="w-64 flex flex-col gap-2">
          {options.map((option) => {
            return (
              <Choice
                key={option.id}
                id={superId ? superId + ":" + option.id : option.id}
                onChange={() => onMakeSelection(option.id)}
                type={type}
                label={option.text}
                listId={option.label}
                name={id}
                isChecked={
                  type === "multi_select"
                    ? selectedValues.includes(option.id)
                    : selectedValue === option.id
                }
              />
            );
          })}
        </div>
        {!showError && <Confirm />}
        <Error text={errorText} visible={showError} />
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}
