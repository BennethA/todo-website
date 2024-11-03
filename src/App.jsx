import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(allTodos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo.text !== item.text));
  };

  const handleDone = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.text === item.text ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editText = (item, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.text === item.text ? { ...todo, text: newText } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // localStorage.clear()

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <Header />
      <TodoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        editText={editText}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}
