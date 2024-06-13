import React from "react";

export function TodoItem(props) {
  const { todo, handleRemoveTodo, handleToggleTodo } = props;
  const labelStyle = todo.isComplete ? "checked" : "";
  return (
    <li key={todo.id} className="todo-item">
      <div className="todo-item__content">
        <input
          id={todo.id}
          type="checkbox"
          className="todo-item__input"
          checked={todo.isComplete}
          onChange={() => handleToggleTodo(todo)}
        />
        <label className={`todo-item__label ${labelStyle}`} htmlFor={todo.id}>
          {todo.title}
        </label>
      </div>
      <div>
        <button
          onClick={() => handleRemoveTodo(todo.id)}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
