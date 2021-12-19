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

/**
 * Event to add todos
 */
export interface AddTodos {
  type: 'add';
  /**
   * Todos to add
   */
  todos: string[];
}

/**
 * Event to list todos
 */
export interface ListTodos {
  type: 'list';
  /**
   * filter
   */
  filter?: Filter;
  /**
   * page
   *
   * @default 1
   */
  page?: number;
  /**
   * page limit
   *
   * @default 20
   */
  limit?: number;
}

/**
 * Event to remove todos
 */
export interface RemoveTodos {
  type: 'remove';
  /**
   * Todo IDs to remove
   */
  todos: string[];
}

type PickTitle = Pick<Todo, 'title'>;
type PickCompleted = Pick<Todo, 'completed'>;

/**
 * Event to update a todo
 */
export interface UpdateTodo {
  type: 'update';
  /**
   * Todo ID to update
   */
  todo: string;
  /**
   * Update title or completed
   */
  update: PickTitle | PickCompleted;
}

// prettier-ignore
export type EventType =
  | AddTodos
  | ListTodos
  | RemoveTodos
  | UpdateTodo;
