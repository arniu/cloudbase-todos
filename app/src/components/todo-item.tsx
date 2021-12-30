import * as React from 'react';
import classNames from 'classnames';
import useTodosToggle from '../hooks/use-todos-toggle';
import useTodosRemove from '../hooks/use-todos-remove';
import type { Todo } from 'types';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const onToggle = useTodosToggle(todo.id);
  const onRemove = useTodosRemove(todo.id);

  return (
    <li
      className={classNames({
        completed: todo.completed,
      })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label>{todo.title}</label>
        <button className="destroy" onClick={onRemove} />
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
