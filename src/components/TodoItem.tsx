// src/components/TodoItem.tsx
import { Todo } from "../models/Todo";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, removeTodo }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
