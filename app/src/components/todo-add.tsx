import * as React from 'react';

export interface TodoAddProps {
  onSubmit?: (title: string) => void;
}

function TodoAdd({ onSubmit }: TodoAddProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && inputRef.current) {
        const title = inputRef.current.value;
        if (title) {
          inputRef.current.value = '';
          onSubmit?.(title);
        }
      }
    },
    [onSubmit],
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
