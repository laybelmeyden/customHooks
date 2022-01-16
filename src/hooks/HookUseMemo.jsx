import React from "react";
import scssMain from "./Main.module.scss";

const renderCount = {
  countNum1: 0,
  countNum2: 0,
};
let fiveRender = 0;
const HookUseMemo = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div className={scssMain.centered}>
      <div>
        <Count id={1} value={count1} /> :{" "}
        <button onClick={() => setCount1(count1 + 1)}>+++</button>
      </div>
      <br />
      <div>
        <Count id={2} value={count2} /> :{" "}
        <button onClick={() => setCount2(count2 + 1)}>+++</button>
        <Five value={count2} />
      </div>
    </div>
  );
};

const Count = React.memo(({ id, value }) => {
  console.warn(`Count ${id} render: ${++renderCount[`countNum${id}`]}`);
  return <>{value}</>;
});
const Five = React.memo(
  ({ value }) => {
    console.warn(`five render: ${++fiveRender}`);
    const getResult = React.useMemo(() => {
      let i = 0;
      while (i < 500000000) i++;
      return value === 5 ? "yes" : "no";
    }, [value]);
    return <>{getResult}</>;
  },
  (prev, next) => {
    return next.value === 5 ? false : true;
  }
);

export default HookUseMemo;
