import React from 'react';
import call from './api';
import useTodos from './use-todos';
import type { Todo } from 'types';

export default function useTodosAdd() {
  const { mutate } = useTodos();
  return React.useCallback(
    async (...todos: string[]) => {
      mutate(async (data = []) => {
        const next = add(data, todos);
        mutate(next, false); // 立即更新本地数据

        if (todos.length > 0) {
          await call({
            type: 'add',
            todos,
          });
        }

        return next;
      });
    },
    [mutate],
  );
}

function add(data: Todo[], todos: string[]) {
  let start = Date.now();
  return data.concat(
    todos.map((todo) => ({
      id: ++start + '',
      title: todo,
      completed: false,
    })),
  );
}
