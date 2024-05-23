"use client";
import { TodoItemProps } from "@/interfaces/Interfaces";

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li
      className="
        flex 
        justify-between
        gap-1
        items-center
        mb-5 mt-5
        bg-white
        rounded-lg
        shadow-xl
        border
        border-gray-200
        p-2
        "
    >
      <div className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="
            cursor-pointer
            peer-checked:line-through
            peer-checked:text-slate-500
            text-black 
            "
        >
          {title}
        </label>
      </div>
      <button
        onClick={(e) => deleteTodo(id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}
