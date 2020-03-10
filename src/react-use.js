import React from "react";

import { useHover } from "react-use";
import { HoveredOption } from "./Active";

export const Option = props => {
  const [newReactElement] = useHover(isHovering => (
    <HoveredOption hovered={isHovering} {...props} />
  ));

  return newReactElement;
};
