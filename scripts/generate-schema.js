const {
  buildGenerator,
  getProgramFromFiles,
} = require('typescript-json-schema');
const { stringify } = require('safe-stable-stringify');
const { resolve } = require('path');
const fs = require('fs');

const settings = {
  required: true,
};

const compilerOptions = {
  skipLibCheck: true,
  strict: true,
};

const dir = resolve(__dirname, '../cloud/functions');

const JSON_SCHEMA_FILES = {
  EventType: resolve(dir, 'todos-api/src/schema/event.json'),
};

const program = getProgramFromFiles(
  [resolve(dir, 'todos-types/src/index.ts')],
  compilerOptions,
);

const generator = buildGenerator(program, settings);

Object.keys(JSON_SCHEMA_FILES).forEach((it) => {
  const file = JSON_SCHEMA_FILES[it];
  const definition = generator.getSchemaForSymbol(it);
  fs.writeFileSync(file, stringify(definition, null, 2));
});
