import React from "react";
import Confirm from "../../components/buttons/Confirm";
import { Date } from "../../components/inputs/Date";
import { useVenue } from "../../hooks/useVenue";
import Text from "../../components/inputs/Text";
import { MediaViewer } from "../../components/MediaViewer/MediaViewer";

export default function AppointmentScheduler(props) {
  const {
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    day,
    month,
    year,
    handleTextInputChange,
    inputText,
  } = useVenue();

  return (
    <div>
      <section className="h-screen w-screen flex  items-center justify-center">
        <div className="w-1/2 p-16">
          <p className="text-5xl mb-8">{props.question}</p>
          <p className="text-4xl text-gray-700 mb-8 ">{props.subtitle}</p>
          {props.input_type === "date" && (
            <div className="flex">
              (
              <div className="flex flex-col w-14 align-middle justify-center">
                <Date
                  value={day}
                  holder="DD"
                  id={"day"}
                  handleInputChange={handleDayChange}
                  labelTag={"Day"}
                  type="day"
                />
              </div>
              <span className="p-4 text-xl text-primarybtn flex align-middle justify-center">
                /
              </span>
              <div className="flex flex-col w-14 align-middle justify-center">
                <Date
                  value={month}
                  holder="MM"
                  id={"month"}
                  handleInputChange={handleMonthChange}
                  labelTag={"Month"}
                  type="text"
                />
              </div>
              <span className="p-4 text-xl text-primarybtn flex align-middle justify-center">
                /
              </span>
              <div className="flex flex-col w-14 align-middle justify-center">
                <Date
                  value={year}
                  holder="YYYY"
                  id={"year"}
                  handleInputChange={handleYearChange}
                  labelTag={"Year"}
                  type="year"
                />
              </div>
              )
            </div>
          )}
          {props.input_type === "text" && (
            <>
              <Text
                name={props.description}
                type={props.type}
                id={props.id}
                value={inputText || ""}
                handleInputChange={handleTextInputChange}
                placeholder={props.placeHolder}
              />
            </>
          )}

          <Confirm />
        </div>
        <div className="w-1/2 flex align-middle justify-center">
          <MediaViewer imageUrl={props.link} />
        </div>
      </section>
    </div>
  );
}
