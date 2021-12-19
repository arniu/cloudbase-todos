#!/bin/sh

TODOS_API="cloudfunctions/todos-api"
TODOS_TYPES="cloudfunctions/todos-types"

yarn typescript-json-schema           \
  --required                          \
  $TODOS_TYPES/tsconfig.json          \
  -o $TODOS_API/src/schema/event.json \
  EventType

yarn prettier $TODOS_API/src/schema/*.json
