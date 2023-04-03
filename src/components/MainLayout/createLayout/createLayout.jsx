import React, { useMemo } from "react";

export function CreateLayout(layout, components) {
  const LayoutComponent = useMemo(
    () => () =>
      (
        <>
          {layout.map((item) => {
            const Component = components[item.type];
            return <Component {...item} key={item.id} />;
          })}
        </>
      ),
    [layout, components]
  );

  return LayoutComponent;
}
