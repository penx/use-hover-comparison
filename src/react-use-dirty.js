import React, { useRef } from "react";

import { useHoverDirty } from "react-use";
import { HoveredOption } from "./Active";

export const Option = props => {
  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);
  return <HoveredOption hovered={isHovering} ref={ref} {...props} />;
};
