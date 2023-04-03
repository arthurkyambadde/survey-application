import React, { useState, useMemo } from "react";
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
};

export const MainLayout = () => {
  const formLayout = [];

  const { layoutData } = useVenue();

  const LayoutComponent = useMemo(
    () =>
      createLayout(
        layoutData.map((item) => item.layout),
        components
      ),
    [layoutData, components]
  );

  // const LayoutComponent = createLayout(formLayout, components)

  // const layout = data.venueRankerLayout;
  // const questions = data.formQuestion.venueRanker;

  // const LayoutComponent = createLayout(layout, components);
  // const QuestionsComponent = createQuestions(questions, components);

  return (
    <>
      {layoutData.map((item) => {
        formLayout.push(item.layout);

        return <LayoutComponent key={item.id} />;
      })}
      {/* <LayoutComponent />
      <QuestionsComponent />
      <End /> */}
    </>
  );
};
