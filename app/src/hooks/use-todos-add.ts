import * as React from 'react';
import { currentApp } from './app';

import useTodosList from './use-todos-list';

export default function useTodosAdd() {
  const { data = [], mutate, filter } = useTodosList();
  return React.useCallback(
    async (title: string) => {
      if (filter !== 'completed') {
        // 立即更新本地数据，但禁用重新验证
        mutate([...data, newTodo(title)], false);
      }

      // 发送请求更新源
      await addTodos([title]);

      // 触发重新验证（重新请求）以确保本地数据是正确的
      mutate();
    },
    [data, filter, mutate],
  );
}

function newTodo(todo: string) {
  const ts = Date.now();
  return {
    id: ts + '',
    title: todo,
    completed: false,
  };
}

async function addTodos(todos: string[]) {
  const app = currentApp();
  await app.callFunction({
    name: 'todos-add',
    data: {
      todos,
    },
  });
}
