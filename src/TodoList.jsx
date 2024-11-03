/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
// eslint-disable-next-line react/prop-types
export default function TodoList({
  todos,
  editText,
  handleDone,
  handleDelete,
}) {
  return (
    <div className="mt-4 flex justify-center flex-col gap-3">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            editText={editText}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <div className="text-white font-bold">No added lists</div>
      )}
    </div>
  );
}
