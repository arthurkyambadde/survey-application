import React, { useState, useEffect, useContext } from "react";
import Choice from "./choice/Choice";
import whiteTickIcon from "../assets/icons/whiteTick.svg";
import errorIcon from "../assets/icons/error.svg";
import { dreamVenues } from "../data/venueData";
import { SelectedVenuesContext } from "../contexts/SelectedVenuesContext";
import { ScrollContext } from "../App";

function AboutYourDream() {
  const { selectedVenues, setSelectedVenues } = useContext(
    SelectedVenuesContext
  );

  const { scrollDown } = useContext(ScrollContext);

  console.log(selectedVenues);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const numSelected = selectedChoices.length;
    if (numSelected === 0) {
      setMessage("");
    } else if (numSelected === 1) {
      setMessage("Make between 2 and 6 choices");
    } else if (numSelected === 6) {
      setMessage("You have chosen all options");
    } else {
      setMessage(`You can choose ${6 - numSelected} more`);
    }

    const venues = dreamVenues.filter((venue) =>
      selectedChoices.includes(venue.choice)
    );
    setSelectedVenues(venues);
  }, [selectedChoices, setSelectedVenues]);

  const handleChoiceChange = (choice) => {
    if (selectedChoices.includes(choice)) {
      setSelectedChoices(selectedChoices.filter((c) => c !== choice));
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }
  };

  const choiceLists = dreamVenues.map((item) => {
    const isChecked = selectedChoices.includes(item.choice);
    return (
      <Choice
        key={item.choice}
        choice={item.choice}
        choiceName={item.name}
        isChecked={isChecked}
        onChange={() => handleChoiceChange(item.choice)}
      />
    );
  });

  const handleOkClick = () => {
    if (selectedChoices.length >= 2) {
      console.log("Submit the form!");
    }
  };

  const errorDisplay =
    selectedChoices.length < 2 ? (
      <p className="mt-3 p-2 bg-erroBg text-errorColor text-sm w-[250px] rounded flex align-middle justify-center gap-2">
        <img src={errorIcon} alt="error" className="h-5 w-5" />{" "}
        <span>Please select more choices</span>
      </p>
    ) : null;

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6">Tell us about your dream venue!</p>
        {message && <p className="text-sm text-primarybtn">{message}</p>}
        <div className="w-64 flex flex-col gap-2">{choiceLists}</div>
        <button
          className="py-2 px-2  mt-4 gap-2 rounded bg-primarybtn flex align-middle justify-between text-white w-[80px]"
          onClick={scrollDown}
        >
          <span className="text-white  font-medium ">OK</span>
          <img src={whiteTickIcon} alt="white tick" className="h-6 w-6" />
        </button>
        {errorDisplay}
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}

export default AboutYourDream;
