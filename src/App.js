import React, { useMemo, useContext } from "react";
import "./styles.css";
import { useHover } from "react-hooks-lib";

import {
  SetActiveContext,
  ActiveProvider,
  Option,
  HoveredOption
} from "./Active";

const ReactHooksLib = props => {
  const { hovered, bind } = useHover();
  return <HoveredOption hovered={hovered} {...props} {...bind} />;
};

const OnClick = props => {
  // const { hovered, bind } = useState();
  return <Option {...props} />;
};

const OnClickSet = () => {
  const setActive = useContext(SetActiveContext);

  return useMemo(
    () => (
      <>
        <OnClick id="one" onClick={() => setActive("one")} />
        <OnClick id="two" onClick={() => setActive("two")} />
        <OnClick id="three" onClick={() => setActive("three")} />
      </>
    ),
    [setActive]
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>useHover Comparison</h1>
      <h2>onClick</h2>
      <ActiveProvider>
        <OnClickSet />
      </ActiveProvider>
      <h2>react-hooks-lib</h2>
      <ActiveProvider>
        <ReactHooksLib id="one" />
        <ReactHooksLib id="two" />
        <ReactHooksLib id="three" />
      </ActiveProvider>
    </div>
  );
}
