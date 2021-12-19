/**
 * Todo filter
 */
export type Filter = 'all' | 'active' | 'completed';

/**
 * Todo item
 */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
