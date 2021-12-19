import useSWR from 'swr';
import { useDebugValue } from 'react';
import { currentApp } from './app';
import useFilter from './use-filter';
import type { Filter, Todo } from './types';

export default function useTodosList() {
  const [filter] = useFilter();

  useDebugValue(filter, (it) => `Filter: ${it}`);
  const res = useSWR(['todos', filter], () => listTodos(filter));
  return {
    ...res,
    filter,
  };
}

async function listTodos(filter: Filter) {
  const app = currentApp();
  const res = await app.callFunction({
    name: 'todos-list',
    data: {
      filter,
    },
  });

  return res.result as Todo[];
}
