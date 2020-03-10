import React, { useMemo, useContext } from "react";

import { SetActiveContext, ActiveState, Option } from "./Active";

import { Option as ReactHooksOption } from "./react-hooks";
import { Option as ReactUseOption } from "./react-use";
import { Option as ReactUseDirtyOption } from "./react-use-dirty";
import { Option as UseHooksOption } from "./use-hooks";
import { Option as UseHooksGraglandOption } from "./use-hooks-gragland";

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
      <ActiveState>
        <OnClickSet />
      </ActiveState>
      <h2><a href="https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useHover.js">react-hooks-lib</a></h2>
      <ActiveState>
        <ReactHooksOption id="one" />
        <ReactHooksOption id="two" />
        <ReactHooksOption id="three" />
      </ActiveState>
      <h2><a href="https://github.com/streamich/react-use/blob/master/src/useHover.ts">react-use</a></h2>
      <ActiveState>
        <ReactUseOption id="one" />
        <ReactUseOption id="two" />
        <ReactUseOption id="three" />
      </ActiveState>
      <h2><a href="https://github.com/streamich/react-use/blob/master/src/useHoverDirty.ts">react-use useHoverDirty</a></h2>
      <ActiveState>
        <ReactUseDirtyOption id="one" />
        <ReactUseDirtyOption id="two" />
        <ReactUseDirtyOption id="three" />
      </ActiveState>
      <h2><a href="https://usehooks.com/useHover/">use-hooks</a></h2>
      <ActiveState>
        <UseHooksOption id="one" />
        <UseHooksOption id="two" />
        <UseHooksOption id="three" />
      </ActiveState>
      <h2><a href="https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f">use-hooks gragland</a></h2>
      <ActiveState>
        <UseHooksGraglandOption id="one" />
        <UseHooksGraglandOption id="two" />
        <UseHooksGraglandOption id="three" />
      </ActiveState>
    </div>
  );
}
