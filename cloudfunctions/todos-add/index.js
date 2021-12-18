const cloud = require('@cloudbase/node-sdk');
const uuid = require('uuid');

const app = cloud.init({
  env: cloud.SYMBOL_CURRENT_ENV,
});

const db = app.database();

function newTodos(todos = []) {
  return todos.map((todo) => ({
    id: uuid.v4(),
    title: todo,
    complete: false,
  }));
}

exports.main = async (event, context) => {
  return db.collection('todos').add(newTodos(event.todos));
};
