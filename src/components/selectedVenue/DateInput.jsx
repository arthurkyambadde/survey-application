import React, { useState } from "react";

function DateInput() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  function handleDayChange(event) {
    setDay(event.target.value);
  }

  function handleMonthChange(event) {
    setMonth(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-14 align-middle justify-center">
        <label htmlFor="day">Day</label>
        <input
          type="number"
          id="day"
          value={day}
          onChange={handleDayChange}
          placeholder={"DD"}
          className="border-b-2 border-primarybtn-500 p-2 w-full outline-none focus:border-primarybtn-500"
        />
      </div>
      <span className="p-4 text-xl text-primarybtn flex align-middle justify-center">
        /
      </span>
      <div className="flex flex-col w-14 align-middle justify-center">
        <label htmlFor="month">Month</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={handleMonthChange}
          placeholder={"MM"}
          className="border-b-2 border-primarybtn-500 p-2 w-full outline-none focus:primarybtn-red-500"
        />
      </div>
      <span className="p-4 text-xl text-primarybtn flex align-middle justify-center">
        /
      </span>
      <div className="flex flex-col w-14 align-middle justify-center">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={handleYearChange}
          placeholder={"YYYY"}
          className="border-b-2 border-primarybtn-500 p-2 w-full outline-none focus:border-primarybtn-500"
        />
      </div>
    </div>
  );
}

export default DateInput;
