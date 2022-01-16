import React from "react";
import Debounce from "./customHooks/Debounce";
import Hover from "./customHooks/Hover";
import Scrolling from "./customHooks/Scrolling";
import UseInput from "./customHooks/UseInput";
import HookUseEffect from "./hooks/HookUseEffect";
import HookUseMemo from "./hooks/HookUseMemo";
import HookUseRef from "./hooks/HookUseRef";
import HookUseState from "./hooks/HookUseState";
import scssMain from "./hooks/Main.module.scss";
import Todos from "./hooks/Todos";


const App = () => {
  const [toggleList, setToggleList] = React.useState(true);
  const hiddenList = () => {
    setToggleList((e) => !e);
  };
  return (
    <div>
      <div className={scssMain.rectangle}>
        <section>
          <HookUseState />
        </section>
        <hr />
        <h1>useEffect</h1>
        {!toggleList && (
          <section>
            <HookUseEffect />
          </section>
        )}
        <button onClick={hiddenList}>hidden list</button>
        <hr />
        <h1>useRef</h1>
        <section>
          <HookUseRef />
        </section>
        <hr />
        <h1>useMemo</h1>
        <section>
          <HookUseMemo />
        </section>
        <h1>Todos</h1>
        <Todos />
        <hr />
        <h1>UseIput</h1>
        <UseInput />
        <hr />
        <h1>Hover</h1>
        <Hover />
        <hr />
        <h1>Scrolling</h1>
        <Scrolling />
        <hr />
        <h1>Debounce</h1>
        <Debounce />
      </div>
    </div>
  );
};

export default App;
