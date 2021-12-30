import TodoAdd from './todo-add';
import TodoList from './todo-list';
import TodoFilter from './todo-filter';

function Todos() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <TodoAdd />
      </header>

      <section className="main">
        <TodoList />
      </section>

      <footer className="footer">
        <TodoFilter />
      </footer>
    </section>
  );
}

export default Todos;
