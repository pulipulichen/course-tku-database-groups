#!/bin/bash

cd "$(dirname "$0")"

#!/bin/bash

config_file="./config/config.ini"
config_example_file="./config/config.example.ini"

if [ ! -e "$config_file" ]; then
  echo "Warning: The config file '$config_file' does not exist. Please copy from $config_example_file, modify it, and try again."
  exit 1
fi

./environment_check.sh
node ./nodejs/main.js