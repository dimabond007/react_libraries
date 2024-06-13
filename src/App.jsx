import React, { useState, useMemo, useEffect, useRef } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoStatistics } from "./components/TodoStatistics";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import axios from "axios";

const TODO_URL = "http://localhost:8001/todos/";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  // const [newTodoTitle, setNewTodoTitle] = useState("");

  const newTitleInputRef = useRef(null);
  useEffect(() => {
    async function getTodos() {
      try {
        setLoading(true);
        const { data } = await axios.get(TODO_URL);
        setTodos(data);
        setError(null);
      } catch (err) {
        setError("Can not fetch!");
        console.error("Oops! error");
      } finally {
        setLoading(false);
      }
    }
    getTodos();
  }, []);

  useEffect(() => {
    newTitleInputRef.current.focus();
    console.log(todos);
  }, [todos]);

  const filterTodos = useMemo(() => {
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, todos]);

  async function handleRemoveTodo(todoId) {
    try {
      await axios.delete(TODO_URL + todoId);
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== todoId);
      });
    } catch (err) {
      console.log(err);
      alert("Cant remove!");
    }
  }

  async function handleToggleTodo(todoToUpdate) {
    try {
      const { data: updatedTodo } = await axios.patch(
        TODO_URL + todoToUpdate.id,
        {
          isComplete: !todoToUpdate.isComplete,
        }
      );
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === todoToUpdate.id) {
            return updatedTodo;
          }
          return todo;
        });
      });
    } catch (err) {
      console.log(err);
      alert("Cant Toggle!");
    }
  }

  async function handleAddTodo(ev) {
    ev.preventDefault();

    try {
      const { data: newTodo } = await axios.post(TODO_URL, {
        title: newTitleInputRef.current.value,
        isComplete: false,
      });
      setTodos((prevTodos) => {
        return [...prevTodos, newTodo];
      });
      // setNewTodoTitle("");
      newTitleInputRef.current.value = "";
    } catch (err) {
      console.log(err);
      alert("Cant Create!");
    }
  }

  return (
    <>
      <h1>Todo App</h1>

      <AddTodoForm
        newTitleInputRef={newTitleInputRef}
        onSubmit={handleAddTodo}
      />

      <TodoStatistics todos={todos} />

      <TodoFilter query={query} setQuery={setQuery} />

      <TodoList
        todos={filterTodos}
        loading={loading}
        error={error}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </>
  );
}

export default App;
