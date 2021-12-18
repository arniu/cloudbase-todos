import useSWR from 'swr';
import { v4 } from 'uuid';
import { currentApp } from './app';
import type { Filter, Todo } from './types';

const __db__ = {
  todos: new Array(10).fill(0).map<Todo>((_, idx) => ({
    id: v4(),
    title: `Todo #${idx + 1}`,
    completed: idx % 2 === 0,
  })),
};

export default function useTodosList(filter?: Filter) {
  return useSWR<Todo[]>(`/todos?filter=${filter ?? 'all'}`, () => {
    switch (filter) {
      case 'active':
        return __db__.todos.filter((it) => !it.completed);
      case 'completed':
        return __db__.todos.filter((it) => it.completed);
      default:
        return __db__.todos;
    }
  });
}

function fetchTodos(filter: Filter) {
  const app = currentApp();
  return app.callFunction({
    name: 'todos-list',
    data: {
      filter,
    },
  });
}
