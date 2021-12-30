import Ajv, { JSONSchemaType } from 'ajv';
import type { EventType } from 'types';
import schemaEvent from './event.json';

export const ajv = new Ajv();

export const validateEvent = ajv.compile(
  schemaEvent as unknown as JSONSchemaType<EventType>,
);

export function validateEventError() {
  return new Error(validateEvent.errors?.[0].message);
}
