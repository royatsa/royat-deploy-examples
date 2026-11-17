#!/bin/sh
if [ "$CRASH_ON_START" = "1" ]; then
  echo "Crashing on purpose (CRASH_ON_START=1)" >&2
  exit 1
fi
