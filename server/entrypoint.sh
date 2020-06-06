#!/bin/sh

bundle && rm -f /app/server/tmp/pids/server.pid && rails server -p 3014 -b '0.0.0.0'