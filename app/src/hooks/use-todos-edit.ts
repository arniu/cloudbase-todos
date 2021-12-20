import React from 'react';
import call from './api';
import { useTodosRef } from './use-refs';
import type { Todo } from 'todos-types';

export default function useTodosEdit(id: string) {
  const todosRef = useTodosRef();
  return React.useCallback(
    async (title: string) => {
      if (todosRef.current) {
        const { data = [], mutate } = todosRef.current;
        const { current, next } = edit(data, id, title);

        if (current) {
          mutate(next, false);

          await call({
            type: 'update',
            todo: id,
            update: {
              title,
            },
          });

          mutate();
        }
      }
    },
    [id, todosRef],
  );
}

function edit(data: Todo[], id: string, title: string) {
  let current: Todo | undefined;
  const next = data.map<Todo>((it) => {
    if (it.id === id) {
      current = { ...it, title };
      return current;
    }

    return it;
  });

  return {
    current,
    next,
  };
}
