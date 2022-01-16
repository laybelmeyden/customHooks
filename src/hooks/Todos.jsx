import React from "react";

const Todos = () => {
  let [inpValue, setInputValue] = React.useState("");
  const [todoItem, setTodoItem] = React.useState([]);
  const inpAdd = () => {
    inpValue.length <= 0 ? alert('введите') :
    setTodoItem([...todoItem, { name: inpValue, likeName: false }]);
    setInputValue("");
  };
  const deleteTodoItem = (inx) => {
    setTodoItem(() => todoItem.filter((_, i) => i !== inx));
  };
  const likeChange = (item) => {
    item.likeName = !item.likeName;
    setTodoItem([...todoItem]);
  };
  const inpChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>Введите название</h1>
      <input
        type="text"
        value={inpValue}
        onChange={inpChange}
        placeholder="inp"
      />
      <button onClick={inpAdd}>Add</button>
      <h2>Список</h2>
      <ul>
        {todoItem.map((e, i) => (
          <div key={i}>
            <li>
              {e.name} -{" "}
              <span style={{ cursor: "pointer" }} onClick={() => likeChange(e)}>
                {e.likeName ? "liked" : "disliked"}
              </span>
            </li>
            <button onClick={() => deleteTodoItem(i)}>Deleted</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
