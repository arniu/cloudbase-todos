import useGlobalState from 'swr';
import type { Filter } from 'todos-types';

const INITIAL: Filter = 'active';

export default function useFilter() {
  const { mutate, data } = useGlobalState<Filter>('filter');
  return [data ?? INITIAL, mutate] as const;
}
