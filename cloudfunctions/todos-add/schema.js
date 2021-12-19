const Ajv = require('ajv');

const ajv = new Ajv();

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
