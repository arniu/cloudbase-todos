import useSWR from 'swr';
import { useDebugValue } from 'react';

import type { Filter } from 'todos-types';

export default function useFilter(initial: Filter = 'active') {
  const { mutate, data = initial } = useSWR<Filter>('filter');
  useDebugValue(data, (filter) => `Filter: ${filter}`);

  return [data, mutate] as const;
}
