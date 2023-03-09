import React from "react";
import Confirm from "../../components/buttons/Confirm";
import { Date } from "../../components/inputs/Date";
import { useVenue } from "../../hooks/useVenue";

export default function AppointmentScheduler() {
  const {
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    day,
    month,
    year,
  } = useVenue();

  return (
    <div>
      <section className="h-screen w-screen flex  items-center justify-center">
        <div className="w-1/2 p-16">
          <p className="text-2xl mb-8">What date did you have in mind?</p>
          <p>If you havent decided just enter any date for this coming month</p>
          <div className="flex">
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
          </div>
          <Confirm />
        </div>
        <div className="w-1/2 flex align-middle justify-center"> image</div>
      </section>
    </div>
  );
}
