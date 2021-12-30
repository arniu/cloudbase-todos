/**
 * Todo filter
 */
export type Filter = 'all' | 'active' | 'completed';

/**
 * Todo type
 */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
