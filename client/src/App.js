import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Clean my room",
      completed: false,
    },
    {
      id: 2,
      task: "Do the dishes",
      completed: false,
    },
  ]);
  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      task: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <Todos todos={todos} removeTodo={removeTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
