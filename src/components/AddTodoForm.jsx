import React from "react";

export function AddTodoForm(props) {
  const { onSubmit, newTitleInputRef } = props;

  return (
    <form onSubmit={onSubmit} className="add-todo-form">
      <input
        ref={newTitleInputRef}
        type="text"
        placeholder="Enter todo title..."
      />
      <button className="btn">Add</button>
    </form>
  );
}
