import React from 'react';
import call from './api';
import { useTodosRef } from './use-refs';
import type { Todo } from 'todos-types';

export default function useTodosRemove(...todos: string[]) {
  const todosRef = useTodosRef();
  return React.useCallback(async () => {
    if (todosRef.current) {
      const { data = [], mutate } = todosRef.current;
      mutate(removeTodos(data, todos), false);

      await call({
        type: 'remove',
        todos,
      });

      mutate();
    }
  }, [todos, todosRef]);
}

function removeTodos(data: Todo[], todos: string[]) {
  return data.filter((todo) => !todos.includes(todo.id));
}
