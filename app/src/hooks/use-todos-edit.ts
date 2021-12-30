import React from 'react';
import call from './api';
import useTodos from './use-todos';
import type { Todo } from 'types';

export default function useTodosEdit(id: string) {
  const { mutate } = useTodos();
  return React.useCallback(
    async (title: string) => {
      mutate(async (data = []) => {
        const { current, next } = edit(data, id, title);
        mutate(next, false); // 立即更新本地数据

        if (current) {
          await call({
            type: 'update',
            todo: id,
            update: {
              title,
            },
          });
        }

        return next;
      });
    },
    [id, mutate],
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
