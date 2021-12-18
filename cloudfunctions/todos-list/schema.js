const ajv = require('ajv')();

exports.validateInput = ajv.compile({
  type: 'object',
  properties: {
    filter: {
      enum: ['all', 'active', 'completed'],
    },
  },
});
