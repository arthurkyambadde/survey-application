import React, { useContext } from "react";
import { VenuesContext } from "../../contexts/SelectedVenuesContext";
import SubOptionChoice from "../choice/SubOptionChoice";
import Option from "./Option";
import whiteTickIcon from "../../assets/icons/whiteTick.svg";
import PageNavigationReminder from "./PageNavigationReminder";
import AppointMent from "../talkDates/AppointMent";
import DateAvailability from "../talkDates/DateAvailability";
import SelectDate from "./SelectDate";
import Notes from "./Notes";

function SelectedVenue() {
  const { selectedVenues } = useContext(VenuesContext);

  const venueList = selectedVenues.map((item) => {
    const subOptions = item.subOptions;

    const subOptionsList = subOptions.map((option) => {
      return (
        <section
          key={option.venueName}
          className="h-screen w-screen flex items-center justify-center"
        >
          <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
            <h3 className="text-2xl mb-6 font-semibold">{option.venueName}</h3>
            <div className="text-2xl mb-6 font-normal">
              <p className="underline">Download</p> Venue Specific Details
            </div>
            <div className="w-64 flex flex-col gap-2">
              <SubOptionChoice />
            </div>
            <button className="py-2 px-2  mt-4 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]">
              <span className="text-white  font-medium ">OK</span>
              <img src={whiteTickIcon} alt="white tick" className="h-6 w-6" />
            </button>
          </div>

          <div className="w-1/2 flex align-middle justify-center"> image</div>
        </section>
      );
    });

    return (
      <div key={item.name}>
        <Option name={item.name} description={item.description} />
        <div>{subOptionsList}</div>
        <PageNavigationReminder />
      </div>
    );
  });

  return (
    <>
      {selectedVenues.length >= 2 ? (
        <div className="h-auto">
          <>{venueList}</>
          <AppointMent />
          <DateAvailability />
          <SelectDate />
          <Notes />
          <section className="h-screen w-screen flex items-center justify-center">
            <p>Thank you for completing the Venue Ranker!</p>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SelectedVenue;
