import { render, screen } from '@testing-library/react';
import TodoFilter from './todo-filter';

test('renders active filter', () => {
  render(<TodoFilter />);
  const activeFilter = screen.getByText(/active/i);
  expect(activeFilter).toBeInTheDocument();
});
