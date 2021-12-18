import useSWR from 'swr';
import { currentApp } from './app';
import type { Filter, Todo } from './types';

export default function useTodosList(filter: Filter) {
  return useSWR<Todo[]>(['todos', filter], () => fetchTodos(filter));
}

async function fetchTodos(filter: Filter) {
  const app = currentApp();
  const res = await app.callFunction({
    name: 'todos-list',
    data: {
      filter,
    },
  });

  return res.result as Todo[];
}
