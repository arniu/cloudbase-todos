import React from 'react';
import call from './api';
import { useTodosRef } from './use-todos';
import { useFilterRef } from './use-filter';
import type { Todo } from 'todos-types';

export default function useTodosAdd() {
  const todosRef = useTodosRef();
  const filterRef = useFilterRef();
  return React.useCallback(
    async (...todos: string[]) => {
      if (todosRef.current) {
        const { data = [], mutate } = todosRef.current;
        if (filterRef.current !== 'completed') {
          mutate([...data, ...newTodos(todos)], false);
        }

        await call({
          type: 'add',
          todos,
        });

        mutate();
      }
    },
    [filterRef, todosRef],
  );
}

function newTodos(todos: string[]): Todo[] {
  let start = Date.now();
  return todos.map((todo) => ({
    id: ++start + '',
    title: todo,
    completed: false,
  }));
}
