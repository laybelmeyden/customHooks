import React from "react";
import UseHover from "./UseHover";

const Hover = () => {
  const ref = React.useRef();
  const refTwo = React.useRef();
  const refHover = UseHover(ref);
  const refHoverTwo = UseHover(refTwo);
  return (
    <>
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        backgroundColor: refHover ? "blue" : "red",
      }}
    ></div>
    <div
      ref={refTwo}
      style={{
        width: 200,
        height: 200,
        backgroundColor: !refHoverTwo ? "yellow" : "black",
      }}
    ></div>
    </>
  );
};

export default Hover;
