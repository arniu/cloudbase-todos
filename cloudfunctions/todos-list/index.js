const cloud = require('@cloudbase/node-sdk');

const app = cloud.init({
  env: cloud.SYMBOL_CURRENT_ENV,
});

const db = app.database();

// type Filter = 'all' | 'active' | 'completed';

function query(filter = 'active') {
  return filter !== 'all'
    ? {
        completed: filter === 'completed',
      }
    : null;
}

exports.main = async (event, context) => {
  return db.collection('todos').where(query(event.filter)).get();
};
