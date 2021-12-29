import type { Todo } from './core';
import type { AddTodos, ListTodos, RemoveTodos, UpdateTodo } from './event';

export type AddTodosResponse = string[] | undefined;
export type ListTodosResponse = Todo[];
export type RemoveTodosResponse = number | string;
export type UpdateTodoResponse = number | undefined;

export type ResponseType<T> = T extends AddTodos
  ? AddTodosResponse
  : T extends ListTodos
  ? ListTodosResponse
  : T extends RemoveTodos
  ? RemoveTodosResponse
  : T extends UpdateTodo
  ? UpdateTodoResponse
  : never;
