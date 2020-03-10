import React from "react";

import { useHover } from "react-hooks-lib";
import { HoveredOption } from "./Active";

export const Option = props => {
  const { hovered, bind } = useHover();
  return <HoveredOption hovered={hovered} {...props} {...bind} />;
};
