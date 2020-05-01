#!/bin/sh

bundle && rm -f /app/tmp/pids/server.pid && rails server -p 3014 -b '0.0.0.0'