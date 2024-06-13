import React from "react";

export function TodoStatistics(props) {
  const { todos } = props;

  const completedCount = todos.filter((todo) => todo.isComplete).length;
  const activeCount = todos.length - completedCount;
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        <p>Total: {todos.length}</p>
        <p>Active: {activeCount}</p>
        <p>Completed: {completedCount} </p>
      </div>
    </div>
  );
}
