import cloud from '@cloudbase/node-sdk';
import { v4 as uuid } from 'uuid';

import type { AddTodos, Todo } from 'todos-types';

function newTodos(todos: string[]) {
  return todos.map<Todo>((todo) => ({
    id: uuid(),
    title: todo,
    completed: false,
  }));
}

async function add(db: cloud.Database.Db, event: AddTodos) {
  const res = await db.collection('todos').add(newTodos(event.todos));
  return res.ids;
}

export default add;
