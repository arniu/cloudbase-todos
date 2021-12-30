import React from 'react';
import call from './api';
import useTodos from './use-todos';
import type { Todo } from 'types';

export default function useTodosToggle(id: string) {
  const { mutate } = useTodos();
  return React.useCallback(async () => {
    mutate(async (data = []) => {
      const { current, next } = toggle(data, id);
      mutate(next, false); // 立即更新本地数据

      if (current) {
        await call({
          type: 'update',
          todo: id,
          update: {
            completed: current.completed,
          },
        });
      }

      return next;
    });
  }, [id, mutate]);
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
