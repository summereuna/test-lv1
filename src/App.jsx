import "./App.css";
import { useState } from "react";

export default function App() {
  const initialTodoList = [{ id: 1, todo: "react를 배워봅시다." }];

  const [todoList, setTodoList] = useState(initialTodoList);
  const [todo, setTodo] = useState("");

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onAddButtonClick = () => {
    const newTodo = { id: new Date(), todo };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  return (
    <div className="layout">
      <div className="input">
        <input onChange={changeTodo} value={todo} type="text" />
        <button onClick={onAddButtonClick}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="output">
        {todoList.map((todo) => {
          return (
            <div className="container-style" key={todo.id} id={todo.id}>
              {todo.todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
