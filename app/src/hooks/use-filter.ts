import useSWR from 'swr';

import type { Filter } from 'todos-types';

export default function useFilter(initial: Filter = 'active') {
  const { mutate, data = initial } = useSWR<Filter>('filter');
  return [data, mutate] as const;
}
