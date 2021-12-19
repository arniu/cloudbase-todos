import cloud from '@cloudbase/node-sdk';

import type { RemoveTodos } from 'todos-types';

async function remove(db: cloud.Database.Db, event: RemoveTodos) {
  const _ = db.command;
  const res = await db
    .collection('todos')
    .where({
      id: _.in(event.todos),
    })
    .remove();

  return res.deleted;
}

export default remove;
