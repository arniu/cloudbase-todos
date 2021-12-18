const ajv = require('ajv')();

exports.validateInput = ajv.compile({
  type: 'object',
  required: ['todos'],
  properties: {
    todos: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
  },
});
