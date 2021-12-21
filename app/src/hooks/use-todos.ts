import useSWR from 'swr';
import useBox from './use-box';
import useFilter from './use-filter';
import call from './api';

export default function useTodos() {
  const [filter] = useFilter();
  return useSWR(['todos', filter], () =>
    call({
      type: 'list',
      filter,
    }),
  );
}

export function useTodosRef() {
  const todos = useTodos();
  return useBox(todos);
}
