import React from "react";
import { data } from "../../data/data";
import { Introduction } from "../../screens/onboarding/Introduction/Introduction";
import { Instructions } from "../../screens/onboarding/instructions/Instructions";
import { VenueSelection } from "../../screens/question/venue_selection/VenueSelection";
import AppointmentIntroduction from "../../screens/appointment/AppointmentIntroduction";
import AppointmentScheduler from "../../screens/appointment/AppointmentScheduler";
import End from "../../screens/end/End";

export default function MainLayout() {
  const layout = data.venueRankerLayout;
  const questions = data.venueRankerQuestions;

  return (
    <>
      {layout.map((item) => {
        if (item.type === "introduction") {
          return <Introduction {...item} key={item.id} />;
        }

        if (item.type === "instructions") {
          return <Instructions {...item} key={item.id} />;
        }

        if (item.type === "multi_choice_question") {
          return <VenueSelection {...item} key={item.id} />;
        }

        // Add a default return statement
        return null;
      })}
      {questions.map((item) => {
        if (item.type === "single_select_question") {
          return <AppointmentIntroduction {...item} key={item.id} />;
        }

        if (item.type === "description") {
          return <AppointmentScheduler {...item} key={item.id} />;
        }

        // Add a default return statement
        return null;
      })}
      <End />
    </>
  );
}
