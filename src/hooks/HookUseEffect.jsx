import React from "react";
import StateScss from "./State.module.scss";

const HookUseEffect = () => {
  const [numbers, setNumbers] = React.useState([1,2,3]);
  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    const newArr = [...numbers, randNumber];
    setNumbers(newArr);
  };
  // component mount/unmount
  React.useEffect(() => {
    console.log('COMPONEN MOUNT');
    return () => {
      console.log('COMPONENT UNMOUNT');
    }
  }, [])
  // component update
  React.useEffect(() => {
    console.log('COMPONEN UPDATE');
  }, [numbers])

  return (
    <div className={`${StateScss.flex}`}>
      <div
        className={`${StateScss.flex} ${
          numbers.length > 0 && StateScss.scolling
        }`}
      >
        <ul>
          {numbers.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
      <button onClick={addNumber}>add</button>
    </div>
  );
};

export default HookUseEffect;
