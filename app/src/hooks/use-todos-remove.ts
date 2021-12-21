import React from 'react';
import call from './api';
import useTodos from './use-todos';
import type { Todo } from 'todos-types';

export default function useTodosRemove(...todos: string[]) {
  const { mutate } = useTodos();
  return React.useCallback(async () => {
    mutate(async (data = []) => {
      const next = remove(data, todos);
      mutate(next, false); // 立即更新本地数据

      if (next.length !== data.length) {
        await call({
          type: 'remove',
          todos,
        });
      }

      return next;
    });
  }, [mutate, todos]);
}

function remove(data: Todo[], todos: string[]) {
  return data.filter((todo) => !todos.includes(todo.id));
}
