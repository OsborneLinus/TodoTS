// src/components/AddTodo.tsx
import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-2 w-[300px] rounded-lg focus:outline-none"
          placeholder="What are you focusing on today?"
        />
        <button
          className="bg-green-400 text-white rounded-lg whitespace-nowrap px-2"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
