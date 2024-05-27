import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, removeTodo }: TodoListProps) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
