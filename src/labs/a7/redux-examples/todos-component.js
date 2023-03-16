import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "" });
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
  };
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
  };
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item d-flex">
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control me-2"
          />
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 
                          float-end"
          >
            Create
          </button>
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
              className="me-2"
            />
            {todo.do}
            <button
              onClick={() => deleteTodoClickHandler(index)}
              className="btn btn-danger 
                      float-end ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
