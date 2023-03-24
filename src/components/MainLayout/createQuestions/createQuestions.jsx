import React from "react";

export function createQuestions(questions, components) {
  return function () {
    return (
      <>
        {questions.map((item) => {
          const Component = components[item.type];
          return <Component {...item} key={item.id} />;
        })}
      </>
    );
  };
}
