import React from 'react';
import call from './api';
import { useTodosRef } from './use-todos';
import type { Todo } from 'todos-types';

export default function useTodosToggle(id: string) {
  const todosRef = useTodosRef();
  return React.useCallback(async () => {
    if (todosRef.current) {
      const { data = [], mutate } = todosRef.current;
      const { current, next } = toggle(data, id);

      if (current) {
        mutate(next, false);

        await call({
          type: 'update',
          todo: id,
          update: {
            completed: current.completed,
          },
        });

        mutate();
      }
    }
  }, [id, todosRef]);
}

function toggle(data: Todo[], id: string) {
  let current: Todo | undefined;
  const next = data.map<Todo>((it) => {
    if (it.id === id) {
      current = { ...it, completed: !it.completed };
      return current;
    }

    return it;
  });

  return {
    current,
    next,
  };
}
