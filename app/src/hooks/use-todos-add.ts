import React from 'react';
import call from './api';
import { useFilterRef, useTodosRef } from './use-refs';
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

function newTodos(todos: string[]) {
  return todos.map<Todo>((todo) => {
    const ts = Date.now();
    return {
      id: ts + '',
      title: todo,
      completed: false,
    };
  });
}
