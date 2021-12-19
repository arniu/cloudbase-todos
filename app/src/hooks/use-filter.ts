import useSWR from 'swr';
import { Filter } from './types';

export default function useFilter(initial: Filter = 'active') {
  const { mutate, data = initial } = useSWR<Filter>('filter');
  return [data, mutate] as const;
}
