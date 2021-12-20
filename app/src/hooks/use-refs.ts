import React from 'react';
import useFilter from './use-filter';
import useTodos from './use-todos';

function useBox<T>(value: T) {
  const valueRef = React.useRef(value);
  valueRef.current = value;

  return valueRef;
}

export function useFilterRef() {
  const [filter] = useFilter();
  return useBox(filter);
}

export function useTodosRef() {
  const todos = useTodos();
  return useBox(todos);
}
