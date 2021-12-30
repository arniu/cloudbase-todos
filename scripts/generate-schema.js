const { buildGenerator, programFromConfig } = require('typescript-json-schema');
const { stringify } = require('safe-stable-stringify');
const { resolve } = require('path');
const fs = require('fs');

const settings = {
  required: true,
};

const program = programFromConfig(
  resolve(__dirname, '../types/tsconfig.hack.json'),
);

const generator = buildGenerator(program, settings);

const dir = resolve(__dirname, '../cloud/functions');
const JSON_SCHEMA_FILES = {
  EventType: resolve(dir, 'todos-api/src/schema/event.json'),
};

Object.keys(JSON_SCHEMA_FILES).forEach((it) => {
  const file = JSON_SCHEMA_FILES[it];
  const definition = generator.getSchemaForSymbol(it);
  fs.writeFileSync(file, stringify(definition, null, 2));
});
