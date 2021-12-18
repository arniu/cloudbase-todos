const cloud = require('@cloudbase/node-sdk');
const uuid = require('uuid');
const schema = require('./schema');

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
  if (!schema.validateInput(event)) {
    throw new Error(schema.validateInput.errors);
  }

  return db
    .collection('todos')
    .add(newTodos(event.todos))
    .then((res) => res.ids);
};
