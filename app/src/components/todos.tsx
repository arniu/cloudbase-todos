import TodoAdd from './todo-add';
import TodoItem from './todo-item';
import TodoFilter from './todo-filter';
import useTodos from '../hooks/use-todos';
import type { Todo } from 'todos-types';

function Todos() {
  const { data, error } = useTodos();

  if (error) return <div>Failed with {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <TodoAdd />
      </header>

      {data.length > 0 ? renderTodos(data) : null}

      <footer className="footer">
        <TodoFilter />
      </footer>
    </div>
  );
}

function renderTodos(todos: Todo[]) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default Todos;
