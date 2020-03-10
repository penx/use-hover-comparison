import React, { createContext, useState, useContext } from "react";

export const ActiveContext = createContext({
  active: null
});

export const SetActiveContext = createContext(null);

export const ActiveState = ({ children }) => {
  const [active, setActive] = useState(null);
  return (
    <ActiveProvider active={active} setActive={setActive} children={children} />
  );
};

const ActiveProvider = React.memo(({ active, setActive, children }) => (
  <ActiveContext.Provider value={active}>
    <SetActiveProvider setActive={setActive} children={children} />
  </ActiveContext.Provider>
));

const SetActiveProvider = React.memo(({ setActive, children }) => (
  <SetActiveContext.Provider value={setActive} children={children} />
));

export const HoveredOption = React.forwardRef(({ id, hovered, ...props }, ref) => {
  const active = useContext(ActiveContext);
  const setActive = useContext(SetActiveContext);
  if (hovered) {
    setActive(id);
  }
  const isActive = active === id;
  return <IsActive isActive={isActive} {...props} ref={ref} />;
});

export const Option = ({ id, onClick, ...props }) => {
  const active = useContext(ActiveContext);
  const isActive = active === id;
  return <IsActive isActive={isActive} onClick={onClick} {...props} />;
};

const IsActive = React.memo(React.forwardRef(({ isActive, ...props }, ref) => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "inline-block",
        width: "80px"
      }}
      {...props}
      ref={ref}
    >
      <pre>{isActive ? "_active_" : "inactive"}</pre>
      <RenderCount />
    </div>
  );
}));

class RenderCount extends React.Component {
  renderCount = 0;
  render() {
    this.renderCount++;
    return <pre>render {this.renderCount}</pre>;
  }
}
