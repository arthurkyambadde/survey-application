import React, { useMemo } from "react";

export function createLayout(layout, components) {
  const renderComponents = useMemo(() => {
    return layout.map((item) => {
      const Component = components[item.layout.type];
      return <Component {...item.layout} key={item.layout.id} />;
    });
  }, [layout, components]);

  return function () {
    return <>{renderComponents}</>;
  };
}
