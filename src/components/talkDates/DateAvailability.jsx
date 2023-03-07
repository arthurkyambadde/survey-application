import React from "react";
import DateOptions from "../selectedVenue/DateOptions";

function DateAvailability() {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[70%]">
        <div>
          <p className="text-2xl mb-6 font-normal">
            Venue availability differs drastically based on the date and day you
            decide to have your wedding. How flexible are you when it comes to
            your date?
          </p>
          <p>Description(Optional)</p>
        </div>
        <div className="w-full">
          <DateOptions />
          <p p className="text-xl text-primarybtn underline">
            Add choice
          </p>
        </div>
      </div>
    </section>
  );
}

export default DateAvailability;
