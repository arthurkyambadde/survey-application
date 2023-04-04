import React, { useEffect } from "react";
import Confirm from "../buttons/Confirm";
import Choice from "../choice/Choice";
import Error from "../error/Error";
import { useInView } from "react-intersection-observer";
import { useVenue } from "../../hooks/useVenue";
import { MediaViewer } from "../MediaViewer/MediaViewer";

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
  imageUrl,
  videoUrl,
}) {
  const { ref, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
  });
  const { setQuestion, selectedVenues } = useVenue();

  useEffect(() => {
    if (myElementIsVisible) {
      setQuestion(id);
    }
  }, [myElementIsVisible, id, setQuestion]);

  let optionsError;
  const numSelected = selectedVenues.length;
  if (numSelected === 1) {
    optionsError = "Choose at least 1 more";
  } else if (numSelected === 2 || numSelected === 0) {
    optionsError = "Make between 2 and 6 choices";
  } else if (numSelected < 6) {
    optionsError = `You can choose ${6 - numSelected} more`;
  }

  console.log("type ---------", options);

  return (
    <section
      ref={ref}
      id={id}
      className="h-screen w-screen flex items-center sm:flex-col-reverse justify-center relative"
    >
      <div className="w-1/2 sm:w-full sm:pl-10 sm:h-2/3 p-24 sm:p-0 h-auto flex flex-col justify-between">
        <p className=" text-5xl sm:text-4xl font-normal  mb-6 sm:mb-0">
          {title}
        </p>
        {subtitle && (
          <p className="text-sm  font-sans text-primarybtn">{subtitle}</p>
        )}

        {description && <p className="text-2xl mb-6 sm:mb-1">{description}</p>}
        {attachment && <a href={attachment.link}>{attachment.text}</a>}
        {type === "multi_select" && (
          <p className="text-sm sm:text-xs  font-sans text-primarybtn mb-2">
            {optionsError}
          </p>
        )}
        <div className="w-64  flex flex-col gap-2">
          {options.choices.map((option) => {
            return (
              <Choice
                key={option.id}
                id={superId ? superId + ":" + option.id : option.id}
                onChange={() => onMakeSelection(option.id)}
                type={options.type}
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
      <div className="w-1/2 sm:w-full sm:h-1/5 flex align-middle justify-center ">
        <MediaViewer videoUrl={videoUrl} imageUrl={imageUrl} />
      </div>
    </section>
  );
}
