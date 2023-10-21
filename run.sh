#!/bin/bash

cd "$(dirname "$0")"

docker-compose up

bash ./grouping/tmp/script.sh