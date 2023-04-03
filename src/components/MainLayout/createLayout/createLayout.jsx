import React from "react";

export function createLayout(layout, components) {
  return function () {
    return (
      <>
        {layout.map((item) => {
          const Component = components[item.type];

          return <Component {...item} key={item.id} />;
        })}
      </>
    );
  };
}
