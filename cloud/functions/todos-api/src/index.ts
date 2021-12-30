import cloud from '@cloudbase/node-sdk';
import add from './handlers/add';
import list from './handlers/list';
import remove from './handlers/remove';
import update from './handlers/update';

import { validateEvent, validateEventError } from './schema';

const app = cloud.init({
  env: cloud.SYMBOL_CURRENT_ENV,
});

const db = app.database();

export async function main(event: any, context: any) {
  if (!validateEvent(event)) {
    throw validateEventError();
  }

  switch (event.type) {
    case 'add':
      return add(db, event);
    case 'list':
      return list(db, event);
    case 'remove':
      return remove(db, event);
    case 'update':
      return update(db, event);
    default:
      throw new Error(`Unknow event: ${event}`);
  }
}
