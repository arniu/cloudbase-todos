import { useRef } from 'react';

export default function useBox<T>(value: T) {
  const box = useRef(value);
  box.current = value;

  return box;
}
