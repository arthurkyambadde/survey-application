import React from "react";
import Confirm from "../../../components/buttons/Confirm";
import { useVenue } from "../../../hooks/useVenue";

export function VenueSelection({ title, subtitle, options, image, type }) {
  const { selectedVenues, toggleSelectedVenue } = useVenue();
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6">{title}</p>
        {subtitle && <p className="text-sm text-primarybtn">{subtitle}</p>}
        <div className="w-64 flex flex-col gap-2">{choiceLists}</div>
        <Confirm />
        {errorDisplay}
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}
