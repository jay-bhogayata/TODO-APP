import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [saveTodos, setSaveTodos] = useState(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(saveTodos ? JSON.parse(saveTodos) : []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl text-white text-center mt-5">TODO APP</h1>

      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </div>
  );
}

export default App;
