import * as React from 'react';
import TodoAdd from './todo-add';
import TodoItem from './todo-item';
import TodoFilter from './todo-filter';

import useTodosList from '../hooks/use-todos-list';
import { Filter, Todo } from '../hooks/types';

function Todos() {
  const [filter, setFilter] = React.useState<Filter>('active');
  const { data, error } = useTodosList(filter);

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
        <TodoFilter filter={filter} setFilter={setFilter} />
      </footer>
    </div>
  );

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
}

export default Todos;
