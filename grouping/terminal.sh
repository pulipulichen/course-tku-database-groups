#!/bin/bash

cd "$(dirname "$0")"

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


gnome-terminal -- bash -c "$script_dir/main.sh; read -n 1 -s -r -p \"Press any key to continue...\"; exec bash"