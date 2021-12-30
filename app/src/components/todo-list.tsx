import TodoItem from './todo-item';
import useTodos from '../hooks/use-todos';

function TodoList() {
  const { data, error } = useTodos();

  if (error) return <div>Failed with {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul className="todo-list">
      {data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
