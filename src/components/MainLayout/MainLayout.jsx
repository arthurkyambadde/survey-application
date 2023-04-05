import React from "react";
import { data } from "../../data/data";
import { Introduction } from "../../screens/onboarding/Introduction/Introduction";
import { Instructions } from "../../screens/onboarding/instructions/Instructions";
import { VenueSelection } from "../../screens/question/venue_selection/VenueSelection";
import AppointmentIntroduction from "../../screens/appointment/AppointmentIntroduction";
import AppointmentScheduler from "../../screens/appointment/AppointmentScheduler";
import { createLayout } from "./createLayout/createLayout";
import { createQuestions } from "./createQuestions/createQuestions";
import End from "../../screens/end/End";
import { useVenue } from "../../hooks/useVenue";

const components = {
  introduction: Introduction,
  instructions: Instructions,
  multi_choice_question: VenueSelection,
  single_select: AppointmentIntroduction,
  description: AppointmentScheduler,
  end_page: End,
};

export const MainLayout = () => {
  const { formData } = useVenue();

  console.log("rendering");

  const layout = formData.data;

  const LayoutComponent = createLayout(layout, components);

  return (
    <>
      <LayoutComponent />
    </>
  );
};
