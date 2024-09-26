// eslint-disable-next-line react/prop-types
export default function TodoForm({ todo, setTodo, handleSubmit }) {
  return (
    <form className="max-w-80 m-auto flex gap-2 justify-center">
      <input
        type="text"
        className="border rounded outline-none px-3 py-1 font-bold"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white rounded p-1 hover:opacity-80 font-bold"
        onClick={(e) => handleSubmit(e)}
      >
        Add
      </button>
    </form>
  );
}
