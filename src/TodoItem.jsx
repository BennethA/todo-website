/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaCheck, FaCheckCircle, FaPen } from "react-icons/fa";

export default function TodoItem({ todo, handleDone, handleDelete, editText }) {
  const [newText, setNewText] = useState("");
  const [editing, setEditing] = useState(false);

  const handleEdit = (todo, newText) => {
    if (editing) {
      if (newText === "") {
        newText = todo.text;
      }
      editText(todo, newText);
    }
    setEditing(!editing);
  };
  
  return (
    <div className="bg-gradient-to-r from-green-700  to-red-700  py-1 px-[50px] md:w-[500px] rounded-2xl md:m-auto gap-4 flex justify-between items-center">
      <button
        className={`text-white text-2xl ${todo.completed && `opacity-30`}`}
        onClick={() => handleDone(todo)}
      >
        <FaCheckCircle />
      </button>
      <div
        className={`font-bold gap-2 text-white ${
          todo.completed && "line-through opacity-50"
        }`}
      >
        {editing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-[150px] text-black px-2 rounded"
          />
        ) : (
          todo.text
        )}
        {todo.completed}
      </div>
      <div className="flex gap-2">
        <button
          className={`text-white text-lg ${todo.completed && `opacity-30`}`}
          onClick={() => handleEdit(todo, newText)}
        >
          {!editing && !todo.completed && <FaPen />}
          {editing && <FaCheck />}
        </button>
        <button
          className="text-[red] hover:opacity-80 text-2xl"
          onClick={() => handleDelete(todo)}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </div>
  );
}
