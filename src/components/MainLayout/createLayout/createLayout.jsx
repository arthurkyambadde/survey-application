import React from "react";

export function createLayout(layout, components) {
  return function () {
    return (
      <>
        {layout.map((item) => {
          const Component = components[item.layout.type];

          return <Component {...item.layout} key={item.layout.id} />;
        })}
      </>
    );
  };
}
