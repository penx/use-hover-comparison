import React, { createContext, useState, useContext, useMemo } from "react";

export const ActiveContext = createContext({
  active: null
});

export const SetActiveContext = createContext(null);

const ActiveProviderInner = React.memo(({ active, children }) => (
  <ActiveContext.Provider value={active} children={children} />
));

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(null);
  return useMemo(
    () => (
      <SetActiveContext.Provider value={setActive}>
        <ActiveProviderInner active={active} children={children} />
      </SetActiveContext.Provider>
    ),
    [active, setActive, children]
  );
};

export const HoveredOption = ({ id, hovered, ...props }) => {
  const active = useContext(ActiveContext);
  const setActive = useContext(SetActiveContext);
  if (hovered) {
    setActive(id);
  }
  const isActive = active === id;
  return <IsActive isActive={isActive} {...props} />;
};

export const Option = ({ id, onClick, ...props }) => {
  const active = useContext(ActiveContext);
  const isActive = active === id;
  return <IsActive isActive={isActive} onClick={onClick} {...props} />;
};

const IsActive = React.memo(({ isActive, ...props }) => {
  console.log(isActive);
  console.log(props);
  return (
    <div
      style={{
        border: "1px solid black",
        display: "inline-block",
        width: "80px"
      }}
      {...props}
    >
      <pre>{isActive ? "_active_" : "inactive"}</pre>
      <RenderCount />
    </div>
  );
});

class RenderCount extends React.Component {
  renderCount = 0;
  render() {
    this.renderCount++;
    return <pre>render {this.renderCount}</pre>;
  }
}
