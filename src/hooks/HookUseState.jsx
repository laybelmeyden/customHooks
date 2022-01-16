import React from "react";
import StateScss from "./State.module.scss";

const HookUseState = () => {
  const [counter, setCounter] = React.useState(0);
  const [listing, setListing] = React.useState([]);
  const counterInc = () => {
    counter >= 0 && setCounter(counter + 1);
  };
  const counterDeinc = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const listingPush = () => {
    listing.length >= 10
      ? alert("max values in array")
      : setListing([...listing, counter]);
  };

  const listingPop = (index) => {
    setListing((listing) => listing.filter((e, i) => i !== index));
  };
  return (
    <div>
      <h1>useState</h1>
      <div className={`${StateScss.flex}`}>
        <button onClick={counterInc}>Нажми на меня ++</button>
        <p>{counter}</p>
        <button onClick={counterDeinc}>Нажми на меня --</button>
      </div>
      <div className={`${StateScss.flex} ${listing.length > 0 && StateScss.scolling}`}>
        <ul>
          {listing.map((e, i) => (
            <li key={i}>
              {i} - {e} <span onClick={() => listingPop(i)}>del</span>
            </li>
          ))}
        </ul>
        <button onClick={listingPush}>PUSH</button>
      </div>
    </div>
  );
};

export default HookUseState;
