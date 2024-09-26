/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function TodoItem({ todo, handleDone, handleDelete }) {
  return (
    <div className=" bg-gradient-to-r from-green-700  to-red-700 flex py-1 px-[50px] md:w-[500px] justify-between items-center rounded-2xl md:m-auto gap-4">
      <button
        className={`text-white text-2xl ${todo.completed && `opacity-30`}`}
        onClick={() => handleDone(todo)}
      >
        <FaCheckCircle />
      </button>
      <div
        className={`font-bold flex items-center gap-2 text-white ${
          todo.completed && "line-through opacity-50"
        }`}
      >
        {todo.text}
        {todo.completed}
      </div>
      <button
        className="text-[red] hover:opacity-80 text-2xl"
        onClick={() => handleDelete(todo)}
      >
        <FaDeleteLeft />
      </button>
    </div>
  );
}
