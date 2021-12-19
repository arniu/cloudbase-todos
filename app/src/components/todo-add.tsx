import * as React from 'react';
import useTodosAdd from '../hooks/use-todos-add';

function TodoAdd() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const addTodos = useTodosAdd();
  const handleKeyDown = React.useCallback(
    async (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && inputRef.current) {
        const title = inputRef.current.value;
        if (title) {
          inputRef.current.value = '';
          await addTodos(title);
        }
      }
    },
    [addTodos],
  );

  return (
    <input
      ref={inputRef}
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}

export default React.memo(TodoAdd);
