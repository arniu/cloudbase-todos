import cloud from '@cloudbase/node-sdk';
import type { ListTodos, Filter, Todo } from 'types';

function query(filter?: Filter): Partial<Todo> {
  return filter !== 'all'
    ? {
        completed: filter === 'completed',
      }
    : {};
}

async function list(db: cloud.Database.Db, event: ListTodos) {
  const res = await db.collection('todos').where(query(event.filter)).get();
  return res.data;
}

export default list;
