import React from "react";
import UseDebaunce from "./UseDebaunce";

const Debounce = () => {
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const searchFunc = async (query) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?query=${query}`
    );
    const data = await response.json();
    const dataFilter = data.filter((e) => e.title.toUpperCase().includes(query.toUpperCase())
    );
    setItems(dataFilter);
};
const debounceSystem = UseDebaunce(searchFunc, 1500);
const changer = (e) => {
    setValue(e.target.value);
    debounceSystem(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={changer}
        value={value}
        placeholder="search"
        />
      <div>
        <p>Результат поиска по <b>{value}</b></p>
        {items.length > 0
          ? items.map((e, i) => <p key={i}>{`${e.id} -- ${e.title}`}</p>)
          : "Нет данных"}
      </div>
    </div>
  );
};

export default Debounce;
