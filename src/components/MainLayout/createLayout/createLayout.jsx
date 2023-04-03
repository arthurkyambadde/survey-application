import React, { useMemo } from "react";

export function createLayout(layout, components) {
  const LayoutComponent = useMemo(
    () => () =>
      (
        <React.Fragment>
          {layout.map((item) => {
            const Component = components[item.type];
            return <Component {...item} key={item.id} />;
          })}
        </React.Fragment>
      ),
    [layout, components]
  );

  return LayoutComponent;
}
