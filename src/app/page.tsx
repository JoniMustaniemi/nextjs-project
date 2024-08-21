import Link from "next/link";
import { getTodos, toggleTodo, deleteTodo } from "@/Utils";
import { TodoItem } from "@/components/TodoItem";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md">
          <header className="flex justify-between items-center mb-4 border border-slate-500 p-4 bg-amber-700 rounded-lg shadow-xl">
            <h1 className="text-2xl font-semibold text-gray-300">Todos</h1>
            <Link
              className="
                border  
                border-slate-300
                text-slate-300
                bg-zinc-800
                px-2
                py-1
                rounded
                hover:bg-zinc-700
                hover:text-white
                focus-within:bg-slate-700
                outline-none
                "
              href="/new"
            >
              New
            </Link>
          </header>
          <ul className="pl-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
