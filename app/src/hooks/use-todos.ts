import useSWR from 'swr';
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
