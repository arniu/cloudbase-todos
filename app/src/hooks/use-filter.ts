import useSWR from 'swr';
import useBox from './use-box';
import type { Filter } from 'todos-types';

const INITIAL: Filter = 'active';

export default function useFilter() {
  const { mutate, data } = useSWR<Filter>('filter');
  return [data ?? INITIAL, mutate] as const;
}

export function useFilterRef() {
  const [filter] = useFilter();
  return useBox(filter);
}
