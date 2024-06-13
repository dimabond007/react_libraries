import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  const { todos, handleToggleTodo, handleRemoveTodo, loading, error } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (todos.length === 0) {
    return <div>No Todos</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleToggleTodo={handleToggleTodo}
          />
        );
      })}
    </ul>
  );
}
