const Ajv = require('ajv');

const ajv = new Ajv();

exports.validateInput = ajv.compile({
  type: 'object',
  properties: {
    filter: {
      enum: ['all', 'active', 'completed'],
    },
  },
});
