import cloud from '@cloudbase/node-sdk';

import type { UpdateTodo } from 'types';

async function update(db: cloud.Database.Db, event: UpdateTodo) {
  const _ = db.command;
  const res = await db
    .collection('todos')
    .where({
      id: _.eq(event.todo),
    })
    .update(event.update);

  return res.updated;
}

export default update;
