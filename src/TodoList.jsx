/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, handleDone, handleDelete }) {
  return (
    <div className="mt-4 flex justify-center flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
