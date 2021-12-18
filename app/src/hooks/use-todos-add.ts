import * as React from 'react';
import { v4 } from 'uuid';

import useTodosList from './use-todos-list';

export default function useTodosAdd() {
  const { data = [], mutate } = useTodosList();
  return React.useCallback(
    (title: string) => {
      mutate([...data, { id: v4(), title, completed: false }]);
    },
    [data],
  );
}
