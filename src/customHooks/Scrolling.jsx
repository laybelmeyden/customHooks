import React from "react";
import scssMain from "./../hooks/Main.module.scss";
import useScrolling from "./UseScrolling";

const Scrolling = () => {
  const [item, setItem] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const limit = 10;
  const parentRef = React.useRef();
  const childRef = React.useRef();

  useScrolling(parentRef, childRef, () =>
    fetchingItem(limit, page)
  );

  const fetchingItem = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setItem((arr) => [...arr, ...data]);
    setPage((e) => e + 1);
  };
  const clickedItem = (e) => {
    e.completed = !e.completed;
    setItem([...item]);
  };

  return (
    <div className={scssMain.scrollingContainer}>
      <div className={scssMain.scrolling} ref={parentRef}>
        {item.map((e, i) => (
          <div
            className={`${!e.completed ? "nonActive" : scssMain.active}`}
            key={i}
            onClick={() => clickedItem(e)}
          >
            {e.id} === {e.title}, {e.completed ? "true" : "false"}
          </div>
        ))}
        <div ref={childRef}>Loading....</div>
      </div>
    </div>
  );
};

export default Scrolling;
