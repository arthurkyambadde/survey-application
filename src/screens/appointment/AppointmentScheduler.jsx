import React from "react";
import Confirm from "../../components/buttons/Confirm";
import { Date } from "../../components/inputs/Date";

export default function AppointmentScheduler() {
  return (
    <div>
      <section className="h-screen w-screen flex  items-center justify-center">
        <div className="w-1/2 p-16">
          <p className="text-2xl mb-8">What date did you have in mind?</p>
          <Date />
          <Confirm />
        </div>
        <div className="w-1/2 flex align-middle justify-center"> image</div>
      </section>
    </div>
  );
}
