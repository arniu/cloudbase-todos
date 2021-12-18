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
    : {}; // 不能使用 null
}

exports.main = async (event, context) => {
  const res = await db.collection('todos').where(query(event.filter)).get();
  return res.data;
};
