import * as React from 'react';
import classNames from 'classnames';

import type { Todo } from 'todos-types';

export interface TodoItemProps {
  todo: Todo;
  editing?: boolean;
}

function TodoItem({ todo }: TodoItemProps) {
  function onToggle() {}

  function onDestroy() {}

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
        <button className="destroy" onClick={onDestroy} />
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
