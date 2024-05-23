import Link from "next/link";
import { createTodo } from "@/Utils";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <header className="flex justify-center mb-4">
          <h1 className=" p-2 mb-2 rounded-lg shadow-xl capitalize">
            Add new todo
          </h1>
        </header>
        <form
          action={createTodo}
          className="flex flex-col items-center outline-none"
        >
          <input
            type="text"
            name="title"
            maxLength={64}
            className="
            bg-white
            rounded-lg
            shadow-xl
            border
            border-gray-200
            p-2
            text-black
            "
          />
          <div className="flex gap-1 justify-end mt-5">
            <Link
              href=".."
              className="
              border  
              border-slate-300
              text-slate-300
              bg-red-700
              px-2
              py-1
              rounded
              hover:bg-red-900
              hover:text-white
              focus-within:bg-slate-700
              outline-none
              "
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="
              border  
              border-slate-300
              text-slate-300
              bg-green-700
              px-2
              py-1
              ml-4
              rounded
              hover:bg-green-900
              hover:text-white
              focus-within:bg-slate-700
              outline-none
              "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
