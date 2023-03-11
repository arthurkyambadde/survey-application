import React, { useState, useEffect, useContext } from "react";
import { VenuesContext } from "../../contexts/SelectedVenuesContext";
import ChoicesError from "../error/Error";
import Confirm from "../buttons/Confirm";
import CheckBox from "../inputs/CheckBox";

function Exercise({ id, title, instruction, answers, image }) {
  const { selectedVenues, setSelectedVenues } = useContext(VenuesContext);

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

    const venues = answers.choices.filter((venue) =>
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

  const choiceLists = answers.choices.map((item) => {
    const isChecked = selectedChoices.includes(item.choice);
    return (
      <CheckBox
        key={item.id}
        id={item.id}
        isChecked={isChecked}
        onChange={() => handleChoiceChange(item.text)}
        label={item.text}
      />
    );
  });

  const errorDisplay = selectedChoices.length < 2 ? <ChoicesError /> : null;

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 p-24 h-auto flex flex-col justify-between">
        <p className="text-2xl mb-6">{title}</p>
        {message && <p className="text-sm text-primarybtn">{message}</p>}
        <div className="w-64 flex flex-col gap-2">{choiceLists}</div>
        <Confirm />
        {errorDisplay}
      </div>
      <div className="w-1/2 flex align-middle justify-center"> image</div>
    </section>
  );
}

export default Exercise;
